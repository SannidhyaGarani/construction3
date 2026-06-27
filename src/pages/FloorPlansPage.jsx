import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
import Reveal from '../Components/Reveal';
import { Loader2, Map, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';

const FloorPlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const q = query(collection(db, 'floorPlans'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <main className="bg-[#FAFAFA] text-[#0A192F] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0A192F] text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/60 to-[#0A192F]/40" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto w-full h-full px-6 md:px-12 lg:px-20 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
              Architectural Layouts
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-6">
            Signature <span className="italic font-light text-white/90">Floor Plans</span> <br />
            Designed for <span className="text-[#D4AF37] font-serif">Modern Living</span>.
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light max-w-xl">
            Meticulously crafted layouts that maximize space efficiency while maintaining aesthetic elegance.
          </p>
        </div>
      </section>

      {/* PLANS GRID SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="mb-16">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="uppercase tracking-[0.8em] text-xs font-bold text-[#D4AF37]">
                Our Portfolio
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#0A192F]">
              Explore Our <span className="italic text-[#D4AF37] font-light">Curated Plans</span>
            </h2>
          </Reveal>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-600">
            <Loader2 className="animate-spin text-[#D4AF37]" size={48} />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Loading layouts...</span>
          </div>
        ) : plans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.08}>
                <Link
                  to={`/floorplans/${plan.id}`}
                  className="group relative block"
                >
                  <div className="relative bg-white border border-neutral-300 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#D4AF37]/50">
                    {/* IMAGE */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={plan.exteriorImage}
                        alt={plan.title}
                        className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute top-4 left-4 backdrop-blur-sm bg-[#0A192F]/70 border border-white/20 px-3 py-1.5 text-xs tracking-[0.3em] uppercase text-white">
                        {plan.style}
                      </div>
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col gap-4">
                      <div>
                        <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0A192F] leading-tight">
                          {plan.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="h-[1px] w-5 bg-[#D4AF37]" />
                          <p className="text-xs uppercase text-neutral-600 tracking-[0.2em]">
                            {plan.width} x {plan.length} ft • {plan.width * plan.length} sq.ft
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-neutral-500 tracking-widest">
                            Area
                          </span>
                          <span className="text-sm font-semibold text-[#0A192F] tracking-wide">
                            {plan.width * plan.length} sq.ft
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 group-hover:text-[#D4AF37] transition-all duration-300">
                          <span className="text-xs uppercase tracking-[0.3em] font-bold">
                            View
                          </span>
                          <div className="relative w-5 h-[1px] bg-neutral-400 overflow-hidden">
                            <div className="absolute left-0 top-0 w-full h-full bg-[#D4AF37] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                          </div>
                          <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-48 text-center bg-white border border-dashed border-neutral-300">
            <Map className="text-neutral-400 mb-6" size={64} />
            <h3 className="text-2xl font-serif text-neutral-700">No floor plans found</h3>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
};

export default FloorPlansPage;