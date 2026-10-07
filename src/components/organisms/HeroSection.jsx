import React from "react";
import {
  ArrowRight,
  Send,
  FileDown,
} from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { SocialGroup } from "../molecules/SocialGroup";
import { TerminalCard } from "../molecules/TerminalCard";

export const HeroSection = ({ developer }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Hero Intro Content */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-4.5 text-left">
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <Badge
              variant="status"
              pulse={true}
              className="text-[11px] sm:text-xs font-mono"
            >
              ● Available for Freelance &amp; Full-Time Contracts
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight leading-[1.14]">
              Building practical web &amp; mobile software that delivers.
            </h1>

            <div className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-cyan-400 font-semibold">
              <span>Ian Castillo &mdash; Full-Stack Web &amp; Mobile Developer</span>
            </div>
          </div>

          {/* Hero Pitch / Hook */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {developer?.heroIntro ||
              "Full-Stack Web & Mobile Developer building clean, responsive interfaces backed by solid backend architecture. I don't just focus on visuals — I make sure the server, database, and system performance stay fast, efficient, and reliable under load. Freelancing since 2023."}
          </p>

          {/* Differentiated Action Buttons (1 Featured Primary + 2-Column Split Secondary on mobile) */}
          <div className="pt-1 space-y-2.5 sm:space-y-0 sm:flex sm:flex-row sm:items-center sm:gap-3">
            {/* Primary Featured CTA */}
            <Button
              variant="primary"
              size="md"
              href="#projects"
              icon={ArrowRight}
              className="w-full sm:w-auto py-3 font-bold shadow-lg shadow-cyan-500/20"
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
                className="w-full sm:w-auto text-xs sm:text-sm py-2.5"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#resume"
                icon={FileDown}
                className="w-full sm:w-auto text-xs sm:text-sm py-2.5 border-slate-700/80 bg-slate-900/40"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="pt-1 flex items-center gap-3">
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
        <div className="lg:col-span-5 w-full mt-2 lg:mt-0">
          <div className="max-w-md mx-auto lg:max-w-none">
            <TerminalCard developer={developer} />
          </div>
        </div>
      </div>
    </section>
  );
};
