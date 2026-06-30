
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Thumbs
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {
  Loader2,
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  User,
  Clock,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import CTASection from '../Components/home/CTASection';
import { motion, AnimatePresence } from 'framer-motion';

const collectionConfig = {
  floorplans: {
    dbCollection: 'floorPlans',
    label: 'Floor Plan',
    backPath: '/floorplans',
    getImages: (item) => [
      item.planImage,
      item.mapImage,
      item.exteriorImage
    ].filter(Boolean),
    getTitle: (item) => item.title,
    getDescription: (item) => item.description,
    specs: (item) => [
      { label: 'Category', value: item.planType },
      { label: 'Dimensions', value: item.width && item.length ? `${item.width} × ${item.length} ft` : null },
      { label: 'Total Area', value: item.width && item.length ? `${item.width * item.length} sqft` : null },
      { label: 'Style', value: item.style }
    ],
    keywords: (item) => item.keywords
  },
  exteriors: {
    dbCollection: 'exteriors',
    label: 'Exterior Design',
    backPath: '/exteriors',
    getImages: (item) => [item.exteriorImage].filter(Boolean),
    getTitle: (item) => item.title,
    getDescription: (item) => item.description,
    specs: (item) => [
      { label: 'Architectural Style', value: item.style },
      { label: 'Total Area', value: item.area ? `${item.area} sqft` : null },
      { label: 'Location', value: item.location },
      { label: 'Facing', value: item.facing }
    ],
    keywords: (item) => item.keywords
  },
  interiors: {
    dbCollection: 'interiors',
    label: 'Interior Concept',
    backPath: '/interiors',
    getImages: (item) => [
      item.mainImage,
      item.child1,
      item.child2,
      item.child3
    ].filter(Boolean),
    getTitle: (item) => item.interiorType,
    getDescription: (item) => item.description,
    specs: (item) => [
      { label: 'Service Type', value: 'Interior Architecture' },
      { label: 'Views Available', value: [item.mainImage, item.child1, item.child2, item.child3].filter(Boolean).length + ' Perspectives' },
      { label: 'Category', value: item.interiorType },
      { label: 'Concept ID', value: item.id ? `#${item.id.slice(0, 5)}` : null }
    ],
    keywords: (item) => item.keywords
  },
  projects: {
    dbCollection: 'projects',
    label: 'Project',
    backPath: '/projects',
    getImages: (item) => [
      item.projectImage,
      item.groundFloorImage,
      item.firstFloorImage,
      item.additionalImage
    ].filter(Boolean),
    getTitle: (item) => item.name,
    getDescription: (item) => item.description,
    specs: (item) => [
      { label: 'Category', value: 'Civil Engineering' },
      { label: 'Current Status', value: item.status || 'Completed' },
      { label: 'Last Update', value: item.updatedAt?.toDate().toLocaleDateString() || 'Recently' },
      { label: 'Project ID', value: item.id ? `#${item.id.slice(0, 5)}` : null }
    ],
    keywords: (item) => null
  },
  blogs: {
    dbCollection: 'blogs',
    label: 'Blog',
    backPath: '/blogs',
    getImages: (item) => [item.blogImage].filter(Boolean),
    getTitle: (item) => item.title,
    getDescription: (item) => null,
    specs: (item) => [
      { label: 'Date', value: item.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
      { label: 'Author', value: 'Editorial Team' },
      { label: 'Read Time', value: '5 Min Read' }
    ],
    keywords: (item) => null,
    isBlog: true,
    getContent: (item) => item.content
  }
};

const UniversalDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Determine which collection config to use based on path
  const getConfigFromPath = () => {
    if (location.pathname.includes('floorplans')) return collectionConfig.floorplans;
    if (location.pathname.includes('exteriors')) return collectionConfig.exteriors;
    if (location.pathname.includes('interiors')) return collectionConfig.interiors;
    if (location.pathname.includes('projects')) return collectionConfig.projects;
    if (location.pathname.includes('blogs')) return collectionConfig.blogs;
    return null;
  };

  const config = getConfigFromPath();

  useEffect(() => {
    if (!config) return;

    const fetchData = async () => {
      try {
        const docRef = doc(db, config.dbCollection, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, config]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4">
        <Loader2 className="animate-spin text-[#C8842A]" size={48} />
        <span className="text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em]">Loading...</span>
      </div>
    );
  }

  if (!item || !config) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-6">
        <h2 className="text-3xl font-bold text-[#111827]">Not Found</h2>
        <Link 
          to={config?.backPath || '/'} 
          className="bg-[#111827] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#C8842A] transition-all"
        >
          Back
        </Link>
      </div>
    );
  }

  const images = config.getImages(item);
  const title = config.getTitle(item);
  const description = config.getDescription(item);
  const specs = config.specs(item).filter(spec => spec.value);
  const keywords = config.keywords(item);
  const isBlog = config.isBlog;
  const content = config.getContent?.(item);

  return (
    <main className="bg-white text-[#111827] overflow-hidden">
      {/* Hero with Premium Gradient */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to={config.backPath} 
              className="inline-flex items-center gap-2 text-[#6B7280] text-sm font-bold uppercase tracking-[0.3em] mb-8 hover:text-[#C8842A] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Collection
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[3px] bg-[#C8842A]" />
              <span className="text-[#C8842A] text-xs font-bold uppercase tracking-[0.4em]">
                {config.label}
              </span>
            </div>

            <h1 className="text-[#111827] font-extrabold text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-[#6B7280] text-lg md:text-xl max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Image Gallery (Premium) */}
            <div className="lg:col-span-8 space-y-6">
              {images.length > 0 && (
                <div className="space-y-4">
                  {/* Main Slider */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <Swiper
                      modules={[Navigation, Pagination, EffectFade, Thumbs, A11y]}
                      spaceBetween={0}
                      slidesPerView={1}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      navigation={{
                        prevEl: '.custom-swiper-prev',
                        nextEl: '.custom-swiper-next',
                      }}
                      pagination={{
                        clickable: true,
                        el: '.custom-swiper-pagination',
                        bulletActiveClass: '!bg-[#C8842A] !w-8 !rounded-full',
                        bulletClass: '!bg-gray-300 !w-2 !h-2 !rounded-full transition-all',
                      }}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                      loop={true}
                      onSlideChange={(swiper) => setSelectedImageIndex(swiper.realIndex)}
                      className="aspect-[4/3]"
                    >
                      {images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <img 
                              src={img} 
                              alt={`${title} - ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    
                    {/* Custom Navigation Buttons */}
                    <button className="custom-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-[#C8842A] text-[#111827] hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                      <ChevronLeft size={24} />
                    </button>
                    <button className="custom-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-[#C8842A] text-[#111827] hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="px-2">
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        modules={[Navigation, Thumbs]}
                        spaceBetween={12}
                        slidesPerView={4}
                        watchSlidesProgress
                        className="h-24"
                      >
                        {images.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div 
                              className={`w-full h-full rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                                selectedImageIndex === index 
                                  ? 'border-[#C8842A] shadow-lg scale-105' 
                                  : 'border-transparent hover:border-gray-300'
                              }`}
                            >
                              <img 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}

                  {/* Custom Pagination */}
                  <div className="custom-swiper-pagination flex justify-center mt-4" />
                </div>
              )}

              {/* Blog Content (if it's a blog) */}
              {isBlog && content && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-12"
                >
                  <div className="text-[#6B7280] leading-relaxed text-lg md:text-xl space-y-6 whitespace-pre-wrap max-w-4xl">
                    {content}
                  </div>
                </motion.div>
              )}

              {/* Keywords */}
              {keywords && (
                <div className="flex flex-wrap gap-3 mt-10">
                  {keywords.split(',').map((kw, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2 bg-gradient-to-r from-[#FAF9F6] to-gray-100 border border-gray-200/50 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-[#6B7280] hover:border-[#C8842A] hover:text-[#C8842A] transition-all"
                    >
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Specs & Actions (Premium Sidebar) */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="bg-gradient-to-br from-[#FAF9F6] to-white rounded-3xl border border-gray-100 p-8 shadow-xl">
                  <h3 className="text-[#111827] font-bold text-2xl mb-8 flex items-center gap-2">
                    <span className="w-2 h-8 bg-[#C8842A] rounded-full" />
                    Specifications
                  </h3>
                  
                  <div className="space-y-6">
                    {specs.map((spec, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="group"
                      >
                        <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em] block mb-2 group-hover:text-[#C8842A] transition-colors">
                          {spec.label}
                        </span>
                        <span className="text-[#111827] font-medium text-lg block">
                          {spec.value}
                        </span>
                        {index < specs.length - 1 && (
                          <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mt-4" />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 space-y-4">
                    {!isBlog ? (
                      <button className="w-full bg-gradient-to-r from-[#C8842A] to-amber-700 text-white px-6 py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.3em] hover:shadow-2xl hover:shadow-[#C8842A]/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                        Get in Touch
                        <ArrowUpRight size={16} />
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6">
                          <label className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C8842A] focus:ring-2 focus:ring-[#C8842A]/20 transition-all" 
                          />
                        </div>
                        <button className="w-full bg-gradient-to-r from-[#C8842A] to-amber-700 text-white px-6 py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.3em] hover:shadow-2xl hover:shadow-[#C8842A]/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                          Subscribe
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default UniversalDetail;
