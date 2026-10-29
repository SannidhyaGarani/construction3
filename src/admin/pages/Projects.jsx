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
import { Plus, Search, Loader2, X, Briefcase, RefreshCw } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Input from '../../Components/common/Input';
import FileUpload from '../../Components/common/FileUpload';
import Button from '../../Components/common/Button';
import Card from '../../Components/common/Card';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    projectImage: '',
    firstFloorImage: '',
    groundFloorImage: '',
    additionalImage: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects", error);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Please enter a project name");
      return;
    }
    if (!formData.projectImage) {
      toast.error("Please upload the main project image");
      return;
    }

    setLoading(true);
    try {
      const dataToSave = {
        ...formData,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), dataToSave);
        toast.success("Project updated successfully");
      } else {
        await addDoc(collection(db, 'projects'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Project added successfully");
      }
      
      setIsModalOpen(false);
      resetForm();
      fetchProjects();
    } catch (error) {
      console.error("Error saving project", error);
      toast.error("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', projectImage: '', firstFloorImage: '', groundFloorImage: '', additionalImage: ''
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteDoc(doc(db, 'projects', id));
      toast.success("Project deleted successfully");
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project", error);
      toast.error("Failed to delete project");
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project.id);
    setIsModalOpen(true);
  };

  const filteredProjects = projects.filter(proj => 
    proj.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C8842A] bg-[#C8842A]/10 px-2.5 py-0.5 rounded-full mb-1">
            Portfolio Management
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Projects</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your flagship construction and architectural projects.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchProjects}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
            New Project
          </Button>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search projects by name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all"
          />
        </div>
        <div className="text-xs font-medium text-slate-500 px-2">
          Showing <span className="font-semibold text-slate-800">{filteredProjects.length}</span> of {projects.length} projects
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
          <Loader2 className="animate-spin text-[#C8842A]" size={32} />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Loading projects...</span>
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProjects.map((proj) => (
            <Card 
              key={proj.id}
              image={proj.projectImage}
              title={proj.name}
              subtitle="Construction Project"
              details={[
                { label: 'Updated', value: proj.updatedAt?.toDate?.()?.toLocaleDateString() || 'Recently' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(proj)}
              onDelete={() => handleDelete(proj.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <Briefcase size={26} />
          </div>
          <h3 className="text-base font-semibold text-slate-800">No projects found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            {searchQuery ? `No results match "${searchQuery}". Clear your search to view all.` : 'Get started by creating your first flagship construction project.'}
          </p>
          {!searchQuery && (
            <div className="mt-4">
              <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
                Create Project
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
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {editingId ? 'Edit Project' : 'Create New Project'}
                  </h2>
                  <p className="text-xs text-slate-500">Provide details and imagery for this construction project.</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => { setIsModalOpen(false); resetForm(); }} 
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 max-h-[72vh] overflow-y-auto">
                <Input 
                  label="Project Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  placeholder="e.g. Skyline Luxury Heights" 
                  required 
                />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <FileUpload 
                    label="Main Cover Image" 
                    initialValue={formData.projectImage} 
                    onUploadComplete={(url) => setFormData({...formData, projectImage: url})} 
                    required 
                  />
                  <FileUpload 
                    label="Ground Floor Layout" 
                    initialValue={formData.groundFloorImage} 
                    onUploadComplete={(url) => setFormData({...formData, groundFloorImage: url})} 
                  />
                  <FileUpload 
                    label="First Floor Layout" 
                    initialValue={formData.firstFloorImage} 
                    onUploadComplete={(url) => setFormData({...formData, firstFloorImage: url})} 
                  />
                  <FileUpload 
                    label="Additional Perspective" 
                    initialValue={formData.additionalImage} 
                    onUploadComplete={(url) => setFormData({...formData, additionalImage: url})} 
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button 
                  type="button" 
                  onClick={() => { setIsModalOpen(false); resetForm(); }} 
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <Button type="submit" loading={loading}>
                  {editingId ? 'Save Changes' : 'Publish Project'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
