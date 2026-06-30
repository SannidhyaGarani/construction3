import React from "react";

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative w-full min-h-[30vh] md:min-h-[50vh] flex items-center bg-[#FAF9F6] overflow-hidden font-sans">
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-85"
          />
          {/* Softer premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/60 to-transparent" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          {/* Refined Badge */}
          <div className="inline-flex items-center gap-3 mb-4 md:mb-5">
            <span className="w-6 md:w-8 h-[1px] bg-[#C8842A]" />
            <span className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
              {subtitle}
            </span>
          </div>

          {/* Premium Headline (First word bolded for editorial look) */}
          <h1 className="text-[#1A1A1A] font-light text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] tracking-[-0.02em]">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "font-bold" : "font-light"}>
                {word}{" "}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Subtle border accent to complete the framed/architectural look */}
      <div className="absolute inset-4 border border-black/5 pointer-events-none" />
    </section>
  );
};

export default PageHero;