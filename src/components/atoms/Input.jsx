import React from 'react';

/**
 * Atom: Input & Form Controls
 */
export const Input = ({ label, id, error, required, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && (
      <label htmlFor={id} className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-cyan-600 dark:text-cyan-400">*</span>}
      </label>
    )}
    <input
      id={id}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-all focus:ring-1 focus:ring-cyan-500/30"
      {...props}
    />
    {error && <span className="text-xs text-red-500 dark:text-red-400">{error}</span>}
  </div>
);

export const Textarea = ({ label, id, error, required, rows = 5, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && (
      <label htmlFor={id} className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-cyan-600 dark:text-cyan-400">*</span>}
      </label>
    )}
    <textarea
      id={id}
      rows={rows}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-all resize-none focus:ring-1 focus:ring-cyan-500/30"
      {...props}
    />
    {error && <span className="text-xs text-red-500 dark:text-red-400">{error}</span>}
  </div>
);

export const Select = ({ label, id, options = [], required, ...props }) => (
  <div className="space-y-1.5 w-full">
    {label && (
      <label htmlFor={id} className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-cyan-600 dark:text-cyan-400">*</span>}
      </label>
    )}
    <select
      id={id}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 text-sm transition-all"
      {...props}
    >
      {options.map((opt, i) => {
        const val = typeof opt === 'object' && opt !== null ? opt.value : opt;
        const lbl = typeof opt === 'object' && opt !== null ? opt.label : opt;
        return (
          <option key={i} value={val} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            {lbl}
          </option>
        );
      })}
    </select>
  </div>
);
