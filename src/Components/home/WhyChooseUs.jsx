import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../Components/Reveal';

const points = [
  { code: 'QLTY-01', title: 'Precision Engineering', desc: 'Rigorous material auditing and structural simulation ensure every asset exceeds global standards.' },
  { code: 'TRNS-02', title: 'Radical Transparency', desc: 'Real-time blockchain-verified milestone tracking keeps you in command of your project’s lifecycle.' },
  { code: 'PORT-03', title: 'Cultural Impact', desc: 'Landmark assets that contribute meaningfully to the architectural narrative of the city.' },
  { code: 'SPEC-04', title: 'Vertical Integration', desc: 'Unified team of master planners, structural specialists, and interior curators under one studio roof.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F8F6] overflow-hidden relative font-sans">
      
      {/* --- REFINED DECORATIVE ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#0A192F] hidden xl:block pointer-events-none" />
      <div className="absolute left-16 top-16 w-32 h-32 border-l border-t border-[#0A192F]/5 pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-px h-64 bg-gradient-to-t from-transparent via-[#0A192F]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20 md:mb-24">
          <div className="max-w-xl">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.6em] font-semibold text-[#D4AF37]">Execution Standards</span>
                <div className="h-px w-8 bg-[#0A192F]/20" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.05] text-[#0A192F]">
                The Disciplined <br />
                <span className="italic font-light text-neutral-400">Framework.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.3} direction="up">
            <div className="inline-flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 rounded-full border border-[#0A192F]/10 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-[#0A192F]">
                <div className="absolute inset-0 bg-[#0A192F] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full relative z-10 group-hover:bg-[#F9F8F6] transition-colors" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#0A192F]">
                View Methodology
              </span>
            </div>
          </Reveal>
        </div>

        {/* --- PREMIUM INTERACTIVE CARDS GRID --- */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group h-full"
            >
              {/* Card Active Layer: Expands Behind on Hover */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-sm scale-[0.98] group-hover:scale-100 transition-transform duration-500 rounded-sm" />

              {/* Main Card Body */}
              <div className="relative z-10 h-full flex flex-col justify-between bg-[#0A192F] p-8 xl:p-10 border border-[#D4AF37]/10 rounded-sm group-hover:-translate-y-2 group-hover:border-[#D4AF37]/30 transition-all duration-500 ease-[0.22, 1, 0.36, 1] shadow-[0_10px_30px_-10px_rgba(10,25,47,0.1)] group-hover:shadow-[0_20px_40px_-15px_rgba(10,25,47,0.3)]">
                
                {/* Decoration: Gold L-Bracket Corner */}
                <div className="absolute -top-px -left-px w-4 h-4 border-l border-t border-[#D4AF37]/40 pointer-events-none" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-r border-b border-[#D4AF37]/40 pointer-events-none group-hover:w-6 group-hover:h-6 group-hover:border-[#D4AF37] transition-all duration-500" />

                <div>
                  {/* Index and Mechanical Divider */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                      {p.code}
                    </span>
                    <div className="w-10 h-px bg-white/10" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl text-white mb-4 tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed font-light transition-colors group-hover:text-white/80">
                    {p.desc}
                  </p>
                </div>

                {/* Mechanical Accent: Static 'T-Square' detail */}
                <div className="absolute bottom-6 left-8 flex flex-col gap-0.5 opacity-20 pointer-events-none group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-2 h-0.5 bg-[#D4AF37]" />
                  <div className="w-6 h-0.5 bg-[#D4AF37]" />
                  <div className="w-2 h-0.5 bg-[#D4AF37]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;