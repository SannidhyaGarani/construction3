import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Floor Plans', to: '/floorplans' },
  { label: 'Exteriors', to: '/exteriors' },
  { label: 'Interiors', to: '/interiors' },
  { label: 'Projects', to: '/projects' },
  { label: 'Articles', to: '/blogs' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 w-full z-50 transition-all duration-300">
        {/* Top Micro-Bar for Desktop (Tucks away smoothly on scroll) */}
        <div 
          className={`bg-slate-900 text-slate-300 text-xs border-b border-slate-800/80 transition-all duration-300 overflow-hidden hidden md:block ${
            isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 py-2'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin size={13} className="text-[#C8842A]" />
                <span>Indore, Madhya Pradesh</span>
              </span>
              <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <ShieldCheck size={13} className="text-[#C8842A]" />
                <span>Govt. Approved Civil & Architectural Engineering Studio</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="mailto:naksha.dynamics@gmail.com" 
                className="flex items-center gap-1.5 hover:text-[#C8842A] transition-colors"
              >
                <Mail size={13} className="text-[#C8842A]" />
                <span>naksha.dynamics@gmail.com</span>
              </a>
              <span className="text-slate-700">|</span>
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-1.5 font-medium text-white hover:text-[#C8842A] transition-colors"
              >
                <Phone size={13} className="text-[#C8842A]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div 
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
              : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 shadow-md group-hover:border-[#C8842A] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {/* Architectural Blueprint Monogram */}
                  <path d="M3 21L12 3L21 21" stroke="#C8842A" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
                  <path d="M7 14H17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 3V21" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.7"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-900 font-extrabold text-lg tracking-tight group-hover:text-slate-800 transition-colors">
                    NAKSHA
                  </span>
                  <span className="text-[#C8842A] text-[11px] font-bold tracking-[0.2em] uppercase">
                    DYNAMICS
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold -mt-0.5">
                  Civil & Architecture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#C8842A] bg-amber-500/10'
                        : 'text-slate-700 hover:text-[#C8842A] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C8842A] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#C8842A] hover:border-[#C8842A] transition-colors"
                title="Call Studio"
              >
                <Phone size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#C8842A] hover:bg-[#B37424] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-[#C8842A]/20 hover:shadow-lg hover:shadow-[#C8842A]/30 transition-all duration-200 cursor-pointer"
              >
                <span>Consultation</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-0 inset-x-0 bg-white border-b border-slate-200 shadow-2xl pt-20 pb-6 px-6 max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8842A] mb-1">
                  Navigation
                </span>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#C8842A]/10 text-[#C8842A]'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={16} className={isActive ? 'text-[#C8842A]' : 'text-slate-400'} />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Contacts */}
              <div className="pt-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Connect With Studio
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-700 hover:text-[#C8842A]"
                  >
                    <Phone size={14} className="text-[#C8842A]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="mailto:naksha.dynamics@gmail.com"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-700 hover:text-[#C8842A]"
                  >
                    <Mail size={14} className="text-[#C8842A]" />
                    <span>Email Us</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-[#C8842A] text-white text-xs font-semibold py-3 rounded-xl shadow-md"
                >
                  <span>Request Free Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;