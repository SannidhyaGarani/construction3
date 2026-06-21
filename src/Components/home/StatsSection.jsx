import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { val: 25, label: 'Years of Practice', suffix: '+', id: 'YP' },
    { val: 120, label: 'Assets Delivered', suffix: '+', id: 'AD' },
    { val: 15, label: 'Volume Designed', suffix: 'M', id: 'VD' },
    { val: 12, label: 'Global Awards', suffix: '', id: 'GA' },
  ];

  return (
    <section ref={ref} className="bg-white py-24 lg:py-40 overflow-hidden relative border-y border-neutral-100">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="max-w-[1440px] mx-auto h-full grid grid-cols-4 lg:grid-cols-12 gap-8 px-6 md:px-12 lg:px-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-px h-full bg-black hidden lg:block" />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-0">
          {stats.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-start lg:px-10 ${i !== 3 ? 'lg:border-r border-neutral-100' : ''} group`}
            >
              {/* Technical Marker */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[9px] font-mono text-[#D4AF37] tracking-widest font-black">
                  {item.id} // 0{i+1}
                </span>
                <div className="w-6 h-px bg-neutral-200 group-hover:w-full transition-all duration-700" />
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <Counter end={item.val} isVisible={isInView} />
                <span className="text-2xl md:text-3xl font-serif text-[#D4AF37] font-light">{item.suffix}</span>
              </div>

              <div className="max-w-[120px]">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-neutral-400 group-hover:text-[#0A192F] transition-colors leading-relaxed">
                  {item.label}
                </h4>
              </div>

              {/* Hover Visual Accent */}
              <div className="mt-8 relative w-full h-[2px] bg-neutral-50 overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </div>
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
    const duration = 2000;
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
    <span className="font-serif text-6xl md:text-8xl text-[#0A192F] tracking-tighter leading-none">
      {count}
    </span>
  );
};

export default StatsSection;