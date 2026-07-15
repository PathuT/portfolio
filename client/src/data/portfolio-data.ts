export const portfolioData = {
  name: "Pathu Thangamuthu",
  title: "Pathu Thangamuthu",
  roleTitle: "Full Stack & AI Engineer",
  location: "Coimbatore, Tamil Nadu, India",
  email: "pathuthangamuthu@gmail.com",
  phone: "+91 9524214194",
  linkedin: "https://www.linkedin.com/in/pathu-t",
  github: "https://github.com/PathuT",

  about: {
    summary: [
      "I'm a Full Stack Software Engineer with 2 years of software development experience, including 1 year as a Software Engineer and 1 year as a Software Engineering Intern in a product-based environment.",
      "I build scalable, high-performance web applications and enterprise software solutions using Next.js, React.js, Node.js, Express.js, FastAPI, Python, MongoDB, and PostgreSQL, along with RESTful APIs, AI-powered features, and microservices-based architectures.",
      "I have hands-on experience with AWS, Docker, Jenkins, and CI/CD pipelines, and I'm passionate about building clean, maintainable, secure, and scalable software with a strong focus on performance and engineering best practices."
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
      color: "blue"
    },
    {
      category: "Backend & Databases",
      items: ["Python, FastAPI", "REST APIs & Microservices", "MongoDB, PostgreSQL", "Redis"],
      color: "emerald"
    },
    {
      category: "AI/ML & Cloud DevOps",
      items: ["LangChain, LangGraph", "Agentic AI", "AWS (EC2, S3, Lambda)", "Docker, Jenkins"],
      color: "purple"
    }
  ],

  projects: [
    {
      title: "Agent Workbench – AI Agent & Workflow Builder",
      description: "Contributed to an AI Agent & Workflow Builder Platform for designing and executing intelligent agents and business workflows. Designed PostgreSQL/MongoDB schemas, built LLM workflow nodes with tool-calling via LangChain, Gemini, and MCP, and implemented Redis (BullMQ) background execution with Docker + Jenkins CI/CD.",
      tags: ["LangChain", "MCP", "Redis", "Docker"],
      color: "blue",
      icon: "workflow"
    },
    {
      title: "Working Capital Suite – AI Financial Orchestration",
      description: "Developed an AI-driven Working Capital platform with 16 specialized AI agents across Accounts Receivable, Accounts Payable, Treasury, and Credit Risk. Built 3-Way Match Validation, Payment Prioritization, Treasury Intelligence, and Cash Forecasting agents, integrating OCR and financial APIs to automate finance operations.",
      tags: ["AI Agents", "Node.js", "PostgreSQL", "LLMs"],
      color: "amber",
      icon: "chart-bar"
    },
    {
      title: "DocSentra – Healthcare Management Platform",
      description: "Built the AI-powered Clinical Assistance module with role-based workflows for doctors, nurses, and technicians. Implemented RBAC and RAG-powered clinical assistance using hospital SOPs, plus AI workflows for patient history summarization, diagnostic support, and treatment planning.",
      tags: ["RAG", "RBAC", "FastAPI", "MongoDB"],
      color: "emerald",
      icon: "heart-pulse"
    },
    {
      title: "Agentic AI Portfolio (20+ AI Agents)",
      description: "Built 20+ AI agents integrated into full-stack applications using LangGraph orchestration, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), tool calling, and vector search for enterprise automation and document intelligence.",
      tags: ["LangGraph", "RAG", "MCP", "FAISS", "ChromaDB"],
      color: "purple",
      icon: "seedling"
    }
  ],

  experience: [
    {
      role: "Junior Software Associate",
      company: "SNS Ihub",
      date: "Sep 2025 – Present",
      description: [
        "Contributed to Agent Workbench, an AI Agent & Workflow Builder Platform — designed PostgreSQL/MongoDB schemas and built LLM workflow nodes with tool-calling using LangChain, Gemini, and MCP",
        "Implemented Redis (BullMQ) based background workflow execution with Docker and Jenkins CI/CD deployments",
        "Developed 16 specialized AI agents for the Working Capital Suite across Accounts Receivable, Accounts Payable, Treasury, and Credit Risk, automating invoice ingestion, forex valuation, and cash forecasting",
        "Built the AI-powered Clinical Assistance module for DocSentra with RBAC and RAG-powered responses using a MongoDB-backed clinical knowledge base",
        "Developed full-stack modules for Procure-to-Pay (P2P), Order-to-Cash (O2C), and Record-to-Report (R2R) business processes, including invoice management, reconciliation, and financial reporting"
      ],
      color: "blue"
    },
    {
      role: "Software Engineering Intern",
      company: "SNS Ihub",
      date: "Sep 2025 – Present",
      description: [
        "Developed 45+ backend REST APIs using Node.js within a microservices architecture for OKRion, an AI-powered task management platform",
        "Built AI-powered modules for Business Card Automation, Resume Analysis, and LinkedIn Article Validation & Verification",
        "Designed MongoDB schemas, optimized queries, and integrated AWS S3 for secure file storage and document management",
        "Developed full-stack modules for the NAAC Accreditation Management Platform, including AI-assisted QlM generation and SSR/AQAR export"
      ],
      color: "emerald"
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
      score: "88%",
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
      color: "emerald"
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      date: "Jun 2026",
      color: "amber"
    },
    {
      title: "HackerRank Software Engineer Certification",
      issuer: "HackerRank",
      date: "Nov 2024",
      color: "blue"
    },
    {
      title: "Master in Software Architecture, Engineering and Development",
      issuer: "Udemy",
      date: "Mar 2026",
      color: "purple"
    }
  ],

  achievements: [
    {
      title: "Winner – National Entrepreneurship Challenge 2024",
      organization: "Eureka Pitching Competition, IIT Bombay",
      icon: "trophy",
      color: "blue"
    },
    {
      title: "2 Utility Patents & 1 Design Patent Filed",
      organization: "Innovation & Research",
      icon: "lightbulb",
      color: "emerald"
    },
    {
      title: "Spirit of Innovation Award",
      organization: "CMR University, Bangalore, 2023",
      icon: "star",
      color: "purple"
    },
    {
      title: "Best Paper Award",
      organization: "GENESIS'2K22 (National Conference)",
      icon: "award",
      color: "amber"
    },
    {
      title: "Conference Presenter",
      organization: "2 International + 4 National Conferences",
      icon: "presentation",
      color: "rose"
    },
    {
      title: "Best Speaker Award",
      organization: "PSG College of Technology, 2024",
      icon: "microphone",
      color: "teal"
    }
  ]
};
