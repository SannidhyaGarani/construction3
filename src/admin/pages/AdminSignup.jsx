import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, UserPlus, AlertCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/admin/overview');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      toast.error('Passwords do not match', {
        style: {
          background: '#1D1A1A',
          color: '#fff',
          borderRadius: '16px',
          border: '1px solid #ef4444',
        },
      });
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      toast.success('Admin account created!', {
        style: {
          background: '#1A1D23',
          color: '#fff',
          borderRadius: '16px',
          border: '1px solid #C5A880',
        },
      });
    } catch (err) {
      setError('Failed to create an account. Please try again.');
      toast.error('Signup failed. Ensure email is unique and password is strong.', {
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
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-[#0B0F14]/80 backdrop-blur-xl border border-white/5 rounded-[40px] p-10 md:p-12 shadow-2xl relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-16 h-16 bg-[#C5A880] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#C5A880]/20">
              <UserPlus className="text-[#050505]" size={32} />
            </div>
            <h1 className="font-serif text-3xl text-white uppercase tracking-tight mb-2">Archelon</h1>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] font-bold italic">Admin Sign Up</span>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center gap-3 mb-8"
            >
              <AlertCircle className="text-red-500 shrink-0" size={20} />
              <p className="text-red-500 text-xs font-medium uppercase tracking-wider">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 ml-2">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-neutral-600 group-focus-within:text-[#C5A880] transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-[#C5A880]/50 focus:bg-white/[0.08] transition-all duration-300"
                  placeholder="admin@archelon.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 ml-2">Secure Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-neutral-600 group-focus-within:text-[#C5A880] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-[#C5A880]/50 focus:bg-white/[0.08] transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 ml-2">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <ShieldCheck className="h-5 w-5 text-neutral-600 group-focus-within:text-[#C5A880] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-14 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-[#C5A880]/50 focus:bg-white/[0.08] transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className={`w-full bg-[#C5A880] text-[#050505] font-bold text-[10px] uppercase tracking-[0.3em] py-5 rounded-2xl shadow-lg shadow-[#C5A880]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 border-2 border-[#050505] border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : 'Register Admin'}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">
              Already have an account? <Link to="/admin/login" className="text-[#C5A880] hover:underline hover:underline-offset-4 ml-1 transition-all">Log In here</Link>
            </p>
          </div>
        </div>
        
        <p className="mt-10 text-center text-neutral-600 text-[10px] uppercase tracking-[0.3em] font-bold">
          © 2026 ARCHELON INTERIORS & CONSTRUCTION
        </p>
      </motion.div>
    </div>
  );
};

export default AdminSignup;
