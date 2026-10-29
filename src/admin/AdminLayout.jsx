import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  Home, 
  Square, 
  Briefcase, 
  BookOpen, 
  Menu, 
  X, 
  LogOut,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, toggle }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Signed out successfully');
      navigate('/admin/login');
    } catch (error) {
      toast.error('Failed to logout');
      console.error(error);
    }
  };

  const navLinks = [
    { name: 'Overview', path: '/admin/overview', icon: LayoutDashboard },
    { name: 'Floor Plans', path: '/admin/floor-plans', icon: Map },
    { name: 'Exterior Designs', path: '/admin/exteriors', icon: Home },
    { name: 'Interior Concepts', path: '/admin/interiors', icon: Square },
    { name: 'Projects Archive', path: '/admin/projects', icon: Briefcase },
    { name: 'Articles & Insights', path: '/admin/blogs', icon: BookOpen },
  ];

  return (
    <aside className={`fixed top-0 left-0 z-50 h-full w-72 bg-slate-950 text-white border-r border-slate-800 transition-transform duration-300 ease-out flex flex-col justify-between ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}`}>
      
      {/* Top Architectural Accent Line */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]" />

      <div className="flex flex-col flex-1 p-6 overflow-y-auto">
        
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8842A] to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-900/20 shrink-0">
            <Building2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-white leading-tight">
              Naksha Dynamics
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8842A] font-semibold mt-0.5">
              Admin Portal
            </span>
          </div>
        </div>

        {/* Live Public Site Button */}
        <div className="mb-6 px-1">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#C8842A]/50 hover:bg-slate-850 transition-all text-xs font-medium group"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Website</span>
            </span>
            <ExternalLink size={13} className="text-slate-400 group-hover:text-[#C8842A] transition-colors" />
          </Link>
        </div>

        {/* Section Title */}
        <div className="px-2 mb-2">
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
            Management
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5 flex-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => toggle(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 text-xs font-semibold
                ${isActive 
                  ? 'bg-[#C8842A] text-white shadow-md shadow-[#C8842A]/20' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }
              `}
            >
              <link.icon size={17} />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User Card & Logout */}
        <div className="pt-4 border-t border-slate-800/80 mt-6 space-y-2">
          <div className="px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center justify-between">
            <div className="flex items-center gap-2 truncate">
              <ShieldCheck size={16} className="text-[#C8842A] shrink-0" />
              <div className="truncate">
                <p className="text-xs font-semibold text-white truncate leading-tight">
                  {user?.email || 'Administrator'}
                </p>
                <p className="text-[10px] text-slate-400">Authenticated</p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-2.5 px-3.5 py-2.5 w-full rounded-xl text-slate-400 hover:bg-rose-950/30 hover:text-rose-400 hover:border hover:border-rose-900/40 transition-all text-xs font-semibold cursor-pointer"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={setSidebarOpen} />

      {/* Main Content Area */}
      <div className={`lg:ml-72 min-h-screen flex flex-col transition-all duration-300 ${sidebarOpen ? 'blur-xs lg:blur-none' : ''}`}>
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between bg-white border-b border-slate-200/90 px-4 sm:px-8 py-3.5 shadow-2xs">
          {/* Mobile Brand / Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-xs hidden sm:inline">Naksha Dynamics</span>
              <span className="text-slate-300 text-xs hidden sm:inline">•</span>
              <span className="text-slate-900 font-semibold text-xs sm:text-sm">Control Console</span>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#C8842A] hover:border-[#C8842A]/40 transition-all text-xs font-semibold"
            >
              <span>View Website</span>
              <ExternalLink size={12} />
            </Link>
          </div>
        </header>

        {/* Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
