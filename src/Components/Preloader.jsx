import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [statusIndex, setStatusIndex] = useState(0);
    
    const statuses = [
    "Analyzing_Site_Topography", 
    "Drafting_Structural_Blueprints", 
    "Validating_Load_Bearing_Calculations", 
    "Rendering_Architectural_Materials",
    "Final_Safety_Inspection"
  ];
  
  const gold = '#D4AF37'; 
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 1400);
                    return 100;
                }
                // Easing effect: Fast at first, slows down near the end to simulate "precision"
                const increment = prev > 90 ? 0.3 : prev > 70 ? 0.8 : 2.5; 
                return Math.min(prev + increment, 100);
            });
        }, 40);

        const statusInterval = setInterval(() => {
            setStatusIndex(prev => (prev + 1) % statuses.length);
        }, 1200);

        return () => {
            clearInterval(interval);
            clearInterval(statusInterval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isVisible) return null;

    return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A192F] overflow-hidden">
      
      {/* --- Architectural Background Elements --- */}
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.07]" 
           style={{ backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`, 
                    backgroundSize: '40px 40px' }} />
      
      {/* Cinematic Split Panel Exit */}
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-[#0A192F] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-0 ${progress === 100 ? '-translate-y-full' : ''}`} />
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#0A192F] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-0 ${progress === 100 ? 'translate-y-full' : ''}`} />

      {/* --- Main Content --- */}
      <div className={`relative z-10 flex flex-col items-center w-full max-w-2xl px-6 transition-all duration-1000 ${progress === 100 ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100'}`}>
        
        {/* Brand Logo - Centered and Prominent */}
        <div className="relative mb-16 md:mb-24 flex flex-col items-center">
          {/* Pulsing Aura around logo */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[80px] rounded-full animate-pulse" />
          
          <span className="text-4xl md:text-6xl font-serif font-bold tracking-tight relative z-10">
            Urban<span className="text-[#D4AF37]">Nest</span>
          </span>
          <span className="text-sm text-white/60 tracking-widest uppercase mt-2 relative z-10">Design</span>
          
          {/* Underline expanding with progress */}
          <div className="mt-8 h-[1px] bg-white/10 w-48 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-[#D4AF37] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

                {/* Technical Meter Section */}
                <div className="w-full md:w-[30rem] space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] md:text-[10px] font-mono text-[#C5A880] tracking-[0.4em] uppercase font-bold">
                                Progress Status
                            </span>
                            <span className="text-xs md:text-sm font-mono text-white/60 tracking-wider">
                                {statuses[statusIndex]}...
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-4xl md:text-5xl font-serif text-white font-light tracking-tighter">
                                {Math.floor(progress)}
                            </span>
                            <span className="text-[#C5A880] font-mono text-sm ml-1">%</span>
                        </div>
                    </div>

                    {/* Architectural "Hairline" Progress Bar */}
                    <div className="relative h-[2px] w-full bg-white/5">
                        {/* Shadow/Glow bar */}
                        <div 
                            className="absolute left-0 top-0 h-full transition-all duration-150 ease-out"
                            style={{ 
                                width: `${progress}%`, 
                                backgroundColor: gold,
                                boxShadow: `0 0 20px ${gold}`
                            }}
                        />
                        {/* Trailing particles or "Lead Line" */}
                        <div 
                            className="absolute top-[-4px] h-[10px] w-[1px] bg-white transition-all duration-150"
                            style={{ left: `${progress}%` }}
                        />
                    </div>

                    {/* Bottom Technical Data */}
                    <div className="flex justify-between pt-4">
                        <span className="text-[8px] font-mono text-white/20 tracking-widest">COORD_SYS: 28.4595° N, 77.0266° E</span>
                        <span className="text-[8px] font-mono text-white/20 tracking-widest">VER: 2024.0.1_ARCH</span>
                    </div>
                </div>
            </div>

            {/* Cinematic Scan Line Effect */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent h-40 w-full -translate-y-full animate-scan" />
            
            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100vh); }
                    100% { transform: translateY(100vh); }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Preloader;