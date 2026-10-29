import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { Loader2, BookOpen, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';
import PageHero from '../Components/PageHero';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden font-sans">
      <PageHero 
        title="Our Blog" 
        subtitle="Expert Insights for the Modern Age"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-10 md:py-12 lg:py-14 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
              Engineering Discourse
            </p>
          </div>
          <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2]">
            Explore our latest articles & industry whitepapers
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="animate-spin text-[#C8842A]" size={38} strokeWidth={1.75} />
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Loading articles...</span>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/50 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-500 cursor-pointer flex flex-col h-full relative"
              >
                {/* Top Architectural Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Blog Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={blog.blogImage || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                      Article
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                      {blog.createdAt?.toDate ? blog.createdAt.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                    </span>
                    <h3 className="text-slate-900 font-semibold text-base sm:text-[18px] mb-2.5 group-hover:text-[#C8842A] transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-[#C8842A] transition-colors">
                      Read Full Article
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 group-hover:bg-[#C8842A] group-hover:text-white group-hover:border-[#C8842A] transition-all duration-300 shadow-2xs">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <BookOpen className="text-[#C8842A] mb-3" size={48} strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-slate-900 mb-1">No articles published yet</h3>
            <p className="text-slate-500 text-xs">Check back soon for upcoming civil engineering publications.</p>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
};

export default BlogsPage;
