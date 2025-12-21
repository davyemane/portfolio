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
  cvUrl: "/CV_EMANE_BILE_Felicien_Davy.pdf"
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
  "Software Engineering": {
    icon: "FaProjectDiagram",
    color: "#3b82f6",
    items: [
      "Software requirements analysis",
      "System and application design",
      "Technical documentation & design documents",
      "UML, Merise",
      "Agile methodologies (SCRUM)"
    ]
  },
  "Backend & API Development": {
    icon: "FaServer",
    color: "#10b981",
    items: [
      "RESTful API design and implementation",
      "API documentation with Swagger / OpenAPI",
      "Python: Django, FastAPI, Flask",
      "PHP: Symfony",
      "Authentication & authorization (JWT, sessions)",
      "Integration with frontend applications"
    ]
  },
  "DevOps & Deployment": {
    icon: "FaDocker",
    color: "#0ea5e9",
    items: [
      "Docker & Docker Compose",
      "Continuous Deployment pipelines",
      "CI/CD concepts (Git-based workflows)",
      "Automated testing integration",
      "Basic Jenkins usage",
      "Server deployment & application delivery"
    ]
  },
  "Databases & Data Management": {
    icon: "FaDatabase",
    color: "#f59e0b",
    items: [
      "PostgreSQL, MySQL",
      "MongoDB",
      "Redis",
      "Database modeling & optimization"
    ]
  },
  "Operating Systems": {
    icon: "FaLinux",
    color: "#ef4444",
    items: [
      "Linux (Ubuntu – daily professional use)",
      "Server environment & basic system administration"
    ]
  },
  "Version Control & Collaboration": {
    icon: "FaGitAlt",
    color: "#8b5cf6",
    items: [
      "Git",
      "GitHub, GitLab",
      "Code reviews & collaborative development"
    ]
  }
};

export const projects = [
  {
    id: 1,
    title: "DIGITAGRO API v2.0",
    subtitle: "Agrosylvopastoral Platform (Backend & DevOps)",
    period: "Since July 2025",
    company: "Hoop SARL",
    location: "Yaounde, Cameroon",
    description: "Production-ready REST API for a national agrosylvopastoral platform connecting producers, transporters, distributors, and consumers",
    achievements: [
      "Designed and implemented a production-ready REST API",
      "Architected a dynamic multi-role user system with automatic role activation",
      "Built secure authentication and authorization (token-based auth, RBAC)",
      "Implemented core business modules: production management, orders, evaluations, notifications",
      "Integrated real-time notifications using WebSockets and Redis",
      "Documented the entire API using Swagger / OpenAPI",
      "Implemented automated tests and health-check endpoints",
      "Containerized the application using Docker & Docker Compose",
      "Designed deployment workflows including migrations and service health validation"
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Redis", "Docker", "Linux", "Git"],
    icon: "FaLeaf",
    color: "#22c55e",
    featured: true
  },
  {
    id: 2,
    title: "Regional Annex Hospital of Edea",
    subtitle: "Institutional Website",
    period: "Since November 2025",
    company: "Regional Annex Hospital of Edea",
    location: "Edéa, Cameroon",
    description: "Official institutional website for the Regional Annex Hospital",
    achievements: [
      "Designed and developed the official institutional website",
      "Implemented accessible information architecture for patients and visitors",
      "Built secure and maintainable backend with Django",
      "Implemented content management features for hospital staff",
      "Ensured performance optimization, security best practices, and SEO-friendly structure",
      "Deployed on Linux (Ubuntu) server environment"
    ],
    stack: ["Django", "HTML/CSS", "PostgreSQL", "Linux", "Git"],
    icon: "FaHospital",
    color: "#ef4444",
    featured: true
  },
  {
    id: 3,
    title: "Repavi Lodge",
    subtitle: "Reservation & Property Management Platform",
    period: "June - September 2025",
    company: "Repavilodge",
    location: "Yaounde, Cameroon",
    description: "Full-stack reservation and property management platform for furnished apartments",
    achievements: [
      "Designed and developed complete reservation platform",
      "Built custom administration interface using Django and Tailwind CSS",
      "Implemented core modules: properties, cities, categories, photos, reservations",
      "Developed advanced admin features: dashboards with statistics, filters, search",
      "Ensured responsive UI for desktop, tablet, and mobile devices",
      "Prepared application for production with deployment configuration"
    ],
    stack: ["Django", "PostgreSQL", "Tailwind CSS", "Docker", "Linux", "Git"],
    icon: "FaHome",
    color: "#f59e0b",
    featured: true
  },
  {
    id: 4,
    title: "Academic Digital Platforms",
    subtitle: "Backend Development & Team Leadership",
    period: "Since January 2024",
    company: "Centre de Développement Numérique - ESIGN Cameroon",
    location: "Cameroon",
    description: "Led the design and development of academic digital platforms from requirements analysis to production deployment",
    achievements: [
      "Led design and development of academic digital platforms from requirements to deployment",
      "Designed system architecture and REST APIs",
      "Coordinated development team using Agile (SCRUM) methodology",
      "Implemented backend services, databases, and deployment workflows",
      "Ensured documentation, maintainability, and scalability of solutions"
    ],
    stack: ["Django", "REST API", "PostgreSQL", "Docker", "SCRUM", "Git"],
    icon: "FaGraduationCap",
    color: "#3b82f6",
    featured: true
  },
  {
    id: 5,
    title: "RAIA E-Learning Platform",
    subtitle: "API Development for Digital Education",
    period: "Since September 2024",
    company: "RAIA (raia.cm)",
    location: "Cameroon",
    description: "Designed and developed API for an e-learning platform with AI-driven solutions to support digital education",
    achievements: [
      "Designed and developed an API for an e-learning platform",
      "Built software and AI-driven solutions to support digital education",
      "Collaborated with frontend teams to ensure seamless integration of services",
      "Implemented scalable backend architecture for educational content delivery"
    ],
    stack: ["Python", "Django", "REST API", "AI Integration", "Git"],
    icon: "FaBook",
    color: "#8b5cf6",
    featured: true
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
