import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { 
  Map, 
  Home, 
  Square, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  Loader2
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, color, delay }) => { // eslint-disable-line no-unused-vars
  return (
  <Motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-[32px] shadow-2xl shadow-neutral-100/50 border border-neutral-100 flex items-start justify-between group hover:border-[#C5A880]/30 transition-all duration-500"
  >
    <div className="flex flex-col gap-4">
      <div className={`p-4 rounded-2xl ${color} bg-opacity-10 w-fit group-hover:scale-110 transition-transform duration-500`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold">{title}</span>
        <span className="text-4xl font-serif text-neutral-800">{value}</span>
      </div>
    </div>
    <div className="text-neutral-200 group-hover:text-[#C5A880] transition-colors">
      <ArrowUpRight size={24} />
    </div>
  </Motion.div>
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-48 gap-4 text-neutral-400">
        <Loader2 className="animate-spin" size={48} />
        <span className="text-xs font-bold uppercase tracking-[0.3em]">Analyzing architecture...</span>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold">Dashboard</span>
        <h1 className="font-serif text-5xl text-neutral-800">Welcome back, Admin</h1>
        <p className="text-neutral-400 text-sm font-light mt-2 max-w-md italic tracking-wide leading-relaxed">
          Here is an overview of your architectural portfolio and content status.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatCard 
          title="Floor Plans" 
          value={stats.floorPlans} 
          icon={Map} 
          color="bg-blue-500" 
          delay={0.1}
        />
        <StatCard 
          title="Exteriors" 
          value={stats.exteriors} 
          icon={Home} 
          color="bg-amber-500" 
          delay={0.2}
        />
        <StatCard 
          title="Interiors" 
          value={stats.interiors} 
          icon={Square} 
          color="bg-purple-500" 
          delay={0.3}
        />
        <StatCard 
          title="Projects" 
          value={stats.projects} 
          icon={Briefcase} 
          color="bg-emerald-500" 
          delay={0.4}
        />
        <StatCard 
          title="Blogs" 
          value={stats.blogs} 
          icon={BookOpen} 
          color="bg-rose-500" 
          delay={0.5}
        />
      </div>

      {/* Recent Activity / System Status Placeholder */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-12 rounded-[40px] shadow-2xl shadow-neutral-100/50 border border-neutral-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">Performance</span>
              <h3 className="text-2xl font-serif text-neutral-800">Portfolio Growth</h3>
            </div>
            <div className="flex items-center gap-2 text-emerald-500 bg-emerald-50 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-tighter">
              <TrendingUp size={14} />
              <span>+12% this month</span>
            </div>
          </div>
          <div className="h-64 flex items-end gap-4">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 bg-neutral-100 rounded-t-xl relative group overflow-hidden">
                <Motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="absolute bottom-0 w-full bg-[#C5A880] opacity-20 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B0F14] p-12 rounded-[40px] text-white flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">System</span>
              <h3 className="text-2xl font-serif">Cloud Status</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <span className="text-xs text-neutral-400 font-medium">Firestore DB</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Connected</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <span className="text-xs text-neutral-400 font-medium">Cloudinary CDN</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Online</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-xs text-neutral-400 font-medium">Analytics Engine</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Active</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold">
            <Clock size={14} />
            <span>Last Sync: Just now</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Overview;
