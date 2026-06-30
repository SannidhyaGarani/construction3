import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Naksha Dynamics delivered our project beyond expectations. Their attention to detail and professionalism is commendable.",
    name: "Rahul Mehta",
    title: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "A reliable team that values quality and timeliness. Highly recommended for any civil engineering work.",
    name: "Anjali Sharma",
    title: "Homeowner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "From planning to execution, the entire experience was smooth and hassle-free.",
    name: "Vikram Singh",
    title: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="bg-white py-8 md:py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em]">
              Clients Speak
            </p>
            <span className="w-8 h-[2px] bg-[#C8842A]" />
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[36px] tracking-tight">
            Trusted by Clients, Proven by Results
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation buttons */}
          <button className="swiper-prev-reviews absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] transition-all shadow-sm rounded-md">
            <ChevronLeft size={16} />
          </button>
          <button className="swiper-next-reviews absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] transition-all shadow-sm rounded-md">
            <ChevronRight size={16} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev-reviews",
              nextEl: ".swiper-next-reviews",
            }}
            pagination={{ clickable: true, bulletActiveClass: "bullet-active-reviews" }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="!pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="group relative bg-[#FAFAF8] border border-gray-100/80 p-6 transition-all duration-400 overflow-hidden h-full flex flex-col justify-between">
                  {/* Accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                  <div>
                    {/* Quote icon */}
                    <div className="w-9 h-9 flex items-center justify-center bg-[#C8842A]/[0.08] rounded-lg mb-4">
                      <Quote size={16} className="text-[#C8842A]" />
                    </div>

                    <p className="text-[#4B5563] text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div>
                      <p className="text-[#111827] font-bold text-sm">{t.name}</p>
                      <p className="text-[#9CA3AF] text-sm font-medium">{t.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style>{`
        .bullet-active-reviews {
          background: #C8842A !important;
          width: 20px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
