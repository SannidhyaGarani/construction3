import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Loader2, Plus, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Reveal from '../../Components/Reveal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, 'projects'),
          orderBy('createdAt', 'desc'),
          limit(8)
        );
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-[#0A192F] text-white overflow-hidden border-t border-white/5 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/5">
          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.6em] font-semibold text-[#D4AF37]">The Index</span>
                <div className="h-px w-8 bg-white/10" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                Curated <span className="italic font-light text-white/30">Portfolio.</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal direction="up" delay={0.2}>
            <Link to="/projects" className="group flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">Archive</span>
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-500">
                <Plus size={14} className="text-[#D4AF37] group-hover:rotate-90 transition-transform duration-500" />
              </div>
            </Link>
          </Reveal>
        </div>

        {/* --- MAIN MODULE LAYOUT --- */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6 text-white/20">
            <Loader2 className="animate-spin" size={32} strokeWidth={1.5} />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em]">Synchronizing Registry</span>
          </div>
        ) : projects.length > 0 ? (
          <div className="relative group/swiper">
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={24}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: '.swiper-prev-btn',
                nextEl: '.swiper-next-btn',
              }}
              pagination={{
                el: '.swiper-custom-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 32 },
              }}
              className="!overflow-visible"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <div
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="group cursor-pointer h-full flex flex-col border border-white/[0.03] bg-white/[0.01] p-3 rounded-sm transition-all duration-500 hover:bg-white/[0.03] hover:border-white/10"
                  >
                    {/* Widescreen Cinema Viewport */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-white/5 rounded-xs">
                      <img 
                        src={project.projectImage} 
                        alt={project.name}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent opacity-80" />
                      
                      {/* Technical Index Ring */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[9px] font-mono text-white/60 bg-[#0A192F]/90 px-2 py-1 border border-white/5 backdrop-blur-md rounded-xs">
                          P_0{index + 1}
                        </span>
                      </div>

                      {/* Focal Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                        <div className="w-12 h-12 bg-[#0A192F]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                          <Maximize2 size={16} className="text-[#D4AF37]" />
                        </div>
                      </div>
                    </div>

                    {/* Integrated Text Infrastructure */}
                    <div className="mt-5 px-1 flex-grow flex flex-col justify-between">
                      <h3 className="font-serif text-xl text-white tracking-tight mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
                        {project.name}
                      </h3>
                      
                      {/* High-Contrast Split Metrics Strip */}
                      <div className="flex justify-between items-center border-t border-white/5 pt-4 pb-1">
                        <div>
                          <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30 mb-0.5">Parameters</span>
                          <span className="block text-[10px] tracking-wide text-white/60 font-light font-mono">Premium Residential</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30 mb-0.5">Status</span>
                          <span className="block text-[10px] tracking-wide text-[#D4AF37] font-medium uppercase font-mono">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- COMPACT ACTION SYSTEM TRIMS --- */}
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
              {/* Left Action Elements */}
              <div className="flex gap-3">
                <button className="swiper-prev-btn w-10 h-10 border border-white/5 hover:border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all">
                  <ChevronLeft size={16} />
                </button>
                <button className="swiper-next-btn w-10 h-10 border border-white/5 hover:border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Central Tracker */}
              <div className="swiper-custom-pagination flex justify-center items-center" />

              {/* Right Context Meta */}
              <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] hidden sm:block">
                SYS_MATRIX // PAGE_R01
              </div>
            </div>

          </div>
        ) : (
          <div className="py-24 border border-white/5 text-center rounded-sm">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">Empty_Set // Zero_Assets</span>
          </div>
        )}
      </div>

      {/* Embedded Global Theme Bullet Trims */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-bullet {
          width: 5px;
          height: 5px;
          border-radius: 0;
          background: rgba(255,255,255,0.15);
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          display: inline-block;
        }
        .swiper-pagination-bullet-active.custom-bullet {
          background: #D4AF37;
          width: 24px;
        }
      `}} />
    </section>
  );
};

export default ProjectsPreview;