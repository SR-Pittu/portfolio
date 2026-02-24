/**
 * Portfolio Data File
 * 
 * This file contains all the structured data for the portfolio website.
 * It includes personal information, work experience, projects, skills, education,
 * and certifications. This data is imported and used by various components
 * to dynamically render portfolio sections.
 * 
 * Data structure breakdown:
 * - contact: Personal contact information and social links
 * - experience: Array of work experience entries with dates and achievements
 * - skills: Categorized technical skills (Languages, Frontend, Backend, etc.)
 * - projects: Featured projects with descriptions and links
 * - education: Educational background and degrees
 * - certifications: Professional certifications and credentials
 */

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const contact = {
  name: "Sobhareddy Pittu",
  email: "sobhareddypittu@gmail.com", 
  linkedin: "https://www.linkedin.com/in/sobhareddy-pittu-712b39207/", 
  github: "https://github.com/SR-Pittu", 
  location: "United States",
};

// ============================================================================
// WORK EXPERIENCE
// ============================================================================
// Array of all professional positions, ordered from most recent to oldest

export const experience = [
  {
    role: "Software Engineer",
    company: "Hillsoft Business Solutions LLC",
    location: "Remote",
    dates: "Jun 2025 – Present",
    bullets: [
      "Build and maintain production full stack applications using React and Python (Flask).",
      "Optimize REST APIs and backend queries, improving response times by 30%.",
      "Develop and maintain CI/CD pipelines with GitLab CI and Jenkins, integrating Playwright automation."
    ],
    tech: ["React", "Python", "Flask", "REST APIs", "GitLab CI/CD", "Jenkins", "Playwright"],
  },

  {
    role: "Associate Software Engineer",
    company: "Ventechsoft Inc",
    location: "Remote",
    dates: "Dec 2024 – May 2025",
    bullets: [
      "Developed Flask REST APIs integrated with AWS EC2 and RDS.",
      "Built responsive frontend interfaces using JavaScript, HTML, CSS, and Bootstrap.",
      "Performed API and integration testing using Postman and Katalon."
    ],
    tech: ["Python", "Flask", "AWS", "JavaScript", "Bootstrap", "Postman", "Katalon"],
  },

  {
    role: "Junior Software Developer Intern",
    company: "Unnanu Inc",
    location: "Remote",
    dates: "Apr 2024 – Dec 2024",
    bullets: [
      "Built backend services and frontend components using Python and React.",
      "Automated regression testing and supported Azure DevOps CI/CD pipelines.",
      "Collaborated in Agile sprints to deliver production-ready features and fixes."
    ],
    tech: ["Python", "React", "Azure DevOps", "Automation Testing"],
  },

  {
    role: "Graduate Assistant",
    company: "Northwest Missouri State University",
    location: "Maryville, MO, USA",
    dates: "Jan 2023 – Dec 2023",
    bullets: [
      "Developed Java applications using MVC and object-oriented design patterns.",
      "Improved legacy code performance and maintainability.",
      "Supported debugging, testing, and version control workflows."
    ],
    tech: ["Java", "OOP", "MVC", "Git"],
  },

  {
    role: "Junior Software Engineer Intern",
    company: "Lohitha Life Science Pvt Ltd",
    location: "Remote",
    dates: "Jan 2022 – Jun 2022",
    bullets: [
      "Built full stack applications using Java, Spring MVC, and Oracle DB.",
      "Developed responsive UIs and automated testing using Selenium.",
      "Contributed across development, testing, and deployment phases."
    ],
    tech: ["Java", "Spring MVC", "Oracle DB", "Selenium"],
  }
];

// ============================================================================
// TECHNICAL SKILLS
// ============================================================================
// Skills organized by category/domain

export const skills = [
  {
    title: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Flask",
      "Spring Boot",
      "REST API Design",
      "API Integration",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, CloudFront)",
      "Docker",
      "Git",
      "GitHub",
      "GitLab CI/CD",
      "Jenkins",
      "Azure DevOps",
    ],
  },
  {
    title: "Testing & QA",
    items: [
      "Playwright",
      "Cypress",
      "Selenium",
      "Postman",
      "PyTest",
      "JUnit",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "LLM Integration (OpenAI, Gemini)",
      "Prompt Engineering",
      "JSON Schema Validation",
      "Data Analysis",
      "Tableau",
      "Databricks",
    ],
  },
];

// ============================================================================
// FEATURED PROJECTS
// ============================================================================
// Portfolio projects showcasing technical skills and creativity

export const projects = [
  {
    title: "Subtext AI",
    description:"Automated the detection of logical contradictions in Product Requirements Documents (PRDs), potentially saving 15+ hours of manual developer-to-product-manager back-and-forth per sprint.",
    tech: ["FastAPI", "React", "Python", "LLM Integration", "Docker", "JSON Schema"],
    links: {
      live: "https://subtextai.netlify.app/",
      github: "https://github.com/SR-Pittu/SubTextAI",
    },
  },

  {
    title: "WindBorne Visualizer",
    description:"Engineered a high-frequency data visualization interface handling real-time atmospheric updates. Optimized React rendering to maintain 60fps while processing large telemetry datasets via external APIs",
    tech: ["React", "JavaScript", "APIs", "Data Visualization", "Charts"],
    links: {
      live: "https://windbornevisualizer.netlify.app/", 
      github: "https://github.com/SR-Pittu/WindBorneVisualizer",
    },
  },

  {
    title: "Playwright Kanban Validation Framework",
    description:"Developed a data-driven framework using Playwright and TypeScript, implementing the Page Object Model (POM) to decouple test logic from UI selectors, ensuring long-term maintainability.",    
    tech: ["Playwright", "TypeScript", "Automation Testing", "CI/CD"],
    links: {
      live: "",
      github: "https://github.com/SR-Pittu/Playwright-Kanban-Validation",
    },
  },

  {
    title: "Career Predictor (Machine Learning)",
    description:"Built a machine learning application that predicts suitable career paths based on user inputs using classification models, data preprocessing, and feature engineering.",    
    tech: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    links: {
      live: "",
      github: "https://github.com/SR-Pittu/CareerPredictor",
    },
  },

  {
    title: "Automated System Health Monitor",
    description:
      "Command-line tool that parses HTTP server logs and generates insights such as request frequency, error rates, and usage trends for debugging and monitoring.",
    tech: ["Python", "CLI", "Log Parsing", "Data Analysis"],
    links: {
      live: "",
      github: "https://github.com/SR-Pittu/HTTP-Log-Analyzer",
    },
  },

  {
    title: "Weather App",
    description:
      "Responsive weather application that fetches and displays real-time weather data from external APIs with dynamic UI updates.",
    tech: ["JavaScript", "HTML", "CSS", "API Integration"],
    links: {
      live: "https://sr-pittu.github.io/weatherApp/",
      github: "https://github.com/SR-Pittu/weatherApp",
    },
  },
];

// ============================================================================
// EDUCATION
// ============================================================================
// Academic background and degrees

export const education = [
  {
    school: "Northwest Missouri State University",
    degree: "Master's, Computer Science",
    dates: "AUG 2022 — DEC 2023",
    gpa: "4.0 / 4.0",
    coursework: [
      "Object Oriented Programming using Java",
      "Web Applications and Services",
      "Advanced Database Systems",
      "Project Management in Business and Technology",
      "Mobile Computing: iOS",
      "Application Design: Patterns and Frameworks",
      "Machine Learning"
    ]
  },
  {
    school: "Acharya Nagarjuna University",
    degree: "Bachelor's, Computer Science & Engineering",
    dates: "JUN 2018 — JUN 2022",
    gpa: "3.5 / 4.0",
    coursework: [
      "Operating Systems",
      "Data Structures using C",
      "Software Engineering",
      "Algorithms",
      "Data Engineering",
      "Cloud Computing",
      "Machine Learning",
      "Unix Shell Programming",
      "Artificial Intelligence",
      "Network Programming",
      "Problem Solving using C"
    ]
  }
];

// ============================================================================
// CERTIFICATIONS
// ============================================================================
// Professional certifications and credentials

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2023" },
  { title: "Katalon Practitioner Level Certification", org: "Katalon Studio", year: "2024" },
];
