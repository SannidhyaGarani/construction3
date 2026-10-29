import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { Loader2, Home, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';
import PageHero from '../Components/PageHero';

const ExteriorsPage = () => {
  const [exteriors, setExteriors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExteriors = async () => {
      try {
        const q = query(collection(db, 'exteriors'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(ext => ext.isActive !== false);
        setExteriors(data);
      } catch (error) {
        console.error("Error fetching exteriors", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExteriors();
  }, []);

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden font-sans">
      <PageHero
        title="Exterior Designs"
        subtitle="That Define Architecture"
        backgroundImage="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-10 md:py-12 lg:py-14 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#C8842A]" />
            <p className="text-[#C8842A] text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
              Facade Architecture
            </p>
          </div>
          <h2 className="text-slate-900 font-semibold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.2]">
            Explore our curated exterior designs
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="animate-spin text-[#C8842A]" size={38} strokeWidth={1.75} />
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Loading designs...</span>
          </div>
        ) : exteriors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {exteriors.map((ext) => (
              <Link
                key={ext.id}
                to={`/exteriors/${ext.id}`}
                className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/50 hover:shadow-[0_16px_36px_rgba(200,132,42,0.12)] transition-all duration-500 cursor-pointer flex flex-col h-full relative"
              >
                {/* Top Architectural Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Exterior Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={ext.exteriorImage || "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800"}
                    alt={ext.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-xs truncate max-w-[130px]">
                      {ext.style || "Modern Facade"}
                    </span>
                    {ext.area && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-md shadow-xs bg-slate-900/80 text-amber-300 border border-white/20 shrink-0">
                        {ext.area} SQFT
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-slate-900 font-semibold text-base sm:text-[17px] mb-1.5 group-hover:text-[#C8842A] transition-colors line-clamp-1 leading-snug">
                      {ext.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-3">
                      {ext.location ? `Location: ${ext.location}` : "Architectural facade rendering with high-spec thermal envelope"}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-[#C8842A] transition-colors">
                      View Elevation
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 group-hover:bg-[#C8842A] group-hover:text-white group-hover:border-[#C8842A] transition-all duration-300 shadow-2xs">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <Home className="text-[#C8842A] mb-3" size={48} strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-slate-900 mb-1">No exterior designs found</h3>
            <p className="text-slate-500 text-xs">Check back soon for updates to our elevation archive.</p>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
};

export default ExteriorsPage;
