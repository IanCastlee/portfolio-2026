import React from 'react';

/**
 * Atom: Typography
 */
export const SectionHeading = ({ title, subtitle, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2 ${className}`}>
    <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white font-serif tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
        {subtitle}
      </p>
    )}
  </div>
);

export const CodeText = ({ children, className = '' }) => (
  <code className={`font-mono text-xs text-cyan-400 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40 ${className}`}>
    {children}
  </code>
);
