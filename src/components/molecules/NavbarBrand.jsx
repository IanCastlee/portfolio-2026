import React from 'react';
import { Code2 } from 'lucide-react';

export const NavbarBrand = ({ name = "[DEV.NAME]", role = "IT & MOBILE DEV" }) => (
  <a href="#hero" className="flex items-center gap-2.5 group">
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-base sm:text-lg shadow-lg group-hover:scale-105 transition-transform">
      <Code2 className="w-5 h-5" />
    </div>
    <div className="leading-tight">
      <span className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-cyan-400 transition-colors block">
        {name}
      </span>
      <span className="block text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
        {role}
      </span>
    </div>
  </a>
);
