import React from 'react';

/**
 * Atom: Input & Form Controls
 */
export const Input = ({ label, id, error, required, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && (
      <label htmlFor={id} className="block text-xs font-mono uppercase text-slate-300">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
    )}
    <input
      id={id}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all focus:ring-1 focus:ring-cyan-400/30"
      {...props}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);

export const Textarea = ({ label, id, error, required, rows = 5, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && (
      <label htmlFor={id} className="block text-xs font-mono uppercase text-slate-300">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
    )}
    <textarea
      id={id}
      rows={rows}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all resize-none focus:ring-1 focus:ring-cyan-400/30"
      {...props}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);

export const Select = ({ label, id, options = [], required, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && (
      <label htmlFor={id} className="block text-xs font-mono uppercase text-slate-300">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
    )}
    <select
      id={id}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 text-sm transition-all"
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
