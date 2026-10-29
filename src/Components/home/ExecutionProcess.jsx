import React from "react";
import { Compass, FileCode2, Truck, HardHat, KeyRound, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  {
    step: "01",
    icon: Compass,
    title: "Site Survey & Soil Strata Testing",
    phase: "Phase 1: Discovery",
    desc: "Topographic mapping, boundary verification, and geotechnical core drilling to assess soil bearing capacity (SBC) and water table levels.",
    keyPoints: ["Geotechnical SBC Report", "Contour & Level Mapping", "Municipal Zoning Verification"],
  },
  {
    step: "02",
    icon: FileCode2,
    title: "Structural CAD & 3D BIM Blueprinting",
    phase: "Phase 2: Engineering",
    desc: "Detailed architectural drawings, 3D visual walkthroughs, structural calculations per IS 456/1893, and clash-free MEP layouts.",
    keyPoints: ["3D Elevation Renderings", "ETABS Structural Analysis", "Itemized Precision BOQ"],
  },
  {
    step: "03",
    icon: Truck,
    title: "Material Procurement & Groundbreaking",
    phase: "Phase 3: Preparation",
    desc: "Sourcing Tier-1 certified steel and cement, site mobilization, excavation, and foundation anti-termite chemical barrier treatment.",
    keyPoints: ["Tier-1 Manufacturer Batch Certs", "Site Leveling & Excavation", "Raft/Footing Reinforcement"],
  },
  {
    step: "04",
    icon: HardHat,
    title: "Precision Civil Construction & QA",
    phase: "Phase 4: Execution",
    desc: "Stage-by-stage RCC casting with continuous slump tests, concrete cube curing verification, and weekly client milestone progress reports.",
    keyPoints: ["Cube Strength Testing", "Strict Zero-Accident Safety", "Digital Progress Logs"],
  },
  {
    step: "05",
    icon: KeyRound,
    title: "Commissioning & Structural Handover",
    phase: "Phase 5: Completion",
    desc: "Comprehensive structural health audit, MEP pressure testing, final aesthetic detailing, and handover with a 10-year structural warranty.",
    keyPoints: ["Final Quality Audit Certificate", "As-Built CAD Schematics", "10-Year Structural Warranty"],
  },
];

const ExecutionProcess = () => {
  return (
    <section className="bg-[#FAF9F6] py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden border-b border-slate-200/70">
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
              The Execution Blueprint
            </p>
            <span className="w-6 h-[2px] bg-[#C8842A]" />
          </div>
          <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] sm:leading-[1.18] mb-3 sm:mb-4">
            Our 5-Stage Engineering Methodology
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every landmark we build follows an ironclad, stage-gated scientific process designed to ensure zero structural defects, total cost predictability, and punctual delivery.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-[#C8842A]/50 hover:shadow-xl hover:shadow-[#C8842A]/10 transition-all duration-300 group relative"
              >
                {/* Step Indicator Header */}
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className="font-mono text-xl sm:text-2xl font-black text-slate-300 group-hover:text-[#C8842A] transition-colors">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8842A] bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      {stage.phase}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#C8842A] mb-3.5 sm:mb-4 group-hover:bg-[#C8842A] group-hover:text-white transition-all duration-300">
                    <Icon size={20} strokeWidth={1.8} className="sm:w-[22px] sm:h-[22px]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-slate-900 font-semibold text-base leading-snug mb-1.5 sm:mb-2 group-hover:text-[#C8842A] transition-colors">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 sm:mb-4">
                    {stage.desc}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 mt-auto">
                  {stage.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                      <CheckCircle2 size={12} className="text-[#C8842A] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Process Footer Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-[#C8842A] font-bold text-xs sm:text-sm tracking-wide transition-colors group px-4 py-2"
          >
            <span>Learn how we tailor our execution plan for your site</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#C8842A]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExecutionProcess;
