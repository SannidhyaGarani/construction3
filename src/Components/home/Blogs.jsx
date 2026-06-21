import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { Loader2, ArrowUpRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'), limit(8));
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
    /* Added overflow-x-hidden to prevent button bleed */
    <section className="py-16 lg:py-20 bg-[#F9F8F6] border-t border-neutral-100 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-black" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4AF37]">Knowledge_Base</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-neutral-900 tracking-tighter leading-none">
              Recent Insights<span className="text-[#D4AF37]">.</span>
            </h2>
          </div>
          
          <Link to="/blogs" className="group flex items-center gap-4 pb-2 border-b border-transparent hover:border-black transition-all">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 group-hover:text-black">Explore All</span>
            <Plus size={14} className="group-hover:rotate-90 transition-transform duration-500" />
          </Link>
        </div>

        {/* --- Blog Swiper --- */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-neutral-300" size={32} strokeWidth={1} />
          </div>
        ) : (
          <div className="relative group/swiper">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              navigation={{
                prevEl: '.swiper-button-prev-blogs',
                nextEl: '.swiper-button-next-blogs',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-bullet-blogs',
                bulletActiveClass: 'swiper-bullet-blogs-active',
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="!pb-20"
            >
              {blogs.map((blog, i) => (
                <SwiperSlide key={blog.id}>
                  <Link 
                    to={`/blogs/${blog.id}`} 
                    className="group flex flex-col h-full bg-white border border-neutral-100 hover:border-neutral-300 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img 
                        src={blog.blogImage} 
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] font-mono tracking-widest uppercase border border-neutral-100">
                          Ref_0{i + 1}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
                          {blog.createdAt?.toDate().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </p>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 leading-relaxed group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-neutral-50 pt-4">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">Read Article</span>
                        <ArrowUpRight size={16} className="text-neutral-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- FIX: Navigation Buttons --- */}
            <div className="hidden xl:block">
              <button className="swiper-button-prev-blogs absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 p-4 bg-white border border-neutral-200 hover:border-black text-neutral-400 hover:text-black transition-all shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button className="swiper-button-next-blogs absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 p-4 bg-white border border-neutral-200 hover:border-black text-neutral-400 hover:text-black transition-all shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-bullet-blogs {
          width: 6px;
          height: 6px;
          background: #D1D5DB;
          opacity: 1;
          display: inline-block;
          margin: 0 6px !important;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .swiper-bullet-blogs-active {
          background: #D4AF37;
          width: 30px;
          border-radius: 4px;
        }

        .swiper {
          overflow: visible !important;
        }

        .swiper-button-prev-blogs:disabled,
        .swiper-button-next-blogs:disabled {
          opacity: 0;
          pointer-events: none;
        }
      `}} />
    </section>
  );
};

export default RecentBlogs;