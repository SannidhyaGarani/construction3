import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import CTASection from '../Components/home/CTASection';

const services = [
  {
    code: 'ARC-01',
    title: 'Building Design',
    desc: 'From initial concept to construction-ready drafts, we provide functional planning that balances aesthetic ambition with structural practicality. Our process guarantees clarity in detailing and efficiency in execution.',
    img: 'https://images.unsplash.com/photo-1529420705456-2d43f7f26d0f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'BUI-02',
    title: 'Construction',
    desc: 'End-to-end execution defined by rigorous material verification, strict site supervision, and safety compliance. We manage the asset lifecycle to ensure timelines align with uncompromising structural integrity.',
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'FAC-03',
    title: 'Elevation Design',
    desc: 'Curating modern facades and proportional massing aligned to environmental context and financial parameters. We craft exterior elevations that command presence while remaining harmonious.',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'INT-04',
    title: 'Interior Arch',
    desc: 'Clean, durable, and timeless spatial design featuring cohesive material palettes. We focus on engineering spaces that deliver high visual impact alongside deep functional comfort.',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'STR-05',
    title: 'Structural Detail',
    desc: 'Mathematical precision in engineering drawings and load coordination. Our structural detailing serves as the uncompromising backbone for the longevity and stability of your investment.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'LGL-06',
    title: 'Municipal Approvals',
    desc: 'Navigating regulatory frameworks (Nagar Nigam / Naksha Pass) with strictly compliant documentation. We command the bureaucratic complexities so your project remains unhindered.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
];

const Services = () => {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <PageHero 
        title="Our Capabilities." 
        subtitle="Disciplines in Architecture & Execution"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* --- Intro Text --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-b border-white/5">
        <div className="max-w-5xl">
          <Reveal>
             <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">
                  Practice Areas
                </span>
                <div className="h-[1px] w-12 bg-neutral-800" />
              </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter">
              Accountable, detailed, and <span className="italic text-neutral-600 font-light">design-led</span> execution.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* --- Services Deck --- */}
      <section className="pb-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto space-y-32 mt-32">
        {services.map((s, i) => (
          <div key={s.code} className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className={`relative lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Reveal direction={i % 2 === 1 ? 'left' : 'right'}>
                <div className="aspect-[4/3] overflow-hidden relative group border border-white/10 bg-neutral-900">
                   
                   {/* Technical Image Overlay */}
                   <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <span className="bg-[#050505]/80 backdrop-blur-md px-3 py-1 text-[9px] font-mono text-[#C5A880] border border-white/10">
                       SEC_V // {s.code}
                     </span>
                   </div>

                   <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                </div>
              </Reveal>
              
              {/* Massive Ghost Number Overlay */}
              <div className={`absolute -top-16 ${i % 2 === 1 ? '-right-4 lg:-right-16' : '-left-4 lg:-left-16'} hidden md:block z-0 pointer-events-none`}>
                <span className="font-serif text-[14rem] text-white/[0.03] leading-none select-none">
                  0{i + 1}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className={`lg:col-span-5 relative z-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <Reveal direction={i % 2 === 1 ? 'right' : 'left'}>
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold block">
                      Discipline 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600 tracking-widest">{s.code}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">{s.title}</h3>
                
                <p className="text-neutral-400 text-lg leading-relaxed font-light">
                  {s.desc}
                </p>
                
                {/* Structural Detail Line */}
                <div className="mt-12 flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-[#C5A880]" />
                   <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
                </div>
              </Reveal>
            </div>

          </div>
        ))}
      </section>

      <CTASection />
    </main>
  );
};

export default Services;