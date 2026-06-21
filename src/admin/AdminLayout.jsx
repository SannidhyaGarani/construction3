import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  Home, 
  Square, 
  Briefcase, 
  BookOpen, 
  Menu, 
  X, 
  LogOut 
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, toggle }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully', {
        style: {
          background: '#1A1D23',
          color: '#fff',
          borderRadius: '16px',
          border: '1px solid #C5A880',
        },
      });
      navigate('/admin/login');
    } catch (error) {
      toast.error('Failed to logout');
      console.error(error);
    }
  };

  const navLinks = [
    { name: 'Overview', path: '/admin/overview', icon: LayoutDashboard },
    { name: 'Floor Plans', path: '/admin/floor-plans', icon: Map },
    { name: 'Exteriors', path: '/admin/exteriors', icon: Home },
    { name: 'Interiors', path: '/admin/interiors', icon: Square },
    { name: 'Projects', path: '/admin/projects', icon: Briefcase },
    { name: 'Blogs', path: '/admin/blogs', icon: BookOpen },
  ];

  return (
    <aside className={`fixed top-0 left-0 z-50 h-full w-72 bg-[#0B0F14] text-white transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="flex flex-col h-full p-8">
        
        {/* Brand */}
        <div className="flex flex-col mb-16 px-4">
          <span className="font-serif text-3xl tracking-tight text-white uppercase">Archelon</span>
          <span className="text-[9px] uppercase tracking-[0.6em] text-[#C5A880] mt-1 font-bold italic">Admin Panel</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => toggle(false)}
              className={({ isActive }) => `
                group flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500
                ${isActive 
                  ? 'bg-[#C5A880] text-[#050505] shadow-[0_10px_30px_rgba(197,168,128,0.25)]' 
                  : 'text-neutral-500 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              <link.icon size={20} className="transition-transform group-hover:scale-110" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="pt-8 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="group flex items-center gap-4 px-6 py-4 w-full rounded-2xl text-neutral-500 hover:bg-red-500/10 hover:text-red-500 transition-all duration-500"
          >
            <LogOut size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={setSidebarOpen} />

      {/* Main Content Area */}
      <main className={`lg:ml-72 min-h-screen transition-all duration-500 ${sidebarOpen ? 'blur-sm lg:blur-none' : ''}`}>
        
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-white/80 backdrop-blur-md px-8 py-6 border-b border-neutral-100 shadow-sm">
          <div className="flex flex-col">
            <span className="font-serif text-xl text-neutral-800 uppercase">Archelon</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A880] font-bold italic">Admin</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-3 bg-neutral-100 rounded-2xl text-neutral-800 hover:bg-neutral-200 transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Content Wrapper */}
        <div className="max-w-[1440px] mx-auto p-8 md:p-12 lg:p-16">
          <Outlet />
        </div>
      </main>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-all"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
