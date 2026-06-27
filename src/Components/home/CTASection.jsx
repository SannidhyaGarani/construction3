import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from '../../Components/Reveal';

const ContactSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#FAFAFA] text-[#0A192F] border-t border-neutral-200 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* --- PREMIUM COMPACT HEADER --- */}
        <div className="mb-10 md:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-neutral-300">
          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#D4AF37]">Inquiry Portal</span>
                <div className="h-px w-8 bg-neutral-400" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
                Initiate <span className="italic font-light text-neutral-500">Commission.</span>
              </h2>
            </Reveal>
          </div>
          <div className="text-left sm:text-right font-mono text-[9px] text-neutral-600 uppercase tracking-[0.25em] font-medium">
            SYS_COORD // 28.4950° N, 77.0878° E
          </div>
        </div>

        {/* --- MAIN INTERLOCKING GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT PANEL: TECHNICAL CONTACT HUD */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="p-6 bg-white border border-neutral-300 rounded-sm space-y-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)]">
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-[0.35em] text-[#D4AF37] mb-4 font-bold">/ Channels</span>
                <div className="space-y-5">
                  <a href="mailto:info@nakshadynamic.com" className="group flex items-center gap-3">
                    <div className="w-9 h-9 border border-neutral-300 flex items-center justify-center bg-neutral-50 group-hover:border-[#D4AF37] transition-colors group-hover:bg-[#D4AF37]/5">
                      <Mail size={14} className="text-neutral-600 group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-neutral-500 uppercase tracking-wider font-bold">Email</span>
                      <span className="block text-[14px] font-semibold text-[#0A192F]">info@nakshadynamic.com</span>
                    </div>
                  </a>
                  <a href="tel:+911244567890" className="group flex items-center gap-3">
                    <div className="w-9 h-9 border border-neutral-300 flex items-center justify-center bg-neutral-50 group-hover:border-[#D4AF37] transition-colors group-hover:bg-[#D4AF37]/5">
                      <Phone size={14} className="text-neutral-600 group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-neutral-500 uppercase tracking-wider font-bold">Phone</span>
                      <span className="block text-[14px] font-semibold text-[#0A192F]">+91 124 456 7890</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <span className="block text-[9px] font-mono uppercase tracking-[0.35em] text-[#D4AF37] mb-3 font-bold">/ Headquarters</span>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 border border-neutral-300 flex items-center justify-center bg-neutral-50 shrink-0">
                    <MapPin size={14} className="text-neutral-600" />
                  </div>
                  <p className="text-[13px] font-normal leading-relaxed text-neutral-700">
                    DLF Cyber City, Phase III, Building 10-C,<br />
                    14th Floor, Gurugram, HR 122002
                  </p>
                </div>
              </div>
            </div>

            {/* INTEGRATED MINI MAP FRAME */}
            <div className="relative w-full aspect-[16/9] bg-neutral-100 border border-neutral-300 rounded-sm overflow-hidden shadow-md">
              <iframe
                title="Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.170661556943!2d77.0856113763131!3d28.495431675743458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d115!2d77.0878!3d28.4950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19382103f1eb%3A0x6b8ecbd0f32467d3!2sDLF%20Cyber%20City%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-none"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-white" />
            </div>
          </div>

          {/* RIGHT PANEL: SHARP MICRO-FORM */}
          <div className="lg:col-span-8 bg-white border border-neutral-300 p-6 md:p-10 rounded-sm shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="group">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-2 block group-focus-within:text-[#D4AF37] transition-colors">Full Name //</label>
                <input
                  type="text"
                  placeholder="E.G. ADRIAN SMITH"
                  className="w-full bg-transparent border-b border-neutral-300 py-3 text-[14px] font-medium text-[#0A192F] focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-400 placeholder:font-normal"
                />
              </div>

              <div className="group">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-2 block group-focus-within:text-[#D4AF37] transition-colors">Email Address //</label>
                <input
                  type="email"
                  placeholder="CLIENT@ARCHIVE.COM"
                  className="w-full bg-transparent border-b border-neutral-300 py-3 text-[14px] font-medium text-[#0A192F] focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-400 placeholder:font-normal"
                />
              </div>

              <div className="md:col-span-2 group">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-2 block group-focus-within:text-[#D4AF37] transition-colors">Project Classification //</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-neutral-300 py-3 text-[14px] font-medium text-[#0A192F] focus:outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer rounded-none">
                    <option>STRUCTURAL ENGINEERING</option>
                    <option>INFRASTRUCTURE DEVELOPMENT</option>
                    <option>GEOTECHNICAL ENGINEERING</option>
                    <option>SUSTAINABLE CONSTRUCTION</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-2 h-2 border-r border-b border-neutral-600 rotate-45" />
                </div>
              </div>

              <div className="md:col-span-2 group">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-2 block group-focus-within:text-[#D4AF37] transition-colors">Brief Overview //</label>
                <textarea
                  rows="3"
                  placeholder="DESCRIBE PROJECT PARAMETERS AND TARGET TIMELINES..."
                  className="w-full bg-transparent border-b border-neutral-300 py-3 text-[14px] font-medium text-[#0A192F] focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-400 placeholder:font-normal resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-6">
                <button className="relative group overflow-hidden bg-[#0A192F] text-white px-8 py-4 text-[10px] uppercase tracking-[0.4em] font-bold rounded-sm transition-all shadow-lg hover:shadow-xl">
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Transmit Document <Send size={12} className="text-[#D4AF37] group-hover:text-white transition-colors" />
                  </span>
                </button>
              </div>

            </form>
          </div>

        </div>

        {/* --- SYSTEM METADATA FOOTER ACCENT --- */}
        <div className="mt-12 pt-6 border-t border-neutral-300 flex justify-center text-center">
          <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.8em] font-medium">Naksha Dynamic // Blueprinting Matrix V2.06</span>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;