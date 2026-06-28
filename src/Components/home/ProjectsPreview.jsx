import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { Loader2, ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectsPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, "projects"),
          orderBy("createdAt", "desc"),
          limit(8)
        );
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="bg-[#FAF9F6] py-14 md:py-16 font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-2.5">
              Featured Projects
            </p>
            <h2 className="text-[#111827] font-extrabold text-3xl md:text-[36px] tracking-tight">
              Building Excellence, Delivering Value
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#C8842A] text-sm font-bold hover:text-[#B37424] transition-colors group relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8842A] hover:after:w-full after:transition-all after:duration-300"
          >
            View All Projects <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Swiper */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="animate-spin text-gray-300" size={32} strokeWidth={1.5} />
          </div>
        ) : projects.length > 0 ? (
          <div className="relative">
            {/* Prev / Next */}
            <button className="swiper-prev-projects absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] transition-all shadow-sm rounded-md">
              <ChevronLeft size={16} />
            </button>
            <button className="swiper-next-projects absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] hover:text-[#C8842A] transition-all shadow-sm rounded-md">
              <ChevronRight size={16} />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={12}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".swiper-prev-projects",
                nextEl: ".swiper-next-projects",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 12 },
                1024: { slidesPerView: 4, spaceBetween: 14 },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-2.5 rounded-lg">
                      <img
                        src={project.projectImage}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-400" />
                      {/* Hover overlay label */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        <span className="inline-flex items-center gap-1.5 text-white text-sm font-bold uppercase tracking-wide">
                          View Project <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                    {/* Info */}
                    <div>
                      <h3 className="text-[#111827] font-bold text-sm mb-0.5 group-hover:text-[#C8842A] transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.location && (
                        <p className="text-[#9CA3AF] text-sm flex items-center gap-1">
                          <MapPin size={10} />
                          {project.location}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="py-12 text-center text-gray-300 text-sm">No Projects Yet</div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPreview;