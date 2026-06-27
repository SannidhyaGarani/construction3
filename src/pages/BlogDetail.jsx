import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import Reveal from '../Components/Reveal';
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] gap-4">
        <Loader2 className="animate-spin text-[#D4AF37]" size={48} />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600">Opening Article</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] gap-6 px-6">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-[#0A192F]">Article Not Found</h2>
        <Link to="/blogs" className="border border-[#D4AF37] px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all">
          Return to Insights
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FAFAFA] text-[#0A192F] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0A192F] text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${blog.blogImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/60 to-[#0A192F]/40" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto w-full h-full px-6 md:px-12 lg:px-20 flex flex-col justify-center">
          <Link to="/blogs" className="inline-flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Insights</span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
              Expert Perspectives
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-6">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-10 py-8 border-y border-neutral-200 mb-12">
              <div className="flex items-center gap-3 text-neutral-600">
                <Calendar size={16} />
                <span className="text-[9px] uppercase tracking-widest font-bold">
                  {blog.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600">
                <User size={16} />
                <span className="text-[9px] uppercase tracking-widest font-bold">Editorial Team</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600">
                <Clock size={16} />
                <span className="text-[9px] uppercase tracking-widest font-bold">5 Min Read</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-neutral prose-lg max-w-none">
              <div className="text-neutral-700 leading-[2] font-light text-lg md:text-xl space-y-10 whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </Reveal>

          <div className="mt-24 pt-24 border-t border-neutral-200">
            <div className="bg-neutral-50 border border-neutral-200 p-12 md:p-16 text-[#0A192F] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-[#D4AF37]/20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#D4AF37]/20 pointer-events-none" />
              
              <div className="flex flex-col gap-4 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Newsletter</span>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight uppercase">Subscribe to Insights</h3>
                <p className="text-neutral-600 text-sm max-w-sm">Receive curated architectural updates and structural engineering news directly in your inbox.</p>
              </div>
              
              <div className="flex flex-col w-full md:w-auto gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full md:w-80 px-8 py-5 bg-white border border-neutral-300 text-[10px] tracking-widest uppercase focus:outline-none focus:border-[#D4AF37] transition-colors text-[#0A192F] placeholder-neutral-500" 
                />
                <button className="w-full px-8 py-5 bg-[#D4AF37] text-[#0A192F] text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-[#0A192F] hover:text-white transition-all flex items-center justify-center gap-3 group">
                  Join Circle <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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