import React, { useState } from 'react';
import { 
  User, 
  Code2, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  FileDown, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Laptop,
  Smartphone,
  Server,
  Database,
  Shield,
  ArrowRight,
  Mail,
  MapPin,
  Check,
  Copy,
  Zap,
  Globe,
  AlertCircle,
  Loader2,
  Lock
} from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { Input, Textarea, Select } from '../atoms/Input';
import { ProjectCard } from '../molecules/SkillAndProjectMolecules';
import { ServiceCard, ProcessStep } from '../molecules/FeatureMolecules';

export const BentoProfileFeed = ({ 
  developer, 
  techStack = [], 
  projects = [], 
  caseStudy, 
  experiences = [], 
  services = [], 
  process = [], 
  education = [] 
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application (React / PHP / Laravel / Node)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const filters = ['All', 'Desktop & SaaS', 'Web App', 'Mobile App', 'Full-Stack System'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer?.email || 'castillo321ian@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Mangyaring punan ang lahat ng kinakailangang field.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'c0fada0b-05b0-4fd3-bebf-17ddfcbe61a2';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `New Portfolio Inquiry from ${formData.name} - [${formData.projectType}]`,
          message: formData.message,
          project_scope: formData.projectType,
          from_name: 'Ian Castillo Portfolio Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Full-Stack Web Application (React / PHP / Laravel / Node)',
          message: ''
        });
        setTimeout(() => setFormSubmitted(false), 8000);
      } else {
        setFormError(result.message || 'May naganap na error sa pagpapadala ng mensahe. Pakisubukan muli.');
      }
    } catch (err) {
      console.error('Web3Forms submit error:', err);
      setFormError('Hindi makakonekta sa mail server. Maaari kang mag-email nang direkta kay Ian sa castillo321ian@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN (4 Cols): Bio, Tech Stack, Career, Education  */}
        {/* ========================================================= */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-6">
          
          {/* 1. About Me Bio Card */}
          <div id="about" className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs">
                  <User className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif tracking-tight">About Me</h3>
              </div>
              <Badge variant="section">Bio</Badge>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {developer?.bio || "Full-Stack Web & Mobile Developer building clean, responsive interfaces backed by solid backend architecture. I build production-ready systems that deliver measurable business value."}
            </p>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-center">
                <span className="block text-cyan-600 dark:text-cyan-400 font-extrabold text-base sm:text-lg">25+</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Shipped Projects</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-center">
                <span className="block text-emerald-600 dark:text-emerald-400 font-extrabold text-base sm:text-lg">100%</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Delivery Rate</span>
              </div>
            </div>
          </div>

          {/* 2. Tech Stack & Skills Card */}
          <div id="tech-stack" className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-cyan-50 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs">
                  <Code2 className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif tracking-tight">Tech Stack &amp; Tools</h3>
              </div>
              <Badge variant="cyan">Stack</Badge>
            </div>

            <div className="space-y-4">
              {techStack.map((category, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                      {category.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/70 text-[11px] font-mono text-slate-700 dark:text-slate-300 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Work Experience Card */}
          <div id="experience" className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs">
                  <Briefcase className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif tracking-tight">Work Experience</h3>
              </div>
              <Badge variant="purple">Career</Badge>
            </div>

            <div className="space-y-3.5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{exp.company} • {exp.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.tags.slice(0, 7).map((t, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-transparent text-[10px] font-mono text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Education & Credentials Card */}
          <div id="education" className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif tracking-tight">Education</h3>
              </div>
              <Badge variant="emerald">Degree</Badge>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-700 dark:text-cyan-400">
                  <span>{edu.period}</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">{edu.honors}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 5. Resume Download Action Card */}
          <div id="resume" className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-blue-50 via-white to-purple-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-purple-950/40 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <FileDown className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Full Professional Resume</h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Download the complete PDF containing verified project architectures, tech stack, and credentials.
            </p>
            <Button variant="primary" size="sm" href="/Ian_Castillo_CV.pdf" target="_blank" rel="noopener noreferrer" icon={FileDown} className="w-full text-xs">
              Download CV (PDF)
            </Button>
          </div>

          {/* 6. Quick Direct Reachout Pill */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
            <div className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
              Fast Direct Inquiries
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Need quick consulting or a custom web/mobile quote? Email directly:
            </p>
            <a 
              href={`mailto:${developer?.email}`} 
              className="text-cyan-600 dark:text-cyan-400 hover:underline block font-semibold truncate pt-1"
            >
              {developer?.email || 'castillo321ian@gmail.com'}
            </a>
          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN (8 Cols): Projects, Case Study, Services, Form*/}
        {/* ========================================================= */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-8">
          
          {/* 1. Featured Projects Section Header & Filters */}
          <div id="projects" className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl backdrop-blur-md space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <Badge variant="section" className="mb-2">Featured Work</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">
                  Featured Projects &amp; Shipped Systems
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Real software shipped for education, emergency response, and commerce.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeFilter === filter
                        ? 'bg-blue-600 text-white font-medium shadow-md shadow-blue-500/20'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* 2. Real-Time GIS Architecture Case Study */}
          {caseStudy && (
            <div id="case-studies" className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl backdrop-blur-md space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <Badge variant="purple" className="mb-2">System Architecture Case Study</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">
                    {caseStudy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {caseStudy.subtitle}
                  </p>
                </div>
              </div>

              {/* 4-Phase Architecture Step Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {caseStudy.steps.map((step, idx) => (
                  <div key={idx} className="p-3.5 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-cyan-600 dark:text-cyan-400">{step.num}. {step.name}</span>
                      {step.badge && (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[10px]">
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                    {step.points && (
                      <ul className="space-y-1 pt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {step.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-1.5">
                            <span className="text-cyan-600 dark:text-cyan-400">›</span> {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Comprehensive Services Card */}
          <div id="services" className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl backdrop-blur-md space-y-5 sm:space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <Badge variant="section" className="mb-2">Services &amp; Offerings</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">
                What I Build &amp; Deliver
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Custom web, mobile, and system engineering for startups, organizations, and clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
              {services.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>

          {/* 4. Development Process Lifecycle Card */}
          <div id="process" className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl backdrop-blur-md space-y-5 sm:space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <Badge variant="cyan" className="mb-2">Methodology</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">
                My 4-Phase Engineering Lifecycle
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Structured agile approach ensuring clean architecture, high throughput, and zero downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {process.map((step, idx) => (
                <ProcessStep key={idx} step={step} />
              ))}
            </div>
          </div>

          {/* 5. Contact & Inquiry Section */}
          <div id="contact" className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-md space-y-5 sm:space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <Badge variant="section" className="mb-2">Get in Touch</Badge>
                <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white font-serif tracking-tight">
                  Let's Build Something Practical &amp; Scalable
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Have an offline SaaS, mobile app, e-commerce, or backend project in mind? Reach out today.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 text-xs font-mono text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Contact Info */}
              <div className="lg:col-span-5 space-y-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Direct Email</span>
                      <a href={`mailto:${developer?.email}`} className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-sans font-medium text-xs sm:text-sm transition-colors">
                        {developer?.email || 'castillo321ian@gmail.com'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Location</span>
                      <span className="text-slate-900 dark:text-white font-sans font-medium text-xs sm:text-sm">
                        {developer?.location || 'Pasig, Philippines (Open to Remote)'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">AI Assistant</span>
                      <span className="text-cyan-700 dark:text-cyan-400 font-sans font-medium text-xs sm:text-sm">
                        Live on bottom-right (Gemini)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Interactive Form */}
              <form onSubmit={handleContactSubmit} className="lg:col-span-7 space-y-3.5">
                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5 shadow-md animate-in fade-in slide-in-from-top duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-semibold block text-emerald-900 dark:text-emerald-200">Message sent successfully!</span>
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-300/90">I've received your inquiry and will get back to you shortly.</span>
                    </div>
                  </div>
                )}

                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/90 border border-red-300 dark:border-red-500/50 text-red-800 dark:text-red-300 text-xs flex items-center gap-2.5 shadow-md animate-in fade-in slide-in-from-top duration-300">
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input 
                    label="Your Name" 
                    placeholder="e.g. Maria Santos" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    disabled={isSubmitting}
                    required 
                  />
                  <Input 
                    label="Your Email" 
                    type="email" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    disabled={isSubmitting}
                    required 
                  />
                </div>

                <Select 
                  label="Project Scope / Inquiry Type" 
                  value={formData.projectType}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  disabled={isSubmitting}
                  options={[
                    'Full-Stack Web Application (React / PHP / Laravel / Node)',
                    'Cross-Platform Mobile App (React Native / Expo)',
                    'Offline Desktop SaaS (Tauri v2 + SQLite)',
                    'Database Optimization & Redis Caching',
                    'Full-Time / Contract Software Engineering Role',
                    'Other Inquiry'
                  ]}
                />

                <Textarea 
                  label="Project Details & Requirements" 
                  placeholder="Tell me about your project, timeline, and goals..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  disabled={isSubmitting}
                  required
                />

                <Button 
                  variant="primary" 
                  size="md" 
                  type="submit" 
                  icon={isSubmitting ? Loader2 : Send} 
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending Message to Inbox...' : 'Send Message'}
                </Button>

                {/* Privacy & Trust Micro-copy */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1 text-center">
                  <Lock className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Your information is kept confidential &amp; only used to reply to your inquiry. No spam.</span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
