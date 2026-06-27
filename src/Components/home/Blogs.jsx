import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { Loader2, ArrowUpRight, Plus, ChevronLeft, ChevronRight, Calendar, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Reveal from '../../Components/Reveal';
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
    <section className="py-16 lg:py-24 bg-[#F9F8F6] border-t border-neutral-200 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#D4AF37]" />
                <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-[#D4AF37]">Knowledge Base</span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-900 tracking-tight leading-[1.1]">
                Latest Insights<span className="text-[#D4AF37]">.</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal direction="up" delay={0.2}>
            <Link to="/blogs" className="group flex items-center gap-4 pb-2 border-b border-transparent hover:border-[#D4AF37] transition-all duration-300">
              <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-neutral-500 group-hover:text-[#0A192F]">Read All</span>
              <Plus size={15} className="text-neutral-400 group-hover:text-[#D4AF37] transition-colors" />
            </Link>
          </Reveal>
        </div>

        {/* --- Blog Swiper --- */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-neutral-300" size={36} strokeWidth={1.5} />
          </div>
        ) : (
          <div className="relative group/swiper">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
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
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
                1280: { slidesPerView: 4, spaceBetween: 32 },
              }}
              className="!pb-20"
            >
              {blogs.map((blog, i) => (
                <SwiperSlide key={blog.id}>
                  <Link 
                    to={`/blogs/${blog.id}`} 
                    className="group flex flex-col h-full bg-white border border-neutral-300 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-sm hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50">
                      <img 
                        src={blog.blogImage} 
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-5 left-5">
                        <span className="bg-white/95 backdrop-blur-sm px-3.5 py-2 text-[9px] font-mono tracking-widest uppercase border border-neutral-100 shadow-sm">
                          ARTICLE_{String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[#D4AF37] text-[11px] mb-3">
                          <Calendar size={14} />
                          <p className="uppercase tracking-[0.3em] font-bold">
                            {blog.createdAt?.toDate().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-neutral-900 leading-relaxed group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-3">
                          {blog.title}
                        </h3>
                      </div>

                      <div className="mt-7 flex items-center justify-between border-t border-neutral-100 pt-5">
                        <div className="flex items-center gap-2 text-neutral-500 text-[10px] uppercase tracking-[0.3em]">
                          <BookOpen size={14} className="text-[#D4AF37]" />
                          <span>Read Article</span>
                        </div>
                        <ArrowUpRight size={16} className="text-neutral-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- Navigation Buttons --- */}
            <div className="hidden xl:block">
              <button className="swiper-button-prev-blogs absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 p-4 bg-white border border-neutral-200 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button className="swiper-button-next-blogs absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 p-4 bg-white border border-neutral-200 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all shadow-sm">
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
          border-radius: 0;
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