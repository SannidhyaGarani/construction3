import React from 'react';

const VARIANTS = {
  primary:
    'group relative inline-flex items-center justify-center px-12 py-5 bg-white text-stone-900 overflow-hidden transition-all duration-500',
  outline:
    'group inline-flex items-center justify-center px-12 py-5 border border-white/20 text-white backdrop-blur-sm hover:border-white transition-all duration-500 uppercase text-[11px] tracking-[0.4em] font-sans',
  ghost:
    'group relative inline-flex items-center justify-center py-4 px-12 overflow-hidden border border-stone-200 hover:border-stone-900 transition-colors duration-500',
  link: 'group inline-flex items-center gap-4 text-stone-900',
  icon: 'inline-flex items-center justify-center p-2 transition-colors text-current',
};

export default function Button({ variant = 'primary', className = '', children, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button className={`${v} ${className}`} {...rest}>
      {children}
    </button>
  );
}
