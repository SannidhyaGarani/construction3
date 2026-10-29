import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Building2, 
  Compass, 
  HardHat, 
  Box, 
  Wrench, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  FileSpreadsheet
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: "01",
    icon: Compass,
    title: "Planning & Feasibility Consultation",
    shortDesc: "Comprehensive site surveys, contour analysis, soil strata testing, and municipal regulatory planning.",
    deliverables: [
      "Geotechnical Soil Testing",
      "Master Plan Layouts & Sanctions",
      "Budgetary Feasibility Studies"
    ],
    tag: "Pre-Construction",
    link: "/services",
  },
  {
    id: "02",
    icon: Building2,
    title: "Structural Design & Calculations",
    shortDesc: "Seismic-resistant RCC and structural steel designs calculated using advanced FEA modeling per IS standards.",
    deliverables: [
      "ETABS / STAAD.Pro Modeling",
      "Seismic Zone Compliance (IS 1893)",
      "Detailed Structural Working Drawings"
    ],
    tag: "Engineering",
    link: "/services",
  },
  {
    id: "03",
    icon: HardHat,
    title: "Turnkey Building Construction",
    shortDesc: "End-to-end construction execution with stringent site safety, premium materials, and certified milestone delivery.",
    deliverables: [
      "Tier-1 Raw Material Sourcing",
      "Dedicated Site Project Engineers",
      "Concrete Cube Quality Testing"
    ],
    tag: "Civil Execution",
    link: "/services",
  },
  {
    id: "04",
    icon: Box,
    title: "3D BIM & Architectural Design",
    shortDesc: "Photorealistic 3D architectural rendering, walkthroughs, and coordinated BIM models for clash-free construction.",
    deliverables: [
      "3D Exterior & Interior Elevations",
      "Clash Detection & MEP Coordination",
      "Accurate Itemized BOQ Generation"
    ],
    tag: "Architecture",
    link: "/services",
  },
  {
    id: "05",
    icon: FileSpreadsheet,
    title: "Project Management & EPC Contracting",
    shortDesc: "Full-cycle construction supervision, critical-path scheduling, procurement tracking, and cost control.",
    deliverables: [
      "Milestone-Based Progress Tracking",
      "Site Safety & Zero-Accident Protocols",
      "Strict Budgetary Governance"
    ],
    tag: "Management",
    link: "/services",
  },
  {
    id: "06",
    icon: Wrench,
    title: "Structural Retrofitting & Audits",
    shortDesc: "Structural health audits, non-destructive testing (NDT), load-bearing reinforcement, and modern restorations.",
    deliverables: [
      "Non-Destructive Testing (NDT)",
      "RCC Column & Beam Jacketing",
      "Structural Stability Certification"
    ],
    tag: "Retrofitting",
    link: "/services",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-subtle-grid opacity-70 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Capabilities & Practice Areas
              </p>
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] sm:leading-[1.18]">
              End-to-End Civil Engineering & Construction Solutions
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-end md:self-end">
            <button 
              className="swiper-prev-services w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#C8842A] hover:text-[#C8842A] hover:shadow-md transition-all duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="swiper-next-services w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#C8842A] hover:text-[#C8842A] hover:shadow-md transition-all duration-300"
              aria-label="Next service"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Services Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1.15}
            spaceBetween={14}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev-services",
              nextEl: ".swiper-next-services",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 22 },
            }}
            className="!pb-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={service.id} className="h-auto">
                  <div className="h-full flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/40 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-400 group relative overflow-hidden">
                    
                    {/* Top Architectural Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    {/* Subtle Hover Ambient Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-[#C8842A]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Top Header: Tag & Service Index */}
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C8842A] bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-[#C8842A]/20">
                          {service.tag}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-[#C8842A] transition-colors">
                          {service.id}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-[#C8842A] mb-3.5 sm:mb-4 group-hover:bg-[#C8842A] group-hover:text-white group-hover:border-[#C8842A] transition-all duration-300 shadow-xs group-hover:scale-105">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>

                      {/* Title */}
                      <h3 className="text-slate-900 font-semibold text-base sm:text-[17px] leading-snug mb-2 group-hover:text-[#C8842A] transition-colors line-clamp-2 min-h-[44px]">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Key Deliverables Bullet Points */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 truncate">
                            <CheckCircle2 size={12} className="text-[#C8842A] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Link Action */}
                    <Link
                      to={service.link}
                      className="relative z-10 inline-flex items-center justify-between w-full pt-3.5 border-t border-slate-100 text-slate-800 group-hover:text-[#C8842A] font-semibold text-xs uppercase tracking-wider transition-colors mt-auto"
                    >
                      <span>Explore Scope & Specs</span>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-[#C8842A] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Bottom Consultation Advisory Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#C8842A]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 mb-1 block">
              Architectural Advisory & Feasibility
            </span>
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight">
              Have an upcoming construction project in planning?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Get an initial structural consultation, land feasibility analysis, and preliminary BOQ estimation from our senior engineers.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative z-10 w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#C8842A] hover:bg-[#B37424] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md text-center"
          >
            <span>Schedule Project Consultation</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
