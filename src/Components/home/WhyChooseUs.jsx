import React from "react";
import { Users, Star, Clock, Eye, ThumbsUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const points = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled professionals dedicated to excellence.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    desc: "High standards, tested processes and quality checks.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We value time real reliance on time project completion.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Clear communication and transparent dealings.",
  },
  {
    icon: ThumbsUp,
    title: "Client Satisfaction",
    desc: "Our client success is our greatest reward.",
  },
];

// Reusable Card Component to keep code dry
const FeatureCard = ({ p }) => {
  const Icon = p.icon;
  return (
    <div className="group relative flex flex-col items-center text-center p-6 md:p-5 lg:p-6 bg-[#FAF9F6] rounded-2xl border border-transparent hover:bg-white hover:border-[#C8842A]/20 hover:shadow-[0_12px_40px_-16px_rgba(200,132,42,0.15)] transition-all duration-500 overflow-hidden h-full">
      {/* Subtle blurred accent in the top right corner */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#C8842A]/5 rounded-full blur-2xl group-hover:bg-[#C8842A]/15 transition-colors duration-700 pointer-events-none" />

      {/* Centered Compact Icon Box */}
      <div className="w-14 h-14 flex items-center justify-center bg-white rounded-[14px] shadow-sm border border-gray-100 group-hover:border-[#C8842A]/30 group-hover:scale-110 transition-all duration-500 mb-5 relative z-10">
        <Icon size={24} className="text-[#C8842A]" strokeWidth={1.75} />
      </div>

      {/* Centered Typography */}
      <h3 className="text-[#111827] font-bold text-base mb-2 relative z-10 group-hover:text-[#C8842A] transition-colors duration-300">
        {p.title}
      </h3>
      
      <p className="text-[#6B7280] text-[13px] sm:text-sm leading-relaxed relative z-10">
        {p.desc}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-8 md:py-16 font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
              Why Choose Us
            </p>
            <span className="w-8 h-[2px] bg-[#C8842A]" />
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[36px] tracking-tight">
            Engineering with Integrity
          </h2>
        </div>

        {/* --- MOBILE VIEW: Swiper Slider --- */}
        <div className="block md:hidden pb-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.15} /* 1.15 shows a "peek" of the next card */
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              bulletActiveClass: '!bg-[#C8842A] !w-6 !rounded-full',
              bulletClass: '!bg-gray-200 !w-2 !h-2 !rounded-full transition-all duration-300 inline-block mx-1 mt-4',
            }}
            className="w-full !pb-12"
          >
            {points.map((p, i) => (
              <SwiperSlide key={i} className="h-auto">
                <FeatureCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- DESKTOP VIEW: Grid Layout --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {points.map((p, i) => (
            <FeatureCard key={i} p={p} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;