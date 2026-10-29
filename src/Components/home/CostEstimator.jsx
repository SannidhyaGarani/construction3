import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Clock, ShieldCheck, ArrowRight, Layers, Building, Home, Factory, Sparkles, CheckCircle2 } from "lucide-react";

const projectTypes = [
  { id: "residential", label: "Residential Villa", icon: Home, baseTimeline: 8, steelPerSqFt: 3.8, concPerSqFt: 0.045 },
  { id: "commercial", label: "Commercial Hub", icon: Building, baseTimeline: 12, steelPerSqFt: 4.5, concPerSqFt: 0.055 },
  { id: "structural", label: "Structural / BIM", icon: Layers, baseTimeline: 2, steelPerSqFt: 0, concPerSqFt: 0 },
  { id: "industrial", label: "Industrial PEB", icon: Factory, baseTimeline: 6, steelPerSqFt: 5.2, concPerSqFt: 0.035 },
];

const grades = [
  { id: "premium", label: "Premium Engineered", badge: "Most Popular", desc: "Tata Tiscon 550D, UltraTech 53G, Teak finishes, standard automation" },
  { id: "luxury", label: "Ultra-Luxury Bespoke", badge: "Architectural Grade", desc: "Italian marble, double glazed facades, acoustic insulation, smart HVAC" },
];

const CostEstimator = () => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [area, setArea] = useState(3500);
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  // Derived metrics
  const estMonths = Math.max(3, Math.round(selectedType.baseTimeline * (area / 3000) ** 0.45));
  const estSteelTonnes = selectedType.steelPerSqFt > 0 ? ((area * selectedType.steelPerSqFt) / 1000).toFixed(1) : "N/A";
  const estConcreteM3 = selectedType.concPerSqFt > 0 ? Math.round(area * selectedType.concPerSqFt) : "N/A";

  return (
    <section className="bg-[#FAF9F6] py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden border-b border-slate-200/70">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
              Interactive Feasibility Tool
            </p>
            <span className="w-6 h-[2px] bg-[#C8842A]" />
          </div>
          <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] sm:leading-[1.18] mb-3 sm:mb-4">
            Preliminary Construction Scope & Timeline Estimator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Configure your project parameters to receive instant preliminary material volumes, construction duration estimates, and engineering feasibility insights.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/50 p-4 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Controls: Inputs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  01 // Select Project Typology
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {projectTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`p-3.5 rounded-xl border flex flex-col items-center text-center transition-all duration-300 ${
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#C8842A]/50 hover:bg-white"
                        }`}
                      >
                        <Icon size={20} className={isSelected ? "text-[#C8842A]" : "text-slate-500 mb-1.5"} />
                        <span className="text-xs font-bold leading-tight mt-1">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Built-up Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    02 // Planned Built-Up Area
                  </label>
                  <span className="font-mono text-lg font-black text-[#C8842A]">
                    {area.toLocaleString()} <span className="text-xs font-sans text-slate-500">SQ.FT</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="250"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C8842A]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1.5">
                  <span>1,000 SQ.FT</span>
                  <span>12,500 SQ.FT</span>
                  <span>25,000+ SQ.FT</span>
                </div>
              </div>

              {/* Step 3: Finish & Material Grade */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  03 // Specification & Material Grade
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {grades.map((grade) => {
                    const isSelected = selectedGrade.id === grade.id;
                    return (
                      <div
                        key={grade.id}
                        onClick={() => setSelectedGrade(grade)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-amber-50/60 border-[#C8842A] shadow-xs"
                            : "bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-xs font-bold uppercase ${isSelected ? "text-[#C8842A]" : "text-slate-800"}`}>
                            {grade.label}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                            {grade.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {grade.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Panel: Instant Preliminary Telemetry */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 sm:p-8 relative overflow-hidden border border-slate-800 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8842A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-5 sm:mb-6 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C8842A] flex items-center gap-1.5">
                    <Sparkles size={14} /> Preliminary Scope
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">ESTIMATE V2.4</span>
                </div>

                {/* Main Estimated Timeline */}
                <div className="mb-5 sm:mb-6">
                  <span className="text-xs font-medium text-slate-400 block mb-1">
                    Projected Turnkey Timeline
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                      {estMonths} - {estMonths + 2}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#C8842A] uppercase">Months</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    Includes soil test, structural drawing, RCC shell, & turnkey finishing.
                  </p>
                </div>

                {/* Material Volume Insights */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 mb-5 sm:mb-6">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Estimated Steel</span>
                    <span className="font-mono text-base sm:text-lg font-bold text-white">
                      {estSteelTonnes} {estSteelTonnes !== "N/A" && "MT"}
                    </span>
                    <span className="text-[10px] text-slate-500 block">Fe550D TMT</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">RCC Concrete</span>
                    <span className="font-mono text-base sm:text-lg font-bold text-white">
                      {estConcreteM3} {estConcreteM3 !== "N/A" && "m³"}
                    </span>
                    <span className="text-[10px] text-slate-500 block">M25/M30 Design Mix</span>
                  </div>
                </div>

                {/* Value Checklist */}
                <div className="space-y-2 mb-6 sm:mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#C8842A] shrink-0" />
                    <span>Includes 3D BIM clash detection & structural certification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#C8842A] shrink-0" />
                    <span>Fixed-cost guarantee with milestone-gated payment stages</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C8842A] hover:bg-[#B37424] text-white font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 px-4 rounded-xl transition-all duration-300 shadow-md group text-center"
                >
                  <span>Request Itemized BOQ & Free Site Visit</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CostEstimator;
