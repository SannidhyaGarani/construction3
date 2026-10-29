import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Edit2, Trash2, ArrowUpRight } from 'lucide-react';

const Card = ({ image, title, subtitle, details = [], onEdit, onDelete, onClick, isAdmin = false, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#C8842A]/40 hover:shadow-[0_12px_32px_rgba(200,132,42,0.12)] transition-all duration-400 flex flex-col justify-between ${className}`}
    >
      {/* Top Architectural Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C8842A] via-amber-400 to-[#C8842A] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-20" />

      <div>
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img 
            src={image || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800'} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
          
          {/* Subtitle Badge */}
          {subtitle && (
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                {subtitle}
              </span>
            </div>
          )}

          {/* Action Buttons for Admin (Always visible on mobile, slick hover reveal on desktop) */}
          {isAdmin && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); onEdit(); }}
                className="w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-md text-slate-700 hover:text-[#C8842A] hover:bg-white rounded-lg shadow-sm border border-slate-200 transition-all hover:scale-105 cursor-pointer"
                title="Edit item"
              >
                <Edit2 size={13} />
              </button>
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                className="w-8 h-8 flex items-center justify-center bg-red-600/90 backdrop-blur-md text-white hover:bg-red-600 rounded-lg shadow-sm border border-red-500/30 transition-all hover:scale-105 cursor-pointer"
                title="Delete item"
              >
                <Trash2 size={13} />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="font-semibold text-base text-slate-900 transition-colors group-hover:text-[#C8842A] line-clamp-1 mb-2 leading-snug">
            {title}
          </h3>

          {/* Details Row */}
          {details && details.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-3 border-t border-slate-100 text-xs">
              {details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-slate-500">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{detail.label}:</span>
                  <span className="font-medium text-slate-700">{detail.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
