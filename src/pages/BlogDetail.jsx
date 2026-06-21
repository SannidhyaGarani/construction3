import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { Loader2, ArrowLeft, Calendar, User, Clock, ArrowUpRight } from 'lucide-react';

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
        <div className="w-12 h-12 border-2 border-neutral-200 border-t-black animate-spin rounded-none" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-neutral-500">Opening Article</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-neutral-800">Article Not Found</h2>
        <Link to="/blogs" className="border border-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Return to Insights
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-24">
      <PageHero 
        title={blog.title} 
        subtitle="Expert Architectural Insights"
        backgroundImage={blog.blogImage}
      />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
        {/* Navigation */}
        <Link to="/blogs" className="inline-flex items-center gap-3 text-neutral-400 hover:text-black transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Insights</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-black" />
              <span className="uppercase tracking-[0.4em] text-[10px] text-neutral-500 font-bold">Editorial</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-neutral-900 mb-12 uppercase leading-[1.1]">
              {blog.title}
            </h2>

            <div className="flex flex-wrap items-center gap-10 py-8 border-y border-neutral-200 mb-16">
              <div className="flex items-center gap-3 text-neutral-400">
                <Calendar size={14} />
                <span className="text-[9px] uppercase tracking-widest font-bold">
                  {blog.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <User size={14} />
                <span className="text-[9px] uppercase tracking-widest font-bold">Editorial Team</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Clock size={14} />
                <span className="text-[9px] uppercase tracking-widest font-bold">5 Min Read</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-neutral prose-lg max-w-none">
              <div className="text-neutral-600 leading-[2] font-light text-lg md:text-xl space-y-10 whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </Reveal>

          <div className="mt-24 pt-24 border-t border-neutral-200">
            <div className="bg-neutral-950 p-12 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
              {/* Technical Decor */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-white/10" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/10" />
              
              <div className="flex flex-col gap-4 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">Newsletter</span>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight uppercase">Subscribe to Insights</h3>
                <p className="text-neutral-500 text-sm max-w-sm">Receive curated architectural updates and structural engineering news directly in your inbox.</p>
              </div>
              
              <div className="flex flex-col w-full md:w-auto gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full md:w-80 px-8 py-5 bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase focus:outline-none focus:border-[#C5A880] transition-colors" 
                />
                <button className="w-full px-8 py-5 bg-[#C5A880] text-black text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-white transition-all flex items-center justify-center gap-3">
                  Join Circle <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
