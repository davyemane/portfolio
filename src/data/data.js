export const personalInfo = {
  name: "EMANE BILE Felicien Davy",
  role: "Software Developer & Digital Systems Engineer",
  tagline: "I design, build and deploy production-ready web platforms and APIs.",
  email: "davemane1@gmail.com",
  phone: "+237 6 97 37 95 39",
  location: "Sangmelima, Cameroon",
  github: "https://github.com/davyemane/",
  linkedin: "https://www.linkedin.com/in/davyemane/",
  gitlab: "https://gitlab.com/davyemane",
  twitter: "davyemane",
  openToRemote: true,
  cvUrl: "/CV_EMANE_BILE_Felicien_Davy.pdf",
  photo: "/photo.png"
};

export const about = {
  description: `Software Developer & Digital Systems Engineer with strong experience in backend development, API design, and DevOps practices. Proficient in Linux environments (Ubuntu), RESTful API architecture with Swagger/OpenAPI documentation, and full software development lifecycle (analysis, design, development, testing, deployment, and maintenance). Experienced in Git-based workflows, continuous deployment pipelines, containerization with Docker, and automated testing.`,
  assets: [
    "Passion for building innovative digital solutions",
    "Team leadership and collaborative mindset",
    "Strong problem-solving and analytical skills",
    "Fast learner and adaptable to new technologies"
  ],
  interests: ["Music", "Reading", "Sport", "Social networks"]
};

export const languages = [
  { name: "French", level: "Excellent" },
  { name: "English", level: "Intermediate (improving rapidly)" }
];

export const skills = {
  "Backend & API Development": {
    icon: "FaServer",
    color: "#3b82f6",
    items: [
      "Django 5/6 & Django REST Framework",
      "FastAPI, Flask",
      "PHP: Symfony",
      "ASGI (Uvicorn) & WebSockets (Django Channels)",
      "RESTful API design & Swagger / OpenAPI",
      "JWT, sessions, RBAC authentication",
      "Celery & Celery Beat (async tasks)"
    ]
  },
  "Databases & Storage": {
    icon: "FaDatabase",
    color: "#10b981",
    items: [
      "PostgreSQL 16",
      "MongoDB 7 (mongoengine, pymongo)",
      "Redis 7 (cache, broker, pub/sub)",
      "Elasticsearch 8 (full-text search)",
      "PgBouncer (connection pooling)",
      "Database modeling & optimization"
    ]
  },
  "DevOps & Infrastructure": {
    icon: "FaDocker",
    color: "#0ea5e9",
    items: [
      "Docker & Docker Compose",
      "Nginx (load balancer, reverse proxy, rate limiting)",
      "CI/CD — GitHub Actions + Tailscale",
      "Cloudflare Tunnel (CDN & secure exposure)",
      "Automated testing & health-check endpoints",
      "Server deployment & migration workflows"
    ]
  },
  "Monitoring & Observability": {
    icon: "FaChartLine",
    color: "#f59e0b",
    items: [
      "Portainer (container management UI)",
      "Prometheus (metrics collection)",
      "Grafana (dashboards & alerts)",
      "cAdvisor (container resource metrics)",
      "Node Exporter, Redis Exporter, MongoDB Exporter",
      "PostgreSQL Exporter"
    ]
  },
  "Mobile & Frontend": {
    icon: "FaMobileAlt",
    color: "#8b5cf6",
    items: [
      "Flutter & Dart",
      "Supabase (self-hosted)",
      "Firebase (FCM push notifications)",
      "MapLibre GL (cartography)",
      "Tailwind CSS",
      "HTML / CSS"
    ]
  },
  "Software Engineering & Tools": {
    icon: "FaGitAlt",
    color: "#ef4444",
    items: [
      "Linux (Ubuntu – daily professional use)",
      "Git, GitHub, GitLab",
      "Agile / SCRUM methodology",
      "UML, Merise",
      "Technical documentation & design documents",
      "Code review & team collaboration"
    ]
  }
};

export const projects = [
  {
    id: 1,
    title: "E-Testing Suite",
    subtitle: "EdTech Platform — Quiz & Learning Management",
    period: "2024 - Present",
    company: "Personal / Client Project",
    location: "Cameroon",
    description: "Full-featured EdTech platform enabling individuals to subscribe by subject and progress through adaptive quizzes, and companies/schools to manage bulk subscriptions for their teams.",
    achievements: [
      "Architected a high-performance ASGI backend (Uvicorn) supporting 1,000–100,000 concurrent users",
      "Built 10+ business modules: school hierarchy, adaptive quiz engine, B2B contracts, billing, analytics",
      "Integrated Mobile Money & CinetPay payment gateway with subscription management",
      "Implemented real-time notifications via WebSockets (Django Channels + Redis)",
      "Deployed Elasticsearch 8 for full-text search with Redis caching layer",
      "Set up async task processing with Celery + Celery Beat for scheduled jobs",
      "Configured CI/CD pipeline with GitHub Actions, Tailscale, and Cloudflare Tunnel",
      "Dual database architecture: PostgreSQL 16 (main) + MongoDB 7 (logs)"
    ],
    stack: ["Django 5", "DRF", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Celery", "Docker", "GitHub Actions"],
    icon: "FaFlask",
    color: "#6366f1",
    featured: true,
    demo: "https://e-testingsuite.com",
    github: "https://github.com/davyemane/"
  },
  {
    id: 2,
    title: "Repavi Lodges",
    subtitle: "Reservation & Property Management Platform",
    period: "2025 - Present",
    company: "Repavi Lodges",
    location: "Yaounde, Cameroon",
    description: "Full-stack reservation and property management platform for furnished apartments, with a custom admin dashboard and tenant-facing booking interface.",
    achievements: [
      "Designed and developed the complete reservation platform from scratch",
      "Built a custom admin interface with Django + Tailwind CSS (statistics, filters, search)",
      "Implemented core modules: properties, cities, categories, photos, reservations",
      "Built tenant-facing booking flow with availability calendar and confirmation emails",
      "Ensured responsive UI for desktop, tablet, and mobile devices",
      "Deployed on Linux (Ubuntu) server with Docker and automated backups"
    ],
    stack: ["Django", "PostgreSQL", "Tailwind CSS", "Docker", "Linux", "Git"],
    icon: "FaHome",
    color: "#f59e0b",
    featured: true,
    demo: "https://repavilodges.com"
  },
  {
    id: 3,
    title: "DIGITAGRO API v2.0",
    subtitle: "Agrosylvopastoral Platform — Backend & DevOps",
    period: "Since July 2025",
    company: "Hoop SARL",
    location: "Yaounde, Cameroon",
    description: "Production-ready REST API for a national agrosylvopastoral platform connecting producers, transporters, distributors, and consumers across Cameroon.",
    achievements: [
      "Designed and implemented a production-ready REST API for an agri-food supply chain",
      "Architected a dynamic multi-role user system with automatic role activation",
      "Built secure authentication and authorization (token-based auth, RBAC)",
      "Implemented core modules: production management, orders, evaluations, notifications",
      "Integrated real-time notifications using WebSockets and Redis",
      "Documented the entire API with Swagger / OpenAPI",
      "Containerized the application using Docker & Docker Compose",
      "Deployed on Linux with automated migration and health-check workflows"
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Redis", "Docker", "Linux", "Git"],
    icon: "FaLeaf",
    color: "#22c55e",
    featured: true,
    demo: "https://api.digitagro.cm"
  },
  {
    id: 4,
    title: "Hôpital Régional Annexe d'Édéa",
    subtitle: "Official Institutional Website",
    period: "Since November 2025",
    company: "Regional Annex Hospital of Edea",
    location: "Edéa, Cameroon",
    description: "Official institutional website for the Regional Annex Hospital of Edea, built with Django and deployed on a Linux server.",
    achievements: [
      "Designed and developed the official institutional website",
      "Implemented accessible information architecture for patients and visitors",
      "Built content management features for hospital staff (news, services, staff directory)",
      "Ensured performance optimization, security best practices, and SEO",
      "Deployed on Linux (Ubuntu) server environment with Nginx"
    ],
    stack: ["Django", "HTML/CSS", "PostgreSQL", "Nginx", "Linux", "Git"],
    icon: "FaHospital",
    color: "#ef4444",
    featured: true,
    demo: "https://hopital-regional-edea.com"
  },
  {
    id: 5,
    title: "Academic Digital Platforms",
    subtitle: "Backend Development & Team Leadership",
    period: "Since January 2024",
    company: "Centre de Développement Numérique — ESIGN Cameroon",
    location: "Cameroon",
    description: "Led the design and development of academic digital platforms from requirements analysis to production deployment at ESIGN's digital development center.",
    achievements: [
      "Led a development team using Agile (SCRUM) methodology",
      "Designed system architecture and REST APIs for academic management",
      "Implemented backend services, databases, and deployment workflows",
      "Ensured documentation, maintainability, and scalability of solutions",
      "Delivered multiple modules: enrollment, scheduling, grading, notifications"
    ],
    stack: ["Django", "REST API", "PostgreSQL", "Docker", "SCRUM", "Git"],
    icon: "FaGraduationCap",
    color: "#3b82f6",
    featured: true
  },
  {
    id: 6,
    title: "RAIA E-Learning Platform",
    subtitle: "API Development for Digital Education",
    period: "Since September 2024",
    company: "RAIA (raia.cm)",
    location: "Cameroon",
    description: "Designed and developed the backend API for an e-learning platform with AI-driven solutions to support digital education across Cameroon.",
    achievements: [
      "Designed and developed the REST API for the e-learning platform",
      "Built AI-driven features to support adaptive learning paths",
      "Collaborated with frontend teams to ensure seamless service integration",
      "Implemented scalable backend architecture for educational content delivery"
    ],
    stack: ["Python", "Django", "REST API", "AI Integration", "Git"],
    icon: "FaBook",
    color: "#8b5cf6",
    featured: true
  },
  {
    id: 7,
    title: "LABOUSSOL",
    subtitle: "Job Matching Platform — REST API",
    period: "2025 - Present",
    company: "Personal Project",
    location: "Cameroon",
    description: "REST API for a job matching platform connecting job seekers with employers in Cameroon, featuring advanced search, email notifications, and payment integration.",
    achievements: [
      "Designed and built a full REST API with Django REST Framework",
      "Implemented advanced filtering and search for job listings",
      "Built multi-role user system: job seekers, companies, admins",
      "Integrated NotchPay payment gateway for premium subscriptions",
      "Set up transactional email notifications via Postfix SMTP relay",
      "Containerized with Docker & Docker Compose for production deployment",
      "Documented all endpoints with Swagger / OpenAPI"
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Docker", "Redis", "NotchPay", "Linux"],
    icon: "FaBriefcase",
    color: "#0891b2",
    featured: true,
    github: "https://github.com/davyemane/"
  },
  {
    id: 8,
    title: "Biang — PharmaLocate",
    subtitle: "Mobile App — Real-time Pharmacy Geolocation",
    period: "2026 - Present",
    company: "Personal Project",
    location: "Cameroon",
    description: "Flutter mobile application for real-time geolocation of medications in pharmacies across Cameroon, with a self-hosted Supabase backend and MapLibre cartography.",
    achievements: [
      "Built a Flutter mobile app with real-time map of nearby pharmacies",
      "Integrated MapLibre GL for smooth and customizable cartography",
      "Implemented real-time stock management for pharmacies via Supabase",
      "Built pharmacy self-registration flow with interactive map pin selection",
      "Configured Firebase Cloud Messaging (FCM) for push notifications",
      "Self-hosted Supabase on personal VPS via Docker for full data control"
    ],
    stack: ["Flutter", "Supabase", "MapLibre", "Firebase FCM", "Docker", "PostgreSQL"],
    icon: "FaMobileAlt",
    color: "#7c3aed",
    featured: true,
    github: "https://github.com/davyemane/"
  }
];

export const experience = [
  {
    id: 1,
    title: "Back-End Developer & Team Lead",
    company: "Centre de Développement Numérique - ESIGN Cameroon",
    period: "Since January 2024",
    location: "Cameroon",
    responsibilities: [
      "Led design and development of academic digital platforms from requirements to deployment",
      "Designed system architecture and REST APIs",
      "Coordinated development team using Agile (SCRUM) methodology",
      "Implemented backend services, databases, and deployment workflows",
      "Ensured documentation, maintainability, and scalability"
    ]
  },
  {
    id: 2,
    title: "Back-End Developer",
    company: "RAIA (raia.cm)",
    period: "Since September 2024",
    location: "Cameroon",
    responsibilities: [
      "Designed and developed API for e-learning platform",
      "Built software and AI-driven solutions for digital education",
      "Collaborated with frontend teams for seamless service integration"
    ]
  }
];

export const education = [
  {
    degree: "Engineering Degree in Digital Systems",
    institution: "ESIGN Cameroon (Ecole supérieure internationale de génie numérique Congo Cameroun)",
    period: "January 2020 - July 2025",
    location: "Cameroon"
  },
  {
    degree: "Baccalaureate C – Mathematics & Sciences",
    institution: "Lycée classique et moderne de Sangmelima",
    period: "2018 - 2019",
    location: "Sangmélima, Cameroon"
  }
];

export const certifications = [
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM, Coursera",
    date: "August 2025"
  },
  {
    name: "SCRUM FONDAMENTAL",
    issuer: "ECLEE France",
    date: "April - June 2023"
  }
];
