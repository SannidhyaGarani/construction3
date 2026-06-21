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
import { Plus, Search, Loader2, X, Square, Tag, CheckCircle, Circle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Input from '../../Components/common/Input';
import Select from '../../Components/common/Select';
import FileUpload from '../../Components/common/FileUpload';
import Button from '../../Components/common/Button';
import Card from '../../Components/common/Card';

const Interiors = () => {
  const [interiors, setInteriors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    interiorType: '',
    keywords: '',
    isActive: true,
    mainImage: '',
    child1: '',
    child2: '',
    child3: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState(['Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office']);
  const [newCategory, setNewCategory] = useState('');

  const fetchInteriors = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'interiors'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInteriors(data);
      
      // Extract dynamic categories from data
      const dynamicCats = [...new Set(data.map(item => item.interiorType))];
      setCategories(prev => [...new Set([...prev, ...dynamicCats])]);
    } catch (error) {
      console.error("Error fetching interiors", error);
      toast.error("Failed to load interiors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInteriors();
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
        await updateDoc(doc(db, 'interiors', editingId), dataToSave);
        toast.success("Interior updated successfully");
      } else {
        await addDoc(collection(db, 'interiors'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Interior added successfully");
      }
      
      setIsModalOpen(false);
      resetForm();
      fetchInteriors();
    } catch (error) {
      console.error("Error saving interior", error);
      toast.error("Failed to save interior");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      interiorType: '', keywords: '', isActive: true, mainImage: '', child1: '', child2: '', child3: ''
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this interior?")) return;
    try {
      await deleteDoc(doc(db, 'interiors', id));
      toast.success("Interior deleted successfully");
      fetchInteriors();
    } catch (error) {
      console.error("Error deleting interior", error);
      toast.error("Failed to delete interior");
    }
  };

  const handleEdit = (interior) => {
    setFormData(interior);
    setEditingId(interior.id);
    setIsModalOpen(true);
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setFormData({ ...formData, interiorType: newCategory });
      setNewCategory('');
      toast.success("Category added");
    }
  };

  const filteredInteriors = interiors.filter(int => 
    int.interiorType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">Content Management</span>
          <h1 className="font-serif text-5xl text-neutral-800">Interior Designs</h1>
          <p className="text-neutral-400 text-sm font-light mt-2 max-w-md italic tracking-wide leading-relaxed">
            Manage bespoke interior concepts, from residential living spaces to commercial workspaces.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} icon={Plus} variant="secondary">
          Add Interior
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-3xl shadow-2xl shadow-neutral-100/50 border border-neutral-100">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-neutral-800 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search by category..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-neutral-100 rounded-2xl border-none focus:ring-2 focus:ring-neutral-800 transition-all outline-none text-sm font-medium"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
          <Loader2 className="animate-spin" size={48} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Loading interiors...</span>
        </div>
      ) : filteredInteriors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredInteriors.map((int) => (
            <Card 
              key={int.id}
              image={int.mainImage}
              title={int.interiorType}
              subtitle="Interior Concept"
              details={[
                { label: 'Status', value: int.isActive ? 'Active' : 'Hidden' },
                { label: 'Assets', value: `${[int.child1, int.child2, int.child3].filter(Boolean).length + 1} Images` }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(int)}
              onDelete={() => handleDelete(int.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-48 text-center bg-white rounded-3xl border border-dashed border-neutral-200">
          <Square className="text-neutral-200 mb-6" size={64} />
          <h3 className="text-2xl font-serif text-neutral-400">No interior designs found</h3>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 overflow-y-auto bg-black/40 backdrop-blur-sm transition-all duration-700">
          <div className="bg-white w-full max-w-5xl rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between p-10 md:p-12 border-b border-neutral-50">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Editor</span>
                  <h2 className="font-serif text-3xl text-neutral-800">
                    {editingId ? 'Edit Interior Design' : 'New Interior Design'}
                  </h2>
                </div>
                <button type="button" onClick={() => { setIsModalOpen(false); resetForm(); }} className="p-4 bg-neutral-100 rounded-2xl text-neutral-800 hover:bg-neutral-200 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-10 md:p-12 space-y-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Select 
                      label="Interior Type" 
                      value={formData.interiorType} 
                      onChange={(e) => setFormData({...formData, interiorType: e.target.value})}
                      options={categories.map(cat => ({ value: cat, label: cat }))}
                      required
                    />
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        value={newCategory} 
                        onChange={(e) => setNewCategory(e.target.value)} 
                        placeholder="Add new category..." 
                        className="flex-1 px-6 py-4 rounded-2xl bg-neutral-100 border-none focus:ring-2 focus:ring-neutral-800 transition-all outline-none text-xs font-bold"
                      />
                      <button 
                        type="button" 
                        onClick={handleAddCategory}
                        className="p-4 bg-neutral-800 text-white rounded-2xl hover:bg-black transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>
                  <Input label="Keywords" value={formData.keywords} onChange={(e) => setFormData({...formData, keywords: e.target.value})} placeholder="e.g. minimalist, oak, brass" />
                </div>

                <div className="flex items-center gap-4 px-6 py-4 bg-neutral-100 rounded-2xl cursor-pointer w-fit" onClick={() => setFormData({...formData, isActive: !formData.isActive})}>
                  {formData.isActive ? <CheckCircle className="text-green-500" size={20} /> : <Circle className="text-neutral-400" size={20} />}
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-600">Active Listing</span>
                </div>

                <div className="space-y-6">
                  <FileUpload label="Main Interior Image" initialValue={formData.mainImage} onUploadComplete={(url) => setFormData({...formData, mainImage: url})} required />
                  <div className="grid md:grid-cols-3 gap-10">
                    <FileUpload label="Detail View 1" initialValue={formData.child1} onUploadComplete={(url) => setFormData({...formData, child1: url})} />
                    <FileUpload label="Detail View 2" initialValue={formData.child2} onUploadComplete={(url) => setFormData({...formData, child2: url})} />
                    <FileUpload label="Detail View 3" initialValue={formData.child3} onUploadComplete={(url) => setFormData({...formData, child3: url})} />
                  </div>
                </div>

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

export default Interiors;
