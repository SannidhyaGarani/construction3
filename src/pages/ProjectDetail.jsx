import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { Loader2, ArrowLeft, ArrowUpRight } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching project", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4">
        <div className="w-12 h-12 border-2 border-neutral-200 border-t-black animate-spin rounded-none" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-neutral-500">Retrieving Project</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-neutral-800">Project Not Found</h2>
        <Link to="/projects" className="border border-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Return to Gallery
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-24">
      <PageHero
        title={project.name}
        subtitle="Flagship Architectural Delivery"
        backgroundImage={project.projectImage}
      />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        {/* Navigation */}
        <Link to="/projects" className="inline-flex items-center gap-3 text-neutral-400 hover:text-black transition-colors mb-12 group">
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
                {project.name}
              </h2>

              <p className="text-neutral-500 text-lg font-light leading-relaxed mb-12 italic">
                {project.description}
              </p>
            </Reveal>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-neutral-200">
              <div className="py-8 border-b border-neutral-200 md:border-r md:pr-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Category</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">Civil Engineering</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:pl-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Current Status</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{project.status || 'Completed'}</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:border-r md:pr-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Last Update</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">{project.updatedAt?.toDate().toLocaleDateString() || 'Recently'}</span>
              </div>
              <div className="py-8 border-b border-neutral-200 md:pl-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-2">Project ID</span>
                <span className="text-xl font-medium text-neutral-800 uppercase">#{project.id.slice(0, 5)}</span>
              </div>
            </div>

            {/* Premium CTA Button */}
            <button className="mt-12 w-full py-6 bg-black text-white uppercase text-[11px] tracking-[0.5em] font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-4 group">
              Request Project Folio 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* IMAGES RIGHT */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-8">
                
                {/* Main Project Image */}
                <div className="relative group overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img 
                    src={project.projectImage} 
                    alt={project.name} 
                    className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6 border-l border-t border-white/40 w-12 h-12 pointer-events-none" />
                  <div className="absolute bottom-6 right-6 border-r border-b border-white/40 w-12 h-12 pointer-events-none" />
                </div>

                {/* Ground Floor Image */}
                {project.groundFloorImage && (
                  <div className="relative group overflow-hidden bg-neutral-100 border border-neutral-200">
                    <img 
                      src={project.groundFloorImage} 
                      alt="Ground Floor" 
                      className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                    />
                    <div className="absolute top-6 left-6 text-[9px] uppercase tracking-widest bg-black/50 text-white px-4 py-2 backdrop-blur-sm">
                      Ground Floor
                    </div>
                  </div>
                )}

                {/* First Floor Image */}
                {project.firstFloorImage && (
                  <div className="relative group overflow-hidden bg-neutral-100 border border-neutral-200">
                    <img 
                      src={project.firstFloorImage} 
                      alt="First Floor" 
                      className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                    />
                    <div className="absolute top-6 left-6 text-[9px] uppercase tracking-widest bg-black/50 text-white px-4 py-2 backdrop-blur-sm">
                      First Floor
                    </div>
                  </div>
                )}

                {/* Additional Perspective */}
                {project.additionalImage && (
                  <div className="relative group overflow-hidden bg-neutral-100 border border-neutral-200">
                    <img 
                      src={project.additionalImage} 
                      alt="Additional Perspective" 
                      className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                    />
                    <div className="absolute top-6 left-6 text-[9px] uppercase tracking-widest bg-black/50 text-white px-4 py-2 backdrop-blur-sm">
                      Additional Perspective
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center text-neutral-400">
                  <span className="text-[9px] uppercase tracking-widest italic">High-Fidelity Architectural Assets</span>
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

export default ProjectDetail;
