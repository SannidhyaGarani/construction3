import React, { useState } from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
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

  return (
    <main className="bg-[#050505] text-white">
      <PageHero 
        title="The Archive." 
        subtitle="A Portfolio of Architectural Integrity"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
      />

      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* --- Technical Filter Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8 border-b border-white/5 pb-10">
          <Reveal>
            <p className="text-neutral-500 text-sm font-mono tracking-widest uppercase">
              Filter_By_Discipline:
            </p>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-300 ${
                  activeFilter === cat ? 'text-[#C5A880]' : 'text-neutral-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- The Grid --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {projects.map((project, i) => (
            <div key={i} className={`break-inside-avoid ${activeFilter !== 'All' && project.category !== activeFilter ? 'hidden' : 'block'}`}>
              <Reveal delay={i * 0.05}>
                <div className="group relative bg-neutral-900 border border-white/5 overflow-hidden">
                  
                  {/* Grayscale to Color Image */}
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105" 
                  />
                  
                  {/* Architectural Overlay */}
                  <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono text-[#C5A880] tracking-[0.3em]">{project.code}</span>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2 block">{project.category}</span>
                      <h3 className="font-serif text-2xl text-white tracking-tight">{project.title}</h3>
                      <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-[#C5A880] transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Gallery;