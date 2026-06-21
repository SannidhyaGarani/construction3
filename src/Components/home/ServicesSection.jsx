import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../Components/Reveal';

const services = [
  {
    id: '01',
    tag: 'CORE',
    title: 'Structural Architecture',
    desc: 'Defining the skyline through monumental form and technical precision.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    link: '/exteriors',
  },
  {
    id: '02',
    tag: 'POET',
    title: 'Interior Curation',
    desc: 'Bespoke environments that balance aesthetic poetry with functional flow.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    link: '/interiors',
  },
  {
    id: '03',
    tag: 'SPAT',
    title: 'Urban Planning',
    desc: 'Strategic spatial organization for sustainable community development.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    link: '/floorplans',
  },
  {
    id: '04',
    tag: 'ENV',
    title: 'Landscape Design',
    desc: 'Integrating natural ecosystems with structural built environments.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800',
    link: '/projects',
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 lg:py-32 px-6 md:px-12 lg:px-20 border-t border-neutral-100 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- PREMIUM METADATA HEADER --- */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-neutral-100">
          <div className="max-w-xl">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.6em] font-semibold text-[#D4AF37]">Studio Focus</span>
                <div className="h-px w-8 bg-neutral-200" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] tracking-tight leading-[1.1]">
                Mastery in Every <span className="text-[#D4AF37] italic font-light">Dimension.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal direction="up" delay={0.2}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 leading-relaxed font-normal max-w-xs md:text-right">
              From raw topography blueprints to complex interior curation frameworks.
            </p>
          </Reveal>
        </div>

        {/* --- UNIQUE INTERLOCKING CONTAINER --- */}
        {/* Mobile: Smooth Horizontal Micro-Deck Swipe | Desktop: Architectural Asymmetric Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 lg:pb-0 gap-6 lg:grid lg:grid-cols-4 lg:overflow-x-visible scrollbar-none">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className={`
                min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center shrink-0 relative group
                ${idx % 2 === 1 ? 'lg:mt-12' : ''} 
              `}
            >
              <Link to={item.link} className="block h-full border border-neutral-100 bg-[#FBFBFA] p-4 lg:p-5 rounded-sm transition-all duration-500 hover:border-neutral-200 hover:shadow-[0_20px_40px_-20px_rgba(10,25,47,0.08)]">
                
                {/* 1. VISIBLE ON ALL VIEWS: Premium Visual Viewport Frame */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-neutral-200 overflow-hidden rounded-sm mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Geometric Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Top Floating Mini-Tag */}
                  <div className="absolute top-3 left-3 bg-[#0A192F]/90 text-white/90 font-mono text-[9px] tracking-widest px-2.5 py-1 backdrop-blur-md rounded-xs">
                    {item.id} // {item.tag}
                  </div>
                </div>

                {/* 2. TEXT CARD INFRASTRUCTURE */}
                <div className="flex flex-col justify-between min-h-[140px] px-1">
                  <div>
                    <h3 className="font-serif text-2xl text-[#0A192F] mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-[13px] leading-relaxed font-light line-clamp-2 group-hover:text-neutral-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* 3. TECHNICAL INTERACTIVE BASE */}
                  <div className="pt-6 mt-4 border-t border-neutral-100/70 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A192F]/40 group-hover:text-[#0A192F] transition-colors">
                      View Portfolio
                    </span>
                    <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center bg-white group-hover:bg-[#0A192F] group-hover:border-[#0A192F] transition-all duration-500 group-hover:shadow-sm">
                      <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#D4AF37] transition-colors duration-500" />
                    </div>
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </div>

      </div>
      
      {/* Target Tailwind custom utility to hide default mobile bars safely */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Services;