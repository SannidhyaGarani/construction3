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
import { Plus, Search, Loader2, X, Map, RefreshCw } from 'lucide-react';
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

    if (!formData.planType || !formData.title || !formData.width || !formData.length) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!formData.exteriorImage || !formData.planImage) {
      toast.error("Please upload the exterior and floor plan images");
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
      resetForm();
      await fetchPlans();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save floor plan");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      planType: '', title: '', description: '', width: '', length: '',
      exteriorImage: '', planImage: '', mapImage: ''
    });
    setEditingId(null);
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
    plan.title?.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterType === '' || plan.planType === filterType)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C8842A] bg-[#C8842A]/10 px-2.5 py-0.5 rounded-full mb-1">
            Architectural Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Floor Plans</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage floor layouts, dimension specs, and architectural plans.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchPlans}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
            New Floor Plan
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search floor plans by title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <Select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            options={[
              { value: '', label: 'All Property Types' },
              { value: 'Residential', label: 'Residential' },
              { value: 'Commercial', label: 'Commercial' },
              { value: 'Industrial', label: 'Industrial' },
              { value: 'Villa', label: 'Villa' }
            ]}
            className="min-w-[180px]"
          />
          <div className="text-xs font-medium text-slate-500 whitespace-nowrap hidden lg:block">
            Showing <span className="font-semibold text-slate-800">{filteredPlans.length}</span> of {plans.length}
          </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
          <Loader2 className="animate-spin text-[#C8842A]" size={32} />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Loading floor plans...</span>
        </div>
      ) : filteredPlans.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPlans.map((plan) => (
            <Card 
              key={plan.id}
              image={plan.exteriorImage || plan.planImage}
              title={plan.title}
              subtitle={plan.planType}
              details={[
                { label: 'Size', value: `${plan.width} × ${plan.length} ft` },
                { label: 'Created', value: plan.createdAt?.toDate?.()?.toLocaleDateString() || 'Recently' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(plan)}
              onDelete={() => handleDelete(plan.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <Map size={26} />
          </div>
          <h3 className="text-base font-semibold text-slate-800">No floor plans found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            {searchQuery || filterType ? 'No plans match the current filters. Adjust your search to see more.' : 'Start publishing architectural layouts for your clients.'}
          </p>
          {!searchQuery && !filterType && (
            <div className="mt-4">
              <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
                Add Floor Plan
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in duration-200 relative">
            <div className="h-1 bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]"></div>

            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {editingId ? 'Edit Floor Plan' : 'New Floor Plan'}
                  </h2>
                  <p className="text-xs text-slate-500">Provide dimensions and layout assets for this floor plan.</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => { setIsModalOpen(false); resetForm(); }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-5 max-h-[72vh] overflow-y-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input 
                    label="Plan Title" 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})} 
                    placeholder="e.g. 3BHK Modern Villa Layout" 
                    required 
                  />
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
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input 
                    label="Plot Width (ft)" 
                    type="number" 
                    value={formData.width} 
                    onChange={(e) => setFormData({...formData, width: e.target.value})} 
                    placeholder="e.g. 30" 
                    required 
                  />
                  <Input 
                    label="Plot Length (ft)" 
                    type="number" 
                    value={formData.length} 
                    onChange={(e) => setFormData({...formData, length: e.target.value})} 
                    placeholder="e.g. 50" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] text-slate-800 text-sm outline-none transition-all min-h-[90px] resize-none"
                    placeholder="Brief description of rooms, airflow, and architectural highlights..."
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <FileUpload 
                    label="Exterior 3D Preview" 
                    initialValue={formData.exteriorImage} 
                    onUploadComplete={(url) => setFormData({...formData, exteriorImage: url})} 
                    required 
                  />
                  <FileUpload 
                    label="Floor Plan Blueprint" 
                    initialValue={formData.planImage} 
                    onUploadComplete={(url) => setFormData({...formData, planImage: url})} 
                    required 
                  />
                  <FileUpload 
                    label="Site / Location Map" 
                    initialValue={formData.mapImage} 
                    onUploadComplete={(url) => setFormData({...formData, mapImage: url})} 
                  />
                </div>
              </div>

              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button 
                  type="button" 
                  onClick={() => { setIsModalOpen(false); resetForm(); }}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <Button type="submit" loading={loading}>
                  {editingId ? 'Save Changes' : 'Publish Floor Plan'}
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
