import React from "react";

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative w-full min-h-[80vh] bg-white overflow-hidden font-sans">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center min-h-[80vh] pt-28 pb-16">
        {/* Decorative accent line */}
        <div className="w-10 h-[3px] bg-[#C8842A] mb-6" />

        {/* Tag */}
        <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-5">
          {subtitle}
        </p>

        {/* Headline */}
        <h1 className="text-[#111827] font-extrabold leading-[1.02] text-[44px] md:text-[56px] lg:text-[68px] max-w-2xl mb-5 tracking-tight">
          {title}
        </h1>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10" />
    </section>
  );
};

export default PageHero;