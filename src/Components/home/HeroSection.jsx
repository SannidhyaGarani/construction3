import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[92vh] bg-white overflow-hidden font-sans">
      {/* Background image - right side */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/duzwys877/image/upload/v1782658365/file_000000002f0c7208801d66e3f339ba9a_bfjufw.png"
          alt="Construction Site"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay: refined gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center min-h-[92vh] pt-28 pb-16">
        {/* Decorative accent line */}
        <div className="w-10 h-[3px] bg-[#C8842A] mb-6" />

        {/* Tag */}
        <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-5">
          Welcome to Naksha Dynamics
        </p>

        {/* Headline */}
        <h1 className="text-[#111827] font-extrabold leading-[1.02] text-[44px] md:text-[56px] lg:text-[68px] max-w-2xl mb-5 tracking-tight">
          Engineering Today.<br />
          Building Tomorrow.
        </h1>

        {/* Subtext */}
        <p className="text-[#6B7280] text-[15px] max-w-md mb-9 leading-relaxed">
          We deliver smart, safe and sustainable civil engineering
          solutions with precision and professionalism.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#111827] text-white text-sm font-bold px-7 py-3.5 hover:bg-[#C8842A] transition-all duration-300 tracking-wide uppercase"
          >
            Explore Our Services
            <ArrowRight size={15} />
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#111827] text-[#111827] text-sm font-bold px-7 py-3.5 hover:bg-[#111827] hover:text-white transition-all duration-300 tracking-wide uppercase"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;