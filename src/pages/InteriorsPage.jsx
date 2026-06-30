import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { Loader2, Sofa, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';
import PageHero from '../Components/PageHero';

const InteriorsPage = () => {
  const [interiors, setInteriors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInteriors = async () => {
      try {
        const q = query(collection(db, 'interiors'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setInteriors(data);
      } catch (error) {
        console.error("Error fetching interiors", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInteriors();
  }, []);

  return (
    <main className="bg-white text-[#111827] overflow-hidden">
      <PageHero 
        title="Interior Designs" 
        subtitle="That Define Luxury"
        backgroundImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="mb-10">
          <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-3.5">
            Our Portfolio
          </p>
          <h2 className="text-[#111827] font-extrabold text-3xl md:text-[40px] leading-[1.15] mb-5 tracking-tight">
            Explore our curated interior designs
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="animate-spin text-[#C8842A]" size={48} />
            <span className="text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em]">Loading designs...</span>
          </div>
        ) : interiors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {interiors.map((int, i) => (
              <Link
                key={int.id}
                to={`/interiors/${int.id}`}
                className="group relative block"
              >
                {/* Premium Container */}
                <div className="bg-[#FAF9F6] rounded-3xl p-4 border border-gray-100/80 shadow-sm hover:border-[#C8842A]/30 hover:shadow-xl hover:shadow-[#C8842A]/10 transition-all duration-500 overflow-hidden">
                  
                  {/* Accent Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8842A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Premium Image Frame */}
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gray-100 group-hover:shadow-inner transition-all duration-500">
                    <img
                      src={int.mainImage}
                      alt={int.interiorType}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-wider text-[#111827] border border-gray-100 shadow-sm">
                        {int.interiorType}
                      </span>
                    </div>
                    {/* Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                      <span className="text-white text-sm font-bold flex items-center gap-2">
                        View Details <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>

                  {/* Premium Content */}
                  <div className="pt-5 pb-3 relative z-10">
                    <h3 className="text-[#111827] font-bold text-lg mb-2 group-hover:text-[#C8842A] transition-colors duration-300">
                      {int.interiorType}
                    </h3>
                    <p className="text-[#6B7280] text-base mb-4">
                      Interior Architecture
                    </p>
                    
                    {/* Premium CTA Arrow */}
                    <div className="w-10 h-10 rounded-full bg-[#C8842A]/10 flex items-center justify-center text-[#C8842A] group-hover:bg-[#C8842A] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-[#FAF9F6] rounded-3xl border border-dashed border-gray-200">
            <Sofa className="text-[#C8842A] mb-5" size={72} />
            <h3 className="text-2xl font-bold text-[#111827] mb-3">No interior designs found</h3>
            <p className="text-[#6B7280] text-base">Check back soon for updates</p>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
};

export default InteriorsPage;
