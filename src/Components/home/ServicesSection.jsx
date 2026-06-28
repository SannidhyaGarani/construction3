import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutPanelLeft, Building, HardHat, Briefcase, Box, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    icon: LayoutPanelLeft,
    title: "Planning &\nConsultation",
    desc: "Feasibility studies, site analysis and expert guidance.",
    link: "/projects",
  },
  {
    icon: Building,
    title: "Structural\nDesign",
    desc: "Safe, efficient and cost-effective structural calculates.",
    link: "/projects",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Quality construction with strict adherence to standards.",
    link: "/projects",
  },
  {
    icon: Briefcase,
    title: "Project\nManagement",
    desc: "Timely execution, resource planning and cost control.",
    link: "/projects",
  },
  {
    icon: Box,
    title: "3D Modeling &\nEstimation",
    desc: "Accurate 3D models and BOQ's for better planning.",
    link: "/projects",
  },
  {
    icon: Wrench,
    title: "Renovation &\nRehabilitation",
    desc: "Upgrading existing structures with modern solutions.",
    link: "/projects",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-14 md:py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em]">
              Our Services
            </p>
            <span className="w-8 h-[2px] bg-[#C8842A]" />
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[36px] tracking-tight">
            End-to-End Civil Engineering Solutions
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          {/* Navigation buttons */}
          <button className="swiper-prev-services absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] transition-all shadow-sm rounded-md">
            <ChevronLeft size={16} />
          </button>
          <button className="swiper-next-services absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] transition-all shadow-sm rounded-md">
            <ChevronRight size={16} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev-services",
              nextEl: ".swiper-next-services",
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={i} className="h-auto">
                  <Link
                    to={service.link}
                    className="group relative flex flex-col items-center text-center p-5 bg-[#FAFAF8] border border-gray-100/80 hover:border-[#C8842A]/50 hover:shadow-lg hover:shadow-[#C8842A]/[0.04] transition-all duration-400 overflow-hidden h-full"
                  >
                    {/* Hover accent top bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                    <div className="w-11 h-11 flex items-center justify-center mb-3.5 bg-white border border-gray-100 rounded-lg group-hover:border-[#C8842A]/30 transition-colors duration-300">
                      <Icon size={22} className="text-[#C8842A]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#111827] font-bold text-sm leading-snug mb-2 whitespace-pre-line">
                      {service.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <div className="mt-auto w-7 h-7 flex items-center justify-center border border-gray-200 group-hover:border-[#C8842A] group-hover:bg-[#C8842A] transition-all duration-300 rounded-md">
                      <ArrowRight size={12} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;