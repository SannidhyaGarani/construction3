import React from 'react';
import Reveal from '../../Components/Reveal';
import { Globe, Zap, Shield, Scale } from 'lucide-react';

const BrandIntro = () => {
  const features = [
    { icon: Globe, label: 'Global Presence', val: 'London • Mumbai • Dubai' },
    { icon: Zap, label: 'Core Expertise', val: 'Structural • Infrastructure' },
    { icon: Shield, label: 'Safety Commitment', val: 'Zero Tolerance Policy' },
    { icon: Scale, label: 'Project Scale', val: 'Up to 3.2M SQ.FT' }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#FAFAFA] text-[#0A192F] overflow-hidden font-sans border-b border-neutral-200">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#D4AF37]/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-[30%] h-1/2 bg-gradient-to-t from-[#0A192F]/[0.02] to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-[#D4AF37]/10 rounded-full opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 border border-[#0A192F]/10 rounded-full opacity-20" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <span className="uppercase tracking-[0.8em] text-[9px] font-bold text-[#D4AF37]">
                  Our Philosophy
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#0A192F]">
                Engineering<span className="italic text-[#D4AF37] font-light"> Excellence</span> That
                <br />
                Stands the Test of<span className="italic text-[#D4AF37] font-light"> Time.</span>
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
              <div>
                <Reveal delay={0.2}>
                  <p className="text-[15px] text-neutral-700 font-normal leading-relaxed">
                    At <span className="text-[#0A192F] font-semibold">Naksha Dynamic</span>, we bridge innovation with tradition, delivering civil engineering solutions that define skylines and strengthen communities.
                  </p>
                </Reveal>
              </div>
              <div>
                <Reveal delay={0.3}>
                  <p className="text-[14px] text-neutral-600 font-normal leading-relaxed">
                    Our expertise spans structural design, infrastructure development, and sustainable construction—all executed with unwavering precision and commitment to quality.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 lg:pl-12">
            <Reveal direction="right" delay={0.2}>
              <div className="relative w-full aspect-[4/5] sm:aspect-[1.1] lg:aspect-[4/5] max-w-md mx-auto bg-[#0A192F] overflow-hidden rounded-sm group shadow-xl">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4">
                      Since 2001
                    </span>
                    <div className="font-serif text-8xl md:text-9xl text-white/10">ND</div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide mb-2">
                        Naksha Dynamic
                      </h3>
                      <p className="text-white/70 text-[13px] font-normal leading-relaxed">
                        Civil Engineering Excellence
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                      <div>
                        <span className="font-serif text-4xl text-[#D4AF37] leading-none block">25+</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-medium">Years Experience</span>
                      </div>
                      <div>
                        <span className="font-serif text-4xl text-[#D4AF37] leading-none block">140+</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-medium">Projects Done</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37]/30" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37]/30" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 lg:mt-28 pt-10 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={i} delay={0.1 + i * 0.08} direction="up">
                <div className="group bg-white p-6 lg:p-7 border border-neutral-300 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon size={20} className="text-[#D4AF37]" />
                  </div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold mb-2">{feature.label}</span>
                  <span className="block text-[14px] text-[#0A192F] font-semibold tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">{feature.val}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;