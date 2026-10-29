import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Compass, 
  Lock,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Decorative Blueprint & Bronze Glow Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#C8842A]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-slate-800/30 rounded-full blur-[140px] pointer-events-none"></div>

      {/* --- Pre-Footer Call to Action Banner --- */}
      <div className="relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
            {/* Ambient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8842A] to-transparent"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8842A] bg-[#C8842A]/10 px-3 py-1 rounded-full mb-3">
                  <Compass size={14} />
                  <span>Start Your Construction Journey</span>
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Have a plot or property in mind? <br className="hidden sm:inline" />
                  <span className="text-[#C8842A]">Let’s architect your landmark.</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Connect with our principal engineers and architects for custom floor plans, 3D elevation designs, and complete turnkey construction services in Indore & Central India.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#C8842A] hover:bg-[#B37424] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#C8842A]/20 transition-all duration-200 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/floorplans"
                  className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
                >
                  <span>Explore Floor Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main 4-Column Footer --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-[#C8842A] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21L12 3L21 21" stroke="#C8842A" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
                  <path d="M7 14H17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 3V21" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.7"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-extrabold text-lg tracking-tight">NAKSHA</span>
                  <span className="text-[#C8842A] text-[11px] font-bold tracking-[0.2em] uppercase">DYNAMICS</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold -mt-0.5">
                  Civil & Architecture
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premier civil engineering and architectural consultancy delivering structural integrity, innovative designs, and sustainable construction across residential, commercial, and villa developments.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] uppercase tracking-wider text-slate-300 font-semibold">
                <ShieldCheck size={12} className="text-[#C8842A]" />
                <span>Certified Engineering Studio</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#C8842A] hover:border-[#C8842A]/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#C8842A] hover:border-[#C8842A]/60 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#C8842A] hover:border-[#C8842A]/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#C8842A] hover:border-[#C8842A]/60 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Architectural Portfolios (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Floor Plans Catalog', to: '/floorplans' },
                { label: '3D Exterior Elevations', to: '/exteriors' },
                { label: 'Luxury Interior Concepts', to: '/interiors' },
                { label: 'Completed Projects', to: '/projects' },
                { label: 'Engineering Articles', to: '/blogs' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-slate-400 hover:text-[#C8842A] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Services (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Architectural Planning & Blueprints', to: '/services' },
                { label: 'Structural Design & Stability Analysis', to: '/services' },
                { label: 'Turnkey Residential Construction', to: '/services' },
                { label: '3D Elevation & Photorealistic Renders', to: '/services' },
                { label: 'Vastu-Compliant Layout Planning', to: '/services' },
                { label: 'Renovation & Seismic Retrofitting', to: '/services' },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.to}
                    className="text-slate-400 hover:text-[#C8842A] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              The Studio
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={16} className="text-[#C8842A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Indore, Madhya Pradesh, India
                </span>
              </div>

              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#C8842A] transition-colors group"
              >
                <Phone size={16} className="text-[#C8842A] shrink-0" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>

              <a 
                href="mailto:naksha.dynamics@gmail.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-[#C8842A] transition-colors break-all"
              >
                <Mail size={16} className="text-[#C8842A] shrink-0" />
                <span>naksha.dynamics@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400 pt-1 text-xs">
                <Clock size={16} className="text-[#C8842A] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Bottom Legal Bar --- */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Naksha Dynamics. All Rights Reserved. Built with precision engineering.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              About Studio
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
            <span className="text-slate-800">|</span>
            <Link 
              to="/admin/login" 
              className="flex items-center gap-1.5 hover:text-[#C8842A] transition-colors"
              title="Staff & Management Portal"
            >
              <Lock size={11} />
              <span>Staff Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;