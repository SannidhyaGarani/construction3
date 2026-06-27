import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../Components/Reveal';
import { Gauge, Eye, Shield, Users } from 'lucide-react';

const points = [
  { 
    code: 'QLTY-01', 
    title: 'Precision Engineering', 
    desc: 'Advanced structural analysis and rigorous testing ensure every project meets the highest safety and quality standards.',
    icon: Gauge
  },
  { 
    code: 'TRNS-02', 
    title: 'Project Transparency', 
    desc: 'Real-time progress tracking and clear communication keep you informed throughout every phase of construction.',
    icon: Eye
  },
  { 
    code: 'SAFE-03', 
    title: 'Safety First', 
    desc: 'Comprehensive safety protocols and continuous training programs ensure a secure working environment for everyone.',
    icon: Shield
  },
  { 
    code: 'EXP-04', 
    title: 'Expert Team', 
    desc: 'Our team of licensed civil engineers and experienced professionals deliver exceptional results on every project.',
    icon: Users
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#F9F8F6] overflow-hidden relative font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-[#0A192F]/[0.02] to-transparent" />
        <div className="absolute left-10 top-10 w-48 h-48 border border-[#D4AF37]/10" />
        <div className="absolute right-10 bottom-10 w-64 h-64 border border-[#0A192F]/10" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-[#D4AF37]">
                  Why Choose Us
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#0A192F]">
                Unwavering <span className="italic font-light text-neutral-500">Commitment</span> to
                <br />
                Excellence in <span className="text-[#D4AF37]">Every Detail.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 to-[#D4AF37]/0 rounded-sm scale-95 group-hover:scale-100 transition-all duration-500" />
                
                {/* Main Card */}
                <div className="relative z-10 h-full flex flex-col bg-[#0A192F] p-7 xl:p-8 border border-[#D4AF37]/15 rounded-sm group-hover:-translate-y-2 group-hover:border-[#D4AF37]/30 transition-all duration-500 ease-[0.22, 1, 0.36, 1] shadow-[0_10px_30px_-15px_rgba(10,25,47,0.2)] group-hover:shadow-[0_20px_40px_-20px_rgba(10,25,47,0.4)]">
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-px -left-px w-6 h-6 border-l-2 border-t-2 border-[#D4AF37]/30 pointer-events-none group-hover:border-[#D4AF37] transition-all duration-300" />
                  <div className="absolute -bottom-px -right-px w-6 h-6 border-r-2 border-b-2 border-[#D4AF37]/30 pointer-events-none group-hover:border-[#D4AF37] group-hover:w-8 group-hover:h-8 transition-all duration-500" />

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <Icon size={24} className="text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Code and Title */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold opacity-90 group-hover:opacity-100 transition-opacity block mb-3">
                      {p.code}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-4 tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-[14px] leading-relaxed font-normal transition-colors group-hover:text-white/90 flex-grow">
                    {p.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-7 pt-5 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-[#D4AF37]/40 group-hover:w-full transition-all duration-700" />
                      <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 group-hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;