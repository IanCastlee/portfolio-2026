import React, { useState } from 'react';
import { Badge } from '../atoms/Badge';
import { SectionHeading } from '../atoms/Typography';
import { ProjectCard } from '../molecules/SkillAndProjectMolecules';

export const ProjectsSection = ({ projects = [] }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Desktop & SaaS', 'Web App', 'Mobile App', 'Full-Stack System'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => {
        if (activeFilter === 'Desktop & SaaS') return p.category.includes('Desktop') || p.category.includes('SaaS');
        if (activeFilter === 'Web App') return p.category.includes('Web');
        if (activeFilter === 'Mobile App') return p.category.includes('Mobile');
        if (activeFilter === 'Full-Stack System') return p.category.includes('Full-Stack') || p.category.includes('Emergency');
        return p.category === activeFilter;
      });

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <Badge variant="section" className="mb-3">
              Featured Work
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-white font-serif tracking-tight">
              Featured Projects &amp; Shipped Systems
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base max-w-xl font-sans">
              A curated selection of offline-first SaaS platforms, high-concurrency e-commerce marketplaces, real-time emergency disaster systems, and web reservation engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white font-medium shadow-md shadow-blue-500/20'
                    : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export const CaseStudiesSection = ({ caseStudy }) => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="section" className="mb-3">
            Section 05: Case Studies — Problem → Solution → Architecture → Result
          </Badge>
          <SectionHeading 
            title="Engineering Case Study"
            subtitle="A deep dive into how I tackle complex engineering constraints, high concurrency spikes, and real-time data synchronization."
          />
        </div>

        {/* Case Study Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Featured Engineering Breakdown
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                {caseStudy?.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy?.tags.map((tag, idx) => (
                <Badge key={idx} variant="tech">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* 4 Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
            {caseStudy?.steps.map((step) => (
              <div key={step.num} className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <span className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-bold font-mono ${step.color}`}>
                    {step.num}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {step.name}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
                {step.points && (
                  <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside pt-1">
                    {step.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
                {step.badge && (
                  <div className="mt-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 font-mono text-xs font-medium">
                    ✓ {step.badge}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
