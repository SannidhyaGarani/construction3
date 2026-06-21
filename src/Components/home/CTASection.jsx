import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from '../../Components/Reveal';

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] text-[#0A192F] border-t border-neutral-100 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* --- PREMIUM COMPACT HEADER --- */}
        <div className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-neutral-200/60">
          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.6em] font-semibold text-[#D4AF37]">Inquiry Portal</span>
                <div className="h-px w-8 bg-neutral-200" />
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                Initiate <span className="italic font-light text-neutral-400">Commission.</span>
              </h2>
            </Reveal>
          </div>
          <div className="text-left sm:text-right font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em]">
            SYS_COORD // 28.4950° N, 77.0878° E
          </div>
        </div>

        {/* --- MAIN INTERLOCKING GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT PANEL: TECHNICAL CONTACT HUD */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="p-6 bg-white border border-neutral-200/60 rounded-sm space-y-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)]">
              <div>
                <span className="block text-[8px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] mb-4">/ Channels</span>
                <div className="space-y-4">
                  <a href="mailto:studio@audenkhan.com" className="group flex items-center gap-3">
                    <div className="w-8 h-8 border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:border-[#D4AF37] transition-colors">
                      <Mail size={12} className="text-neutral-400 group-hover:text-[#0A192F]" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-neutral-400 uppercase tracking-wider font-medium">Email</span>
                      <span className="block text-[13px] font-medium text-[#0A192F]">studio@audenkhan.com</span>
                    </div>
                  </a>
                  <a href="tel:+911244567890" className="group flex items-center gap-3">
                    <div className="w-8 h-8 border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:border-[#D4AF37] transition-colors">
                      <Phone size={12} className="text-neutral-400 group-hover:text-[#0A192F]" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-neutral-400 uppercase tracking-wider font-medium">Phone</span>
                      <span className="block text-[13px] font-medium text-[#0A192F]">+91 124 456 7890</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <span className="block text-[8px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] mb-3">/ Headquarters</span>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-neutral-100 flex items-center justify-center bg-neutral-50 shrink-0">
                    <MapPin size={12} className="text-neutral-400" />
                  </div>
                  <p className="text-[12px] font-light leading-relaxed text-neutral-500">
                    DLF Cyber City, Phase III, Building 10-C,<br />
                    14th Floor, Gurugram, HR 122002
                  </p>
                </div>
              </div>
            </div>

            {/* INTEGRATED MINI MAP FRAME */}
            <div className="relative w-full aspect-[16/9] bg-neutral-100 border border-neutral-200/60 rounded-sm overflow-hidden grayscale contrast-[1.05] brightness-[1.02] hover:grayscale-0 transition-all duration-700 shadow-sm">
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
          <div className="lg:col-span-8 bg-white border border-neutral-200/60 p-6 md:p-10 rounded-sm shadow-[0_15px_40px_-20px_rgba(0,0,0,0.03)]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="group">
                <label className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-1 block group-focus-within:text-[#D4AF37] transition-colors">Full Name //</label>
                <input
                  type="text"
                  placeholder="E.G. ADRIAN SMITH"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-[13px] font-medium text-[#0A192F] focus:outline-none focus:border-[#0A192F] transition-all placeholder:text-neutral-300 placeholder:font-light"
                />
              </div>

              <div className="group">
                <label className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-1 block group-focus-within:text-[#D4AF37] transition-colors">Email Address //</label>
                <input
                  type="email"
                  placeholder="CLIENT@ARCHIVE.COM"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-[13px] font-medium text-[#0A192F] focus:outline-none focus:border-[#0A192F] transition-all placeholder:text-neutral-300 placeholder:font-light"
                />
              </div>

              <div className="md:col-span-2 group">
                <label className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-1 block group-focus-within:text-[#D4AF37] transition-colors">Project Classification //</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-neutral-200 py-3 text-[13px] font-medium text-[#0A192F] focus:outline-none focus:border-[#0A192F] transition-all appearance-none cursor-pointer rounded-none">
                    <option>RESIDENTIAL ARCHITECTURE</option>
                    <option>COMMERCIAL CURATION</option>
                    <option>TURNKEY SCHEMATICS</option>
                    <option>LANDSCAPE INTELLIGENCE</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-1.5 h-1.5 border-r border-b border-neutral-400 rotate-45" />
                </div>
              </div>

              <div className="md:col-span-2 group">
                <label className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-1 block group-focus-within:text-[#D4AF37] transition-colors">Brief Overview //</label>
                <textarea
                  rows="3"
                  placeholder="DESCRIBE PROJECT PARAMETERS AND TARGET TIMELINES..."
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-[13px] font-medium text-[#0A192F] focus:outline-none focus:border-[#0A192F] transition-all placeholder:text-neutral-300 placeholder:font-light resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button className="relative group overflow-hidden bg-[#0A192F] text-white px-8 py-4 text-[9px] uppercase tracking-[0.4em] font-bold rounded-xs transition-all shadow-md">
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Transmit Document <Send size={11} className="text-[#D4AF37] group-hover:text-white transition-colors" />
                  </span>
                </button>
              </div>

            </form>
          </div>

        </div>

        {/* --- SYSTEM METADATA FOOTER ACCENT --- */}
        <div className="mt-16 pt-6 border-t border-neutral-200/60 flex justify-center text-center">
          <span className="text-[8px] font-mono text-neutral-300 uppercase tracking-[0.8em]">Auden & Khān // Blueprinting Matrix V2.06</span>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;