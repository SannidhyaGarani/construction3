import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Floor Plans', to: '/floorplans' },
  { label: 'Exteriors', to: '/exteriors' },
  { label: 'Interior Design', to: '/interiors' },
  { label: 'Projects', to: '/projects' },
  // { label: 'Blog', to: '/blogs' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white border-b border-gray-100 shadow-sm py-3'
            : 'bg-white/95 py-4'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Icon mark */}
            <div className="w-9 h-9 bg-[#111827] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 18L10 4L18 18" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M5 12H15" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#111827] font-bold text-base leading-tight tracking-tight">
                NAKSHA
              </span>
              <span className="text-[#C8842A] text-[10px] font-bold uppercase tracking-[0.15em] leading-tight">
                DYNAMICS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#C8842A] ${
                  location.pathname === link.to ? 'text-[#C8842A]' : 'text-[#374151]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-[#111827] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#C8842A] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-[#111827]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] inset-x-0 z-40 bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium py-2 border-b border-gray-50 hover:text-[#C8842A] transition-colors ${
                    location.pathname === link.to ? 'text-[#C8842A]' : 'text-[#374151]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-[#111827] text-white text-sm font-semibold px-5 py-3 text-center hover:bg-[#C8842A] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;