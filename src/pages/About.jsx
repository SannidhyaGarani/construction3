import React from "react";
import PageHero from "../Components/PageHero";
import { ArrowRight, Users, Star, Clock, Eye, ThumbsUp, Target, Zap, Award, CheckCircle } from "lucide-react";
import CTASection from "../Components/home/CTASection";

// Custom SVG Icons
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
    <path d="M15 19.5C15 14.5 19 13 24 13C29 13 33 14.5 33 19.5H15Z" stroke="#C8842A" strokeWidth="1.5" strokeLinecap="round" />
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

const whyPoints = [
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals dedicated to excellence." },
  { icon: Star, title: "Quality Assurance", desc: "High standards, tested processes and quality checks." },
  { icon: Clock, title: "Timely Delivery", desc: "We value time real reliance on time project completion." },
  { icon: Eye, title: "Transparent Process", desc: "Clear communication and transparent dealings." },
  { icon: ThumbsUp, title: "Client Satisfaction", desc: "Our client success is our greatest reward." },
];

const values = [
  { icon: Target, title: "Our Vision", desc: "To be a leading civil engineering firm, setting benchmarks in quality and innovation across the nation." },
  { icon: Zap, title: "Our Mission", desc: "Delivering exceptional engineering solutions with integrity, precision, and a commitment to sustainable development." },
  { icon: Award, title: "Our Values", desc: "Excellence, integrity, safety, and client focus are the pillars that guide every project we undertake." },
];

const About = () => {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden font-sans">
      <PageHero
        title="About Us"
        subtitle="Building Trust Since 2026"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Firm Overview Section */}
      <section className="bg-slate-50/70 py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <span className="w-6 h-[2px] bg-[#C8842A]" />
                <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                  About Our Practice
                </p>
              </div>
              <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] mb-5">
                Strong Foundations.<br />
                Smarter Future.
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                Naksha Dynamics is a premier civil engineering firm committed to uncompromising structural quality, innovative methodologies, and punctual delivery. From initial concept drawings to turnkey infrastructure, we turn bold ideas into generational landmarks.
              </p>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                Established with engineering discipline at its core, we operate across high-growth regions delivering projects defined by mathematical precision, material integrity, and complete transparency.
              </p>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-[#C8842A] text-xs sm:text-sm font-bold uppercase tracking-wider hover:text-[#B37424] transition-colors group"
              >
                <span>View Complete Portfolio</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.06)] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-[0_12px_30px_rgba(200,132,42,0.15)] flex items-center gap-3.5">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-[#C8842A] shrink-0 border border-[#C8842A]/20">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">28+ Years</p>
                  <p className="text-slate-900 font-bold text-base sm:text-lg">Engineering Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section: 4 in a row on Desktop, 2 on Tablet/Mobile */}
      <section className="bg-white py-10 md:py-12 lg:py-14 font-sans">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  id={stat.id}
                  className="flex flex-col items-center justify-center p-5 sm:p-7 text-center relative group rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/40 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-400 overflow-hidden"
                >
                  {/* Top Architectural Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Subtle Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8842A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                  
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center mb-4 bg-slate-50 border border-slate-200/80 rounded-xl group-hover:bg-[#C8842A] group-hover:text-white group-hover:border-[#C8842A] transition-all duration-300 shadow-xs group-hover:scale-105 relative z-10">
                    <Icon />
                  </div>
                  <span className="text-slate-900 font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none mb-2 relative z-10">
                    {stat.value}
                  </span>
                  <span className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase leading-snug whitespace-pre-line group-hover:text-slate-700 transition-colors relative z-10">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values: 3 cards in a row */}
      <section className="bg-slate-50/70 py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Foundational Principles
              </p>
              <span className="w-6 h-[2px] bg-[#C8842A]" />
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2]">
              Vision, Mission & Guiding Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/40 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-400 overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Architectural Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-amber-500/10 border border-[#C8842A]/20 rounded-xl flex items-center justify-center text-[#C8842A] mb-4 sm:mb-5 group-hover:bg-[#C8842A] group-hover:text-white transition-all duration-300">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-slate-900 font-semibold text-lg sm:text-xl mb-2.5 group-hover:text-[#C8842A] transition-colors">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us: 5 cards with responsive layout */}
      <section className="bg-white py-10 md:py-12 lg:py-14 font-sans">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Why Naksha Dynamics
              </p>
              <span className="w-6 h-[2px] bg-[#C8842A]" />
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2]">
              Engineering with Uncompromising Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {whyPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center p-5 sm:p-6 bg-slate-50/70 border border-slate-200/80 rounded-2xl hover:bg-white hover:border-[#C8842A]/40 hover:shadow-[0_12px_28px_rgba(200,132,42,0.1)] transition-all duration-400 overflow-hidden"
                >
                  {/* Top Architectural Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-white border border-slate-200/80 rounded-xl text-[#C8842A] group-hover:bg-[#C8842A] group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105 relative z-10">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-base mb-2 relative z-10">{p.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed relative z-10">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;