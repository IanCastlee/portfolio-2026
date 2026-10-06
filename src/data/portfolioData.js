/**
 * Centralized Data Source for Developer Portfolio
 * Profile, skills, projects, case studies, experience, and services
 */

export const portfolioData = {
  developer: {
    name: "Ian Castillo",
    shortName: "<eyhan/>",
    role: "IT Web & Mobile App Developer",
    availability: "Available for Full-time & Projects",
    location: "Pasig, Philippines",
    email: "castillo321ian@gmail.com",
    phone: "+63 (912) 345-6789 [Your Phone]",
    degree: "BS in Information Technology",
    yearsExperience: "3+",
    projectsCompleted: "25+",
    commitmentRate: "100%",
    heroIntro:
      "Full-Stack Web & Mobile Developer building clean, responsive interfaces backed by solid backend architecture. I don't just focus on visuals — I make sure the server, database, and system performance stay fast, efficient, and reliable under load. Freelancing since 2023.",
    bio1: "I am a full-stack developer based in the Philippines with a BS in Information Technology. Since starting freelance development in 2023, I've built and delivered custom software solutions — from mission-critical emergency GIS applications to offline desktop grading tools and multi-vendor marketplaces.",
    bio2: "My focus is simple: clean code, solid database design, and snappy user interfaces. I work across the stack with React, React Native, PHP, Laravel, Node.js, MySQL, Redis, and modern AI engineering workflows using Google Antigravity and Claude AI.",
    quote:
      "Building practical, reliable software that solves real problems and scales smoothly.",
    socials: {
      github: "https://github.com",
    },
  },

  techStack: [
    {
      category: "Frontend & Mobile",
      icon: "Smartphone",
      desc: "Modern UI libraries, responsive styling, and cross-platform mobile apps.",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "React Native", level: "Proficient" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "CSS3 & SCSS", level: "Advanced" },
      ],
    },
    {
      category: "Backend & APIs",
      icon: "Server",
      desc: "Server-side business logic, robust MVC frameworks, and RESTful architectures.",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "PHP", level: "Advanced" },
        { name: "Laravel", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: "Database",
      desc: "Relational data modeling, document stores, in-memory caching, and BaaS platforms.",
      skills: [
        { name: "Firebase & Supabase", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Redis", level: "Proficient" },
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: "Wrench",
      desc: "Version control, containerization, media CDN management, and cloud deployments.",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Cloudinary", level: "Advanced" },
      ],
    },
    {
      category: "AI & Modern Tools",
      icon: "Sparkles",
      desc: "Agentic AI development, prompt workflows, and AI-assisted engineering.",
      skills: [
        { name: "Google Antigravity", level: "Advanced" },
        { name: "Claude AI", level: "Advanced" },
        { name: "AI API Integration", level: "Proficient" },
        { name: "Prompt & Agent Workflows", level: "Advanced" },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Personal Grading System (PGS SaaS)",
      category: "Desktop & SaaS App",
      badgeColor: "cyan",
      image: "/projects/grading-system.png",
      desc: "An offline-first desktop SaaS grading management & analytics system for educators. Features automated quarterly grade computation, student attendance tracking, DepEd Form 138 (SF9) PDF generation, and Excel export with online product key verification & HWID device locking.",
      tags: [
        "Tauri v2",
        "React 18",
        "TypeScript",
        "SQLite",
        "Supabase",
        "Tailwind CSS",
        "SheetJS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "LayoutDashboard",
    },
    {
      id: 2,
      title: "OSYUSO: Local Market & E-Commerce Platform",
      category: "Web & Mobile App",
      badgeColor: "purple",
      image: "/projects/osyuso-desktop.png",
      mobileImage: "/projects/osyuso-mobile.webp",
      desc: "A multi-vendor digital marketplace connecting local food producers and market vendors with customers. Engineered with fast product catalog searching, categorized filtering, automated seller onboarding, Cloudinary image optimization, and Redis caching for high traffic throughput.",
      tags: [
        "React",
        "PHP",
        "Laravel",
        "MySQL",
        "Redis",
        "Cloudinary",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "Smartphone",
    },
    {
      id: 3,
      title: "Irosin Disaster Safety (MDRRMO Command & Mobile System)",
      category: "Full-Stack & Emergency System",
      badgeColor: "emerald",
      image: "/projects/irosin-desktop.png",
      mobileImage: "/projects/irosin-mobile.jpg",
      desc: "A mission-critical real-time disaster management and emergency response ecosystem for MDRRMO. Features a React Native mobile app for citizens/responders (instant incident reporting, USGS earthquake feeds, PAGASA weather radar, emergency sirens) and a React 18 Admin Command Dashboard with real-time Socket.IO live broadcasting and GeoJSON hazard mapping.",
      tags: [
        "React Native",
        "Expo SDK 54",
        "Node.js",
        "Socket.IO",
        "Firestore",
        "React 18",
        "Leaflet GIS",
        "TypeScript",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "Layers",
    },
    {
      id: 4,
      title: "Nature Hot Spring: Resort Booking & Reservation System",
      category: "Web Application",
      badgeColor: "amber",
      image: "/projects/nature-hot-spring.png",
      desc: "A hotel & resort reservation web platform for Nature Hot Spring Retreat. Engineered with real-time room availability scheduling, interactive check-in/check-out datepicker, dynamic guest capacity configuration, room gallery showcases, and an automated backend booking engine.",
      tags: ["React", "PHP", "Tailwind CSS", "MySQL", "REST API", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      icon: "Wallet",
    },
  ],

  caseStudy: {
    title: "High-Throughput Mobile Ordering & Realtime Sync Pipeline",
    tags: ["React Native", "Node.js", "Redis", "MySQL", "Socket.IO"],
    steps: [
      {
        num: "01",
        name: "The Problem",
        desc: "High concurrency bottlenecks during peak user traffic causing database lock contention, slow API responses (>1.8s), and dropped real-time status updates.",
        points: [
          "Database query bottlenecks during flash sales",
          "Unreliable WebSocket reconnections on mobile networks",
        ],
        color: "text-red-400 border-red-500/30 bg-red-500/10",
      },
      {
        num: "02",
        name: "The Solution",
        desc: "Implemented multi-tier caching with Redis, asynchronous queue workers for transaction processing, and an offline-first sync engine in React Native.",
        points: [
          "Redis caching layer for hot product catalogs",
          "Optimistic UI updates with background synchronization",
        ],
        color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      },
      {
        num: "03",
        name: "Architecture",
        desc: "Decoupled monolithic endpoints into lightweight Node.js event-driven microservices with Redis Pub/Sub and Socket.IO real-time clusters.",
        points: [
          "Stateless REST API microservices with horizontal scaling",
          "GeoJSON & map layer caching for fast location lookups",
        ],
        color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      },
      {
        num: "04",
        name: "The Result",
        desc: "Achieved 75% reduction in API latency (<120ms average), 99.9% real-time message delivery rate, and zero data loss during high load bursts.",
        badge: "+75% Speed Improvement • 99.9% Uptime",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      },
    ],
  },

  experiences: [
    {
      role: "Freelance Full-Stack Web & Mobile Developer",
      company: "Independent Freelance & Client Projects",
      location: "Philippines / Remote",
      period: "2023 — Present",
      type: "Freelance",
      desc: "Delivering end-to-end web applications, desktop SaaS software (Tauri v2 + SQLite), cross-platform mobile apps (React Native / Expo), and high-concurrency backend systems (PHP/Laravel, Node.js, MySQL, Redis) for clients, organizations, and businesses.",
      tags: [
        "React",
        "React Native",
        "PHP",
        "Laravel",
        "Node.js",
        "Tailwind CSS",
        "MySQL",
        "Supabase",
        "Redis",
        "Tauri v2",
      ],
    },
  ],

  services: [
    {
      title: "Full-Stack Web Development",
      icon: "Code",
      desc: "High-speed, SEO-optimized, and scalable web applications built with React, PHP, Laravel, Node.js, and modern Tailwind CSS design systems.",
      features: [
        "Single Page Applications & Web Portals (React / Vite)",
        "Robust REST APIs & Database Backends (PHP / Laravel / Node.js)",
        "E-Commerce, Booking Engines & Payment Gateways",
      ],
    },
    {
      title: "Mobile Application Development",
      icon: "Smartphone",
      desc: "Cross-platform mobile applications for iOS & Android built with React Native and Expo, featuring offline persistence and real-time synchronization.",
      features: [
        "Cross-Platform iOS & Android Apps (React Native / Expo)",
        "Live Map GIS & Geolocation Tracking",
        "Push Notifications, Offline Storage & Real-time WebSockets",
      ],
    },
    {
      title: "Desktop SaaS & Custom Systems",
      icon: "Cpu",
      desc: "Offline-first desktop software, automated grading systems, and enterprise data management tools engineered with modern desktop wrappers and secure cloud verification.",
      features: [
        "Cross-Platform Desktop Apps (Tauri v2 + SQLite)",
        "Cloud License Verification & HWID Device Locking",
        "Automated PDF (SF9/Form 138) & Excel (SheetJS) Data Export",
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "1. Discover & Architect",
      icon: "FileText",
      desc: "Requirement analysis, user journey mapping, database schema design, and system architecture planning for scale and security.",
    },
    {
      step: "02",
      title: "2. Build & Integrate",
      icon: "Terminal",
      desc: "Clean modular coding with React/React Native, robust API construction with PHP/Node.js, and seamless database integration.",
    },
    {
      step: "03",
      title: "3. Test & Optimize",
      icon: "ShieldCheck",
      desc: "Cross-browser and mobile device testing, query optimization with Redis/MySQL, and security auditing before release.",
    },
    {
      step: "04",
      title: "4. Deploy & Maintain",
      icon: "Rocket",
      desc: "Continuous integration, cloud deployment on Vercel/Docker, desktop installer generation (NSIS .exe), and ongoing monitoring.",
    },
  ],

  repositories: [
    {
      name: "personal-grading-system-tauri",
      folder: "pgs-desktop-saas",
      desc: "Tauri v2 + React 18 offline-first SaaS grading and student analytics system with SQLite and Supabase license auth.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      stars: 36,
      forks: 12,
    },
    {
      name: "irosin-emergency-safety-mobile",
      folder: "irosin-safety-app",
      desc: "React Native Expo SDK 54 real-time disaster management and emergency siren app with Socket.IO & Leaflet GIS.",
      language: "TypeScript",
      langColor: "bg-cyan-400",
      stars: 52,
      forks: 18,
    },
    {
      name: "osyuso-marketplace-platform",
      folder: "osyuso-ecommerce",
      desc: "Full-stack multi-vendor marketplace engine powered by React, PHP, Laravel, MySQL, and Redis caching.",
      language: "PHP / React",
      langColor: "bg-purple-400",
      stars: 41,
      forks: 9,
    },
  ],

  education: [
    {
      period: "2020 — 2024",
      honors: "Bachelor's Degree Graduate",
      degree: "Bachelor of Science in Information Technology",
      institution: "State University / College of Information Technology",
      desc: "Specialized in Software Engineering, Full-Stack Web Development, Mobile Application Computing, and Database Management Systems.",
    },
  ],

  certifications: [
    {
      title: "Full-Stack Web Development & Modern React",
      issuer: "Professional Certification",
      year: "2024",
    },
    {
      title: "React Native & Mobile App Architecture",
      issuer: "Mobile Engineering Certification",
      year: "2023",
    },
    {
      title: "Database Design & High-Performance SQL",
      issuer: "Database Systems Institute",
      year: "2023",
    },
  ],

  testimonials: [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      author: "Client / Partner Name",
      role: "Institutional & Project Partner",
      initials: "CP",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      author: "Operations Lead",
      role: "Operations & Safety Directorate",
      initials: "OL",
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      author: "Business Manager",
      role: "Client & Business Partner",
      initials: "BM",
    },
  ],
};
