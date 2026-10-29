import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { 
  Map, 
  Home, 
  Square, 
  Briefcase, 
  BookOpen, 
  ArrowRight,
  Loader2,
  PlusCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, link, tag }) => {
  return (
    <Link
      to={link}
      className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/40 hover:shadow-[0_12px_32px_rgba(200,132,42,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Architectural Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-700 group-hover:bg-[#C8842A] group-hover:text-white group-hover:border-[#C8842A] transition-all duration-300 shadow-2xs">
            <Icon size={20} />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8842A] bg-amber-500/10 px-2 py-0.5 rounded-md border border-[#C8842A]/20">
            {tag}
          </span>
        </div>

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          {title}
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {value}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-[#C8842A] transition-colors">
        <span>Manage Records</span>
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

const Overview = () => {
  const [stats, setStats] = useState({
    floorPlans: 0,
    exteriors: 0,
    interiors: 0,
    projects: 0,
    blogs: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const collections = ['floorPlans', 'exteriors', 'interiors', 'projects', 'blogs'];
        const results = await Promise.all(
          collections.map(c => getDocs(collection(db, c)))
        );
        
        setStats({
          floorPlans: results[0].size,
          exteriors: results[1].size,
          interiors: results[2].size,
          projects: results[3].size,
          blogs: results[4].size
        });
      } catch (error) {
        console.error("Error fetching stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const totalCatalogItems = stats.floorPlans + stats.exteriors + stats.interiors + stats.projects + stats.blogs;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3 text-slate-500">
        <Loader2 className="animate-spin text-[#C8842A]" size={36} strokeWidth={1.75} />
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">Loading Dashboard...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 font-sans">
      
      {/* Welcome Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Top Architectural Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]" />

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#C8842A]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8842A] font-semibold">Naksha Dynamics Admin</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Portfolio & Asset Management
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
            Live overview of all published architectural plans, elevations, project records, and articles.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-[#C8842A] transition-all duration-300 shadow-xs"
          >
            <span>Live Website</span>
            <ExternalLink size={13} />
          </Link>
        </div>
      </div>

      {/* Live Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
        <StatCard 
          title="Floor Plans" 
          value={stats.floorPlans} 
          icon={Map} 
          link="/admin/floor-plans"
          tag="Blueprints"
        />
        <StatCard 
          title="Exterior Designs" 
          value={stats.exteriors} 
          icon={Home} 
          link="/admin/exteriors"
          tag="Elevations"
        />
        <StatCard 
          title="Interior Concepts" 
          value={stats.interiors} 
          icon={Square} 
          link="/admin/interiors"
          tag="Spatial"
        />
        <StatCard 
          title="Projects Archive" 
          value={stats.projects} 
          icon={Briefcase} 
          link="/admin/projects"
          tag="Civil Builds"
        />
        <StatCard 
          title="Articles & Insights" 
          value={stats.blogs} 
          icon={BookOpen} 
          link="/admin/blogs"
          tag="Editorial"
        />
      </div>

      {/* Quick Actions & Catalog Summary */}
      <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Left: Quick Actions Hub */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs">
          <h2 className="text-base font-semibold text-slate-900 mb-1">
            Quick Action Hub
          </h2>
          <p className="text-xs text-slate-500 mb-5">
            Create or edit catalog items across your active practice areas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/admin/floor-plans"
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#C8842A]/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#C8842A] flex items-center justify-center shrink-0">
                  <PlusCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 group-hover:text-[#C8842A] transition-colors">Add Floor Plan</p>
                  <p className="text-[11px] text-slate-500">Dimensions & blueprints</p>
                </div>
              </div>
              <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/admin/projects"
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#C8842A]/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#C8842A] flex items-center justify-center shrink-0">
                  <PlusCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 group-hover:text-[#C8842A] transition-colors">Add New Project</p>
                  <p className="text-[11px] text-slate-500">Civil build showcase</p>
                </div>
              </div>
              <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/admin/exteriors"
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#C8842A]/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#C8842A] flex items-center justify-center shrink-0">
                  <PlusCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 group-hover:text-[#C8842A] transition-colors">Add Exterior Elevation</p>
                  <p className="text-[11px] text-slate-500">Facade styling & views</p>
                </div>
              </div>
              <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/admin/blogs"
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#C8842A]/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#C8842A] flex items-center justify-center shrink-0">
                  <PlusCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 group-hover:text-[#C8842A] transition-colors">Publish Article</p>
                  <p className="text-[11px] text-slate-500">Engineering discourse</p>
                </div>
              </div>
              <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: System Status & Catalog Distribution */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-slate-900">
                System & Cloud Status
              </h2>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <CheckCircle2 size={12} />
                <span>All Services Operational</span>
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                <span className="text-xs text-slate-600 font-medium">Total Published Assets</span>
                <span className="text-xs font-bold text-slate-900">{totalCatalogItems} Records</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                <span className="text-xs text-slate-600 font-medium">Database Backend</span>
                <span className="text-xs font-semibold text-emerald-600">Firebase Firestore (Active)</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                <span className="text-xs text-slate-600 font-medium">Media CDN</span>
                <span className="text-xs font-semibold text-emerald-600">Cloudinary Media (Ready)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#C8842A]" />
              <span>Admin Access Protected</span>
            </span>
            <span>Version 2.4</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Overview;
