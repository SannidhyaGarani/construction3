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
    <main className="bg-white text-[#111827] overflow-hidden">
      <PageHero 
        title="Exterior Designs" 
        subtitle="That Define Architecture"
        backgroundImage="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="mb-10">
          <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-3.5">
            Our Portfolio
          </p>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[40px] leading-[1.15] mb-5 tracking-tight">
            Explore our curated exterior designs
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="animate-spin text-[#C8842A]" size={48} />
            <span className="text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em]">Loading designs...</span>
          </div>
        ) : exteriors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exteriors.map((ext, i) => (
              <Link
                key={ext.id}
                to={`/exteriors/${ext.id}`}
                className="group relative block"
              >
                <div className="relative bg-white rounded-2xl border border-gray-200/50 shadow-[0_12px_40px_rgba(17,24,39,0.02)] overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={ext.exteriorImage}
                      alt={ext.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <span className="text-[#C8842A] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{ext.style}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-[#111827] font-bold text-xl">{ext.title}</h3>
                      <p className="text-[#6B7280] text-sm">{ext.location}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">View Details</span>
                      <ArrowUpRight size={18} className="text-[#C8842A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-[#FAF9F6] rounded-2xl border border-dashed border-gray-300">
            <Home className="text-[#9CA3AF] mb-4" size={64} />
            <h3 className="text-xl font-bold text-[#111827] mb-2">No exterior designs found</h3>
            <p className="text-[#6B7280] text-sm">Check back soon for updates</p>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
};

export default ExteriorsPage;
