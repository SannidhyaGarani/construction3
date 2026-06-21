import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', loading = false, disabled = false, className = '', icon: Icon }) => {
  const baseStyles = "px-8 py-4 rounded-2xl font-bold uppercase text-[11px] tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";
  
  const variants = {
    primary: "bg-[#0B0F14] text-white hover:bg-neutral-800 hover:shadow-neutral-400/20",
    secondary: "bg-[#C5A880] text-[#050505] hover:bg-white hover:shadow-amber-200/20",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-red-200/20",
    outline: "border-2 border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-neutral-200/20",
    ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 shadow-none hover:shadow-sm"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && <Icon size={16} />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
