import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Edit2, Trash2, ArrowUpRight } from 'lucide-react';

const Card = ({ image, title, subtitle, details = [], onEdit, onDelete, onClick, isAdmin = false, className = '' }) => {
  return (
    <Motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-100 hover:border-neutral-200 transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image || 'https://via.placeholder.com/400x300'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Admin Overlay Actions */}
        {isAdmin && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <button 
              onClick={(e) => { e.stopPropagation(); onEdit(); }}
              className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-neutral-800 hover:bg-white shadow-lg transition-colors"
            >
              <Edit2 size={16} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
              className="p-3 bg-red-500/90 backdrop-blur-md rounded-2xl text-white hover:bg-red-500 shadow-lg transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}

        {/* Frontend Overlay Icon */}
        {!isAdmin && (
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl text-neutral-800">
              <ArrowUpRight size={24} />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-col gap-1 mb-4">
          {subtitle && (
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
              {subtitle}
            </span>
          )}
          <h3 className="font-serif text-2xl text-neutral-800 transition-colors group-hover:text-[#C5A880]">
            {title}
          </h3>
        </div>

        {details && details.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6 border-t border-neutral-50">
            {details.map((detail, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[8px] uppercase tracking-widest text-neutral-400 font-bold">{detail.label}</span>
                <span className="text-xs text-neutral-600 font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Motion.div>
  );
};

export default Card;
