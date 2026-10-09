import React, { useState } from 'react';
import { 
  Smartphone, 
  Server, 
  Database, 
  Wrench, 
  ExternalLink, 
  LayoutDashboard, 
  Layers, 
  Wallet, 
  FolderGit2, 
  Star, 
  GitFork,
  Briefcase,
  Sparkles,
  Bot,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { GithubIcon } from '../atoms/SocialIcons';

// Helper icon map
export const IconMap = {
  Smartphone,
  Server,
  Database,
  Wrench,
  LayoutDashboard,
  Layers,
  Wallet,
  FolderGit2,
  Briefcase,
  Sparkles,
  Bot,
};

export const SkillCard = ({ category, icon, desc, skills = [] }) => {
  const IconComponent = IconMap[icon] || Server;

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-md dark:shadow-none">
      <div>
        <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{category}</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">{desc}</p>
      </div>

      <div className="space-y-2.5">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-xs">
            <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-mono text-[10px] bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40 font-semibold">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = IconMap[project.icon] || LayoutDashboard;
  const isLongText = (project.desc || '').length > 110;

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
      
      {/* Mockup / Real Screenshot Preview Header */}
      <div className="h-56 sm:h-64 bg-slate-100 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 flex items-center justify-center group">
        {project.mobileImage && project.image ? (
          <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            {/* PC Desktop Background */}
            <img 
              src={project.image} 
              alt={`${project.title} Desktop`} 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-40 blur-[1.5px] scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-slate-950 via-slate-900/20 dark:via-slate-950/40 to-transparent"></div>
            
            {/* Mobile App in Center */}
            <img 
              src={project.mobileImage} 
              alt={`${project.title} Mobile`} 
              className="relative z-10 h-[92%] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : project.image ? (
          <div className="w-full h-full relative overflow-hidden group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-slate-950/80 via-transparent to-transparent"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md group-hover:scale-110 transition-transform">
              <IconComponent className="w-7 h-7" />
            </div>
            <span className="mt-3 text-xs font-mono text-slate-500 dark:text-slate-400">[Project Mockup / Preview Screenshot]</span>
          </div>
        )}
        <Badge variant={project.badgeColor || 'cyan'} className="absolute top-4 left-4 z-20 shadow-md backdrop-blur-md">
          {project.category}
        </Badge>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className={`text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed transition-all ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {project.desc}
          </p>
          {isLongText && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1.5 text-xs font-mono text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 flex items-center gap-1 transition-colors font-semibold cursor-pointer select-none"
            >
              {isExpanded ? (
                <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
              ) : (
                <>Read more <ChevronDown className="w-3.5 h-3.5" /></>
              )}
            </button>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="tech">{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center justify-end pt-3.5 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
            <a 
              href={project.githubUrl || "https://github.com"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1.5 transition-colors font-medium hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <GithubIcon className="w-3.5 h-3.5" /> Source Code
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export const TimelineItem = ({ exp }) => (
  <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-3.5 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all shadow-md dark:shadow-xl">
    {/* Top Label & Badge */}
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800/60 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
        {exp.period || "2023 — Present"}
      </span>
      <Badge variant="section">{exp.type || "CONTRACT"}</Badge>
    </div>

    {/* Title & Organization */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">{exp.role}</h3>
      <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
        {exp.company} • {exp.location}
      </div>
    </div>

    {/* Description */}
    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
      {exp.desc}
    </p>

    {/* Tech Stack Tags */}
    {exp.tags && exp.tags.length > 0 && (
      <div className="flex flex-wrap gap-1.5 pt-1.5">
        {exp.tags.map((tag, i) => (
          <Badge key={i} variant="tech">{tag}</Badge>
        ))}
      </div>
    )}
  </div>
);
