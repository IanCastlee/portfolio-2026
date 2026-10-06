import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cpu, 
  ArrowRight, 
  FileText, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  FolderGit2, 
  Star, 
  GitFork, 
  Check, 
  Quote 
} from 'lucide-react';
import { Badge } from '../atoms/Badge';

const ServiceIcons = { Code, Smartphone, Cpu };
const ProcessIcons = { FileText, Terminal, ShieldCheck, Rocket };

export const ServiceCard = ({ service }) => {
  const IconComponent = ServiceIcons[service.icon] || Code;

  return (
    <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
          <IconComponent className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
          {service.desc}
        </p>

        <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 mt-6 border-t border-slate-800">
        <a href="#contact" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
          Inquire Service <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export const ProcessStep = ({ step }) => {
  const IconComponent = ProcessIcons[step.icon] || Terminal;

  return (
    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 relative hover:border-slate-700 transition-all">
      <div className="text-3xl sm:text-4xl font-mono font-extrabold text-slate-800/90 mb-3">
        {step.step}
      </div>
      <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center text-lg mb-3">
        <IconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{step.title}</h3>
      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
        {step.desc}
      </p>
    </div>
  );
};

export const RepoCard = ({ repo }) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400">
          <FolderGit2 className="w-4 h-4" /> {repo.folder}
        </span>
        <Badge variant="tech">Public</Badge>
      </div>
      <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-1">{repo.name}</h3>
      <p className="text-xs text-slate-400 leading-relaxed mb-4">
        {repo.desc}
      </p>
    </div>

    <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-3 border-t border-slate-800">
      <span className="flex items-center gap-1.5">
        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`}></span> {repo.language}
      </span>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {repo.stars}</span>
        <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" /> {repo.forks}</span>
      </div>
    </div>
  </div>
);

export const TestimonialCard = ({ item }) => (
  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all">
    <div>
      <div className="flex text-amber-400 text-xs mb-3 space-x-1">
        {'★'.repeat(5)}
      </div>
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
        "{item.quote}"
      </p>
    </div>
    <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
      <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-xs">
        {item.initials}
      </div>
      <div>
        <h4 className="text-white font-semibold text-xs sm:text-sm">{item.author}</h4>
        <p className="text-[11px] text-slate-400">{item.role}</p>
      </div>
    </div>
  </div>
);
