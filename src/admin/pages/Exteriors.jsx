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
import { Plus, Search, Loader2, X, Home, RefreshCw, CheckCircle, EyeOff } from 'lucide-react';
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
  const [filterStyle, setFilterStyle] = useState('');

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
    if (!formData.title.trim() || !formData.style) {
      toast.error("Please enter a title and select a style");
      return;
    }
    if (!formData.exteriorImage) {
      toast.error("Please upload the main exterior image");
      return;
    }

    setLoading(true);
    try {
      const dataToSave = {
        ...formData,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'exteriors', editingId), dataToSave);
        toast.success("Exterior design updated");
      } else {
        await addDoc(collection(db, 'exteriors'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Exterior design published");
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
    if (!window.confirm("Are you sure you want to delete this exterior design?")) return;
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
    ext.title?.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterStyle === '' || ext.style === filterStyle)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C8842A] bg-[#C8842A]/10 px-2.5 py-0.5 rounded-full mb-1">
            Facade & Elevation Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Exteriors</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage modern facades, villa elevations, and commercial exterior architecture.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchExteriors}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
            New Exterior
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search exteriors by title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <Select 
            value={filterStyle}
            onChange={(e) => setFilterStyle(e.target.value)}
            options={[
              { value: '', label: 'All Facade Styles' },
              { value: 'Modern', label: 'Modern' },
              { value: 'Classic', label: 'Classic' },
              { value: 'Villa', label: 'Villa' },
              { value: 'Commercial', label: 'Commercial' }
            ]}
            className="min-w-[170px]"
          />
          <div className="text-xs font-medium text-slate-500 whitespace-nowrap hidden lg:block">
            Showing <span className="font-semibold text-slate-800">{filteredExteriors.length}</span> of {exteriors.length}
          </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
          <Loader2 className="animate-spin text-[#C8842A]" size={32} />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Loading exteriors...</span>
        </div>
      ) : filteredExteriors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredExteriors.map((ext) => (
            <Card 
              key={ext.id}
              image={ext.exteriorImage}
              title={ext.title}
              subtitle={ext.style || 'Exterior Design'}
              details={[
                { label: 'Facing', value: ext.facing || 'Any' },
                { label: 'Status', value: ext.isActive !== false ? 'Active' : 'Hidden' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(ext)}
              onDelete={() => handleDelete(ext.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <Home size={26} />
          </div>
          <h3 className="text-base font-semibold text-slate-800">No exterior designs found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            {searchQuery || filterStyle ? 'No designs match the search criteria. Clear filters to see all.' : 'Add your first architectural facade to showcase to visitors.'}
          </p>
          {!searchQuery && !filterStyle && (
            <div className="mt-4">
              <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
                Add Exterior Design
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
                    {editingId ? 'Edit Exterior Design' : 'New Exterior Design'}
                  </h2>
                  <p className="text-xs text-slate-500">Provide facade details, dimensions, and visual render.</p>
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
                    label="Title" 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})} 
                    placeholder="e.g. Modern Minimalist Villa" 
                    required 
                  />
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

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] text-slate-800 text-sm outline-none transition-all min-h-[90px] resize-none"
                    placeholder="Describe facade materials, lighting, textures, and architectural highlights..."
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <Input 
                    label="Built-up Area (sq.ft)" 
                    type="number" 
                    value={formData.area} 
                    onChange={(e) => setFormData({...formData, area: e.target.value})} 
                    placeholder="e.g. 2400" 
                  />
                  <Input 
                    label="Frontage Width (ft)" 
                    type="number" 
                    value={formData.width} 
                    onChange={(e) => setFormData({...formData, width: e.target.value})} 
                    placeholder="30" 
                  />
                  <Input 
                    label="Depth Length (ft)" 
                    type="number" 
                    value={formData.length} 
                    onChange={(e) => setFormData({...formData, length: e.target.value})} 
                    placeholder="50" 
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input 
                    label="Location" 
                    value={formData.location} 
                    onChange={(e) => setFormData({...formData, location: e.target.value})} 
                    placeholder="e.g. Hyderabad, Telangana" 
                  />
                  <Select 
                    label="Facing Direction" 
                    value={formData.facing} 
                    onChange={(e) => setFormData({...formData, facing: e.target.value})}
                    options={[
                      { value: 'North', label: 'North' },
                      { value: 'East', label: 'East' },
                      { value: 'South', label: 'South' },
                      { value: 'West', label: 'West' },
                      { value: 'North-East', label: 'North-East' }
                    ]}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 items-end">
                  <Input 
                    label="Keywords (comma-separated)" 
                    value={formData.keywords} 
                    onChange={(e) => setFormData({...formData, keywords: e.target.value})} 
                    placeholder="e.g. stone cladding, louvers, glass balcony" 
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

                <FileUpload 
                  label="Main 3D Exterior Elevation Render" 
                  initialValue={formData.exteriorImage} 
                  onUploadComplete={(url) => setFormData({...formData, exteriorImage: url})} 
                  required 
                />
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
                  {editingId ? 'Save Changes' : 'Publish Exterior'}
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
