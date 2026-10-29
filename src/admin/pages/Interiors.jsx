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
import { Plus, Search, Loader2, X, Sparkles, RefreshCw, CheckCircle, EyeOff } from 'lucide-react';
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
  const [categories, setCategories] = useState(['Living Room', 'Modular Kitchen', 'Master Bedroom', 'Luxury Bathroom', 'Executive Office', 'Dining Hall']);
  const [newCategory, setNewCategory] = useState('');
  const [filterType, setFilterType] = useState('');

  const fetchInteriors = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'interiors'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInteriors(data);
      
      const dynamicCats = [...new Set(data.map(item => item.interiorType).filter(Boolean))];
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
    if (!formData.interiorType) {
      toast.error("Please select or add an interior category");
      return;
    }
    if (!formData.mainImage) {
      toast.error("Please upload the main interior image");
      return;
    }

    setLoading(true);
    try {
      const dataToSave = {
        ...formData,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'interiors', editingId), dataToSave);
        toast.success("Interior concept updated");
      } else {
        await addDoc(collection(db, 'interiors'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Interior concept published");
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
    if (!window.confirm("Are you sure you want to delete this interior concept?")) return;
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
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      const trimmed = newCategory.trim();
      setCategories([...categories, trimmed]);
      setFormData({ ...formData, interiorType: trimmed });
      setNewCategory('');
      toast.success(`Category "${trimmed}" added`);
    }
  };

  const filteredInteriors = interiors.filter(int => 
    (int.interiorType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
     int.keywords?.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (filterType === '' || int.interiorType === filterType)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C8842A] bg-[#C8842A]/10 px-2.5 py-0.5 rounded-full mb-1">
            Interior Architecture Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Interiors</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage bespoke interior concepts, room perspectives, and decor portfolios.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchInteriors}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
            New Interior
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search interiors by category or keywords..." 
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
              { value: '', label: 'All Interior Types' },
              ...categories.map(cat => ({ value: cat, label: cat }))
            ]}
            className="min-w-[180px]"
          />
          <div className="text-xs font-medium text-slate-500 whitespace-nowrap hidden lg:block">
            Showing <span className="font-semibold text-slate-800">{filteredInteriors.length}</span> of {interiors.length}
          </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
          <Loader2 className="animate-spin text-[#C8842A]" size={32} />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Loading interiors...</span>
        </div>
      ) : filteredInteriors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredInteriors.map((int) => (
            <Card 
              key={int.id}
              image={int.mainImage}
              title={int.interiorType}
              subtitle="Interior Concept"
              details={[
                { label: 'Status', value: int.isActive !== false ? 'Active' : 'Hidden' },
                { label: 'Images', value: `${[int.mainImage, int.child1, int.child2, int.child3].filter(Boolean).length} Photos` }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(int)}
              onDelete={() => handleDelete(int.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <Sparkles size={26} />
          </div>
          <h3 className="text-base font-semibold text-slate-800">No interior concepts found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            {searchQuery || filterType ? 'No items match the current filters. Adjust your search to view all.' : 'Publish your first high-end interior concept to inspire clients.'}
          </p>
          {!searchQuery && !filterType && (
            <div className="mt-4">
              <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
                Add Interior Concept
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
                    {editingId ? 'Edit Interior Concept' : 'New Interior Concept'}
                  </h2>
                  <p className="text-xs text-slate-500">Provide category, details, and high-definition photography.</p>
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
                  <div className="space-y-2">
                    <Select 
                      label="Interior Category" 
                      value={formData.interiorType} 
                      onChange={(e) => setFormData({...formData, interiorType: e.target.value})}
                      options={categories.map(cat => ({ value: cat, label: cat }))}
                      required
                    />
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={newCategory} 
                        onChange={(e) => setNewCategory(e.target.value)} 
                        placeholder="Add custom category..." 
                        className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#C8842A]"
                      />
                      <button 
                        type="button" 
                        onClick={handleAddCategory}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Input 
                      label="Keywords (comma-separated)" 
                      value={formData.keywords} 
                      onChange={(e) => setFormData({...formData, keywords: e.target.value})} 
                      placeholder="e.g. minimalist, walnut wood, brass lighting" 
                    />
                    
                    <div 
                      className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors"
                      onClick={() => setFormData({...formData, isActive: !formData.isActive})}
                    >
                      {formData.isActive ? (
                        <CheckCircle className="text-emerald-600 shrink-0" size={18} />
                      ) : (
                        <EyeOff className="text-slate-400 shrink-0" size={18} />
                      )}
                      <div className="text-xs">
                        <span className="font-semibold text-slate-800">
                          {formData.isActive ? 'Active on Public Website' : 'Hidden from Public'}
                        </span>
                        <p className="text-[11px] text-slate-500">Click to toggle visibility</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <FileUpload 
                    label="Hero / Main Interior Photo" 
                    initialValue={formData.mainImage} 
                    onUploadComplete={(url) => setFormData({...formData, mainImage: url})} 
                    required 
                  />

                  <div className="grid sm:grid-cols-3 gap-3">
                    <FileUpload 
                      label="Angle 1 (Optional)" 
                      initialValue={formData.child1} 
                      onUploadComplete={(url) => setFormData({...formData, child1: url})} 
                    />
                    <FileUpload 
                      label="Angle 2 (Optional)" 
                      initialValue={formData.child2} 
                      onUploadComplete={(url) => setFormData({...formData, child2: url})} 
                    />
                    <FileUpload 
                      label="Angle 3 (Optional)" 
                      initialValue={formData.child3} 
                      onUploadComplete={(url) => setFormData({...formData, child3: url})} 
                    />
                  </div>
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
                  {editingId ? 'Save Changes' : 'Publish Interior'}
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
