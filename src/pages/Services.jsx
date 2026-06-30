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
    <main className="bg-white text-[#111827] overflow-hidden">
      <PageHero 
        title="Our Services" 
        subtitle="Building Trust Since 1995"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* --- Intro Text --- */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto bg-[#FAF9F6]">
        <div className="max-w-3xl">
          <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-3.5">
            Practice Areas
          </p>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[40px] leading-[1.15] mb-5 tracking-tight">
            Accountable, detailed, and design-led execution.
          </h2>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.code} className="group relative bg-white rounded-2xl border border-gray-200/50 shadow-[0_12px_40px_rgba(17,24,39,0.02)] overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#C8842A] text-[10px] font-bold uppercase tracking-[0.3em]">
                    {s.code}
                  </span>
                </div>
                <h3 className="text-[#111827] font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#C8842A] text-sm font-bold hover:text-[#B37424] transition-colors group"
                >
                  Learn More <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Services;
