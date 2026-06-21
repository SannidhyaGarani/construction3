import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import StatsSection from '../Components/home/StatsSection';
import CTASection from '../Components/home/CTASection';

const About = () => {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <PageHero 
        title="Our Legacy." 
        subtitle="Building Trust Since 1995"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      />

      {/* --- The Manifesto --- */}
      <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto relative">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-5xl relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-[#C5A880]">
                Firm Overview
              </span>
              <div className="h-[1px] w-24 bg-neutral-800" />
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-12 tracking-tighter">
              Uniting Vision <br />
              <span className="italic text-neutral-600 font-light">with Discipline.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-neutral-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl border-l border-[#C5A880]/30 pl-8">
              Established in 1995, Archelon operates across Tier‑1 Indian cities, delivering assets defined by technical precision, material integrity, and transparent delivery. Our practice safeguards long‑term value through accountable supervision and clear milestones.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- Stats Section --- */}
      {/* Assuming StatsSection has been/will be updated to a dark theme. If not, wrap it in a div with dark background/invert filters if needed, or update the component itself. */}
      <div className="border-y border-white/5 bg-[#050505]">
        <StatsSection />
      </div>

      {/* --- The Chronicle (Timeline Redesign) --- */}
      <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#050505]">
        <div className="max-w-[1440px] mx-auto relative z-10">
          
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-bold block mb-4">Chronicle</span>
              <h3 className="font-serif text-5xl md:text-6xl text-white tracking-tighter">A History of <span className="italic text-neutral-500">Excellence.</span></h3>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-neutral-600 hidden md:block">ARC_TIMELINE // 1995-PRESENT</span>
          </div>

          <div className="space-y-32 relative">
            {/* The Blueprint Axis */}
            <div className="absolute left-[24px] md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

            {/* 1995 */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center relative">
              <div className="md:text-right md:pr-16 order-2 md:order-1 pl-16 md:pl-0">
                <Reveal direction="right">
                  <span className="font-mono text-sm tracking-widest text-[#C5A880] block mb-4">YEAR_1995</span>
                  <h4 className="text-3xl font-serif text-white mb-6">The Foundation</h4>
                  <p className="text-neutral-400 leading-relaxed font-light text-lg">
                    Founded in Katni with a single residential project. The focus was simple: uncompromising quality and personal supervision, setting the baseline for our architectural standards.
                  </p>
                </Reveal>
              </div>
              {/* Node */}
              <div className="absolute left-[24px] md:left-1/2 w-3 h-3 bg-[#050505] border border-[#C5A880] rounded-full -translate-x-1/2 z-10" />
              
              <div className="md:pl-16 order-1 md:order-2 pl-16 md:pl-0">
                <Reveal direction="left">
                  <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group border border-white/5">
                    <img 
                      src="img/a.jpeg" 
                      alt="Early Construction" 
                      className="object-cover w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent opacity-60" />
                    <span className="absolute bottom-6 left-6 font-serif text-6xl text-white/20">1995</span>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 2010 */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center relative">
              <div className="order-1 md:order-1 md:pr-16 pl-16 md:pl-0">
                 <Reveal direction="right">
                  <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group border border-white/5">
                    <img 
                      src="img/a (2).jpeg" 
                      alt="Scaling Capabilities" 
                      className="object-cover w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent opacity-60" />
                    <span className="absolute bottom-6 right-6 font-serif text-6xl text-white/20">2010</span>
                  </div>
                </Reveal>
              </div>
              
              <div className="absolute left-[24px] md:left-1/2 w-3 h-3 bg-[#050505] border border-[#C5A880] rounded-full -translate-x-1/2 z-10" />
              
              <div className="order-2 md:order-2 md:pl-16 pl-16 md:pl-0">
                <Reveal direction="left">
                  <span className="font-mono text-sm tracking-widest text-[#C5A880] block mb-4">YEAR_2010</span>
                  <h4 className="text-3xl font-serif text-white mb-6">Scaling Capabilities</h4>
                  <p className="text-neutral-400 leading-relaxed font-light text-lg">
                    Expanded into commercial sectors and complex structural designs. The team grew, incorporating engineering expertise to handle high-density asset development.
                  </p>
                </Reveal>
              </div>
            </div>

             {/* Present */}
             <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center relative">
              <div className="md:text-right md:pr-16 order-2 md:order-1 pl-16 md:pl-0">
                <Reveal direction="right">
                  <span className="font-mono text-sm tracking-widest text-[#C5A880] block mb-4">PRESENT</span>
                  <h4 className="text-3xl font-serif text-white mb-6">Expansion & Innovation</h4>
                  <p className="text-neutral-400 leading-relaxed font-light text-lg">
                    With a new base in Indore and a diversified portfolio, the next generation leads with modern design principles while honoring our core, uncompromising ethics.
                  </p>
                </Reveal>
              </div>
              
              <div className="absolute left-[24px] md:left-1/2 w-3 h-3 bg-[#C5A880] rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(197,168,128,0.5)]" />
              
              <div className="md:pl-16 order-1 md:order-2 pl-16 md:pl-0">
                <Reveal direction="left">
                   <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group border border-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
                      alt="Modern Architecture" 
                      className="object-cover w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent opacity-60" />
                     <span className="absolute bottom-6 left-6 font-serif text-6xl text-white/20">NOW</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Leadership / Philosophy --- */}
      <section className="py-32 px-6 md:px-12 lg:px-20 bg-[#0A0A0A] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-block px-4 py-2 border border-[#C5A880]/30 mb-8">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A880] font-bold">Our Philosophy</span>
              </div>
              <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter">
                "Quality is not an act, <br />
                it is a <span className="italic text-neutral-500">habit.</span>"
              </h3>
              <p className="mt-10 text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                We don't just build structures; we architect longevity. Our transparent process ensures you are integrated into critical decisions, while our engineering expertise guarantees a result that stands the test of time.
              </p>
              
              <div className="mt-16 grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                 <div>
                    <h4 className="font-serif text-2xl text-white mb-2 hover:text-[#C5A880] transition-colors">Aryan Khan</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">Principal Founder</p>
                 </div>
                 <div>
                    <h4 className="font-serif text-2xl text-white mb-2 hover:text-[#C5A880] transition-colors">Nisha Rao</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">Design Director</p>
                 </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
             <Reveal direction="left" delay={0.3}>
                <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative group">
                   <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" 
                      alt="Architectural Detail" 
                      className="object-cover w-full h-full grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]"
                   />
                   {/* Technical Overlay */}
                   <div className="absolute top-6 right-6 border border-white/20 p-2 backdrop-blur-sm">
                      <span className="text-[8px] font-mono text-white/60 uppercase tracking-widest">Detail_View</span>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;