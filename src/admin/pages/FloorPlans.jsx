import React, { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Plus, Search, Filter, ArrowRight, Loader2, Edit2, Trash2, X, Check, Map } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Input from '../../Components/common/Input';
import Select from '../../Components/common/Select';
import FileUpload from '../../Components/common/FileUpload';
import Button from '../../Components/common/Button';
import Card from '../../Components/common/Card';

const FloorPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    planType: '',
    title: '',
    description: '',
    width: '',
    length: '',
    exteriorImage: '',
    planImage: '',
    mapImage: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'floorPlans'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlans(data);
    } catch (error) {
      console.error("Error fetching floor plans", error);
      toast.error("Failed to load floor plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Manual validation
  if (!formData.planType || !formData.title || !formData.width || !formData.length) {
    toast.error("Please fill all required fields");
    return;
  }

  if (!formData.exteriorImage || !formData.planImage || !formData.mapImage) {
    toast.error("Please upload all images");
    return;
  }

  setLoading(true);

  try {
    const dataToSave = {
      ...formData,
      updatedAt: serverTimestamp()
    };

    if (editingId) {
      await updateDoc(doc(db, 'floorPlans', editingId), dataToSave);
      toast.success("Floor plan updated successfully");
    } else {
      await addDoc(collection(db, 'floorPlans'), {
        ...dataToSave,
        createdAt: serverTimestamp()
      });
      toast.success("Floor plan added successfully");
    }

    setIsModalOpen(false);
    setFormData({
      planType: '', title: '', description: '', width: '', length: '',
      exteriorImage: '', planImage: '', mapImage: ''
    });
    setEditingId(null);
    await fetchPlans();

  } catch (error) {
    console.error(error);
    toast.error("Failed to save floor plan");
  } finally {
    setLoading(false);
  }
};

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this floor plan?")) return;
    
    try {
      await deleteDoc(doc(db, 'floorPlans', id));
      toast.success("Floor plan deleted successfully");
      fetchPlans();
    } catch (error) {
      console.error("Error deleting floor plan", error);
      toast.error("Failed to delete floor plan");
    }
  };

  const handleEdit = (plan) => {
    setFormData(plan);
    setEditingId(plan.id);
    setIsModalOpen(true);
  };

  const filteredPlans = plans.filter(plan => 
    plan.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterType === '' || plan.planType === filterType)
  );

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">Content Management</span>
          <h1 className="font-serif text-5xl text-neutral-800">Floor Plans</h1>
          <p className="text-neutral-400 text-sm font-light mt-2 max-w-md italic tracking-wide leading-relaxed">
            Manage your architectural layouts, dimensions, and visual assets for various project types.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} icon={Plus} variant="secondary">
          Add New Plan
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-3xl shadow-2xl shadow-neutral-100/50 border border-neutral-100">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-neutral-800 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search by title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-neutral-100 rounded-2xl border-none focus:ring-2 focus:ring-neutral-800 transition-all outline-none text-sm font-medium"
          />
        </div>
        <Select 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          options={[
            { value: 'Residential', label: 'Residential' },
            { value: 'Commercial', label: 'Commercial' },
            { value: 'Industrial', label: 'Industrial' },
            { value: 'Villa', label: 'Villa' }
          ]}
          className="md:w-64"
        />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
          <Loader2 className="animate-spin" size={48} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Loading assets...</span>
        </div>
      ) : filteredPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPlans.map((plan) => (
            <Card 
              key={plan.id}
              image={plan.exteriorImage}
              title={plan.title}
              subtitle={plan.planType}
              details={[
                { label: 'Size', value: `${plan.width} x ${plan.length} ft` },
                { label: 'Created', value: plan.createdAt?.toDate().toLocaleDateString() || 'Recently' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(plan)}
              onDelete={() => handleDelete(plan.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-48 text-center bg-white rounded-3xl border border-dashed border-neutral-200">
          <Map className="text-neutral-200 mb-6" size={64} />
          <h3 className="text-2xl font-serif text-neutral-400">No floor plans found</h3>
          <p className="text-neutral-400 text-sm font-light mt-2 italic">Start by adding your first architectural masterpiece.</p>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 overflow-y-auto bg-black/40 backdrop-blur-sm transition-all duration-700">
          <div className="bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between p-10 md:p-12 border-b border-neutral-50">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Editor</span>
                  <h2 className="font-serif text-3xl text-neutral-800">
                    {editingId ? 'Edit Floor Plan' : 'New Floor Plan'}
                  </h2>
                </div>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="p-4 bg-neutral-100 rounded-2xl text-neutral-800 hover:bg-neutral-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-10 md:p-12 space-y-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
                
                <div className="grid md:grid-cols-2 gap-10">
                  <Select 
                    label="Plan Type" 
                    value={formData.planType} 
                    onChange={(e) => setFormData({...formData, planType: e.target.value})}
                    options={[
                      { value: 'Residential', label: 'Residential' },
                      { value: 'Commercial', label: 'Commercial' },
                      { value: 'Industrial', label: 'Industrial' },
                      { value: 'Villa', label: 'Villa' }
                    ]}
                    required
                  />
                  <Input 
                    label="Title" 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Modern Minimalist Villa"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-600 tracking-wide uppercase">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="px-6 py-4 rounded-2xl bg-neutral-100 border-none focus:bg-white focus:ring-2 focus:ring-neutral-800 transition-all text-neutral-800 outline-none shadow-sm min-h-[120px] resize-none"
                    placeholder="Describe the architectural concept..."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <Input 
                    label="Width (ft)" 
                    type="number"
                    value={formData.width} 
                    onChange={(e) => setFormData({...formData, width: e.target.value})}
                    placeholder="30"
                    required
                  />
                  <Input 
                    label="Length (ft)" 
                    type="number"
                    value={formData.length} 
                    onChange={(e) => setFormData({...formData, length: e.target.value})}
                    placeholder="50"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <FileUpload 
                    label="Exterior Image" 
                    initialValue={formData.exteriorImage}
                    onUploadComplete={(url) => setFormData({...formData, exteriorImage: url})}
                    required
                  />
                  <FileUpload 
                    label="Plan Image" 
                    initialValue={formData.planImage}
                    onUploadComplete={(url) => setFormData({...formData, planImage: url})}
                    required
                  />
                  <FileUpload 
                    label="Map Image" 
                    initialValue={formData.mapImage}
                    onUploadComplete={(url) => setFormData({...formData, mapImage: url})}
                    required
                  />
                </div>

              </div>

              <div className="p-10 md:p-12 bg-neutral-50 flex items-center justify-end gap-6">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 uppercase text-[10px] tracking-widest font-bold text-neutral-400 hover:text-neutral-800 transition-colors"
                >
                  Discard Changes
                </button>
                <Button type="submit" loading={loading} variant="secondary">
                  {editingId ? 'Save Updates' : 'Publish Plan'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default FloorPlans;
