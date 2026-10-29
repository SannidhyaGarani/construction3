import React from 'react';
import PageHero from '../Components/PageHero';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-white text-[#111827] overflow-hidden">
      <PageHero 
        title="Contact Us" 
        subtitle="Initiate Your Structural Vision"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-10 md:py-12 lg:py-14 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT SIDE: Studio Details --- */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <span className="w-6 h-[2px] bg-[#C8842A]" />
                <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
                  Direct Consultation
                </p>
              </div>
              <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2] mb-3">
                Let's architect the remarkable.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our studio provides the mathematical rigor, regulatory approvals, and on-site engineering supervision required for high-stakes execution.
              </p>
            </div>

            <div className="space-y-4 pt-4 sm:pt-6 border-t border-slate-200">
              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#C8842A]/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#C8842A]">
                    <MapPin size={16} />
                  </div>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    The Main Studio
                  </span>
                </div>
                <p className="text-slate-900 font-medium text-sm sm:text-base pl-10">
                  Indore, Madhya Pradesh, India
                </p>
              </div>

              {/* Direct Lines Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#C8842A]/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#C8842A]">
                    <Phone size={16} />
                  </div>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    Engineering Helpline
                  </span>
                </div>
                <p className="text-slate-900 font-medium text-sm sm:text-base pl-10">
                  +91 9876543210
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#C8842A]/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#C8842A]">
                    <Mail size={16} />
                  </div>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    Project Correspondence
                  </span>
                </div>
                <a 
                  href="mailto:naksha.dynamics@gmail.com" 
                  className="text-slate-900 font-medium text-sm sm:text-base hover:text-[#C8842A] transition-colors pl-10 block truncate"
                >
                  naksha.dynamics@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: PREMIUM FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.04)] relative overflow-hidden">
              {/* Top Architectural Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]" />

              <h3 className="text-slate-900 font-semibold text-lg sm:text-xl mb-1.5">
                Request an Engineering Proposal
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Fill in your project parameters and an associate will prepare an initial scope assessment.
              </p>

              <form className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50/60 border border-slate-200 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#C8842A] focus:bg-white focus:ring-2 focus:ring-[#C8842A]/10 transition-all placeholder-slate-400 text-sm" 
                      placeholder="e.g. Sannidhya Garani"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">
                      Contact Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-slate-50/60 border border-slate-200 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#C8842A] focus:bg-white focus:ring-2 focus:ring-[#C8842A]/10 transition-all placeholder-slate-400 text-sm" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-50/60 border border-slate-200 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#C8842A] focus:bg-white focus:ring-2 focus:ring-[#C8842A]/10 transition-all placeholder-slate-400 text-sm" 
                    placeholder="email@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">
                    Project Requirements / Location
                  </label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-slate-50/60 border border-slate-200 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#C8842A] focus:bg-white focus:ring-2 focus:ring-[#C8842A]/10 transition-all placeholder-slate-400 resize-none text-sm" 
                    placeholder="Describe your site area, expected timeline, building type (residential/commercial), or architectural services needed..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="group relative w-full py-4 bg-[#111827] text-white uppercase text-xs tracking-[0.25em] font-bold hover:bg-[#C8842A] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl shadow-md cursor-pointer"
                  >
                    <span>Transmit Project Inquiry</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="mt-3 text-slate-400 text-xs text-center">
                    Confidential review • Estimated consultation callback: within 24 Hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[360px] sm:h-[420px] w-full relative border-t border-slate-200 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m2!1m3!1d117763.55529452093!2d75.79375179040853!3d22.72410996841103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Location Map"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
