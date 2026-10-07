import React from "react";
import { ArrowRight, Send, FileDown, ChevronDown } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { SocialGroup } from "../molecules/SocialGroup";
import { TerminalCard } from "../molecules/TerminalCard";

export const HeroSection = ({ developer }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 lg:pt-20 pb-20 sm:pb-24 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column: Hero Intro Content */}
        <div className="lg:col-span-7 lg:mt-14 sm:mt-2 space-y-5 sm:space-y-6 text-left">
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <Badge
              variant="status"
              pulse={true}
              className="text-[11px] sm:text-xs font-mono"
            >
              Available for Freelance &amp; Full-Time Contracts
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight leading-[1.15]">
              Building practical web &amp; mobile software that delivers.
            </h1>

            <div className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-400 font-semibold">
              <span>
                Ian Castillo &mdash; Full-Stack Web &amp; Mobile Developer
              </span>
            </div>
          </div>

          {/* Hero Pitch / Hook */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {developer?.heroIntro ||
              "Full-Stack Web & Mobile Developer building clean, responsive interfaces backed by solid backend architecture. I don't just focus on visuals — I make sure the server, database, and system performance stay fast, efficient, and reliable under load. Freelancing since 2023."}
          </p>

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

      {/* Scroll Down Arrow Indicator (Desktop & Mobile) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors z-20">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
            Scroll Down
          </span>
          <div className="w-8 h-8 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center group-hover:border-cyan-500/50 shadow-md transition-all animate-bounce">
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
          </div>
        </a>
      </div>
    </section>
  );
};
