import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import { Loader2, ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(8));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (!loading && blogs.length === 0) return null;

  return (
    <section className="bg-[#FAF9F6] py-14 md:py-16 font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[#C8842A] text-sm font-bold uppercase tracking-[0.3em] mb-2.5">
              Latest Blogs
            </p>
            <h2 className="text-[#111827] font-extrabold text-3xl md:text-[36px] tracking-tight">
              Insights & Updates
            </h2>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#C8842A] text-sm font-bold hover:text-[#B37424] transition-colors group relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8842A] hover:after:w-full after:transition-all after:duration-300"
          >
            View All Blogs <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Swiper */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="animate-spin text-gray-300" size={32} strokeWidth={1.5} />
          </div>
        ) : (
          <div className="relative">
            <button className="swiper-prev-blogs absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] transition-all shadow-sm rounded-md">
              <ChevronLeft size={16} />
            </button>
            <button className="swiper-next-blogs absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-9 h-9 bg-white border border-gray-200 flex items-center justify-center hover:border-[#C8842A] transition-all shadow-sm rounded-md">
              <ChevronRight size={16} />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={12}
              navigation={{
                prevEl: ".swiper-prev-blogs",
                nextEl: ".swiper-next-blogs",
              }}
              pagination={{ clickable: true, bulletActiveClass: "bullet-active-blog" }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 12 },
                1024: { slidesPerView: 3, spaceBetween: 16 },
                1280: { slidesPerView: 4, spaceBetween: 16 },
              }}
              className="!pb-10"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="group flex flex-col bg-white border border-gray-100/80 hover:border-[#C8842A]/40 hover:shadow-lg hover:shadow-[#C8842A]/[0.04] transition-all duration-400 rounded-lg overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={blog.blogImage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[#C8842A] text-sm mb-2">
                        <Calendar size={11} />
                        <span className="font-bold uppercase tracking-wide">
                          {blog.createdAt?.toDate().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <h3 className="text-[#111827] font-bold text-sm leading-snug line-clamp-3 group-hover:text-[#C8842A] transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-3 text-[#C8842A] text-sm font-bold">
                        Read More <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      <style>{`
        .bullet-active-blog { background: #C8842A !important; width: 20px !important; border-radius: 4px !important; }
      `}</style>
    </section>
  );
};

export default RecentBlogs;