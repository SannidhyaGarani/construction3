import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center bg-slate-50 border-b border-slate-200/80 overflow-hidden font-sans">
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

      {/* Background Image (if provided) with luxury soft overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-20 sm:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/70" />
        </div>
      )}

      {/* Decorative Golden Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8842A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 md:py-14">
        <div className="max-w-2xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-3 text-xs text-slate-500 font-medium">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-[#C8842A] transition-colors">
              <Home size={13} className="text-[#C8842A]" />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>

          {/* Eyebrow Accent */}
          {subtitle && (
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
                {subtitle}
              </p>
            </div>
          )}

          {/* Standardized Headline */}
          <h1 className="text-slate-900 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight leading-[1.2]">
            {title}
          </h1>
        </div>
      </div>

      {/* Top Architectural Metallic Bronze Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]" />
    </section>
  );
};

export default PageHero;