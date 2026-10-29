import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/BackToTop";
import Preloader from "./Components/Preloader";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./Components/Notfound.jsx"));

// New Frontend Pages
const FloorPlansPage = lazy(() => import("./pages/FloorPlansPage"));
const ExteriorsPage = lazy(() => import("./pages/ExteriorsPage"));
const InteriorsPage = lazy(() => import("./pages/InteriorsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

// New Detail Pages
const UniversalDetail = lazy(() => import("./pages/UniversalDetail"));

// Admin Panel Pages
const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const Overview = lazy(() => import("./admin/pages/Overview"));
const FloorPlans = lazy(() => import("./admin/pages/FloorPlans"));
const Exteriors = lazy(() => import("./admin/pages/Exteriors"));
const Interiors = lazy(() => import("./admin/pages/Interiors"));
const Projects = lazy(() => import("./admin/pages/Projects"));
const Blogs = lazy(() => import("./admin/pages/Blogs"));
const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"));
const AdminSignup = lazy(() => import("./admin/pages/AdminSignup"));

// Clean elegant PageLoader fallback matching Naksha Dynamic luxury branding
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-transparent py-20">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 border-2 border-[#C8842A]/20 rounded-full animate-ping opacity-75"></div>
      <div className="w-12 h-12 border-2 border-gray-100 border-t-[#C8842A] rounded-full animate-spin"></div>
    </div>
    <span className="mt-6 text-[10px] tracking-[0.4em] uppercase font-bold text-gray-400 animate-pulse">
      Loading Naksha Dynamic...
    </span>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <AuthProvider>
      {!isAdminPath && <Header />}
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* New Portfolio Routes */}
          <Route path="/floorplans" element={<FloorPlansPage />} />
          <Route path="/floorplans/:id" element={<UniversalDetail />} />
          <Route path="/exteriors" element={<ExteriorsPage />} />
          <Route path="/exteriors/:id" element={<UniversalDetail />} />
          <Route path="/interiors" element={<InteriorsPage />} />
          <Route path="/interiors/:id" element={<UniversalDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<UniversalDetail />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<UniversalDetail />} />

          {/* Admin Auth Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="floor-plans" element={<FloorPlans />} />
            <Route path="exteriors" element={<Exteriors />} />
            <Route path="interiors" element={<Interiors />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!isAdminPath && <Footer />}
    </AuthProvider>
  );
}

export default App;
