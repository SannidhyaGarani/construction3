import React, { useState, useEffect } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const ConstructionHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMatrix, setActiveMatrix] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const narrativeMatrix = [
    {
      index: "01",
      pillar: "Structural Integrity",
      coordinates: "40.7128° N, 74.0060° W",
      text: "Civil engineering is the backbone of modern civilization. We design and construct infrastructure that withstands the test of time, from bridges to skyscrapers."
    },
    {
      index: "02",
      pillar: "Sustainable Infrastructure",
      coordinates: "34.0522° N, 118.2437° W",
      text: "Prioritizing eco-friendly materials and innovative construction methods. We build a greener future while maintaining the highest standards of safety and durability."
    },
    {
      index: "03",
      pillar: "Precision Execution",
      coordinates: "51.5074° N, 0.1278° W",
      text: "Meticulous planning and expert craftsmanship ensure every project is delivered on time and within budget. We turn complex engineering challenges into reality."
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A192F] text-white">

      {/* --- 1. FULL-BLEED BACKGROUND VIDEO --- */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
        }`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Advanced Multi-Stage Premium Overlay Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/60 to-[#0A192F]/40" />
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
      </div>

      {/* --- 2. OPTIONAL OVERLAY BLUEPRINT LINES --- */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.05] flex justify-between max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white hidden md:block" />
        <div className="w-px h-full bg-white hidden lg:block" />
        <div className="w-px h-full bg-white" />
      </div>

      {/* --- 3. EDITORIAL INTERACTIVE CONTENT FRAME --- */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full h-full px-6 md:px-12 lg:px-20 flex flex-col justify-between pt-36 pb-12">

        {/* UPPER ROW: Spatial Metadata Stamp */}
        <div className={`flex justify-between items-center w-full transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
                    Engineering of Permanence
                  </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
            <span className="font-mono text-[9px] text-white/40 hidden sm:inline">
              SYS_ACTIVE // ENG_MATRICES
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#D4AF37] tracking-widest">
            {narrativeMatrix[activeMatrix].coordinates}
          </span>
        </div>

        {/* MIDDLE SECTION: Typography & Copy (Asymmetric Shifted Left) */}
        <div className="max-w-3xl mt-12 md:mt-20">
          <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-6 transition-all duration-[1200ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
            Building <span className="italic font-light text-white/90">Tomorrow</span> <br />
            Engineering <span className="text-[#D4AF37] font-serif">Excellence</span>.
          </h1>

          {/* Controlled Text Height Transition Box */}
          <div className="h-24 sm:h-16 relative overflow-hidden max-w-xl">
            {narrativeMatrix.map((item, idx) => (
              <p
                key={item.index}
                className={`absolute inset-0 text-sm md:text-base text-white/70 font-light leading-relaxed transition-all duration-700 ease-in-out ${idx === activeMatrix
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Control Matrices & Dynamic Actions */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8 mt-6">

          {/* Narrative Navigation Pillars (Left 7 Columns) */}
          <div className={`lg:col-span-7 flex flex-col sm:flex-row gap-8 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}>
            {narrativeMatrix.map((item, idx) => (
              <button
                key={item.index}
                onClick={() => setActiveMatrix(idx)}
                className="flex items-start gap-3 group text-left focus:outline-none"
              >
                <span className={`font-mono text-[9px] transition-colors duration-300 ${idx === activeMatrix ? "text-[#D4AF37]" : "text-white/30"
                  }`}>
                  {item.index}
                </span>
                <div>
                  <h4 className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${idx === activeMatrix ? "text-white translate-x-1" : "text-white/40 group-hover:text-white/80"
                    }`}>
                    {item.pillar}
                  </h4>
                  <div className={`h-[1px] bg-[#D4AF37] transition-all duration-500 mt-1 ${idx === activeMatrix ? "w-full" : "w-0"
                    }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Core Action Callouts (Right 5 Columns Aligned Right) */}
          <div className={`lg:col-span-5 flex flex-wrap sm:flex-nowrap gap-6 items-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}>
            <button className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-white/70 hover:text-white transition-colors py-3 relative">
              <span>View Folio</span>
              <Plus size={12} className="text-[#D4AF37] group-hover:rotate-90 transition-transform duration-500" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 transition-all group-hover:w-full" />
            </button>

            <button className="relative px-8 py-4 bg-white text-[#0A192F] font-bold text-[10px] uppercase tracking-[0.4em] overflow-hidden group transition-colors duration-500 w-full sm:w-auto text-center">
              <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                Start Project
                <ArrowUpRight size={12} className="transition-transform group-hover:rotate-45 duration-300" />
              </span>
            </button>
          </div>

        </div>

      </div>

      {/* --- 4. CONTINUOUS MECHANICAL SCROLL TRACKER --- */}
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-20 z-30 hidden md:flex items-center gap-4">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 [writing-mode:vertical-lr]">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/3 bg-[#D4AF37]"
            style={{
              animation: "architecturalDraw 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite"
            }}
          />
        </div>
      </div>

      {/* Global CSS Injection for Linear Plotter Pen Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes architecturalDraw {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(300%); }
          100% { transform: translateY(300%); }
        }
      `}} />
    </section>
  );
};

export default ConstructionHero;