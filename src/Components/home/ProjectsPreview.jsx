import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Loader2, Plus, ChevronLeft, ChevronRight, Maximize2, Building2, MapPin } from 'lucide-react';
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
    <section className="py-16 lg:py-24 bg-[#0A192F] text-white overflow-hidden border-t border-white/10 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6 pb-6 border-b border-white/10">
          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-[#D4AF37]">Project Index</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
                Showcase<span className="italic font-light text-white/50">.</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal direction="up" delay={0.2}>
            <Link to="/projects" className="group flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-white/50 group-hover:text-white transition-colors">View Archive</span>
              <div className="w-11 h-11 border border-white/10 rounded-sm flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-500">
                <Plus size={15} className="text-[#D4AF37]" />
              </div>
            </Link>
          </Reveal>
        </div>

        {/* --- MAIN MODULE LAYOUT --- */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6 text-white/20">
            <Loader2 className="animate-spin" size={36} strokeWidth={1.5} />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em]">Loading Projects</span>
          </div>
        ) : projects.length > 0 ? (
          <div className="relative group/swiper">
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
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
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 32 },
              }}
              className="!overflow-visible"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <div
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="group cursor-pointer h-full flex flex-col border border-white/[0.05] bg-[#0F1F3C] p-4 rounded-sm transition-all duration-500 hover:bg-[#122647] hover:border-[#D4AF37]/30 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] hover:-translate-y-2"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-5">
                      <img 
                        src={project.projectImage} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
                      
                      {/* Project Index */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[9px] font-mono text-white bg-[#0A192F]/90 px-3 py-1.5 border border-white/10 backdrop-blur-sm font-medium">
                          P_{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Hover Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                        <div className="w-14 h-14 bg-[#D4AF37]/95 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                          <Maximize2 size={18} className="text-[#0A192F]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-white mb-3 tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                          {project.name}
                        </h3>
                        
                        {project.location && (
                          <div className="flex items-center gap-2 text-white/60 text-[12px] mb-3">
                            <MapPin size={14} />
                            <span>{project.location}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Footer */}
                      <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-3">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} className="text-[#D4AF37]" />
                          <span className="text-[11px] tracking-wide text-white/60 font-mono">
                            {project.type || 'Civil Engineering'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-medium uppercase">
                            {project.status || 'Completed'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- NAVIGATION & PAGINATION --- */}
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
              {/* Left Action Elements */}
              <div className="flex gap-3">
                <button className="swiper-prev-btn w-11 h-11 border border-white/10 hover:border-[#D4AF37]/50 rounded-sm flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all duration-300">
                  <ChevronLeft size={18} />
                </button>
                <button className="swiper-next-btn w-11 h-11 border border-white/10 hover:border-[#D4AF37]/50 rounded-sm flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all duration-300">
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Central Tracker */}
              <div className="swiper-custom-pagination flex justify-center items-center" />

              {/* Right Meta */}
              <div className="text-[9px] font-mono text-white/25 uppercase tracking-[0.3em] hidden sm:block">
                ARCHIVE // PORTFOLIO
              </div>
            </div>

          </div>
        ) : (
          <div className="py-24 border border-white/5 text-center rounded-sm">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">No Projects Yet</span>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-bullet {
          width: 6px;
          height: 6px;
          border-radius: 0;
          background: rgba(255,255,255,0.2);
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          display: inline-block;
        }
        .swiper-pagination-bullet-active.custom-bullet {
          background: #D4AF37;
          width: 28px;
        }
      `}} />
    </section>
  );
};

export default ProjectsPreview;