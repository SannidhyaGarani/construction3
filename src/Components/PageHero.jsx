import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-neutral-100">

      {/* === BACKGROUND IMAGE (CINEMATIC) === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[6000ms] ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
              }`}
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />

          {/* DARK DEPTH OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* SOFT LIGHT GRADIENT */}
          {/* DARK TO LIGHT SOFT GRADIENT (UPDATED) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-neutral-100/10 to-white" />

          {/* LUXURY GRAIN */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />
        </div>
      </div>

      {/* === GRID / ARCHITECTURAL OVERLAY === */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* === MAIN CONTENT === */}
      <div className="relative z-20 h-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-24">

        {/* SUBTITLE */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="h-[1px] w-16 bg-black/60" />
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.6em] font-semibold text-neutral-500">
            {subtitle || "Signature Project"}
          </span>
        </div>

        {/* TITLE */}
        <div className="max-w-5xl">
          <h1 className="font-serif text-[15vw] md:text-[8vw] leading-[0.75] tracking-tight text-neutral-900">
            <Reveal delay={0.3}>
              {title}
              <span className="text-[#C5A880]">.</span>
            </Reveal>
          </h1>
        </div>

        {/* PREMIUM GLASS INFO BAR */}
        <div className="mt-12 backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          {/* LEFT INFO */}
          <div className="flex gap-12">
            <div>
              <p className="text-[9px] font-mono uppercase text-neutral-400 mb-1">
                Project Status
              </p>
              <p className="text-[11px] font-semibold tracking-widest uppercase">
                Completed / 2024
              </p>
            </div>

            <div>
              <p className="text-[9px] font-mono uppercase text-neutral-400 mb-1">
                Location
              </p>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#C5A880]">
                International Archive
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="mt-4 md:mt-0">
            <span className="text-[10px] tracking-[0.5em] text-neutral-400 uppercase">
              SC_REF // 001 - 012
            </span>
          </div>
        </div>
      </div>

      {/* === CORNER ACCENTS (UPGRADED) === */}
      <div className="absolute top-28 left-8 w-6 h-6 border-t border-l border-black/20 z-30" />
      <div className="absolute top-28 right-8 w-6 h-6 border-t border-r border-black/20 z-30" />

      {/* BOTTOM FADE LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-30" />

    </section>
  );
};

export default PageHero;