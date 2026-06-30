import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  
  const statuses = [
    "Analyzing Site Topography", 
    "Drafting Structural Blueprints", 
    "Validating Load-Bearing Calculations", 
    "Rendering Architectural Materials",
    "Final Safety Inspection"
  ];
  
  const gold = '#C8842A'; 
    
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 1000);
          return 100;
        }
        const increment = prev > 90 ? 0.4 : prev > 70 ? 1.2 : 3.5; 
        return Math.min(prev + increment, 100);
      });
    }, 40);

    const statusInterval = setInterval(() => {
      setStatusIndex(prev => (prev + 1) % statuses.length);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut", when: "afterChildren" }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* --- Architectural Background Elements --- */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`, 
                        backgroundSize: '60px 60px' }} />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,132,42,0.05)_0%,transparent_70%)]" />

          {/* --- Main Content --- */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6">
            
            {/* Brand Logo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-16 md:mb-24 flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#111827]">
                Naksha <span className="text-[#C8842A] italic font-light"> Dynamic</span>
              </span>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-8 bg-gray-200" />
                <span className="text-[9px] text-gray-500 tracking-[0.6em] uppercase font-bold">Naksha Dynamic</span>
                <div className="h-px w-8 bg-gray-200" />
              </div>
            </motion.div>

            {/* Technical Meter Section */}
            <div className="w-full md:w-[28rem] space-y-8">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono text-[#C8842A] tracking-[0.5em] uppercase font-bold">
                    System_Registry_Init
                  </span>
                  <motion.span 
                    key={statusIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[11px] font-mono text-gray-500 tracking-wider h-4"
                  >
                    {statuses[statusIndex]}...
                  </motion.span>
                </div>
                <div className="text-right flex items-baseline">
                  <span className="text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tighter">
                    {Math.floor(progress).toString().padStart(2, '0')}
                  </span>
                  <span className="text-[#C8842A] font-mono text-xs ml-2 font-bold mb-1">%</span>
                </div>
              </div>

              {/* Architectural "Hairline" Progress Bar */}
              <div className="relative h-px w-full bg-gray-200 overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-[#C8842A]"
                  style={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
                <div 
                  className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#C8842A]/50 to-transparent transition-all duration-300"
                  style={{ left: `${progress - 10}%` }}
                />
              </div>

              {/* Bottom Technical Data */}
              <div className="flex justify-between pt-2">
                <span className="text-[8px] font-mono text-gray-300 tracking-[0.3em]">COORD: 28.4950° N, 77.0878° E</span>
                <span className="text-[8px] font-mono text-gray-300 tracking-[0.3em]">STUDIO_v3.0.4</span>
              </div>
            </div>
          </div>

          {/* Scan Line Animation */}
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#C8842A]/5 to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
