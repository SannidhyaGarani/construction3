import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-10 relative overflow-hidden font-sans border-t border-white/[0.03]">
      
      {/* --- PREMIUM AMBIENT LIGHTING --- */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[180px] opacity-[0.02] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white rounded-full blur-[150px] opacity-[0.01] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* --- TOP CTA & BRAND MARQUEE SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-white/[0.05]">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-semibold block mb-4">
              Collaborations
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-[1.15]">
              Let's craft your <span className="italic font-light text-white/60">legacy</span> together.
            </h2>
          </div>

          <div>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-5 px-8 py-4 border border-white/10 rounded-full hover:border-[#D4AF37] transition-all duration-500 bg-white/[0.01] hover:bg-transparent"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] font-semibold text-white">
                Start Project
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-500">
                <ArrowUpRight size={14} className="text-white group-hover:text-[#0A192F] transition-colors duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* --- MAIN CONTENT NAVIGATION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 py-16">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-12 lg:col-span-5 lg:pr-24 flex flex-col justify-between gap-8">
            <div>
              <Link to="/" className="inline-block mb-5 group">
                <span className="text-2xl font-serif font-bold tracking-tight">
                  Naksha<span className="text-[#D4AF37] italic font-light group-hover:opacity-80 transition-opacity">Dynamic</span>
                </span>
              </Link>
              <p className="text-neutral-400 text-[13px] leading-relaxed font-light max-w-sm">
                Defining architectural excellence through a synthesis of monumental form, tactile materiality, and historic resonance.
              </p>
            </div>
            
            {/* SOCIALS */}
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 flex items-center justify-center border border-white/5 rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300 text-neutral-400 bg-white/[0.01]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* STUDIO */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-6">Studio</h4>
              <ul className="space-y-3.5">
                {['About Us', 'Our Team', 'Methodology', 'Careers', 'Contact'].map(item => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(' ', '')}`} 
                      className="group text-[13px] text-neutral-400 hover:text-white transition-colors duration-300 relative inline-block"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-[#D4AF37]/40 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPERTISE */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-6">Expertise</h4>
              <ul className="space-y-3.5">
                {['Residential', 'Commercial', 'Planning', 'Interiors', 'Landscape'].map(item => (
                  <li key={item}>
                    <span className="group text-[13px] text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer relative inline-block">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-[#D4AF37]/40 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OFFICE */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-6">Office</h4>
              <div className="space-y-4 text-[13px] text-neutral-400 font-light leading-relaxed">
                <p>
                  Golf Course Road, <br />
                  DLF Phase V, Gurugram <br />
                  HR 122009
                </p>
                <a 
                  href="mailto:info@nakshadynamic.com" 
                  className="inline-block text-[#D4AF37] hover:text-white transition-colors duration-300 border-b border-[#D4AF37]/20 hover:border-white pb-0.5"
                >
                  info@nakshadynamic.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM LEGAL & SCROLL SECTION --- */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-light text-center sm:text-left">
            © {currentYear} Naksha Dynamic Architectural Studio <span className="mx-2 text-neutral-700">•</span> All Rights Reserved
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors duration-300"
          >
            Back to Top
            <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-[#0A192F] transition-all duration-500">
              <ArrowUpRight size={12} className="-rotate-90 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;