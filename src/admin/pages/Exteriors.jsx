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
import { Plus, Search, Loader2, X, Home, MapPin, Compass, Tag, CheckCircle, Circle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Input from '../../Components/common/Input';
import Select from '../../Components/common/Select';
import FileUpload from '../../Components/common/FileUpload';
import Button from '../../Components/common/Button';
import Card from '../../Components/common/Card';

const Exteriors = () => {
  const [exteriors, setExteriors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    style: '',
    location: '',
    facing: '',
    keywords: '',
    area: '',
    width: '',
    length: '',
    description: '',
    isActive: true,
    exteriorImage: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const fetchExteriors = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'exteriors'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setExteriors(data);
    } catch (error) {
      console.error("Error fetching exteriors", error);
      toast.error("Failed to load exteriors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExteriors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const dataToSave = {
        ...formData,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'exteriors', editingId), dataToSave);
        toast.success("Exterior updated successfully");
      } else {
        await addDoc(collection(db, 'exteriors'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Exterior added successfully");
      }
      
      setIsModalOpen(false);
      resetForm();
      fetchExteriors();
    } catch (error) {
      console.error("Error saving exterior", error);
      toast.error("Failed to save exterior");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '', style: '', location: '', facing: '', keywords: '', 
      area: '', width: '', length: '', description: '',
      isActive: true, exteriorImage: ''
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this exterior?")) return;
    try {
      await deleteDoc(doc(db, 'exteriors', id));
      toast.success("Exterior deleted successfully");
      fetchExteriors();
    } catch (error) {
      console.error("Error deleting exterior", error);
      toast.error("Failed to delete exterior");
    }
  };

  const handleEdit = (exterior) => {
    setFormData(exterior);
    setEditingId(exterior.id);
    setIsModalOpen(true);
  };

  const filteredExteriors = exteriors.filter(ext => 
    ext.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">Content Management</span>
          <h1 className="font-serif text-5xl text-neutral-800">Exteriors</h1>
          <p className="text-neutral-400 text-sm font-light mt-2 max-w-md italic tracking-wide leading-relaxed">
            Manage modern facades, villa styles, and commercial exteriors across your portfolio.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} icon={Plus} variant="secondary">
          Add Exterior
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-3xl shadow-2xl shadow-neutral-100/50 border border-neutral-100">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-neutral-800 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search exteriors..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-neutral-100 rounded-2xl border-none focus:ring-2 focus:ring-neutral-800 transition-all outline-none text-sm font-medium"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
          <Loader2 className="animate-spin" size={48} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Loading facades...</span>
        </div>
      ) : filteredExteriors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredExteriors.map((ext) => (
            <Card 
              key={ext.id}
              image={ext.exteriorImage}
              title={ext.title}
              subtitle={ext.style}
              details={[
                { label: 'Location', value: ext.location },
                { label: 'Facing', value: ext.facing },
                { label: 'Status', value: ext.isActive ? 'Active' : 'Hidden' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(ext)}
              onDelete={() => handleDelete(ext.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-48 text-center bg-white rounded-3xl border border-dashed border-neutral-200">
          <Home className="text-neutral-200 mb-6" size={64} />
          <h3 className="text-2xl font-serif text-neutral-400">No exterior designs found</h3>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 overflow-y-auto bg-black/40 backdrop-blur-sm transition-all duration-700">
          <div className="bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between p-10 md:p-12 border-b border-neutral-50">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Editor</span>
                  <h2 className="font-serif text-3xl text-neutral-800">
                    {editingId ? 'Edit Exterior Design' : 'New Exterior Design'}
                  </h2>
                </div>
                <button type="button" onClick={() => { setIsModalOpen(false); resetForm(); }} className="p-4 bg-neutral-100 rounded-2xl text-neutral-800 hover:bg-neutral-200 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-10 md:p-12 space-y-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="grid md:grid-cols-2 gap-10">
                  <Input label="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="e.g. Minimalist Urban Villa" required />
                  <Select 
                    label="Style" 
                    value={formData.style} 
                    onChange={(e) => setFormData({...formData, style: e.target.value})}
                    options={[
                      { value: 'Modern', label: 'Modern' },
                      { value: 'Classic', label: 'Classic' },
                      { value: 'Villa', label: 'Villa' },
                      { value: 'Commercial', label: 'Commercial' }
                    ]}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-600 tracking-wide uppercase">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="px-6 py-4 rounded-2xl bg-neutral-100 border-none focus:bg-white focus:ring-2 focus:ring-neutral-800 transition-all text-neutral-800 outline-none shadow-sm min-h-[120px] resize-none"
                    placeholder="Describe the facade design and materials..."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <Input label="Area (sq.ft)" type="number" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} placeholder="e.g. 2500" required />
                  <Input label="Width (ft)" type="number" value={formData.width} onChange={(e) => setFormData({...formData, width: e.target.value})} placeholder="30" required />
                  <Input label="Length (ft)" type="number" value={formData.length} onChange={(e) => setFormData({...formData, length: e.target.value})} placeholder="50" required />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <Input label="Location" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="e.g. Mumbai, Maharashtra" required />
                  <Select 
                    label="Facing" 
                    value={formData.facing} 
                    onChange={(e) => setFormData({...formData, facing: e.target.value})}
                    options={[
                      { value: 'North', label: 'North' },
                      { value: 'East', label: 'East' },
                      { value: 'South', label: 'South' },
                      { value: 'West', label: 'West' }
                    ]}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-end">
                  <Input label="Keywords" value={formData.keywords} onChange={(e) => setFormData({...formData, keywords: e.target.value})} placeholder="e.g. stone, glass, luxury" />
                  <div className="flex items-center gap-4 px-6 py-4 bg-neutral-100 rounded-2xl cursor-pointer" onClick={() => setFormData({...formData, isActive: !formData.isActive})}>
                    {formData.isActive ? <CheckCircle className="text-green-500" size={20} /> : <Circle className="text-neutral-400" size={20} />}
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-600">Active Listing</span>
                  </div>
                </div>

                <FileUpload label="Main Exterior Image" initialValue={formData.exteriorImage} onUploadComplete={(url) => setFormData({...formData, exteriorImage: url})} required />
              </div>

              <div className="p-10 md:p-12 bg-neutral-50 flex items-center justify-end gap-6">
                <button type="button" onClick={() => { setIsModalOpen(false); resetForm(); }} className="px-8 py-4 uppercase text-[10px] tracking-widest font-bold text-neutral-400 hover:text-neutral-800 transition-colors">Discard</button>
                <Button type="submit" loading={loading} variant="secondary">
                  {editingId ? 'Update Design' : 'Publish Design'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exteriors;
