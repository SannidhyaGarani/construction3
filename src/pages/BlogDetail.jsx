import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Loader2, ArrowLeft, Calendar, User, Clock, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching blog", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4">
        <Loader2 className="animate-spin text-[#C8842A]" size={48} />
        <span className="text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em]">Opening article</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-bold text-[#111827]">Article Not Found</h2>
        <Link 
          to="/blogs" 
          className="bg-[#111827] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#C8842A] transition-all"
        >
          Return to Insights
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white text-[#111827] overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={blog.blogImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-end h-full pb-16">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em] mb-8 hover:text-[#C8842A] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="w-10 h-[3px] bg-[#C8842A] mb-6" />
          <h1 className="text-[#111827] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-10 py-8 border-y border-gray-200 mb-12">
            <div className="flex items-center gap-3 text-[#6B7280]">
              <Calendar size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">
                {blog.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#6B7280]">
              <User size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Editorial Team</span>
            </div>
            <div className="flex items-center gap-3 text-[#6B7280]">
              <Clock size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">5 Min Read</span>
            </div>
          </div>

          <div className="text-[#6B7280] leading-relaxed text-lg md:text-xl space-y-6 whitespace-pre-wrap">
            {blog.content}
          </div>

          <div className="mt-24 pt-24 border-t border-gray-200">
            <div className="bg-[#FAF9F6] border border-gray-200/50 p-8 md:p-16 text-[#111827] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden rounded-2xl">
              <div className="flex flex-col gap-4 relative z-10">
                <span className="text-[#C8842A] text-xs font-bold uppercase tracking-[0.3em]">Newsletter</span>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Subscribe to Insights</h3>
                <p className="text-[#6B7280] text-sm max-w-sm">Receive curated architectural updates and structural engineering news directly in your inbox.</p>
              </div>
              
              <div className="flex flex-col w-full md:w-auto gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full md:w-80 px-6 py-4 bg-white border border-gray-200 text-xs tracking-widest uppercase focus:outline-none focus:border-[#C8842A] transition-colors text-[#111827] placeholder-gray-400 rounded-lg" 
                />
                <button className="w-full px-8 py-4 bg-[#C8842A] text-white text-xs tracking-[0.3em] font-bold uppercase hover:bg-[#111827] transition-all flex items-center justify-center gap-2 rounded-lg">
                  Join Circle <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default BlogDetail;
