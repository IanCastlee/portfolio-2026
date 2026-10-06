/**
 * Centralized Data Source with Lorem Placeholders
 * Easily replace the values below with your real information!
 */

export const portfolioData = {
  developer: {
    name: "Ian Castillo",
    shortName: "[DEV.NAME]",
    role: "IT Web & Mobile App Developer",
    availability: "Available for Full-time & Projects",
    location: "Metro Manila, Philippines [Your Location]",
    email: "your.email@example.com",
    phone: "+63 (912) 345-6789 [Your Phone]",
    degree: "BS in Information Technology",
    yearsExperience: "3+",
    projectsCompleted: "25+",
    commitmentRate: "100%",
    bio1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bio2: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Building reliable, high-performance web & mobile systems with clean architecture.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },

  techStack: [
    {
      category: "Frontend & Mobile",
      icon: "Smartphone",
      desc: "Lorem ipsum modern UI frameworks & client apps.",
      skills: [
        { name: "React / Next.js 14", level: "Advanced" },
        { name: "Flutter & Dart", level: "Proficient" },
        { name: "React Native", level: "Proficient" },
        { name: "Tailwind CSS / UI", level: "Advanced" },
      ],
    },
    {
      category: "Backend & APIs",
      icon: "Server",
      desc: "Lorem ipsum server-side logic, microservices & REST.",
      skills: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "Python / FastAPI", level: "Proficient" },
        { name: "PHP / Laravel", level: "Intermediate" },
        { name: "REST & GraphQL APIs", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: "Database",
      desc: "Lorem ipsum relational & NoSQL data architectures.",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Firebase / Supabase", level: "Advanced" },
        { name: "MySQL / Redis", level: "Proficient" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "Wrench",
      desc: "Lorem ipsum version control, containers & deployment.",
      skills: [
        { name: "Git & GitHub Actions", level: "Advanced" },
        { name: "Docker Containers", level: "Intermediate" },
        { name: "AWS & Vercel Cloud", level: "Proficient" },
        { name: "Linux & Terminal", level: "Proficient" },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Project 1: SaaS Management & Analytics Dashboard",
      category: "Web App",
      badgeColor: "cyan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "LayoutDashboard",
    },
    {
      id: 2,
      title: "Project 2: Cross-Platform E-Commerce & Delivery App",
      category: "Mobile App",
      badgeColor: "purple",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      tags: ["Flutter", "Dart", "Firebase", "Stripe API"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "Smartphone",
    },
    {
      id: 3,
      title: "Project 3: Enterprise Resource & Appointment System",
      category: "Full-Stack System",
      badgeColor: "emerald",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti.",
      tags: ["Next.js 14", "FastAPI", "Docker", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "Layers",
    },
    {
      id: 4,
      title: "Project 4: Real-time Budgeting & Payment Wallet",
      category: "FinTech App",
      badgeColor: "amber",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      tags: ["React Native", "Express", "Redis", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "Wallet",
    },
  ],

  caseStudy: {
    title: "High-Throughput Mobile Ordering & Realtime Sync Pipeline",
    tags: ["React Native", "Node.js", "Redis", "AWS"],
    steps: [
      {
        num: "01",
        name: "The Problem",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. High latency during peak concurrency and sync dropouts.",
        points: ["Lorem ipsum bottleneck 1", "Lorem ipsum bottleneck 2"],
        color: "text-red-400 border-red-500/30 bg-red-500/10",
      },
      {
        num: "02",
        name: "The Solution",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Implemented offline-first queue and asynchronous worker threads.",
        points: ["Lorem ipsum solution 1", "Lorem ipsum solution 2"],
        color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      },
      {
        num: "03",
        name: "Architecture",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Microservices decoupled with Redis Pub/Sub and WebSocket relays.",
        points: ["Lorem ipsum architecture 1", "Lorem ipsum architecture 2"],
        color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      },
      {
        num: "04",
        name: "The Result",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 70% decrease in response latency and 99.9% uptime achieved.",
        badge: "+45% Speed Improvement • Zero Collisions",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      },
    ],
  },

  experiences: [
    {
      role: "[Lead / Senior Full-Stack Developer]",
      company: "[Tech Solutions Corp / Enterprise]",
      location: "[Manila / Remote]",
      period: "2024 — Present",
      type: "Full-Time",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      tags: ["React", "Flutter", "Node.js", "PostgreSQL"],
    },
    {
      role: "[Junior Web & Mobile Developer]",
      company: "[Digital Agency / Startup]",
      location: "[Quezon City / Hybrid]",
      period: "2023 — 2024",
      type: "Contract",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
      tags: ["Vue.js", "Firebase", "REST APIs", "Tailwind"],
    },
    {
      role: "[Software & IT Intern]",
      company: "[IT Solutions & Systems Co]",
      location: "[Makati City]",
      period: "2022 — 2023",
      type: "Internship",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.",
      tags: ["HTML/CSS/JS", "PHP/MySQL", "IT Support"],
    },
  ],

  services: [
    {
      title: "Custom Web Development",
      icon: "Code",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fast, SEO-optimized, and fully responsive web applications using modern frameworks.",
      features: [
        "SPA & SSR Applications (React / Next.js)",
        "Landing Pages & Corporate Portals",
        "E-Commerce & Payment Integrations",
      ],
    },
    {
      title: "Mobile App Development",
      icon: "Smartphone",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. High performance cross-platform mobile apps for both iOS and Android.",
      features: [
        "iOS & Android (Flutter / React Native)",
        "Offline-First & Realtime Cloud Sync",
        "App Store & Play Store Deployment",
      ],
    },
    {
      title: "Full-Stack & System Dev",
      icon: "Cpu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. End-to-end software, custom database architectures, and IT automation.",
      features: [
        "Custom Admin & ERP / CRM Systems",
        "RESTful & GraphQL API Development",
        "Cloud Deployment & Maintenance",
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "1. Plan & Architect",
      icon: "FileText",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Requirement gathering, database schema design, and UI wireframing.",
    },
    {
      step: "02",
      title: "2. Build & Code",
      icon: "Terminal",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Clean coding, component structuring, and robust API integration.",
    },
    {
      step: "03",
      title: "3. Test & Optimize",
      icon: "ShieldCheck",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cross-device testing, security auditing, and performance profiling.",
    },
    {
      step: "04",
      title: "4. Deploy & Scale",
      icon: "Rocket",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. CI/CD automation, cloud provisioning, app store launch, and maintenance.",
    },
  ],

  repositories: [
    {
      name: "flutter-clean-architecture-template",
      folder: "repo-name-one",
      desc: "Lorem ipsum dolor sit amet boilerplate with BLoC, dependency injection, and REST client.",
      language: "Dart",
      langColor: "bg-blue-400",
      stars: 24,
      forks: 8,
    },
    {
      name: "nextjs-fullstack-starter-kit",
      folder: "repo-name-two",
      desc: "Lorem ipsum dolor sit amet authentication, Prisma ORM, Tailwind, and Stripe ready starter.",
      language: "TypeScript",
      langColor: "bg-cyan-400",
      stars: 48,
      forks: 14,
    },
    {
      name: "fastapi-microservice-docker-jwt",
      folder: "repo-name-three",
      desc: "Lorem ipsum dolor sit amet high speed asynchronous microservice blueprint with Docker compose.",
      language: "Python",
      langColor: "bg-yellow-400",
      stars: 32,
      forks: 5,
    },
  ],

  education: [
    {
      period: "2020 — 2024",
      honors: "[Honors / Dean's Lister]",
      degree: "Bachelor of Science in Information Technology",
      institution: "[University / College Name]",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focused on Software Engineering, Mobile Computing, and Database Systems.",
    },
  ],

  certifications: [
    {
      title: "[AWS Certified Cloud Practitioner / Solutions Architect]",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "[Meta Front-End / Back-End Developer Certificate]",
      issuer: "Coursera / Meta",
      year: "2023",
    },
    {
      title: "[Flutter & Dart Complete Masterclass]",
      issuer: "Udemy / Provider",
      year: "2023",
    },
  ],

  testimonials: [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delivered our mobile application ahead of schedule with zero bugs. Highly recommended!",
      author: "[Client / Manager Name]",
      role: "[CEO / Product Lead at Tech Co]",
      initials: "JD",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exceptional problem-solving skills and clean architecture practices.",
      author: "[Colleague / Team Lead]",
      role: "[Senior Engineering Director]",
      initials: "AS",
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transformed our legacy website into a blazing-fast modern web application.",
      author: "[Client Name]",
      role: "[Founder at Startup Hub]",
      initials: "MR",
    },
  ],
};
