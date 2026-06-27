import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Layout, 
  Home, 
  Pencil, 
  LayoutGrid, 
  Users, 
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle Route Changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-3xl border-b border-black/[0.03] py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-8'
        }`}
      >
        {/* Visibility Protection Gradient for Initial State */}
        {!isScrolled && (
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none transition-opacity duration-1000" />
        )}

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between relative z-10">
          
          {/* --- BRAND IDENTITY --- */}
          <Link to="/" className="flex items-center gap-6 group relative">
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-all duration-700 ${
                isScrolled ? 'text-[#0A192F]' : 'text-white'
              }`}>
                Naksha<span className="text-[#D4AF37] italic font-light">Dynamic</span>
              </span>
              <span className={`text-[7px] uppercase tracking-[0.8em] font-bold transition-all duration-700 -mt-0.5 ${
                isScrolled ? 'text-[#0A192F]/50' : 'text-white/60'
              }`}>
Civil Engineering & Construction
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/floorplans" isScrolled={isScrolled} Icon={Layout}>Floor Plans</NavLink>
            <NavLink to="/exteriors" isScrolled={isScrolled} Icon={Home}>Exteriors</NavLink>
            <NavLink to="/interiors" isScrolled={isScrolled} Icon={Pencil}>Interior Design</NavLink>
            <NavLink to="/projects" isScrolled={isScrolled} Icon={LayoutGrid}>Projects</NavLink>
            <NavLink to="/about" isScrolled={isScrolled} Icon={Users}>About Us</NavLink>
            <NavLink to="/blogs" isScrolled={isScrolled} Icon={BookOpen}>Blog</NavLink>
          </nav>

          {/* --- RIGHT ACTION --- */}
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className={`hidden md:block text-[14px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#0A192F]/50 hover:text-[#0A192F]' : 'text-white/50 hover:text-[#D4AF37]'
              }`}
            >
              Contact
            </Link>

            {/* HAMBURGER */}
            <button
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="flex flex-col gap-1.5 items-end">
                <span className={`h-0.5 rounded-full transition-all duration-500 ${
                  isScrolled || mobileOpen ? 'bg-[#0A192F]' : 'bg-white'
                } ${mobileOpen ? 'w-6 rotate-45 translate-y-[3px]' : 'w-8'}`} />
                <span className={`h-0.5 rounded-full transition-all duration-500 ${
                  isScrolled || mobileOpen ? 'bg-[#0A192F]' : 'bg-white'
                } ${mobileOpen ? 'w-6 -rotate-45 -translate-y-[4px]' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE NAVIGATION --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="h-full max-w-[1440px] mx-auto px-6 md:px-20 pt-40 pb-16 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[1em] text-[#D4AF37] font-bold block mb-12">Index</span>
                <div className="flex flex-col gap-6">
                  {[
                    { label: 'Floor Plans', to: '/floorplans' },
                    { label: 'Exteriors', to: '/exteriors' },
                    { label: 'Interior Design', to: '/interiors' },
                    { label: 'Projects', to: '/projects' },
                    { label: 'About Us', to: '/about' },
                    { label: 'Blog', to: '/blogs' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <Link
                        to={item.to}
                        className="group flex items-baseline gap-6"
                      >
                        <span className="text-[10px] font-mono text-neutral-300 group-hover:text-[#D4AF37] transition-colors">0{i+1}</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[#0A192F] tracking-tighter group-hover:text-[#D4AF37] transition-all duration-500">
                          {item.label}
                        </h2>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-neutral-100 pt-12">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-400 mb-2">Direct Inquiry</p>
                  <a href="mailto:info@nakshadynamic.com" className="text-lg font-serif text-[#0A192F] hover:text-[#D4AF37] transition-colors">
                    info@nakshadynamic.com
                  </a>
                </div>
                <div className="flex gap-8">
                  {['Instagram', 'LinkedIn'].map(social => (
                    <a key={social} href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 hover:text-[#0A192F] transition-colors">{social}</a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ to, isScrolled, Icon, children }) => (
  <Link
    to={to}
    className={`flex items-center gap-2.5 text-[14px] font-medium transition-all duration-300 relative group ${
      isScrolled ? 'text-[#0A192F]/80 hover:text-[#0A192F]' : 'text-white/80 hover:text-white'
    }`}
  >
    {Icon && <Icon size={18} strokeWidth={1.5} className="text-[#D4AF37]" />}
    <span className="tracking-wide">{children}</span>
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
  </Link>
);

const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="group flex items-center justify-between px-8 py-4 hover:bg-neutral-50 transition-all duration-300"
  >
    <span className="text-[9px] uppercase tracking-[0.3em] font-black text-neutral-400 group-hover:text-[#0A192F] transition-colors">
      {children}
    </span>
    <ArrowRight size={12} className="text-[#D4AF37] opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
  </Link>
);

export default Header;