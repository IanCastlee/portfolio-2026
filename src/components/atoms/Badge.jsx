import React from 'react';

/**
 * Atom: Badge
 * Used for section indicators, status chips, and skill tags.
 */
export const Badge = ({ children, variant = 'section', className = '', pulse = false }) => {
  const baseStyles = "inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-all";
  
  const variants = {
    section: "px-3.5 py-1.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 shadow-sm",
    status: "px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
    tech: "px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-mono normal-case tracking-normal border border-slate-200 dark:border-slate-700/60",
    cyan: "px-2.5 py-0.5 bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-[10px]",
    purple: "px-2.5 py-0.5 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-[10px]",
    amber: "px-2.5 py-0.5 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-[10px]",
    emerald: "px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[10px]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.section} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
