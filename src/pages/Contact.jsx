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

      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT SIDE --- */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-3.5">
                Get In Touch
              </p>
              <h2 className="text-[#111827] font-extrabold text-3xl md:text-[40px] leading-[1.15] mb-5 tracking-tight">
                Let's architect the remarkable.
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Our studio provides the technical precision required for high-stakes execution and visionary design.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-200">
              {/* Location */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[#C8842A]" />
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                    The Studio
                  </span>
                </div>
                <p className="text-[#111827] font-medium text-lg">
                  Indore, M.P.<br />
                  India
                </p>
              </div>

              {/* Direct Lines */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={16} className="text-[#C8842A]" />
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                    Direct Lines
                  </span>
                </div>
                <p className="text-[#111827] font-medium text-lg">
                  Naksha Dynamics: +91 9876543210
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={16} className="text-[#C8842A]" />
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                    Correspondence
                  </span>
                </div>
                <a 
                  href="mailto:naksha.dynamics@gmail.com" 
                  className="text-[#111827] font-medium text-lg hover:text-[#C8842A] transition-colors"
                >
                  naksha.dynamics@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] p-8 md:p-10 rounded-2xl border border-gray-200/50 shadow-[0_12px_40px_rgba(17,24,39,0.02)]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg text-[#111827] focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A]/20 transition-all placeholder-gray-400" 
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg text-[#111827] focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A]/20 transition-all placeholder-gray-400" 
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg text-[#111827] focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A]/20 transition-all placeholder-gray-400" 
                    placeholder="email@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">
                    Project Details
                  </label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg text-[#111827] focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A]/20 transition-all placeholder-gray-400 resize-none" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="group relative w-full py-4 bg-[#111827] text-white uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#C8842A] transition-all duration-300 flex items-center justify-center gap-2 rounded-lg"
                  >
                    Send Message <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="mt-4 text-[#9CA3AF] text-xs text-center">
                    Estimated response time: 24 - 48 Hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[400px] w-full relative border-t border-gray-200 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m2!1m3!1d3509.324483758117!2d77.1009862!3d28.4184656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2269a7b973d9%3A0x6a1006509a25032!2sGolf%20Course%20Rd%2C%20Sector%2054%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709123456789"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Location"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
