import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { Loader2, Briefcase } from 'lucide-react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="bg-[#F6F4EF] min-h-screen pb-24">
      <PageHero 
        title="Projects." 
        subtitle="Flagship Delivery"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-24">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold block mb-8">
              Legacy of Delivery
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] text-neutral-800">
              Transforming cityscapes <br />
              <span className="italic text-stone-400 font-light">one landmark at a time.</span>
            </h2>
          </Reveal>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
            <Loader2 className="animate-spin" size={48} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Loading projects...</span>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10">
            {projects.map((proj, i) => (
              <Reveal key={proj.id} delay={i * 0.08}>
                <Link
                  to={`/projects/${proj.id}`}
                  className="group relative block"
                >
                  {/* CARD CONTAINER */}
                  <div className="relative bg-white/60 backdrop-blur-xl border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    {/* IMAGE */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={proj.projectImage}
                        alt={proj.name}
                        className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
                      />

                      {/* DARK GRADIENT OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />

                      {/* CATEGORY BADGE */}
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-white/20 border border-white/20 px-4 py-1 text-[10px] tracking-[0.3em] uppercase text-white">
                        Civil Engineering
                      </div>

                      {/* HOVER BORDER FRAME */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-3 border border-white/0 group-hover:border-white/40 transition-all duration-500" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col gap-4">

                      {/* TITLE */}
                      <div>
                        <h3 className="text-[13px] font-semibold tracking-[0.25em] uppercase text-neutral-900 leading-tight">
                          {proj.name}
                        </h3>

                        {/* STATUS */}
                        <div className="flex items-center gap-3 mt-2">
                          <span className="h-[1px] w-6 bg-neutral-300"></span>
                          <p className="text-[10px] uppercase text-neutral-500 tracking-[0.2em]">
                            {proj.status || 'Completed'}
                          </p>
                        </div>
                      </div>

                      {/* BOTTOM BAR */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">

                        {/* LEFT INFO */}
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase text-neutral-400 tracking-widest">
                            Updated
                          </span>
                          <span className="text-[12px] font-semibold text-neutral-800 tracking-wide">
                            {proj.updatedAt?.toDate().toLocaleDateString() || 'Recently'}
                          </span>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-black transition-all duration-300">
                          <span className="text-[9px] uppercase tracking-[0.3em]">
                            View
                          </span>

                          <div className="relative w-6 h-[1px] bg-neutral-300 overflow-hidden">
                            <div className="absolute left-0 top-0 w-full h-full bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                          </div>

                          <svg
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M17 7l-10 10M17 7H7M17 7v10" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM GLOW LINE */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-48 text-center bg-white rounded-[40px] border border-dashed border-neutral-200">
            <Briefcase className="text-neutral-200 mb-6" size={64} />
            <h3 className="text-2xl font-serif text-neutral-400">No projects found</h3>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProjectsPage;
