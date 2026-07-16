export const portfolioData = {
  name: "Pathu Thangamuthu",
  title: "Pathu Thangamuthu",
  roleTitle: "Full Stack & AI Engineer",
  location: "Coimbatore, Tamil Nadu, India",
  email: "pathuthangamuthu@gmail.com",
  phone: "+91 9524214194",
  linkedin: "https://www.linkedin.com/in/pathu-t",
  github: "https://github.com/PathuT",
  resume: "https://drive.google.com/drive/folders/1iezPKVu9h7btGMhzQUaQ4W6ltC6Ko9bY?usp=sharing",

  about: {
    summary: [
      "Two years into my engineering journey, I've moved from intern to full-time engineer at a product company — shipping real features, not just tickets.",
      "My day-to-day spans the whole stack: Next.js and React on the front, Node.js, Express, and FastAPI underneath, with MongoDB and PostgreSQL holding the data. I like wiring in AI where it actually earns its keep and breaking monoliths into microservices that are easier to reason about.",
      "Beyond the code, I care about the plumbing that keeps it running — AWS, Docker, Jenkins, CI/CD — and about writing software a teammate can pick up six months later without cursing my name."
    ],
    stats: [
      { value: "45+", label: "APIs Deployed" },
      { value: "2", label: "Years Experience" },
      { value: "20+", label: "AI Agents Built" },
      { value: "6+", label: "Tech Stacks Mastered" }
    ]
  },

  skills: [
    {
      category: "Full Stack Development",
      items: ["Next.js, React.js", "Node.js, Express.js", "JavaScript (ES6+)", "Tailwind CSS, Bootstrap"],
      color: "mint"
    },
    {
      category: "Backend & Databases",
      items: ["Python, FastAPI", "REST APIs & Microservices", "MongoDB, PostgreSQL", "Redis"],
      color: "indigo"
    },
    {
      category: "AI/ML & Cloud DevOps",
      items: ["LangChain, LangGraph", "Agentic AI", "AWS (EC2, S3, Lambda)", "Docker, Jenkins"],
      color: "mint"
    }
  ],

  projects: [
    {
      title: "Agent Workbench – AI Agent & Workflow Builder",
      description: "A drag-and-drop builder for AI agents and business workflows. I shaped the PostgreSQL/MongoDB data layer, wired up LLM nodes that call external tools through LangChain, Gemini, and MCP, and moved long-running jobs onto a Redis/BullMQ queue behind a Docker + Jenkins pipeline.",
      tags: ["LangChain", "MCP", "Redis", "Docker"],
      color: "mint",
      icon: "workflow"
    },
    {
      title: "Working Capital Suite – AI Financial Orchestration",
      description: "A finance automation platform where 16 purpose-built agents cover receivables, payables, treasury, and credit risk. I built the agents behind invoice 3-way matching, payment prioritization, treasury signals, and cash forecasting, tying in OCR and banking APIs so the finance team stops copy-pasting numbers.",
      tags: ["AI Agents", "Node.js", "PostgreSQL", "LLMs"],
      color: "indigo",
      icon: "chart-bar"
    },
    {
      title: "DocSentra – Healthcare Management Platform",
      description: "Clinical assistant tooling built for doctors, nurses, and technicians, each with their own view into the system. It leans on RBAC and a RAG layer grounded in hospital SOPs to summarize patient history, flag symptoms worth a second look, and support treatment planning without replacing clinical judgment.",
      tags: ["RAG", "RBAC", "FastAPI", "MongoDB"],
      color: "mint",
      icon: "heart-pulse"
    },
    {
      title: "Agentic AI Portfolio (20+ AI Agents)",
      description: "A personal lab of 20+ agents, each dropped into a full-stack app to see how far LangGraph orchestration, RAG, MCP, and vector search can go for real automation and document-heavy tasks — the testbed I use before an idea earns a place in production work.",
      tags: ["LangGraph", "RAG", "MCP", "FAISS", "ChromaDB"],
      color: "indigo",
      icon: "seedling"
    }
  ],

  experience: [
    {
      role: "Junior Software Associate",
      company: "SNS Ihub",
      date: "Aug 2025 – Present",
      description: [
        "Helped build Agent Workbench from the data layer up — modeled the PostgreSQL/MongoDB schema and shipped LLM workflow nodes that call tools through LangChain, Gemini, and MCP",
        "Moved background workflow processing onto a Redis/BullMQ queue and got it deploying cleanly through Docker and Jenkins",
        "Built out 16 AI agents for the Working Capital Suite covering receivables, payables, treasury, and credit risk — automating invoice intake, forex revaluation, and cash forecasting that used to be manual",
        "Shipped DocSentra's Clinical Assistance module, pairing RBAC with a RAG pipeline over a MongoDB clinical knowledge base",
        "Built the full-stack pieces behind Procure-to-Pay, Order-to-Cash, and Record-to-Report — invoicing, reconciliation, and the financial reporting on top of it"
      ],
      color: "mint"
    },
    {
      role: "Software Engineering Intern",
      company: "SNS Ihub",
      date: "Aug 2024 – Jul 2025",
      description: [
        "Wrote 45+ REST APIs in Node.js as part of OKRion's microservices backend, an AI-powered task management platform",
        "Shipped AI modules for automating business-card capture, screening resumes, and verifying LinkedIn articles",
        "Designed the MongoDB schema, tuned slow queries, and hooked up AWS S3 for document storage",
        "Built full-stack pieces of the NAAC Accreditation platform, including AI-assisted QlM generation and SSR/AQAR export"
      ],
      color: "indigo"
    }
  ],

  education: [
    {
      degree: "B.E. Electronics and Communication Engineering (Hons)",
      institution: "SNS College of Technology",
      location: "Coimbatore, India",
      date: "2025",
      score: "CGPA: 8.5",
      type: "cgpa"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "KG Matric Hr. Sec School",
      location: "Coimbatore, India",
      date: "2021",
      score: "89%",
      type: "percentage"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Antonys Matriculation School",
      date: "May 2019",
      score: "81%",
      type: "percentage"
    }
  ],

  certifications: [
    {
      title: "Databricks Certified Generative AI Engineer Associate",
      issuer: "Databricks",
      date: "Dec 2025",
      expires: "Dec 2027",
      color: "mint"
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      date: "Jun 2026",
      color: "indigo"
    },
    {
      title: "HackerRank Software Engineer Certification",
      issuer: "HackerRank",
      date: "Nov 2024",
      color: "mint"
    },
    {
      title: "Master in Software Architecture, Engineering and Development",
      issuer: "Udemy",
      date: "Mar 2026",
      color: "indigo"
    }
  ],

  achievements: [
    {
      title: "Winner – National Entrepreneurship Challenge 2024",
      organization: "Eureka Pitching Competition, IIT Bombay",
      icon: "trophy",
      color: "mint"
    },
    {
      title: "2 Utility Patents & 1 Design Patent Filed",
      organization: "Innovation & Research",
      icon: "lightbulb",
      color: "indigo"
    },
    {
      title: "Spirit of Innovation Award",
      organization: "CMR University, Bangalore, 2023",
      icon: "star",
      color: "mint"
    },
    {
      title: "Best Paper Award",
      organization: "GENESIS'2K22 (National Conference)",
      icon: "award",
      color: "indigo"
    },
    {
      title: "Conference Presenter",
      organization: "2 International + 4 National Conferences",
      icon: "presentation",
      color: "mint"
    },
    {
      title: "Best Speaker Award",
      organization: "PSG College of Technology, 2024",
      icon: "microphone",
      color: "indigo"
    }
  ]
};
