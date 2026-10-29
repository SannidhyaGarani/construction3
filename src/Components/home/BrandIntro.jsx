import React from "react";
import { ArrowRight } from "lucide-react";

// Custom SVG Icons matching the premium look in the design
const BuildingIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-[48px] md:h-[48px] flex-shrink-0 select-none">
    <path d="M6 40H42" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 40V24C12 22.8954 12.8954 22 14 22H20C21.1046 22 22 22.8954 22 24V40" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 40V14C22 12.8954 22.8954 12 24 12H32C33.1046 12 34 12.8954 34 14V40" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 40V28C34 26.8954 34.8954 26 36 26H40V40" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 28V34" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 3" />
    <path d="M26 18V34" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 3" />
    <path d="M30 18V34" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 3" />
    <path d="M37 31V35" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 3" />
  </svg>
);

const EngineerIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-[48px] md:h-[48px] flex-shrink-0 select-none">
    <path d="M24 25C26.7614 25 29 22.7614 29 20C29 17.2386 26.7614 15 24 15C21.2386 15 19 17.2386 19 20C19 22.7614 21.2386 25 24 25Z" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 19.5C15 14.5 19 13 24 13C29 13 33 14.5 33 19.5H15Z" stroke="#C8842A" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13 20H35" stroke="#C8842A" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M24 12V14" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 38C13 32.5 17 31 24 31C31 31 35 32.5 35 38" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 31.5V38" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M29 31.5V38" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M12 38H36" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BlueprintIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-[48px] md:h-[48px] flex-shrink-0 select-none">
    <path d="M12 12V36C12 38.2091 10.2091 40 8 40V16C10.2091 16 12 14.2091 12 12Z" stroke="#C8842A" strokeWidth="1.5" />
    <path d="M8 16C5.79086 16 4 14.2091 4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12H38V36H12" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 40C5.79086 40 4 38.2091 4 36C4 33.7909 5.79086 32 8 32C10.2091 32 12 33.7909 12 36" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 20V28H26" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 28L28 18" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 28H33" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 24H33" stroke="#C8842A" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-[48px] md:h-[48px] flex-shrink-0 select-none">
    <path d="M24 10C24 10 27.5 13 34 13C34 23 29.5 31.5 24 37C18.5 31.5 14 23 14 13C20.5 13 24 10 24 10Z" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 22.5L22.5 26L29 19.5" stroke="#C8842A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stats = [
  { id: "premium-card-1", icon: BuildingIcon, value: "50+", label: "Projects\nCompleted", borderClass: "border-r border-gray-100/70" },
  { id: "premium-card-2", icon: EngineerIcon, value: "25+", label: "Expert\nEngineers", borderClass: "sm:border-r lg:border-r border-gray-100/70" },
  { id: "premium-card-3", icon: BlueprintIcon, value: "100%", label: "On-Time\nDelivery", borderClass: "border-r border-gray-100/70" },
  { id: "premium-card-4", icon: ShieldCheckIcon, value: "Safety", label: "Our Top\nPriority", borderClass: "" },
];

const BrandIntro = () => {
  return (
    <section className="bg-[#FAF9F6] py-8 md:py-10 lg:py-12 font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-[35%_65%] gap-8 lg:gap-10 items-center">

          {/* Left Block: Premium Typography Heading */}
          <div className="flex flex-col items-start px-0 pr-0 lg:pr-6">
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                About Us
              </p>
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] sm:leading-[1.18] mb-4 sm:mb-5">
              Strong Foundations.<br />
              Smarter Future.
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-[15px] leading-relaxed mb-5 sm:mb-6 max-w-[420px]">
              Naksha Dynamics is a civil engineering firm committed to quality, innovation
              and timely delivery. From concept to construction, we turn ideas into landmarks.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#C8842A] text-xs sm:text-sm font-bold hover:text-[#B37424] transition-colors group relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8842A] hover:after:w-full after:transition-all after:duration-300"
            >
              Know More About Us <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Block: Premium Double-Slide Mobile Viewport */}
          <div className="relative w-full">
            {/* Scroll Container wrapper */}
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 bg-white rounded-2xl border border-gray-200/50 shadow-[0_12px_40px_rgba(17,24,39,0.02)] divide-x divide-gray-100/70 scroll-smooth snap-x snap-mandatory no-scrollbar justify-center lg:justify-start">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    id={stat.id}
                    className="min-w-[50%] sm:min-w-[50%] lg:min-w-full snap-start flex flex-col items-center justify-center p-3 py-6 sm:py-8 md:p-8 text-center relative group overflow-hidden transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-[#FAF9F6]"
                  >
                    {/* Premium Ambient Background Hover Effect */}
                    <div className="absolute inset-0 bg-[#C8842A]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Icon Container with Subtle Scale Up */}
                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-500 group-hover:scale-105">
                      <Icon />
                    </div>

                    {/* Stat Value */}
                    <span className="text-[#111827] font-bold text-lg sm:text-xl md:text-[28px] tracking-tight leading-none mb-1.5 bg-gradient-to-r from-[#111827] to-[#374151] bg-clip-text">
                      {stat.value}
                    </span>

                    {/* Label Layout */}
                    <span className="text-[#6B7280] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase leading-relaxed whitespace-pre-line group-hover:text-[#4B5563] transition-colors">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Premium Linear Progress Indicator Track for Mobile */}
            <div className="flex justify-center items-center gap-2 mt-4 lg:hidden">
              {stats.map((stat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    document.getElementById(stat.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }}
                  className="w-5 h-1.5 rounded-full bg-gray-200/90 hover:bg-[#C8842A] focus:bg-[#C8842A] active:bg-[#C8842A] transition-all duration-300 cursor-pointer"
                  aria-label={`Go to metric ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Global Style overrides for hiding cross-browser scrollbars natively */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BrandIntro;