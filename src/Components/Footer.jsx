import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white font-sans">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 18L10 4L18 18" stroke="#111827" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M5 12H15" stroke="#111827" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-tight">NAKSHA</span>
                <span className="text-[#C8842A] text-[9px] font-bold uppercase tracking-[0.15em]">DYNAMICS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are a civil engineering firm delivering reliable, innovative and sustainable wide solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] text-gray-400 transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] text-gray-400 transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] text-gray-400 transition-colors">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Floor Plans', to: '/floorplans' },
                { label: 'Exteriors', to: '/exteriors' },
                { label: 'Interior Design', to: '/interiors' },
                { label: 'Projects', to: '/projects' },
                { label: 'About Us', to: '/about' },
                { label: 'Blog', to: '/blogs' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-400 text-sm hover:text-[#C8842A] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'Planning & Consultation',
                'Structural Design',
                'Construction',
                'Project Management',
                '3D Modeling & Estimation',
                'Renovation & Rehabilitation',
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm hover:text-[#C8842A] transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+911234567890" className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#C8842A] transition-colors group">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#C8842A]" />
                +91 12345 67890
              </a>
              <a href="mailto:info@nakshadynamics.com" className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#C8842A] transition-colors break-all">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#C8842A]" />
                info@nakshadynamics.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#C8842A]" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} Naksha Dynamics. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-gray-500 text-xs hover:text-[#C8842A] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-xs hover:text-[#C8842A] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;