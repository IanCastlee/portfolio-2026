import React, { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * Molecule: TerminalCard
 * Sleek, high-tech interactive code card optimized for mobile touch and desktop screens.
 */
export const TerminalCard = ({ developer }) => {
  const [activeTab, setActiveTab] = useState('bash');

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden transition-all hover:border-slate-700">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]/90"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]/90"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]/90"></div>
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setActiveTab('bash')}
            className={`px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
              activeTab === 'bash'
                ? 'bg-slate-800 text-cyan-400 font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ~/terminal.sh
          </button>
          <button
            onClick={() => setActiveTab('shipped.yml')}
            className={`px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
              activeTab === 'shipped.yml'
                ? 'bg-slate-800 text-purple-400 font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            shipped.yml
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          active
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs overflow-x-auto select-text leading-relaxed bg-[#0b0f19]/90 min-h-[210px] sm:min-h-[220px]">
        {activeTab === 'bash' ? (
          <div className="space-y-2 text-slate-300">
            <div>
              <p className="text-cyan-400 font-semibold">$ whoami</p>
              <p className="text-slate-200 pl-2 sm:pl-3">
                {developer?.name || 'Ian Castillo'}{' '}
                <span className="text-purple-300 block sm:inline">&mdash; Full-Stack &amp; Mobile Developer</span>
              </p>
            </div>

            <div className="pt-0.5">
              <p className="text-cyan-400 font-semibold">$ ./skills --list</p>
              <div className="pl-2 sm:pl-3 space-y-1 text-slate-300 text-[10px] sm:text-[11px]">
                <p>
                  <span className="text-slate-400">&#8226; Frontend &amp; Mobile:</span>{' '}
                  <span className="text-emerald-400">React, React Native, Expo, Tailwind</span>
                </p>
                <p>
                  <span className="text-slate-400">&#8226; Backend &amp; DB:</span>{' '}
                  <span className="text-amber-300">PHP, Laravel, Node.js, MySQL, Redis</span>
                </p>
                <p>
                  <span className="text-slate-400">&#8226; Desktop &amp; AI:</span>{' '}
                  <span className="text-cyan-300">Tauri v2 (Rust), SQLite, Antigravity, Claude</span>
                </p>
              </div>
            </div>

            <div className="pt-0.5">
              <p className="text-cyan-400 font-semibold">$ git status --short</p>
              <p className="text-emerald-400 pl-2 sm:pl-3 text-[10px] sm:text-[11px]">
                &#10003; 4 featured production systems online &amp; verified
              </p>
            </div>

            <div className="pt-1 text-[10px] sm:text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="text-emerald-400">&gt;</span>
              <span className="text-slate-300">Freelance contracts since 2023.</span>
              <span className="w-1.5 h-3 bg-cyan-400 animate-pulse inline-block"></span>
            </div>
          </div>
        ) : (
          <div className="space-y-1 text-slate-300 text-[10px] sm:text-[11px]">
            <p className="text-slate-500"># Real-World Shipped Systems</p>
            <p className="text-purple-400 font-bold">production_deliveries:</p>
            
            <div className="pl-2 sm:pl-3 space-y-2 mt-1">
              <div className="border-l border-slate-700 pl-2.5">
                <p className="text-cyan-300 font-bold">1. Personal Grading System (PGS SaaS)</p>
                <p className="text-slate-400 text-[10px]">Tauri v2 &#8226; React 18 &#8226; SQLite Offline &#8226; Supabase</p>
              </div>

              <div className="border-l border-slate-700 pl-2.5">
                <p className="text-emerald-300 font-bold">2. Irosin Disaster Safety (MDRRMO)</p>
                <p className="text-slate-400 text-[10px]">React Native (Expo 54) &#8226; GIS Mapping &#8226; Socket.IO</p>
              </div>

              <div className="border-l border-slate-700 pl-2.5">
                <p className="text-amber-300 font-bold">3. OSYUSO &amp; Hot Spring Booking</p>
                <p className="text-slate-400 text-[10px]">React &#8226; PHP Laravel &#8226; MySQL &#8226; Redis Cache</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Metrics Row (Optimized 3-column mobile grid) */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-2 sm:px-4 sm:py-3 bg-slate-950 border-t border-slate-800 text-center">
        <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex flex-col justify-center min-w-0">
          <div className="text-xs sm:text-sm md:text-base font-bold text-cyan-400 font-mono truncate">
            Since 2023
          </div>
          <div className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-tight truncate mt-0.5">
            Freelance
          </div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex flex-col justify-center min-w-0">
          <div className="text-xs sm:text-sm md:text-base font-bold text-purple-400 font-mono truncate">
            20+ Shipped
          </div>
          <div className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-tight truncate mt-0.5">
            Projects
          </div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex flex-col justify-center min-w-0">
          <div className="text-xs sm:text-sm md:text-base font-bold text-emerald-400 font-mono truncate">
            Full-Stack
          </div>
          <div className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-tight truncate mt-0.5">
            Web &amp; Mobile
          </div>
        </div>
      </div>

    </div>
  );
};
