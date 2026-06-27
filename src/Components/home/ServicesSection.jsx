import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../Components/Reveal';

const services = [
  {
    id: '01',
    tag: 'STRUCT',
    title: 'Structural Engineering',
    desc: 'Designing safe, efficient, and durable structural systems for buildings and infrastructure.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=800',
    link: '/projects',
  },
  {
    id: '02',
    tag: 'INFRA',
    title: 'Infrastructure Development',
    desc: 'Planning and constructing roads, bridges, dams, and other critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    link: '/projects',
  },
  {
    id: '03',
    tag: 'GEOTECH',
    title: 'Geotechnical Engineering',
    desc: 'Analyzing soil and rock mechanics to ensure stable foundations and earthworks.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    link: '/projects',
  },
  {
    id: '04',
    tag: 'SUSTAIN',
    title: 'Sustainable Construction',
    desc: 'Implementing eco-friendly practices and materials for green building solutions.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    link: '/projects',
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-12 lg:px-20 border-t border-neutral-200 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- PREMIUM METADATA HEADER --- */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-neutral-200">
          <div className="max-w-xl">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#D4AF37]">Studio Focus</span>
                <div className="h-px w-8 bg-neutral-300" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0A192F] tracking-tight leading-[1.1]">
                Expertise in Every <span className="text-[#D4AF37] italic font-light">Engineering Field.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal direction="up" delay={0.2}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-600 leading-relaxed font-medium max-w-xs md:text-right">
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
              <Link to={item.link} className="block h-full border border-neutral-300 bg-[#FBFBFA] p-4 lg:p-5 rounded-sm transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_40px_-20px_rgba(10,25,47,0.15)]">
                
                {/* 1. VISIBLE ON ALL VIEWS: Premium Visual Viewport Frame */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-neutral-100 overflow-hidden rounded-sm mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Darker Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent" />
                  
                  {/* Top Floating Mini-Tag */}
                  <div className="absolute top-3 left-3 bg-[#0A192F] text-white font-mono text-[9px] tracking-widest px-3 py-1.5 backdrop-blur-md rounded-sm border border-white/10">
                    {item.id} // {item.tag}
                  </div>
                </div>

                {/* 2. TEXT CARD INFRASTRUCTURE */}
                <div className="flex flex-col justify-between min-h-[140px] px-1">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#0A192F] mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700 text-[14px] leading-relaxed font-normal line-clamp-2 group-hover:text-neutral-900 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* 3. TECHNICAL INTERACTIVE BASE */}
                  <div className="pt-6 mt-4 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A192F]/70 group-hover:text-[#D4AF37] transition-colors">
                      View Portfolio
                    </span>
                    <div className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white group-hover:bg-[#0A192F] group-hover:border-[#0A192F] transition-all duration-500 group-hover:shadow-md">
                      <ArrowUpRight size={15} className="text-neutral-600 group-hover:text-[#D4AF37] transition-colors duration-500" />
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