import React from "react";
import {
  ArrowRight,
  Send,
  FileDown,
  Code2,
  Smartphone,
  Database,
} from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { SocialGroup } from "../molecules/SocialGroup";
import { TerminalCard } from "../molecules/TerminalCard";

export const HeroSection = ({ developer }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Hero Intro Content */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          {/* Status Badge */}
          <div>
            <Badge
              variant="status"
              pulse={true}
              className="text-[11px] sm:text-xs"
            >
              {developer?.availability || "Available for Full-time & Projects"}
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                {developer?.name || "[Your Name Here]"}
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 font-mono text-sm sm:text-xl text-slate-300 font-medium">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span>{developer?.role || "IT Web & Mobile App Developer"}</span>
            </div>
          </div>

          {/* Bio paragraph */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            {developer?.bio1 ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
          </p>

          {/* Lightweight Tech Chips (Distinct from action buttons) */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-[11px] font-mono text-slate-300">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Full-Stack Web
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-[11px] font-mono text-slate-300">
              <Smartphone className="w-3.5 h-3.5 text-purple-400" /> iOS & Android
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-[11px] font-mono text-slate-300">
              <Database className="w-3.5 h-3.5 text-emerald-400" /> APIs & Cloud DB
            </span>
          </div>

          {/* Differentiated Action Buttons (1 Featured Primary + 2-Column Split Secondary on mobile) */}
          <div className="pt-2 space-y-2.5 sm:space-y-0 sm:flex sm:flex-row sm:items-center sm:gap-3">
            {/* Primary Featured CTA */}
            <Button
              variant="primary"
              size="md"
              href="#projects"
              icon={ArrowRight}
              className="w-full sm:w-auto py-3.5 font-bold shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </Button>

            {/* Secondary Action Row (Clean 2-column layout on mobile) */}
            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3">
              <Button
                variant="secondary"
                size="md"
                href="#contact"
                icon={Send}
                className="w-full sm:w-auto text-xs sm:text-sm py-3"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#resume"
                icon={FileDown}
                className="w-full sm:w-auto text-xs sm:text-sm py-3 border-slate-700/80 bg-slate-900/40"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 hidden sm:inline">
              Connect:
            </span>
            <SocialGroup
              socials={developer?.socials}
              email={developer?.email}
            />
          </div>
        </div>

        {/* Right Column: Interactive Terminal/Profile Card */}
        <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
          <div className="max-w-md mx-auto lg:max-w-none">
            <TerminalCard developer={developer} />
          </div>
        </div>
      </div>
    </section>
  );
};
