import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      const from = location.state?.from?.pathname || "/admin";
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      toast.success('Successfully logged in!', {
        style: {
          background: '#1A1D23',
          color: '#fff',
          borderRadius: '16px',
          border: '1px solid #C8842A',
        },
      });
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
      toast.error('Login failed. Please check your email or password.', {
        style: {
          background: '#1D1A1A',
          color: '#fff',
          borderRadius: '16px',
          border: '1px solid #ef4444',
        },
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Background Blueprint Grid & Ambient Bronze Glow */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C8842A]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Top Architectural Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A]" />

          {/* Header */}
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#C8842A] to-amber-600 rounded-xl flex items-center justify-center mb-3 shadow-md shadow-amber-900/30">
              <LogIn className="text-white" size={22} />
            </div>
            <h1 className="font-semibold text-2xl text-white tracking-tight">Naksha Dynamics</h1>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8842A] font-semibold mt-1">Admin Authentication</span>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex items-center gap-2.5 mb-6"
            >
              <AlertCircle className="text-red-400 shrink-0" size={16} />
              <p className="text-red-400 text-xs font-medium">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-500 group-focus-within:text-[#C8842A] transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all"
                  placeholder="admin@nakshadynamics.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-500 group-focus-within:text-[#C8842A] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8842A] focus:ring-1 focus:ring-[#C8842A] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className={`w-full mt-2 bg-[#C8842A] hover:bg-[#B37424] text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </div>
              ) : 'Access Admin Dashboard'}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
              ← Return to Public Website
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-slate-500 text-[11px] uppercase tracking-wider">
          © {new Date().getFullYear()} Naksha Dynamics • All Rights Reserved
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
