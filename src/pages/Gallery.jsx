import React, { useState } from 'react';
import PageHero from '../Components/PageHero';
import CTASection from '../Components/home/CTASection';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop', title: 'The Grand Residence', category: 'Residential', code: 'PROJ-RE-01' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop', title: 'Vertex Towers', category: 'Commercial', code: 'PROJ-CO-02' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop', title: 'Skyline Apartments', category: 'Residential', code: 'PROJ-RE-03' },
  { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop', title: 'Minimalist Loft', category: 'Interior', code: 'PROJ-IN-04' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop', title: 'Corporate Hub', category: 'Commercial', code: 'PROJ-CO-05' },
  { src: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1600&auto=format&fit=crop', title: 'Urban Villa', category: 'Residential', code: 'PROJ-RE-06' },
];

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Sustainable'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden font-sans">
      <PageHero 
        title="Our Gallery" 
        subtitle="A Portfolio of Architectural Integrity"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
      />

      <section className="py-10 md:py-12 lg:py-14 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* --- Header & Filter Bar --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-5 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Visual Showcase
              </p>
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2]">
              Engineering Works & Structural Highlights
            </h2>
          </div>
          
          {/* Mobile-Friendly Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl shrink-0 cursor-pointer ${
                  activeFilter === cat 
                    ? 'bg-[#111827] text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- The Grid: 3-4 cards in a row --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredProjects.map((project, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/50 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Top Architectural Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

              {/* Image Frame */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                
                {/* Glassmorphic Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-md shadow-xs bg-slate-900/80 text-amber-300 border border-white/20 shrink-0">
                    {project.code}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex items-center justify-between mt-auto">
                <div>
                  <h3 className="text-slate-900 font-semibold text-base mb-1 group-hover:text-[#C8842A] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-slate-400 text-xs uppercase tracking-wider">Indore / Central India</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 group-hover:bg-[#C8842A] group-hover:text-white group-hover:border-[#C8842A] transition-all duration-300 shadow-2xs shrink-0">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Gallery;
