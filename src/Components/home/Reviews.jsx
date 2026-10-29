import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, CheckCircle } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Naksha Dynamics delivered our 32,000 sq.ft commercial plaza three weeks ahead of schedule. Their structural calculations and 3D BIM coordination prevented costly site clashes. Truly unmatched engineering discipline.",
    name: "Rahul Mehta",
    title: "Managing Director, Mehta Commercial Realties",
    location: "Vijay Nagar, Indore",
    project: "Vertex Commercial Complex",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote: "Constructing our 8,500 sq.ft luxury bungalow with Naksha was seamless. Their weekly concrete cube test certifications, digital milestone logs, and zero cost escalations gave my family complete peace of mind.",
    name: "Dr. Anjali & Rajesh Sharma",
    title: "Homeowners",
    location: "Super Corridor, Indore",
    project: "The Grand Pavilion Villa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote: "As an architectural firm, finding a civil contractor who respects complex structural geometries without cutting corners is rare. Naksha Dynamics is our premier recommended structural partner.",
    name: "Ar. Vikramaditya Singh",
    title: "Principal Architect, Studio Formworks",
    location: "Indore / Bhopal",
    project: "Multiple Turnkey Collaborations",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote: "Their geotechnical soil analysis and foundation jacketing saved our warehouse project from potential subsidence issues. Remarkable technical depth and prompt execution.",
    name: "Sunita Patel",
    title: "Operations Director, Patel Logistics Hub",
    location: "Pithampur Industrial Area",
    project: "Industrial PEB & Foundation Audit",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#FAF9F6] py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Client Endorsements & Proof
              </p>
            </div>
            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] sm:leading-[1.18]">
              Trusted by Developers. Revered by Homeowners.
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-1.5 sm:mt-2 max-w-xl">
              Hear directly from commercial developers, institutional partners, and luxury homeowners about our engineering rigor and delivery excellence.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-end md:self-end">
            <button 
              className="swiper-prev-reviews w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#C8842A] hover:text-[#C8842A] hover:shadow-md transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="swiper-next-reviews w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#C8842A] hover:text-[#C8842A] hover:shadow-md transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1.08}
            spaceBetween={16}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev-reviews",
              nextEl: ".swiper-next-reviews",
            }}
            pagination={{ clickable: true, bulletActiveClass: "bullet-active-reviews" }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-12 sm:!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="group bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 flex flex-col justify-between h-full hover:border-[#C8842A]/40 hover:shadow-xl hover:shadow-[#C8842A]/10 transition-all duration-400 relative overflow-hidden">
                  
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div>
                    {/* Stars & Project Tag */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="flex items-center gap-1 text-[#C8842A]">
                        {[...Array(t.stars)].map((_, s) => (
                          <Star key={s} size={14} fill="#C8842A" stroke="#C8842A" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                        {t.project}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Client Info Footer */}
                  <div className="pt-4 sm:pt-5 border-t border-slate-100 flex items-center gap-3 sm:gap-3.5 mt-auto">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-amber-500/20 shadow-xs"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-1.5">
                        <p className="text-slate-900 font-semibold text-xs sm:text-sm">{t.name}</p>
                        <ShieldCheck size={14} className="text-[#C8842A]" />
                      </div>
                      <p className="text-slate-500 text-[11px] sm:text-xs font-medium leading-tight">{t.title}</p>
                      <p className="text-slate-400 text-[10px] sm:text-[11px] font-mono mt-0.5">{t.location}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 text-xs font-semibold text-slate-500 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-[#C8842A] shrink-0" />
            <span>100% Verified Client Testimonials</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-[#C8842A] shrink-0" />
            <span>Google Review Rating: 4.9 / 5.0 (50+ Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-[#C8842A] shrink-0" />
            <span>All Site Reference Visits Available on Request</span>
          </div>
        </div>

      </div>

      <style>{`
        .bullet-active-reviews {
          background: #C8842A !important;
          width: 24px !important;
          border-radius: 6px !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
