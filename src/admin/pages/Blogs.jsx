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
import { Plus, Search, Loader2, X, BookOpen, RefreshCw } from 'lucide-react';
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
      toast.error("Failed to load articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error("Please enter an article title");
      return;
    }
    if (!formData.content.trim()) {
      toast.error("Please write the article content");
      return;
    }
    if (!formData.blogImage) {
      toast.error("Please upload a cover image");
      return;
    }

    setLoading(true);
    try {
      const dataToSave = {
        ...formData,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'blogs', editingId), dataToSave);
        toast.success("Article updated successfully");
      } else {
        await addDoc(collection(db, 'blogs'), {
          ...dataToSave,
          createdAt: serverTimestamp()
        });
        toast.success("Article published successfully");
      }

      setIsModalOpen(false);
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog", error);
      toast.error("Failed to save article");
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
    if (!window.confirm("Are you sure you want to delete this article?")) return;
    try {
      await deleteDoc(doc(db, 'blogs', id));
      toast.success("Article deleted successfully");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog", error);
      toast.error("Failed to delete article");
    }
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditingId(blog.id);
    setIsModalOpen(true);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C8842A] bg-[#C8842A]/10 px-2.5 py-0.5 rounded-full mb-1">
            Editorial & Publications
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Articles & Blogs</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Share construction insights, design trends, and architectural articles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchBlogs}
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
            Write Article
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search articles by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all"
          />
        </div>
        <div className="text-xs font-medium text-slate-500 px-2">
          Showing <span className="font-semibold text-slate-800">{filteredBlogs.length}</span> of {blogs.length} articles
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
          <Loader2 className="animate-spin text-[#C8842A]" size={32} />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Loading articles...</span>
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog.id}
              image={blog.blogImage}
              title={blog.title}
              subtitle="Article"
              details={[
                { label: 'Published', value: blog.createdAt?.toDate?.()?.toLocaleDateString() || 'Recently' }
              ]}
              isAdmin={true}
              onEdit={() => handleEdit(blog)}
              onDelete={() => handleDelete(blog.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <BookOpen size={26} />
          </div>
          <h3 className="text-base font-semibold text-slate-800">No articles published yet</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            {searchQuery ? `No articles match "${searchQuery}". Clear your search to view all.` : 'Write and publish your first article to establish authority in architecture.'}
          </p>
          {!searchQuery && (
            <div className="mt-4">
              <Button onClick={() => { resetForm(); setIsModalOpen(true); }} icon={Plus}>
                Write First Article
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
                    {editingId ? 'Edit Article' : 'Write New Article'}
                  </h2>
                  <p className="text-xs text-slate-500">Compose and publish insights for Naksha Dynamics readers.</p>
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
                <Input 
                  label="Article Title" 
                  value={formData.title} 
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                  placeholder="e.g. 5 Modern Trends Revolutionizing Sustainable Architecture" 
                  required 
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Article Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] text-slate-800 text-sm outline-none transition-all min-h-[220px] resize-y leading-relaxed"
                    placeholder="Write your article body here... Share materials, methods, architectural thinking, and key takeaways."
                    required
                  />
                </div>

                <FileUpload 
                  label="Cover Image" 
                  initialValue={formData.blogImage} 
                  onUploadComplete={(url) => setFormData({ ...formData, blogImage: url })} 
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
                  {editingId ? 'Save Changes' : 'Publish Article'}
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
