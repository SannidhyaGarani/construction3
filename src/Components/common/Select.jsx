import React from 'react';

const Select = ({ label, value, onChange, options, required = false, className = '' }) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-neutral-600 tracking-wide uppercase">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="px-4 py-3 rounded-2xl bg-neutral-100 border-transparent focus:bg-white focus:ring-2 focus:ring-neutral-800 focus:border-transparent transition-all duration-300 text-neutral-800 outline-none shadow-sm cursor-pointer appearance-none"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
