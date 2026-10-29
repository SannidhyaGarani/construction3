import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What is the typical turnkey construction timeline for a residential or commercial project?",
    a: "A standard 3,000–6,000 sq.ft luxury villa typically takes 8 to 11 months from foundation excavation to final handover. Commercial complexes (15,000–40,000 sq.ft) usually span 12 to 16 months. Each project receives a customized Critical Path Method (CPM) milestone schedule backed by penalty clauses for unexpected delays.",
  },
  {
    q: "How does Naksha Dynamics verify raw material quality and structural strength?",
    a: "We only procure direct-batch certified materials from primary manufacturers (Tata Tiscon 550D TMT, UltraTech 53-Grade, JSW). On site, our engineers conduct mandatory slump cone tests for workability and cast standard concrete cubes tested at government-accredited labs at 7-day and 28-day curing intervals. All test certificates are shared with the client.",
  },
  {
    q: "Do you handle municipal building approvals, sanctions, and structural certificates?",
    a: "Yes. Our turnkey service includes complete liaison with local municipal authorities (e.g. IDA, Municipal Corporation), zoning verifications, FAR calculations, fire safety clearances, and issuance of formal Structural Stability Certificates signed by licensed structural engineers.",
  },
  {
    q: "How are project payments structured during construction?",
    a: "We follow a 100% transparent, milestone-gated payment schedule. You never pay upfront for uncompleted work. Payments are broken down across verifiable structural milestones: Mobilization, Foundation & Plinth, Slab-by-Slab Casting, Brickwork & Plaster, MEP Rough-in, and Final Handover.",
  },
  {
    q: "What does the 10-Year Structural Stability Warranty cover?",
    a: "Our warranty covers the primary load-bearing structural framework: foundations, RCC columns, beams, load-bearing masonry, and roof slabs against structural settling, deflection, or catastrophic defects. We also provide complimentary structural health audits at Year 1 and Year 3.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="bg-white py-10 md:py-12 lg:py-14 font-sans relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Support Box */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#C8842A]" />
              <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                Clarity & Transparency
              </p>
            </div>

            <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] sm:leading-[1.18] mb-3 sm:mb-5">
              Frequently Asked Construction Questions
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
              Everything you need to know about our engineering protocols, billing transparency, structural standards, and warranty coverage.
            </p>

            {/* Quick Consultation Help Box */}
            <div className="w-full bg-[#FAF9F6] border border-slate-200/90 rounded-2xl p-4 sm:p-7">
              <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#C8842A] shrink-0">
                  <HelpCircle size={18} className="sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  Have a specific technical question?
                </h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 sm:mb-5">
                Speak directly with our senior structural consultants to discuss soil reports, architectural feasibility, or municipal compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-[#C8842A] transition-colors w-full sm:w-auto text-center"
                >
                  <PhoneCall size={14} />
                  <span>Call Chief Engineer</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl hover:border-[#C8842A] hover:text-[#C8842A] transition-colors w-full sm:w-auto text-center"
                >
                  <span>Book Free Audit</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#FAF9F6] border-[#C8842A]/40 shadow-sm"
                      : "bg-white border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3.5 sm:gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-slate-900 text-xs sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#C8842A] text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}>
                      <ChevronDown size={15} className="sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 mt-1">
                      <p className="pt-2.5 sm:pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;
