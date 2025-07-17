import React from 'react';

export const LanguageSelector = ({
  value,
  onChange,
  languages,
  label,
}) => {
  return (
    <div className="flex flex-col items-center min-w-40">
      <label className="text-sm font-semibold text-gray-700 mb-3">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-6 py-3 bg-white/70 backdrop-blur-xl border border-gray-300/40 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium min-w-40 cursor-pointer hover:border-gray-400 transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};