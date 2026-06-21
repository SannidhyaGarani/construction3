import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../Components/Reveal';

const BrandIntro = () => {
  return (
    <section className="relative py-16 lg:py-28 bg-[#FAFAFA] text-[#0A192F] overflow-hidden font-sans border-b border-neutral-100">

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 right-12 w-full h-full flex items-center justify-end pointer-events-none opacity-[0.015]">
        <span className="text-[24vw] font-serif font-black select-none tracking-tighter">EST.26</span>
      </div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[160px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content: Narrative Layout */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <Reveal direction="left">
                <div className="flex items-center gap-3 mb-5">
                  <span className="uppercase tracking-[0.6em] text-[10px] font-semibold text-[#D4AF37]">
                    The Manifesto
                  </span>
                  <div className="w-8 h-px bg-neutral-200" />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#0A192F]">
                  Architecture of <br />
                  <span className="italic text-[#D4AF37] font-light">Infinite Intent.</span>
                </h2>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-12 gap-6 pt-4 border-t border-neutral-100">
              <div className="md:col-span-6">
                <Reveal delay={0.2}>
                  <p className="text-[15px] text-neutral-700 font-light leading-relaxed">
                    Operating at the absolute convergence of tectonic structural discipline and artistic symmetry, <span className="text-black font-normal">Auden & Khān</span> forms spaces that remain relevant for generations.
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-6">
                <Reveal delay={0.3}>
                  <p className="text-[13px] text-neutral-400 font-light leading-relaxed">
                    We process complex corporate environments and legacy residential states into absolute spatial clarity, protecting structural value with extreme design curation.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right Content: Refined Founder Profile Visual Frame */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="relative w-full aspect-[4/5] sm:aspect-[1.1] lg:aspect-[4/5] max-w-md mx-auto bg-[#0A192F] overflow-hidden rounded-sm group shadow-[0_30px_60px_-20px_rgba(10,25,47,0.08)]">
              {/* Optional: <img src="..." className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" /> */}
              
              {/* Layout Gradient Trims */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent z-10" />
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/20" />

              {/* Founder Information Overlay Layout */}
              <div className="absolute inset-x-6 bottom-6 z-20 flex justify-between items-end">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-1">Principal / Founder</span>
                  <h3 className="text-2xl font-serif text-white tracking-wide">Zayn Auden Khān</h3>
                </div>

                <div className="flex flex-col items-end text-right border-l border-white/10 pl-4">
                  <span className="font-serif text-3xl text-[#D4AF37] leading-none mb-0.5">15+</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/50 leading-none">Global Awards</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* COMPACT METRIC MATRIX ACCORDION */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {[
            { label: 'Strategic Network', val: 'London • Mumbai • Dubai' },
            { label: 'Curation Scale', val: '140+ Built Ecosystems' },
            { label: 'Design Core', val: 'Minimalism // Brutalism' },
            { label: 'Asset Parameters', val: 'Up to 3.2M SQ.FT' }
          ].map((stat, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05} direction="up">
              <div className="space-y-1">
                <span className="block text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-medium">{stat.label}</span>
                <span className="block text-[13px] text-[#0A192F] font-medium tracking-tight">{stat.val}</span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;