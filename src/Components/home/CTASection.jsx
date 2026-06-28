import React from "react";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-[#111827] py-12 md:py-14 font-sans overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-white font-extrabold text-2xl md:text-[28px] mb-1.5 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Contact us today and let's build something remarkable together.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#C8842A] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#B37424] transition-all duration-300 tracking-wide uppercase whitespace-nowrap"
          >
            Let's Build Together <ArrowRight size={15} />
          </a>
          <a
            href="tel:+919999999999"
            className="w-11 h-11 flex items-center justify-center border-2 border-white/20 text-white/60 hover:border-[#C8842A] hover:text-[#C8842A] transition-all duration-300 rounded-md"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;