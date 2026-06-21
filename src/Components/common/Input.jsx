import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false, className = '' }) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-neutral-600 tracking-wide uppercase">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-4 py-3 rounded-2xl bg-neutral-100 border-transparent focus:bg-white focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition-all duration-300 text-neutral-800 placeholder-neutral-400 outline-none shadow-sm"
      />
    </div>
  );
};

export default Input;
