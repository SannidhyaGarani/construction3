import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', loading = false, disabled = false, className = '', icon: Icon }) => {
  const baseStyles = "px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs cursor-pointer";
  
  const variants = {
    primary: "bg-[#111827] text-white hover:bg-[#C8842A] hover:shadow-md shadow-slate-900/10",
    secondary: "bg-[#C8842A] text-white hover:bg-[#B37424] hover:shadow-md shadow-amber-600/10",
    danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-md shadow-red-500/10",
    outline: "border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-none"
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
          <Loader2 size={15} className="animate-spin text-current" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && <Icon size={15} />}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
