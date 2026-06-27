import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import Reveal from '../Components/Reveal';
import { Loader2, ArrowLeft, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';

const InteriorDetail = () => {
  const { id } = useParams();
  const [interior, setInterior] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterior = async () => {
      try {
        const docRef = doc(db, 'interiors', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setInterior({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching interior", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInterior();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] gap-4">
        <Loader2 className="animate-spin text-[#D4AF37]" size={48} />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600">Curating Space</span>
      </div>
    );
  }

  if (!interior) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] gap-6 px-6">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-[#0A192F]">Concept Not Found</h2>
        <Link to="/interiors" className="border border-[#D4AF37] px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all">
          Return to Collection
        </Link>
      </div>
    );
  }

  const images = [interior.mainImage, interior.child1, interior.child2, interior.child3].filter(Boolean);

  return (
    <main className="bg-[#FAFAFA] text-[#0A192F] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#0A192F] text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${interior.mainImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/60 to-[#0A192F]/40" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto w-full h-full px-6 md:px-12 lg:px-20 flex flex-col justify-center">
          <Link to="/interiors" className="inline-flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Collection</span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
              Design Details
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-6">
            {interior.interiorType}
          </h1>
          {interior.keywords && (
            <div className="flex flex-wrap gap-3 mt-8">
              {interior.keywords.split(',').map((kw, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 text-[9px] uppercase tracking-widest text-white font-bold">
                  {kw.trim()}
                </span>
              ))}
            </div>
          )}
          {interior.description && (
            <p className="text-sm md:text-base text-white/70 font-light max-w-xl italic mt-8">
              {interior.description}
            </p>
          )}
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Specs Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-neutral-200 pt-10">
                <div className="bg-white border border-neutral-300 p-8 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold block mb-2">Service Type</span>
                  <span className="text-xl font-semibold text-[#0A192F] tracking-wide">Interior Architecture</span>
                </div>
                <div className="bg-white border border-neutral-300 p-8 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold block mb-2">Views Available</span>
                  <span className="text-xl font-semibold text-[#0A192F] tracking-wide">{images.length} Perspectives</span>
                </div>
                <div className="bg-white border border-neutral-300 p-8 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold block mb-2">Category</span>
                  <span className="text-xl font-semibold text-[#0A192F] tracking-wide">{interior.interiorType}</span>
                </div>
                <div className="bg-white border border-neutral-300 p-8 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold block mb-2">Concept ID</span>
                  <span className="text-xl font-semibold text-[#0A192F] tracking-wide">#{interior.id.slice(0, 5)}</span>
                </div>
              </div>

              <button className="mt-10 w-full py-6 bg-[#D4AF37] text-[#0A192F] uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-[#0A192F] hover:text-white transition-all flex items-center justify-center gap-3 group">
                Enquire About This Concept
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          {/* Images Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-10">
              {images.map((img, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <div className="flex flex-col gap-3">
                    <div className="relative group overflow-hidden bg-[#0A192F] border border-neutral-300">
                      <img 
                        src={img} 
                        alt={`Interior view ${i + 1}`} 
                        className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                      />
                      <div className="absolute top-6 left-6 border-l border-t border-white/20 w-8 h-8 pointer-events-none" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-600 italic">Perspective {i + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default InteriorDetail;