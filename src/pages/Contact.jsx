import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-[#F9F8F6] text-neutral-900">
      {/* HERO SECTION */}
      <PageHero 
        title="Inquiry." 
        subtitle="Initiate Your Structural Vision"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: THE STUDIO INDEX --- */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-12">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#C5A880]" />
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#C5A880]">Get_In_Touch</span>
                </div>
                <h2 className="font-serif text-6xl md:text-7xl text-neutral-900 leading-[0.85] tracking-tighter mb-10">
                  Let's architect <br />
                  <span className="text-[#C5A880] italic font-light">the remarkable.</span>
                </h2>
                <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-sm">
                  Our studio provides the technical precision required for high-stakes execution and visionary design.
                </p>
              </Reveal>

              <div className="space-y-12 pt-12 border-t border-neutral-200">
                {/* Location */}
                <Reveal delay={0.2}>
                  <div className="group cursor-default">
                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-4">
                      <MapPin size={12} className="text-[#C5A880]" /> The_Studio
                    </span>
                    <p className="font-serif text-xl text-neutral-800 leading-snug">
                      Sector 54, Golf Course Road,<br />
                      Gurugram, HR 122009
                    </p>
                  </div>
                </Reveal>

                {/* Direct Lines */}
                <Reveal delay={0.3}>
                  <div className="group cursor-default">
                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-4">
                      <Phone size={12} className="text-[#C5A880]" /> Direct_Lines
                    </span>
                    <div className="space-y-1">
                      <p className="font-serif text-xl text-neutral-800 group-hover:text-[#C5A880] transition-colors">
                        Aryan Khan: +91 9111159900
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Email */}
                <Reveal delay={0.4}>
                  <div className="group">
                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-4">
                      <Mail size={12} className="text-[#C5A880]" /> Correspondence
                    </span>
                    <a 
                      href="mailto:aryankhan00741@gmail.com" 
                      className="font-serif text-2xl text-neutral-900 relative inline-block group"
                    >
                      aryankhan00741@gmail.com
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200 group-hover:bg-[#C5A880] transition-colors" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: ARCHITECTURAL FORM --- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-white p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-neutral-100 relative overflow-hidden">
                {/* Subtle Decorative Background Element */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                   <span className="text-[120px] font-serif leading-none">01</span>
                </div>

                <form className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 font-bold block mb-2">Identity</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-300 font-light" 
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 font-bold block mb-2">Contact_No</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-300 font-light" 
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 font-bold block mb-2">Email_Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-300 font-light" 
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 font-bold block mb-2">Brief_Description</label>
                    <textarea 
                      rows="4" 
                      className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 focus:outline-none focus:border-[#C5A880] transition-colors placeholder-neutral-300 font-light resize-none" 
                      placeholder="Project vision, location, and scale..."
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit" 
                      className="group relative w-full py-6 bg-neutral-900 text-white overflow-hidden transition-all"
                    >
                      <div className="absolute inset-0 bg-[#C5A880] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <span className="relative z-10 uppercase text-[10px] tracking-[0.5em] font-bold flex items-center justify-center gap-4 group-hover:text-white">
                        Transmit Inquiry <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                      </span>
                    </button>
                    <p className="mt-6 text-[8px] uppercase tracking-widest text-neutral-400 text-center">
                      Estimated response time: 24 - 48 Hours
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- REFINED MAP SECTION --- */}
      <section className="h-[70vh] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 border-t border-neutral-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m2!1m3!1d3509.324483758117!2d77.1009862!3d28.4184656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2269a7b973d9%3A0x6a1006509a25032!2sGolf%20Course%20Rd%2C%20Sector%2054%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709123456789"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Studio Location"
        ></iframe>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(249,248,246,1)]" />
      </section>
    </main>
  );
};

export default Contact;