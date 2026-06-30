import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Loader2, ArrowLeft, ArrowUpRight } from 'lucide-react';
import CTASection from '../Components/home/CTASection';

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
        <Loader2 className="animate-spin text-[#C8842A]" size={48} />
        <span className="text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em]">Retrieving project</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-bold text-[#111827]">Project Not Found</h2>
        <Link 
          to="/projects" 
          className="bg-[#111827] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#C8842A] transition-all"
        >
          Return to Collection
        </Link>
      </div>
    );
  }

  const images = [
    project.projectImage,
    project.groundFloorImage,
    project.firstFloorImage,
    project.additionalImage
  ].filter(Boolean);

  return (
    <main className="bg-white text-[#111827] overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.projectImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-end h-full pb-16">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em] mb-8 hover:text-[#C8842A] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Collection
          </Link>
          <div className="w-10 h-[3px] bg-[#C8842A] mb-6" />
          <h1 className="text-[#111827] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            {project.name}
          </h1>
          {project.description && (
            <p className="text-[#6B7280] text-lg max-w-2xl">
              {project.description}
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
              <h3 className="text-[#111827] font-bold text-xl mb-6">Specifications</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Category</span>
                  <span className="text-[#111827] font-medium">Civil Engineering</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Current Status</span>
                  <span className="text-[#111827] font-medium">{project.status || 'Completed'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Last Update</span>
                  <span className="text-[#111827] font-medium">{project.updatedAt?.toDate().toLocaleDateString() || 'Recently'}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em]">Project ID</span>
                  <span className="text-[#111827] font-medium">#{project.id.slice(0, 5)}</span>
                </div>
              </div>
              <button className="mt-8 w-full bg-[#C8842A] text-white px-6 py-4 rounded-lg text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#111827] transition-all flex items-center justify-center gap-2">
                Request Project Folio <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {images.map((img, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden border border-gray-200/50">
                  <img 
                    src={img} 
                    alt={`Project view ${i + 1}`} 
                    className="w-full h-auto" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default ProjectDetail;
