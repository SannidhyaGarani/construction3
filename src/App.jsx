import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/BackToTop";
import Preloader from "./Components/Preloader";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./Components/Notfound.jsx";

// New Frontend Pages
import FloorPlansPage from "./pages/FloorPlansPage";
import ExteriorsPage from "./pages/ExteriorsPage";
import InteriorsPage from "./pages/InteriorsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogsPage from "./pages/BlogsPage";

// New Detail Pages
import FloorPlanDetail from "./pages/FloorPlanDetail";
import ExteriorDetail from "./pages/ExteriorDetail";
import InteriorDetail from "./pages/InteriorDetail";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";

// Admin Panel
import AdminLayout from "./admin/AdminLayout";
import Overview from "./admin/pages/Overview";
import FloorPlans from "./admin/pages/FloorPlans";
import Exteriors from "./admin/pages/Exteriors";
import Interiors from "./admin/pages/Interiors";
import Projects from "./admin/pages/Projects";
import Blogs from "./admin/pages/Blogs";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminSignup from "./admin/pages/AdminSignup";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

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

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* New Portfolio Routes */}
        <Route path="/floorplans" element={<FloorPlansPage />} />
        <Route path="/floorplans/:id" element={<FloorPlanDetail />} />
        <Route path="/exteriors" element={<ExteriorsPage />} />
        <Route path="/exteriors/:id" element={<ExteriorDetail />} />
        <Route path="/interiors" element={<InteriorsPage />} />
        <Route path="/interiors/:id" element={<InteriorDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

        {/* Admin Auth Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}

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

      {!isAdminPath && <Footer />}
    </AuthProvider>
  );
}

export default App;
