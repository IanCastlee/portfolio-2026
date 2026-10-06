import React from 'react';
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
  Briefcase
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
  FolderGit2
};

export const SkillCard = ({ category, icon, desc, skills = [] }) => {
  const IconComponent = IconMap[icon] || Server;

  return (
    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1.5">{category}</h3>
        <p className="text-xs text-slate-400 mb-5 leading-relaxed">{desc}</p>
      </div>

      <div className="space-y-2.5">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs">
            <span className="font-medium text-slate-200">{skill.name}</span>
            <span className="text-cyan-400 font-mono text-[10px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectCard = ({ project }) => {
  const IconComponent = IconMap[project.icon] || LayoutDashboard;

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-slate-700 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
      
      {/* Mockup Preview Header */}
      <div className="h-52 bg-gradient-to-br from-slate-800/90 via-slate-900 to-indigo-950/40 relative flex flex-col items-center justify-center p-6 border-b border-slate-800">
        <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-md group-hover:scale-110 transition-transform">
          <IconComponent className="w-7 h-7" />
        </div>
        <span className="mt-3 text-xs font-mono text-slate-400">[Project Mockup / Preview Screenshot]</span>
        <Badge variant={project.badgeColor || 'cyan'} className="absolute top-4 left-4">
          {project.category}
        </Badge>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            {project.desc}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="tech">{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-3.5 border-t border-slate-800 text-xs sm:text-sm">
            <a href={project.liveUrl} className="text-white hover:text-cyan-400 flex items-center gap-1.5 font-medium transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
              <GithubIcon className="w-3.5 h-3.5" /> Source Code
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export const TimelineItem = ({ exp }) => (
  <div className="relative pl-7 sm:pl-10">
    <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 text-xs shadow-md">
      <Briefcase className="w-3.5 h-3.5" />
    </div>

    <span className="sm:absolute sm:-left-36 sm:top-2 text-xs font-mono text-cyan-400 block mb-1.5 sm:mb-0">
      {exp.period}
    </span>

    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 hover:border-slate-700 transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
        <Badge variant="section">{exp.type}</Badge>
      </div>
      <div className="text-xs sm:text-sm font-medium text-slate-400">
        {exp.company} • {exp.location}
      </div>
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
        {exp.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-2">
        {exp.tags.map((tag, i) => (
          <Badge key={i} variant="tech">{tag}</Badge>
        ))}
      </div>
    </div>
  </div>
);
