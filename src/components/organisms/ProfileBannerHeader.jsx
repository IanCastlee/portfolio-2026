import React from "react";
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Download,
  Send,
  Sparkles,
  ArrowRight,
  Briefcase,
  Code2,
  Terminal,
} from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { GithubIcon } from "../atoms/SocialIcons";

export const ProfileBannerHeader = ({ developer }) => {
  const topTechIcons = [
    {
      name: "React",
      label: "React / React Native",
      bg: "hover:border-cyan-500/50 text-cyan-700 dark:text-cyan-400",
    },
    {
      name: "React Native",
      label: "React Native",
      bg: "hover:border-cyan-500/50 text-cyan-700 dark:text-cyan-600",
    },
    {
      name: "PHP",
      label: "PHP / Laravel",
      bg: "hover:border-red-500/50 text-red-600 dark:text-red-400",
    },
    {
      name: "Laravel",
      label: "Laravel",
      bg: "hover:border-red-500/50 text-red-600 dark:text-red-400",
    },
    {
      name: "Node",
      label: "Node.js / Express",
      bg: "hover:border-emerald-500/50 text-emerald-700 dark:text-emerald-400",
    },
    {
      name: "MySQL",
      label: "MySQL / SQLite",
      bg: "hover:border-amber-500/50 text-amber-700 dark:text-amber-400",
    },
    {
      name: "Supabase",
      label: "Supabase",
      bg: "hover:border-emerald-500/50 text-emerald-700 dark:text-emerald-400",
    },
    {
      name: "Firebase",
      label: "Firebase",
      bg: "hover:border-orange-500/50 text-orange-600 dark:text-orange-400",
    },
    {
      name: "Sqlite",
      label: "Sqlite",
      bg: "hover:border-blue-500/50 text-blue-700 dark:text-blue-400",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-0 sm:px-4 mb-6 sm:mb-8">
      {/* Cover Banner */}
      <div className="relative w-full h-52 sm:h-68 lg:h-80 rounded-none sm:rounded-3xl overflow-hidden border-y sm:border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-100/70 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/90">
        {/* Background Grid Pattern & Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 dark:opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/20 via-blue-500/15 to-transparent dark:from-cyan-500/20 dark:via-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Floating Actions inside Banner */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between z-20 gap-2">
          {/* Top Left: Live Status Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-[11px] sm:text-xs font-mono backdrop-blur-md shadow-md dark:shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Available for Work
            </span>
          </div>

          {/* Top Right: Floating Tech Skill Badges */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {topTechIcons.map((tech, idx) => (
              <div
                key={idx}
                className={`px-2.5 py-1 rounded-lg bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-[11px] font-mono font-medium backdrop-blur-md shadow-sm dark:shadow-md transition-all hover:scale-105 whitespace-nowrap ${tech.bg}`}
                title={tech.label}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Enlarged JSON Tech Stack Code Window */}
        <div className="absolute bottom-0 right-0 sm:right-2 lg:right-4 max-w-[310px] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full bg-white/95 dark:bg-slate-950/90 backdrop-blur-md rounded-tl-2xl rounded-tr-none sm:rounded-t-2xl border-t border-l border-cyan-500/35 sm:border-r shadow-xl dark:shadow-2xl overflow-hidden pointer-events-none select-none z-10">
          {/* Window Titlebar */}
          <div className="flex items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-100/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 text-[10px] sm:text-xs font-mono text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-1.5 sm:ml-2 text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                tech_stack.json
              </span>
            </div>
            <span className="text-[10px] text-slate-500 hidden sm:inline font-mono">
              JSON • Production Config
            </span>
          </div>

          {/* JSON Code Lines */}
          <div className="p-2.5 sm:p-4 font-mono text-[10px] sm:text-xs lg:text-sm leading-tight sm:leading-relaxed text-slate-700 dark:text-slate-300">
            <div className="flex gap-2.5">
              <span className="text-slate-400 dark:text-slate-600 select-none text-[9px] sm:text-xs w-3 sm:w-4 text-right">
                1
              </span>
              <div>
                <span className="text-slate-500">&#123;</span>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-slate-400 dark:text-slate-600 select-none text-[9px] sm:text-xs w-3 sm:w-4 text-right">
                2
              </span>
              <div className="pl-2 sm:pl-4">
                <span className="text-blue-600 dark:text-cyan-400">"dev"</span>
                <span className="text-slate-500 dark:text-slate-400">: </span>
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                  "{developer?.name || "Ian Castillo"}"
                </span>
                <span className="text-slate-500">,</span>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-slate-400 dark:text-slate-600 select-none text-[9px] sm:text-xs w-3 sm:w-4 text-right">
                3
              </span>
              <div className="pl-2 sm:pl-4">
                <span className="text-blue-600 dark:text-cyan-400">"stack"</span>
                <span className="text-slate-500 dark:text-slate-400">: </span>
                <span className="text-slate-500 dark:text-slate-400">[</span>
                <span className="text-amber-700 dark:text-amber-300 font-medium">"React"</span>
                <span className="text-slate-500 dark:text-slate-400">, </span>
                <span className="text-red-600 dark:text-red-300 font-medium">"Laravel"</span>
                <span className="text-slate-500 dark:text-slate-400">, </span>
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">"Node"</span>
                <span className="text-slate-500 dark:text-slate-400">, </span>
                <span className="text-blue-700 dark:text-blue-300 font-medium">"Tauri"</span>
                <span className="text-slate-500 dark:text-slate-400">, </span>
                <span className="text-purple-700 dark:text-purple-300 font-medium">"Redis"</span>
                <span className="text-slate-500 dark:text-slate-400">]</span>
                <span className="text-slate-500">,</span>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-slate-400 dark:text-slate-600 select-none text-[9px] sm:text-xs w-3 sm:w-4 text-right">
                4
              </span>
              <div className="pl-2 sm:pl-4">
                <span className="text-blue-600 dark:text-cyan-400">"status"</span>
                <span className="text-slate-500 dark:text-slate-400">: </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  "available_for_hire"
                </span>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="text-slate-400 dark:text-slate-600 select-none text-[9px] sm:text-xs w-3 sm:w-4 text-right">
                5
              </span>
              <div>
                <span className="text-slate-500">&#125;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Bar (Avatar + Info + CTAs) */}
      <div className="relative px-2 sm:px-6 -mt-14 sm:-mt-20 z-20">
        <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-7 shadow-xl dark:shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 sm:gap-6">
            {/* Left: Avatar & Bio Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-5 min-w-0">
              {/* Avatar Photo / Logo with Ring */}
              <div className="relative group shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-1 shadow-lg dark:shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center text-slate-900 dark:text-white overflow-hidden relative">
                    <span className="text-2xl sm:text-4xl font-mono font-extrabold text-cyan-600 dark:text-cyan-400 tracking-tight">
                      &lt;ey/&gt;
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      DEV.2023
                    </span>
                  </div>
                </div>
                {/* Active Indicator */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-900 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Name, Title, and Meta */}
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">
                    {developer?.name || "Ian Castillo"}
                  </h1>
                  <span
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 shrink-0"
                    title="Verified Full-Stack Developer"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 fill-cyan-500 dark:fill-cyan-400 text-white dark:text-slate-950" />
                  </span>
                </div>

                <p className="text-xs sm:text-base font-mono text-cyan-700 dark:text-cyan-400 font-semibold truncate">
                  {developer?.role || "IT Web & Mobile App Developer"}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1.5 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    {developer?.location || "Pasig, Philippines"}
                  </span>
                  <span className="flex items-center gap-1.5 shrink-0">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    Freelancer since 2023
                  </span>
                  <span className="flex items-center gap-1.5 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                    BS in Information Technology
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5 w-full xl:w-auto pt-2 xl:pt-0 shrink-0 flex-wrap sm:flex-nowrap">
              <Button
                variant="secondary"
                size="sm"
                href="#projects"
                icon={ArrowRight}
                className="flex-1 sm:flex-initial py-2 sm:py-2.5 px-3 sm:px-4 text-xs sm:text-sm shrink-0 whitespace-nowrap"
              >
                Projects
              </Button>

              <Button
                variant="outline"
                size="sm"
                href="/Ian_Castillo_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={Download}
                className="py-2 sm:py-2.5 px-3 border-slate-300 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm shrink-0 whitespace-nowrap"
              >
                CV
              </Button>

              {/* GitHub Link Button */}
              <a
                href={developer?.socials?.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all flex items-center justify-center shrink-0"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
