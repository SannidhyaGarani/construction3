import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Loader2, ArrowLeft, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';

const ExteriorDetail = () => {
  const { id } = useParams();
  const [exterior, setExterior] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExterior = async () => {
      try {
        const docRef = doc(db, 'exteriors', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setExterior({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching exterior", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExterior();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4">
        <Loader2 className="animate-spin text-[#C8842A]" size={48} />
        <span className="text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em]">Retrieving design</span>
      </div>
    );
  }

  if (!exterior) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-bold text-[#111827]">Design Not Found</h2>
        <Link 
          to="/exteriors" 
          className="bg-[#111827] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#C8842A] transition-all"
        >
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white text-[#111827] overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={exterior.exteriorImage}
            alt={exterior.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-end h-full pb-16">
          <Link 
            to="/exteriors" 
            className="inline-flex items-center gap-2 text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em] mb-8 hover:text-[#C8842A] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Collection
          </Link>
          <div className="w-10 h-[3px] bg-[#C8842A] mb-6" />
          <h1 className="text-[#111827] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            {exterior.title}
          </h1>
          {exterior.description && (
            <p className="text-[#6B7280] text-lg max-w-2xl">
              {exterior.description}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAF9F6] rounded-2xl border border-gray-200/50 p-8">
              <h3 className="text-[#111827] font-bold text-xl mb-6">Details</h3>
              <div className="space-y-4">
                {exterior.style && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Architectural Style</span>
                    <span className="text-[#111827] font-medium">{exterior.style}</span>
                  </div>
                )}
                {exterior.area && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Total Area</span>
                    <span className="text-[#111827] font-medium">{exterior.area} sqft</span>
                  </div>
                )}
                {exterior.location && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Location</span>
                    <span className="text-[#111827] font-medium">{exterior.location}</span>
                  </div>
                )}
                {exterior.facing && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Facing</span>
                    <span className="text-[#111827] font-medium">{exterior.facing}</span>
                  </div>
                )}
              </div>
              <button className="mt-8 w-full bg-[#C8842A] text-white px-6 py-4 rounded-lg text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#111827] transition-all flex items-center justify-center gap-2">
                Request Full Specification <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/50">
                <img 
                  src={exterior.exteriorImage} 
                  alt={exterior.title} 
                  className="w-full h-auto" 
                />
              </div>
              {/* Keywords if available */}
              {exterior.keywords && (
                <div className="flex flex-wrap gap-2">
                  {exterior.keywords.split(',').map((kw, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-[#FAF9F6] border border-gray-200/50 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-[#6B7280]"
                    >
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default ExteriorDetail;
