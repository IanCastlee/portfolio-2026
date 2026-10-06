import React from 'react';
import { Badge } from '../atoms/Badge';
import { SectionHeading } from '../atoms/Typography';
import { TimelineItem } from '../molecules/SkillAndProjectMolecules';
import { ServiceCard, ProcessStep } from '../molecules/FeatureMolecules';

export const ExperienceSection = ({ experiences = [] }) => (
  <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
    <div className="max-w-5xl mx-auto">
      
      <div className="text-center mb-12 sm:mb-16">
        <Badge variant="section" className="mb-3">
          Section 06: Experience — Work History & Internships
        </Badge>
        <SectionHeading 
          title="Work & Professional Journey"
          subtitle="Full-time engineering, freelance consulting, and production software milestones."
        />
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
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
          subtitle="Tailored software services for web, mobile apps, desktop systems, and robust database architecture."
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
          subtitle="A 4-phase agile engineering process to build, optimize, and deploy high-quality scalable software."
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
