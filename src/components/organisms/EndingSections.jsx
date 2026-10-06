import React, { useState } from 'react';
import { 
  FileDown, 
  Eye, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ChevronUp, 
  Code2
} from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { SectionHeading } from '../atoms/Typography';
import { Input, Textarea, Select } from '../atoms/Input';
import { TestimonialCard } from '../molecules/FeatureMolecules';
import { GithubIcon } from '../atoms/SocialIcons';

export const ResumeSection = () => (
  <section id="resume" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-gradient-to-r from-blue-950/20 via-slate-900 to-purple-950/20">
    <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
      
      <div className="space-y-2.5 text-center md:text-left max-w-xl">
        <Badge variant="section">Section 10: Resume — Download Curriculum Vitae</Badge>
        <h2 className="text-xl sm:text-3xl font-extrabold text-white">
          Looking for My Full Professional CV?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          Download a comprehensive overview of my technical stack, project history, database architecture experience, and verified credentials.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <Button variant="primary" size="md" href="#" icon={FileDown} className="w-full sm:w-auto">
          Download CV (PDF)
        </Button>
        <Button variant="secondary" size="md" href="#about" icon={Eye} className="w-full sm:w-auto">
          View Summary
        </Button>
      </div>

    </div>
  </section>
);

export const EducationSection = ({ education = [] }) => (
  <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
    <div className="max-w-4xl mx-auto">
      
      <div className="text-center mb-12 sm:mb-16">
        <Badge variant="section" className="mb-3">
          Education & Degree
        </Badge>
        <SectionHeading 
          title="Academic Background"
          subtitle="Formal IT degree and educational foundation in software engineering and computing."
        />
      </div>

      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 shadow-xl">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
            <GraduationCap className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Academic Qualifications</h3>
            <span className="text-xs text-slate-400 font-mono">Verified College Degree</span>
          </div>
        </div>

        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-cyan-400 mb-1.5 gap-2">
                <span>{edu.period}</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-[11px]">{edu.honors}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h4>
              <div className="text-xs text-slate-400 mt-1">{edu.institution}</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export const TestimonialsSection = ({ testimonials = [] }) => (
  <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 bg-slate-900/20">
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-12 sm:mb-16">
        <Badge variant="section" className="mb-3">
          Section 12: Testimonials — Stakeholder Feedback
        </Badge>
        <SectionHeading 
          title="What Clients & Colleagues Say"
          subtitle="Feedback, peer endorsements, and real collaboration experiences."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  </section>
);

export const ContactSection = ({ developer }) => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(developer?.email || 'your.email@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="section" className="mb-3">
            Section 13: Contact — Get In Touch
          </Badge>
          <SectionHeading 
            title="Let's Build Something Great Together"
            subtitle="Have a project in mind, need software architecture consulting, or exploring a hiring opportunity? Reach out anytime!"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-3.5">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="text-[10px] text-slate-400 font-mono">Email Address</div>
                      <div className="text-xs sm:text-sm text-white font-medium truncate">
                        {developer?.email}
                      </div>
                    </div>
                  </div>
                  <button onClick={copyEmail} className="p-2 text-slate-400 hover:text-cyan-400 transition-colors" title="Copy email">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm text-white font-medium">{developer?.phone}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Location</div>
                    <div className="text-xs sm:text-sm text-white font-medium">{developer?.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links Box */}
              {developer?.socials?.github && (
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-3">Online Profiles</div>
                  <div>
                    <a 
                      href={developer.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-center text-slate-200 font-medium transition-all flex items-center justify-center gap-2 hover:text-white"
                    >
                      <GithubIcon className="w-4 h-4 text-white" /> View GitHub Profile
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 sm:space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Your Name" id="name" required placeholder="John Doe" />
                <Input label="Your Email" id="email" type="email" required placeholder="john@example.com" />
              </div>

              <Select
                label="Project Type / Inquiry"
                id="subject"
                options={[
                  { value: 'web-dev', label: 'Web Development Project' },
                  { value: 'mobile-dev', label: 'Mobile App Project (iOS / Android)' },
                  { value: 'fullstack-dev', label: 'Full-Stack / Custom System' },
                  { value: 'job-offer', label: 'Job Opportunity / Hiring' },
                  { value: 'consultation', label: 'Consultation / Discussion' }
                ]}
              />

              <Textarea
                label="Your Message"
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project, timeline, or requirements..."
              />

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                disabled={loading}
                icon={Send}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </Button>

              {sent && (
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs text-center font-mono animate-fadeIn">
                  ✓ Message sent successfully! I will respond to your inquiry shortly.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export const Footer = ({ developer }) => (
  <footer className="border-t border-slate-800 bg-[#070b14] py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
      
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <div className="text-xs text-slate-400 font-mono">
          © {new Date().getFullYear()} <strong className="text-white">{developer?.name || '[Your Name]'}</strong>. Section 14: Footer.
        </div>
      </div>

      <div className="flex items-center space-x-5 text-xs text-slate-400 font-mono">
        <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>

      <a
        href="#hero"
        className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all"
        title="Back to top"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

    </div>
  </footer>
);
