import React from 'react';

/**
 * Atom: Button
 * Reusable button component with touch-friendly states and responsive scaling.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none select-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] whitespace-nowrap shrink-0";

  const sizes = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-3 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01]",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80 hover:border-slate-600",
    outline: "border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white bg-transparent",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/60",
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
};
