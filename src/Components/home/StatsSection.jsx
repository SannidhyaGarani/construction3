import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from '../../Components/Reveal';

const StatsSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { val: 25, label: 'Years of Experience', suffix: '+', id: 'EXP' },
    { val: 140, label: 'Projects Completed', suffix: '+', id: 'PRJ' },
    { val: 15, label: 'Million SQ.FT Built', suffix: 'M', id: 'SQF' },
    { val: 18, label: 'Industry Awards', suffix: '', id: 'AWD' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white overflow-hidden relative border-y border-neutral-200">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <div className="max-w-[1440px] mx-auto h-full grid grid-cols-4 lg:grid-cols-12 gap-8 px-6 md:px-12 lg:px-20">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-px h-full bg-[#0A192F] hidden lg:block" />
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-[#D4AF37] block mb-6">
              Our Achievements
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-[#0A192F]">
              Numbers That Speak for <span className="italic text-[#D4AF37] font-light">Themselves</span>.
            </h2>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center lg:items-start lg:px-8 py-8 ${i !== 3 ? 'lg:border-r border-neutral-200' : ''} group`}
            >
              {/* Technical Marker */}
              <div className="flex items-center gap-4 mb-10 w-full justify-center lg:justify-start">
                <span className="text-[9px] font-mono text-[#D4AF37] tracking-widest font-bold">
                  {item.id} // 0{i+1}
                </span>
                <div className="flex-1 h-px bg-neutral-200 group-hover:bg-[#D4AF37]/30 transition-all duration-500 hidden lg:block" />
              </div>
              
              {/* Counter */}
              <div className="flex items-baseline gap-3 mb-6">
                <Counter end={item.val} isVisible={isVisible} />
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#D4AF37] font-light">{item.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-center lg:text-left">
                <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-neutral-600 group-hover:text-[#0A192F] transition-colors duration-300 leading-relaxed">
                  {item.label}
                </h4>
              </div>

              {/* Bottom Accent */}
              <div className="mt-10 relative w-full h-[2px] bg-neutral-200 overflow-hidden hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37] to-[#D4AF37]/60 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Counter = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2500;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#0A192F] tracking-tighter leading-none">
      {count}
    </span>
  );
};

export default StatsSection;
