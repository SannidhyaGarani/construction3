import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
 

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white flex flex-col justify-center items-center relative overflow-hidden px-6">
      
      {/* Background Architectural Grid (Consistent with Preloader/Footer) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
             backgroundSize: '60px 60px' 
           }} />

      {/* Large Decorative "404" Blueprint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h1 className="text-[20rem] md:text-[35rem] font-serif italic text-white/[0.02] leading-none">
          404
        </h1>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8 flex justify-center">
            <div className="p-5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 animate-pulse">
                <div className="w-3 h-3 bg-[#C5A880] rounded-full" />
            </div>
        </div>

        <span className="text-[11px] uppercase tracking-[0.8em] text-[#C5A880] font-bold block mb-4">
            Error Code: Structural Gap
        </span>
        
        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Foundation <span className="italic font-serif text-slate-500">Not Found</span>
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mb-12 max-w-md mx-auto">
            The project or page you are looking for hasn't been drafted yet, or the site plan has been revised. Let's get you back to solid ground.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/" 
            className="group flex items-center gap-3 bg-[#C5A880] text-white px-8 py-4 text-[12px] uppercase tracking-widest font-bold transition-all duration-500 hover:bg-[#1A1F25] shadow-[0_10px_30px_rgba(197,168,128,0.25)]"
          >
            Return to Home
          </Link>
          
          <Link 
            to="/contact" 
            className="group flex items-center gap-3 border border-white/10 px-8 py-4 text-[12px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-500"
          >
            Consult Site Map
          </Link>
        </div>

        {/* Quick Links for Luxury UX */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['Projects', 'Services', 'About Us', 'Contact'].map((item) => (
                <Link 
                    key={item}
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-[10px] uppercase tracking-[0.3em] text-slate-500 hover:text-[#C5A880] transition-colors"
                >
                    {item}
                </Link>
            ))}
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-[9px] tracking-[0.5em] text-white/10 uppercase vertical-text">
            Archelon Developments
        </p>
      </div>
    </div>
  );
};

// CSS for the vertical text branding
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;
document.head.appendChild(styleSheet);

export default NotFound;
