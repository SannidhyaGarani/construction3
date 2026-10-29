import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 gap-3">
        <Loader2 className="animate-spin text-[#C8842A]" size={38} strokeWidth={1.75} />
        <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Loading Specifications...</span>
      </div>
    );
  }

  if (!item || !config) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 gap-5 px-6">
        <h2 className="text-2xl font-semibold text-slate-900">Resource Not Found</h2>
        <Link 
          to={config?.backPath || '/'} 
          className="bg-[#111827] text-white px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#C8842A] transition-colors"
        >
          Return to Catalogue
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
    <main className="bg-white min-h-screen pb-20 lg:pb-0 font-sans text-slate-900 overflow-x-hidden">
      {/* Page Hero Section */}
      <PageHero 
        title={title} 
        subtitle={config.label} 
      />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">
        
        {/* Compact Breadcrumb for Mobile */}
        <div className="lg:hidden mb-5">
          <Link to={config.backPath} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#C8842A] transition-colors">
            <ArrowLeft size={14} /> Back to {config.label}s
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Gallery & Content */}
          <div className="w-full lg:w-[60%] xl:w-[65%] space-y-6">
            
            {/* Elegant Image Gallery */}
            {images.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-3.5">
                
                {/* Main Image Swiper */}
                <div className="relative group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                  {/* Top Architectural Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] z-20" />

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
                  
                  {/* Glassmorphism Navigation Controls */}
                  {images.length > 1 && (
                    <>
                      <button className="gallery-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-[#C8842A] hover:border-[#C8842A]">
                        <ChevronLeft size={20} />
                      </button>
                      <button className="gallery-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-[#C8842A] hover:border-[#C8842A]">
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
                      spaceBetween={10}
                      slidesPerView="auto"
                      watchSlidesProgress
                      className="h-full"
                    >
                      {images.map((img, idx) => (
                        <SwiperSlide key={idx} className="!w-20 md:!w-28 h-full">
                          <div className={`w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border ${activeIndex === idx ? 'ring-2 ring-[#C8842A] border-transparent scale-[0.98]' : 'opacity-60 hover:opacity-100 border-slate-200'}`}>
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
              <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="prose prose-slate max-w-none prose-headings:font-semibold prose-p:leading-relaxed prose-a:text-[#C8842A] pt-4">
                <div className="whitespace-pre-wrap text-slate-700 leading-relaxed text-sm sm:text-base">{content}</div>
              </motion.article>
            )}

            {/* Keywords */}
            {keywords && (
              <div className="flex flex-wrap gap-2 pt-2">
                {keywords.split(',').map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200/90 rounded-md text-[11px] font-semibold uppercase tracking-wider text-slate-600 hover:border-[#C8842A]/40 hover:text-[#C8842A] transition-colors cursor-default">
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
              className="lg:sticky lg:top-8 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden"
            >
              {/* Top Architectural Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]" />

              {/* Desktop Breadcrumb */}
              <div className="hidden lg:block mb-6">
                <Link to={config.backPath} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#C8842A] transition-colors">
                  <ArrowLeft size={13} /> Back to {config.label}s
                </Link>
              </div>

              {/* Description */}
              {description && (
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8842A] mb-2">Project Brief</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              )}

              {/* Specs Dictionary */}
              <div className="space-y-3 mb-8">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0 group">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{spec.label}</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-900 text-right max-w-[65%]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                {!isBlog ? (
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full group bg-[#111827] hover:bg-[#C8842A] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
                  >
                    <span>Consult on this {config.label}</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                ) : (
                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <label className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">Stay Informed</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#C8842A] transition-all" 
                      />
                    </div>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full bg-[#111827] hover:bg-[#C8842A] text-white px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Subscribe & Contact <ArrowUpRight size={14} />
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      <CTASection />

      {/* Mobile Fixed Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3.5 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        {!isBlog ? (
          <button 
            onClick={() => navigate('/contact')}
            className="w-full bg-[#111827] active:bg-[#C8842A] text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Consult on this {config.label}</span>
            <ArrowUpRight size={15} />
          </button>
        ) : (
          <button 
            onClick={() => navigate('/contact')}
            className="w-full bg-[#C8842A] text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Studio</span>
            <Mail size={15} />
          </button>
        )}
      </div>

    </main>
  );
};

export default UniversalDetail;