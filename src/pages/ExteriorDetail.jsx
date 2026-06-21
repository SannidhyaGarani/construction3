import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { Loader2, ArrowLeft, ArrowUpRight } from 'lucide-react';

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
        <div className="w-12 h-12 border-2 border-neutral-200 border-t-black animate-spin rounded-none" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-neutral-500">Retrieving Blueprint</span>
      </div>
    );
  }

  if (!exterior) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-neutral-800">Project Not Found</h2>
        <Link to="/exteriors" className="border border-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Return to Gallery
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Hero Section - Keeping PageHero but ensuring it's sharp */}
      <PageHero
        title={exterior.title}
        subtitle={exterior.style}
        backgroundImage={exterior.exteriorImage}
      />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        {/* Navigation */}
        <Link to="/exteriors" className="inline-flex items-center gap-3 text-neutral-400 hover:text-black transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Collection</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTENT LEFT */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-black" />
                <span className="uppercase tracking-[0.4em] text-[10px] text-neutral-500 font-bold">Project Details</span>
              </div>
              
              <h2 className="text-5xl font-light tracking-tight text-neutral-900 mb-8 uppercase">
                {exterior.title}
              </h2>

              {exterior.description && (
                <p className="text-neutral-500 text-lg font-light leading-relaxed mb-12 italic">
                  {exterior.description}
                </p>
              )}

              {/* Tag Cloud - Sharp Edges */}
              <div className="flex flex-wrap gap-2 mb-12">
                {exterior.keywords?.split(',').map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-[9px] uppercase tracking-widest text-neutral-500 font-semibold">
                    {kw.trim()}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-neutral-200">
              <div className="py-8 border-b border-neutral-200 md:border-r md:pr-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Architectural Style</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{exterior.style}</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:pl-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Total Area</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{exterior.area ? `${exterior.area} sq.ft` : 'TBD'}</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:border-r md:pr-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Dimensions</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">
                  {exterior.width && exterior.length ? `${exterior.width} x ${exterior.length} ft` : exterior.facing}
                </span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:pl-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Location</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{exterior.location}</span>
              </div>
            </div>

            {/* Premium CTA Button */}
            <button className="mt-12 w-full py-6 bg-black text-white uppercase text-[11px] tracking-[0.5em] font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-4 group">
              Request Full Specification 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* IMAGE RIGHT */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-8">
                <div className="relative group overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img 
                    src={exterior.exteriorImage} 
                    alt={exterior.title} 
                    className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                  />
                  {/* Technical Overlay Decor */}
                  <div className="absolute top-6 left-6 border-l border-t border-white/40 w-12 h-12 pointer-events-none" />
                  <div className="absolute bottom-6 right-6 border-r border-b border-white/40 w-12 h-12 pointer-events-none" />
                </div>
                
                {/* Image Caption */}
                <div className="flex justify-between items-center text-neutral-400">
                  <span className="text-[9px] uppercase tracking-widest italic">High-Resolution Exterior Render</span>
                  <span className="text-[9px] uppercase tracking-widest">© Architectural Studio 2024</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ExteriorDetail;