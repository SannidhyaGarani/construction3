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
import { Plus, Search, Loader2, X, BookOpen } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Input from '../../Components/common/Input';
import FileUpload from '../../Components/common/FileUpload';
import Button from '../../Components/common/Button';
import Card from '../../Components/common/Card';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    blogImage: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs", error);
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
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
        await updateDoc(doc(db, 'blogs', editingId), dataToSave);
        toast.success("Blog updated successfully");
      } else {
        await addDoc(collection(db, 'blogs'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Blog published successfully");
      }

      setIsModalOpen(false);
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog", error);
      toast.error("Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '', content: '', blogImage: ''
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await deleteDoc(doc(db, 'blogs', id));
      toast.success("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog", error);
      toast.error("Failed to delete blog");
    }
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditingId(blog.id);
    setIsModalOpen(true);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">Content Management</span>
          <h1 className="font-serif text-5xl text-neutral-800">Insights & Blogs</h1>
          <p className="text-neutral-400 text-sm font-light mt-2 max-w-md italic tracking-wide leading-relaxed">
            Share engineering insights, project updates, and architectural trends with your audience.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} icon={Plus} variant="secondary">
          Write Article
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-3xl shadow-2xl shadow-neutral-100/50 border border-neutral-100">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-neutral-800 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-neutral-100 rounded-2xl border-none focus:ring-2 focus:ring-neutral-800 transition-all outline-none text-sm font-medium"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
          <Loader2 className="animate-spin" size={48} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Loading articles...</span>
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog.id}
              image={blog.blogImage}
              title={blog.title}
              subtitle="Article"
              details={[
                { label: 'Published', value: blog.createdAt?.toDate().toLocaleDateString() || 'Recently' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(blog)}
              onDelete={() => handleDelete(blog.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-48 text-center bg-white rounded-3xl border border-dashed border-neutral-200">
          <BookOpen className="text-neutral-200 mb-6" size={64} />
          <h3 className="text-2xl font-serif text-neutral-400">No articles published yet</h3>
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
                    {editingId ? 'Edit Article' : 'Write New Article'}
                  </h2>
                </div>
                <button type="button" onClick={() => { setIsModalOpen(false); resetForm(); }} className="p-4 bg-neutral-100 rounded-2xl text-neutral-800 hover:bg-neutral-200 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-10 md:p-12 space-y-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <Input label="Article Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. The Future of Sustainable Architecture" required />

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-600 tracking-wide uppercase">Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="px-6 py-4 rounded-2xl bg-neutral-100 border-none focus:bg-white focus:ring-2 focus:ring-neutral-800 transition-all text-neutral-800 outline-none shadow-sm min-h-[300px] resize-none leading-relaxed"
                    placeholder="Write your article content here..."
                    required
                  />
                </div>

                <FileUpload label="Cover Image" initialValue={formData.blogImage} onUploadComplete={(url) => setFormData({ ...formData, blogImage: url })} required />
              </div>

              <div className="p-10 md:p-12 bg-neutral-50 flex items-center justify-end gap-6">
                <button type="button" onClick={() => { setIsModalOpen(false); resetForm(); }} className="px-8 py-4 uppercase text-[10px] tracking-widest font-bold text-neutral-400 hover:text-neutral-800 transition-colors">Discard</button>
                <Button type="submit" loading={loading} variant="secondary">
                  {editingId ? 'Update Article' : 'Publish Article'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
