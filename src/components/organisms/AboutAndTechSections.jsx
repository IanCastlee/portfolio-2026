import React from 'react';
import { User, Laptop, Smartphone, Server, Shield } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { SectionHeading } from '../atoms/Typography';
import { SkillCard } from '../molecules/SkillAndProjectMolecules';

export const AboutSection = ({ developer }) => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="section" className="mb-3">
            Section 02: About Me — Background & Specialization
          </Badge>
          <SectionHeading 
            title="Crafting Digital Experiences That Deliver Value"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
                <User className="w-4 h-4" />
              </span>
              Who I Am & What I Specialize In
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {developer?.bio1}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {developer?.bio2}
            </p>

            {/* Specialization cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <Laptop className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Web Development</h4>
                <p className="text-xs text-slate-400">Lorem ipsum dolor sit amet responsive, fast web apps.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <Smartphone className="w-5 h-5 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Mobile Development</h4>
                <p className="text-xs text-slate-400">Lorem ipsum cross-platform iOS & Android apps.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <Server className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Backend & APIs</h4>
                <p className="text-xs text-slate-400">Lorem ipsum secure REST/GraphQL API services.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <Shield className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">IT & System Solutions</h4>
                <p className="text-xs text-slate-400">Lorem ipsum deployment, databases, and IT systems.</p>
              </div>
            </div>
          </div>

          {/* Quick info box */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900 border border-slate-700/80 space-y-5 shadow-xl">
              <h4 className="text-white font-bold text-base sm:text-lg border-b border-slate-700/80 pb-3 font-mono">
                &lt;Quick Information /&gt;
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400 font-mono text-xs uppercase">Role:</span>
                  <span className="text-white font-medium">{developer?.role}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400 font-mono text-xs uppercase">Location:</span>
                  <span className="text-white font-medium">{developer?.location}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400 font-mono text-xs uppercase">Availability:</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Open for Work
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400 font-mono text-xs uppercase">Degree:</span>
                  <span className="text-white font-medium">{developer?.degree}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs italic text-slate-300">
                "{developer?.quote}"
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export const TechStackSection = ({ techStack = [] }) => {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="section" className="mb-3">
            Section 03: Tech Stack — Core Technologies & Tools
          </Badge>
          <SectionHeading 
            title="My Technology Toolkit"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Technologies and frameworks I use to develop scalable web and mobile software."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => (
            <SkillCard key={idx} {...tech} />
          ))}
        </div>

      </div>
    </section>
  );
};
