import React from 'react';

/**
 * Atom: IconButton
 * Touch-friendly icon buttons for social links and quick utilities.
 */
export const IconButton = ({
  icon: Icon,
  href,
  onClick,
  title,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}) => {
  const styles = "w-11 h-11 sm:w-10 sm:h-10 rounded-xl bg-slate-800/70 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all shadow-sm active:scale-95";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        title={title}
        className={`${styles} ${className}`}
        {...props}
      >
        <Icon className="w-5 h-5 sm:w-4 sm:h-4" />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      title={title}
      type="button"
      className={`${styles} ${className}`}
      {...props}
    >
      <Icon className="w-5 h-5 sm:w-4 sm:h-4" />
    </button>
  );
};
