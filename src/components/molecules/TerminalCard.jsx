import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * Molecule: TerminalCard
 * Sleek, high-tech interactive code card optimized for mobile touch and desktop screens.
 */
export const TerminalCard = ({ developer }) => {
  const [activeTab, setActiveTab] = useState('profile.ts');

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#070b14]/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden transition-all hover:border-slate-600">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-3 bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"></div>
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('profile.ts')}
            className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono transition-all ${
              activeTab === 'profile.ts'
                ? 'bg-slate-800 text-cyan-400 font-semibold border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab('stack.json')}
            className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono transition-all ${
              activeTab === 'stack.json'
                ? 'bg-slate-800 text-purple-400 font-semibold border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            stack.json
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Live
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto select-text leading-relaxed">
        {activeTab === 'profile.ts' ? (
          <div className="space-y-1">
            <p className="text-slate-500 text-[11px]">// IT & Mobile App Engineer</p>
            <p>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">engineer</span>{' '}
              <span className="text-slate-400">=</span> {'{'}
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-slate-400">name:</span>{' '}
              <span className="text-emerald-400">"{developer?.name || '[Your Name]'}"</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-slate-400">title:</span>{' '}
              <span className="text-emerald-400">"Full-Stack & Mobile"</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-slate-400">focus:</span>{' '}
              <span className="text-emerald-400">["React", "Flutter", "Node.js"]</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-slate-400">status:</span>{' '}
              <span className="text-amber-300">"Open for new projects"</span>
            </p>
            <p className="text-slate-400">{'}'};</p>
            <p className="pt-2 text-cyan-400/90 text-[11px]">
              &gt; ready_to_collaborate = <span className="text-emerald-400">true</span>;
            </p>
          </div>
        ) : (
          <div className="space-y-1 text-slate-300">
            <p className="text-slate-500 text-[11px]">// Core Tech Ecosystem</p>
            <p className="text-purple-400">{'{'}</p>
            <p className="pl-3 sm:pl-4">
              <span className="text-cyan-300">"mobile"</span>: <span className="text-emerald-400">["Flutter", "React Native"]</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-cyan-300">"web"</span>: <span className="text-emerald-400">["Next.js", "React", "Tailwind"]</span>,
            </p>
            <p className="pl-3 sm:pl-4">
              <span className="text-cyan-300">"backend"</span>: <span className="text-emerald-400">["Node.js", "Python", "PostgreSQL"]</span>
            </p>
            <p className="text-purple-400">{'}'}</p>
          </div>
        )}
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 px-3 sm:px-4 py-3 bg-slate-950/60 border-t border-slate-800 text-center">
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">
            {developer?.yearsExperience || '3+'}
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-tight">
            Years Exp
          </div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-sm sm:text-base font-bold text-purple-400 font-mono">
            {developer?.projectsCompleted || '25+'}
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-tight">
            Projects
          </div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
            {developer?.commitmentRate || '100%'}
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-tight">
            Commitment
          </div>
        </div>
      </div>

    </div>
  );
};
