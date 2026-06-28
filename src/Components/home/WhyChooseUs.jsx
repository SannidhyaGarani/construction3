import React from "react";
import { Users, Star, Clock, Eye, ThumbsUp } from "lucide-react";

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

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-14 md:py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em]">
              Why Choose Us
            </p>
            <span className="w-8 h-[2px] bg-[#C8842A]" />
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[36px] tracking-tight">
            Engineering with Integrity
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center p-5 bg-[#FAFAF8] border border-gray-100/80 hover:border-[#C8842A]/50 hover:shadow-lg hover:shadow-[#C8842A]/[0.04] transition-all duration-400 overflow-hidden"
              >
                {/* Hover accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                <div className="w-12 h-12 flex items-center justify-center mb-3.5 bg-white border border-gray-100 rounded-lg group-hover:border-[#C8842A]/30 transition-colors duration-300">
                  <Icon size={24} className="text-[#C8842A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#111827] font-bold text-sm mb-1.5">{p.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;