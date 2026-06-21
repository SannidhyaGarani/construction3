import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { Loader2, ArrowLeft, ArrowUpRight } from 'lucide-react';

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4">
        <div className="w-12 h-12 border-2 border-neutral-200 border-t-black animate-spin rounded-none" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-neutral-500">Curating Space</span>
      </div>
    );
  }

  if (!interior) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-neutral-800">Concept Not Found</h2>
        <Link to="/interiors" className="border border-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Return to Gallery
        </Link>
      </div>
    );
  }

  const images = [interior.mainImage, interior.child1, interior.child2, interior.child3].filter(Boolean);

  return (
    <main className="bg-white min-h-screen pb-24">
      <PageHero
        title={interior.interiorType}
        subtitle="Bespoke Interior Concepts"
        backgroundImage={interior.mainImage}
      />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        {/* Navigation */}
        <Link to="/interiors" className="inline-flex items-center gap-3 text-neutral-400 hover:text-black transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Collection</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTENT LEFT */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-black" />
                <span className="uppercase tracking-[0.4em] text-[10px] text-neutral-500 font-bold">Design Details</span>
              </div>
              
              <h2 className="text-5xl font-light tracking-tight text-neutral-900 mb-8 uppercase">
                {interior.interiorType}
              </h2>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2 mb-12">
                {interior.keywords?.split(',').map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-[9px] uppercase tracking-widest text-neutral-500 font-semibold">
                    {kw.trim()}
                  </span>
                ))}
              </div>

              <p className="text-neutral-500 text-lg font-light leading-relaxed mb-12 italic">
                {interior.description}
              </p>
            </Reveal>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-neutral-200">
              <div className="py-8 border-b border-neutral-200 md:border-r md:pr-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Service Type</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">Interior Architecture</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:pl-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Views Available</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{images.length} Perspectives</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:border-r md:pr-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Category</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{interior.interiorType}</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:pl-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Concept ID</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">#{interior.id.slice(0, 5)}</span>
              </div>
            </div>

            {/* Premium CTA Button */}
            <button className="mt-12 w-full py-6 bg-black text-white uppercase text-[11px] tracking-[0.5em] font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-4 group">
              Enquire About This Concept 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* IMAGES RIGHT */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-12">
              {images.map((img, idx) => (
                <Reveal key={idx} delay={idx * 0.2}>
                  <div className="flex flex-col gap-4">
                    <div className="relative group overflow-hidden bg-neutral-100 border border-neutral-200">
                      <img 
                        src={img} 
                        alt={`Interior view ${idx + 1}`} 
                        className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                      />
                      <div className="absolute top-6 left-6 border-l border-t border-white/40 w-12 h-12 pointer-events-none" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-400 italic">Perspective {idx + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default InteriorDetail;
