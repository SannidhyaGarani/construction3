import React from "react";
import PageHero from "../Components/PageHero";
import CTASection from "../Components/home/CTASection";
import { ArrowRight } from "lucide-react";

const services = [
  {
    code: 'ARC-01',
    title: 'Building Design',
    desc: 'From initial concept to construction-ready drafts, we provide functional planning that balances aesthetic ambition with structural practicality. Our process guarantees clarity in detailing and efficiency in execution.',
    img: 'https://images.unsplash.com/photo-1529420705456-2d43f7f26d0f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'BUI-02',
    title: 'Construction',
    desc: 'End-to-end execution defined by rigorous material verification, strict site supervision, and safety compliance. We manage the asset lifecycle to ensure timelines align with uncompromising structural integrity.',
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'FAC-03',
    title: 'Elevation Design',
    desc: 'Curating modern facades and proportional massing aligned to environmental context and financial parameters. We craft exterior elevations that command presence while remaining harmonious.',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'INT-04',
    title: 'Interior Arch',
    desc: 'Clean, durable, and timeless spatial design featuring cohesive material palettes. We focus on engineering spaces that deliver high visual impact alongside deep functional comfort.',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'STR-05',
    title: 'Structural Detail',
    desc: 'Mathematical precision in engineering drawings and load coordination. Our structural detailing serves as the uncompromising backbone for the longevity and stability of your investment.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    code: 'LGL-06',
    title: 'Municipal Approvals',
    desc: 'Navigating regulatory frameworks (Nagar Nigam / Naksha Pass) with strictly compliant documentation. We command the bureaucratic complexities so your project remains unhindered.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
];

const Services = () => {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden font-sans">
      <PageHero 
        title="Our Services" 
        subtitle="Building Trust Since 2026"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* --- Intro Text --- */}
      <section className="py-10 md:py-12 lg:py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />
        
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Practice Areas & Specializations
              </p>
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2]">
              Accountable, detailed, and design-led civil execution.
            </h2>
            <p className="mt-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Every practice area operates under strict engineering codes, dedicated QA protocols, and real-time site monitoring to ensure your investment stands with lasting distinction.
            </p>
          </div>
        </div>
      </section>

      {/* --- Services Grid (3 cards in a row on Desktop, 2 on Tablet, 1 on Mobile) --- */}
      <section className="py-10 md:py-12 lg:py-14 bg-white relative">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s) => (
              <div 
                key={s.code} 
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/50 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Architectural Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                <div>
                  {/* Image Frame */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-900">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                    
                    {/* Top Tag Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                        {s.code}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-slate-900 font-semibold text-lg sm:text-xl mb-2.5 group-hover:text-[#C8842A] transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#C8842A] text-xs sm:text-sm font-bold uppercase tracking-wider hover:text-[#B37424] transition-colors group/link"
                  >
                    <span>Consult Specialists</span>
                    <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Services;
