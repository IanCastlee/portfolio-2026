import React from 'react';
import { Badge } from '../atoms/Badge';
import { SectionHeading } from '../atoms/Typography';
import { TimelineItem } from '../molecules/SkillAndProjectMolecules';
import { ServiceCard, ProcessStep, RepoCard } from '../molecules/FeatureMolecules';
import { GithubIcon } from '../atoms/SocialIcons';
import { Button } from '../atoms/Button';

export const ExperienceSection = ({ experiences = [] }) => (
  <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
    <div className="max-w-5xl mx-auto">
      
      <div className="text-center mb-12 sm:mb-16">
        <Badge variant="section" className="mb-3">
          Section 06: Experience — Work History & Internships
        </Badge>
        <SectionHeading 
          title="Work & Professional Journey"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Full-time, contract, and internship career milestones."
        />
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10 sm:space-y-12">
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx} exp={exp} />
        ))}
      </div>

    </div>
  </section>
);

export const ServicesSection = ({ services = [] }) => (
  <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-12 sm:mb-16">
        <Badge variant="section" className="mb-3">
          Section 07: Services — What I Offer
        </Badge>
        <SectionHeading 
          title="Comprehensive Development Services"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tailored software services for web, mobile, and system architecture."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>

    </div>
  </section>
);

export const ProcessSection = ({ process = [] }) => (
  <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-12 sm:mb-16">
        <Badge variant="section" className="mb-3">
          Section 08: Development Process — Methodology
        </Badge>
        <SectionHeading 
          title="My Structured Development Lifecycle"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A 4-phase agile process to build and deploy high quality software."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((step, idx) => (
          <ProcessStep key={idx} step={step} />
        ))}
      </div>

    </div>
  </section>
);

export const GithubSection = ({ repositories = [], githubUrl }) => (
  <section id="github" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
    <div className="max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <Badge variant="section" className="mb-3">
            Section 09: GitHub / Code — Open Source Repositories
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open Source & Repositories
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Public boilerplates, templates, and utilities.
          </p>
        </div>

        <Button variant="secondary" size="sm" href={githubUrl || "https://github.com"} icon={GithubIcon} target="_blank">
          View GitHub Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repositories.map((repo, idx) => (
          <RepoCard key={idx} repo={repo} />
        ))}
      </div>

    </div>
  </section>
);
