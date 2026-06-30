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
    <main className="bg-white text-[#111827]">
      <PageHero 
        title="Our Gallery" 
        subtitle="A Portfolio of Architectural Integrity"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
      />

      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        {/* --- Filter Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <p className="text-[#6B7280] text-sm font-medium">
            Filter by category:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-300 rounded-lg ${
                  activeFilter === cat 
                    ? 'bg-[#C8842A] text-white' 
                    : 'text-[#6B7280] hover:text-[#C8842A] bg-[#FAFAF8] hover:bg-[#FAF9F6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- The Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div key={i} className="group relative bg-white rounded-2xl border border-gray-200/50 shadow-[0_12px_40px_rgba(17,24,39,0.02)] overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#C8842A] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                  <h3 className="text-white font-bold text-xl tracking-tight">{project.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#C8842A] text-[10px] font-bold uppercase tracking-[0.3em]">{project.code}</span>
                    <h4 className="text-[#111827] font-bold text-lg">{project.title}</h4>
                  </div>
                  <div className="w-10 h-10 bg-[#FAFAF8] rounded-lg flex items-center justify-center group-hover:bg-[#C8842A] transition-all duration-300">
                    <ArrowUpRight size={18} className="text-[#C8842A] group-hover:text-white transition-colors duration-300" />
                  </div>
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
