import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Thumbs, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import {
  Loader2,
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Mail
} from 'lucide-react';
import CTASection from '../Components/home/CTASection';
import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';

const collectionConfig = {
  floorplans: {
    dbCollection: 'floorPlans',
    label: 'Floor Plan',
    backPath: '/floorplans',
    getImages: (item) => [item.planImage, item.mapImage, item.exteriorImage].filter(Boolean),
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
      { label: 'Style', value: item.style },
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
    getImages: (item) => [item.mainImage, item.child1, item.child2, item.child3].filter(Boolean),
    getTitle: (item) => item.interiorType,
    getDescription: (item) => item.description,
    specs: (item) => [
      { label: 'Service', value: 'Interior Architecture' },
      { label: 'Views', value: [item.mainImage, item.child1, item.child2, item.child3].filter(Boolean).length + ' Perspectives' },
      { label: 'Category', value: item.interiorType },
      { label: 'Concept ID', value: item.id ? `#${item.id.slice(0, 5)}` : null }
    ],
    keywords: (item) => item.keywords
  },
  projects: {
    dbCollection: 'projects',
    label: 'Project',
    backPath: '/projects',
    getImages: (item) => [item.projectImage, item.groundFloorImage, item.firstFloorImage, item.additionalImage].filter(Boolean),
    getTitle: (item) => item.name,
    getDescription: (item) => item.description,
    specs: (item) => [
      { label: 'Category', value: 'Civil Engineering' },
      { label: 'Status', value: item.status || 'Completed' },
      { label: 'Updated', value: item.updatedAt?.toDate().toLocaleDateString() || 'Recently' },
      { label: 'Project ID', value: item.id ? `#${item.id.slice(0, 5)}` : null }
    ],
    keywords: () => null
  },
  blogs: {
    dbCollection: 'blogs',
    label: 'Blog',
    backPath: '/blogs',
    getImages: (item) => [item.blogImage].filter(Boolean),
    getTitle: (item) => item.title,
    getDescription: () => null,
    specs: (item) => [
      { label: 'Date', value: item.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
      { label: 'Author', value: 'Editorial Team' },
      { label: 'Read Time', value: '5 Min Read' }
    ],
    keywords: () => null,
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
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#FAFAFA] gap-4">
        <Loader2 className="animate-spin text-[#C8842A]" size={40} />
        <span className="text-[#111827] text-xs font-bold uppercase tracking-[0.2em]">Loading Details</span>
      </div>
    );
  }

  if (!item || !config) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#FAFAFA] gap-6 px-6">
        <h2 className="text-2xl font-bold text-[#111827]">Resource Not Found</h2>
        <Link 
          to={config?.backPath || '/'} 
          className="bg-[#111827] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8842A] transition-colors"
        >
          Return Home
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
    <main className="bg-[#FAFAFA] min-h-screen pb-24 lg:pb-0 font-sans text-[#111827]">
      {/* Page Hero Section */}
      <PageHero 
        title={title} 
        subtitle={config.label} 
      />
      
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Compact Breadcrumb for Mobile (Hidden on Desktop, as it's in the sidebar) */}
        <div className="lg:hidden mb-6">
          <Link to={config.backPath} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C8842A] transition-colors font-medium">
            <ArrowLeft size={16} /> Back to {config.label}s
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* LEFT COLUMN: Gallery & Content */}
          <div className="w-full lg:w-[60%] xl:w-[65%] space-y-6 lg:space-y-8">
            
            {/* Elegant Image Gallery */}
            {images.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                
                {/* Main Image Swiper */}
                <div className="relative group rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/60 shadow-sm">
                  <Swiper
                    modules={[Navigation, EffectFade, Thumbs, A11y]}
                    effect="fade"
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}
                    className="aspect-[4/3] md:aspect-[16/10] w-full"
                  >
                    {images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={img} alt={`${title} - View ${idx + 1}`} className="w-full h-full object-cover" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Glassmorphism Navigation */}
                  {images.length > 1 && (
                    <>
                      <button className="gallery-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md text-gray-900 border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105">
                        <ChevronLeft size={20} />
                      </button>
                      <button className="gallery-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md text-gray-900 border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105">
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Compact Thumbnails */}
                {images.length > 1 && (
                  <div className="h-16 md:h-20">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      modules={[Thumbs]}
                      spaceBetween={12}
                      slidesPerView="auto"
                      watchSlidesProgress
                      className="h-full"
                    >
                      {images.map((img, idx) => (
                        <SwiperSlide key={idx} className="!w-24 md:!w-32 h-full">
                          <div className={`w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'ring-2 ring-[#C8842A] ring-offset-2 scale-[0.98]' : 'opacity-60 hover:opacity-100'}`}>
                            <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </motion.div>
            )}

            {/* Main Content / Blog Text */}
            {isBlog && content && (
              <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="prose prose-lg prose-gray max-w-none prose-p:leading-relaxed prose-a:text-[#C8842A]">
                <div className="whitespace-pre-wrap text-gray-700">{content}</div>
              </motion.article>
            )}

            {/* Keywords */}
            {keywords && (
              <div className="flex flex-wrap gap-2 pt-4">
                {keywords.split(',').map((kw, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:border-[#C8842A] hover:text-[#C8842A] transition-colors cursor-default">
                    {kw.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Info Panel */}
          <div className="w-full lg:w-[40%] xl:w-[35%]">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-8 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {/* Desktop Breadcrumb */}
              <div className="hidden lg:block mb-8">
                <Link to={config.backPath} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-[#C8842A] transition-colors">
                  <ArrowLeft size={14} /> Back to {config.label}s
                </Link>
              </div>

              {/* Description */}
              <div className="mb-8">
                {description && (
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>

              {/* Specs Dictionary */}
              <div className="space-y-4 mb-10">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 group">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{spec.label}</span>
                    <span className="text-sm font-medium text-gray-900 text-right max-w-[60%]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                {!isBlog ? (
                  <button className="w-full group bg-gray-900 hover:bg-[#C8842A] text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-[#C8842A]/20">
                    Discuss this {config.label}
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                ) : (
                  <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <label className="text-xs font-bold text-gray-900 uppercase tracking-wider block ml-1">Stay Updated</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all" 
                      />
                    </div>
                    <button className="w-full bg-gray-900 hover:bg-[#C8842A] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2">
                      Subscribe <ArrowUpRight size={16} />
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      <CTASection />

      {/* Mobile Fixed Bottom CTA Bar (App-like feel) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_40px_rgb(0,0,0,0.05)]">
        {!isBlog ? (
          <button className="w-full bg-gray-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Discuss this {config.label} <ArrowUpRight size={16} />
          </button>
        ) : (
          <button className="w-full bg-[#C8842A] text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Subscribe to Newsletter <Mail size={16} />
          </button>
        )}
      </div>

    </main>
  );
};

export default UniversalDetail;