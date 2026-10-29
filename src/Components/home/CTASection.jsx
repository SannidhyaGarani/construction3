import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, MessageSquare, ShieldCheck, Clock, CalendarCheck2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-[#111827] to-slate-950 text-white p-5 sm:p-10 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Decorative Lighting Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C8842A]/25 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-800/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.2em] mb-4 sm:mb-6">
              <CalendarCheck2 size={13} className="text-[#C8842A]" />
              <span>Book Your Consultation Slot</span>
            </div>

            {/* Headline */}
            <h2 className="text-white font-semibold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2] sm:leading-[1.18] tracking-tight mb-3 sm:mb-5">
              Ready to Build Your Next Landmark? Let’s Talk Engineering.
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Whether you are planning an iconic commercial complex, a bespoke residential estate, or need structural health audits, Naksha Dynamics delivers uncompromising excellence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 sm:mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#C8842A] hover:bg-[#B37424] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#C8842A]/25 group text-center"
              >
                <span>Request Free Site Audit</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all duration-300 backdrop-blur-md text-center"
              >
                <PhoneCall size={16} className="text-[#C8842A]" />
                <span>+91 12345 67890</span>
              </a>

              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-center"
              >
                <MessageSquare size={15} className="text-emerald-400" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>

            {/* Reassurance Value Points */}
            <div className="pt-5 sm:pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C8842A] shrink-0" />
                <span>100% Free Initial Site Feasibility</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#C8842A] shrink-0" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C8842A] shrink-0" />
                <span>Zero Obligation Consultation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;