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
  name: "Sobha Pittu",
  email: "sobhareddypittu@gmail.com",
  phone: "+1 (660) 528-1752",
  linkedin: "https://www.linkedin.com/in/sobhareddy-pittu/",
  github: "https://github.com/SR-Pittu",
  // portfolio: "Portfolio",
  location: "Remote",
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Hillsoft Business Solutions",
    location: "Remote",
    dates: "June 2025 - Present",
    bullets: [
      "Design, develop, and maintain scalable cloud-based full-stack applications using React and Flask to support data-intensive workflows in production environments.",
      "Design and optimize REST APIs, improving response times by 30% through database query tuning and backend refactoring.",
      "Implement CI/CD pipelines using GitLab CI and Jenkins, enabling automated builds, testing, and reliable production deployments.",
      "Integrate Playwright automated tests into CI pipelines, improving release reliability and reducing regression risk.",
      "Collaborate with cross-functional teams to diagnose and resolve production issues, improving system stability and reducing downtime.",
      "Lead API testing workflows and documentation standardization, reducing development rework by 25%.",
      "Improve system reliability through proactive monitoring, code reviews, and rapid resolution of production issues."
    ],
    tech: ["React", "Flask", "REST APIs", "GitLab CI", "Jenkins", "Playwright", "Python", "JavaScript"]
  },
  {
    role: "Associate Software Engineer",
    company: "Ventechsoft Inc",
    location: "Remote",
    dates: "December 2024 - May 2025",
    bullets: [
      "Developed and maintained REST APIs integrated with AWS EC2, Step Functions, relational databases, improving data access performance.",
      "Built responsive front-end interfaces, enhancing usability and reducing user-reported issues by ~20%.",
      "Executed API and integration testing, improving release reliability and reducing defects by approximately 15%.",
      "Supported AWS deployment, monitoring, and performance optimization to enhance system stability, uptime, and security.",
      "Ensured adherence to secure coding practices and data handling standards in cloud-based environments."
    ],
    tech: ["REST APIs", "AWS EC2", "AWS Step Functions", "MySQL", "PostgreSQL", "React", "Python", "JavaScript"]
  },
  {
    role: "Junior Software Developer - Internship",
    company: "Unnanu Inc",
    location: "Remote",
    dates: "April 2024 - December 2024",
    bullets: [
      "Built backend APIs and frontend features using Python and React, improving workflow performance and reducing response time by 20%.",
      "Automated regression tests and supported Azure DevOps CI/CD pipelines, reducing manual testing effort by 40% and improving release reliability.",
      "Participated in Agile development, performing code reviews, resolving production issues to improve system stability by 15%.",
      "Developed REST API endpoints and frontend integrations, improving data retrieval efficiency by 25%."
    ],
    tech: ["Python", "React", "REST APIs", "Azure DevOps", "Selenium", "JavaScript"]
  },
  {
    role: "Graduate Assistant - Application Design: Patterns and Frameworks",
    company: "Northwest Missouri State University",
    location: "Maryville, MO, USA",
    dates: "January 2023 - December 2023",
    bullets: [
      "Developed Java applications using MVC, Factory, and Singleton design patterns to build scalable, maintainable systems.",
      "Refactored legacy code, improving maintainability and performance by 20%.",
      "Assisted with debugging, testing, and version control, improving application stability.",
      "Mentored undergraduate students in OOP and design patterns, improving code quality and assignment accuracy by 25%.",
      "Led weekly help sessions for students on design patterns and course assignments, strengthening problem-solving skills and improving overall class performance."
    ],
    tech: ["Java", "MVC", "Design Patterns", "Git"]
  }
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Backend",
    items: ["Flask", "FastAPI", "Spring Boot", "REST APIs", "API Design"]
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, Lambda, S3, CloudFront, Step Functions, Systems Manager, API Gateway)", "Docker", "GitLab CI", "Jenkins", "Azure DevOps"]
  },
  {
    title: "Testing & QA",
    items: ["Playwright", "Cypress", "Selenium", "PyTest", "JUnit", "Postman", "Katalon Studio"]
  },
  {
    title: "AI & Data",
    items: ["Prompt Engineering", "JSON Schema Validation", "LLM Integration (OpenAI, Gemini APIs)"]
  },
  {
    title: "Tools",
    items: ["JIRA", "Confluence", "Tableau", "Databricks", "GitHub", "GitLab", "Git", "Bitbucket"]
  }
];

export const projects = [
  {
    title: "Subtext AI – LLM-Based Intelligent Requirements Analysis System",
    description: "Built an LLM-powered system to detect implicit requirements, edge cases, and ambiguities in user stories and acceptance criteria. Designed structured output generation (clarifying questions, improved acceptance criteria) using prompt engineering and JSON schema validation. Developed scalable backend using FastAPI and frontend using React. Reduced ambiguity in requirements, improving development clarity and minimizing downstream rework.",
    tech: ["FastAPI", "React", "LLM", "OpenAI API", "JSON Schema Validation", "Python", "JavaScript"],
    links: { live: "", github: "" }
  },
  {
    title: "WindBorne Visualizer – Full-Stack Data Dashboard",
    description: "Developed a React-based dashboard visualizing real-time telemetry and weather data. Implemented backend data aggregation and analytics workflows. Deployed application with optimized caching and real-time data handling.",
    tech: ["React", "Python", "JavaScript", "Data Visualization"],
    links: { live: "", github: "" }
  },
  {
    title: "Career Predictor - Web Application",
    description: "Built a web application using Python, Flask, and MongoDB to predict career paths based on user inputs. Integrated machine learning models with frontend and backend workflows. Implemented secure input handling and end-to-end data processing.",
    tech: ["Python", "Flask", "MongoDB", "Machine Learning", "JavaScript"],
    links: { live: "", github: "" }
  },
  {
    title: "Playwright Kanban Validation",
    description: "Designed a scalable end-to-end automation framework using Playwright. Implemented reusable components, fixtures, and cross-browser testing support. Enabled automated validation of application workflows.",
    tech: ["Playwright", "JavaScript", "Test Automation"],
    links: { live: "", github: "" }
  }
];

export const education = [
  {
    school: "Northwest Missouri State University",
    degree: "Master's, Computer Science",
    dates: "August 2022 - December 2023",
    gpa: "4.0",
    coursework: ["Object Oriented Programming using Java", "Web applications and Services", "Advanced Database Systems", "Project Management in Business and Technology", "Mobile Computing: iOS", "Application Design: Patterns and Frameworks", "Machine Learning"]
  },
  {
    school: "Acharya Nagarjuna University",
    degree: "Bachelor's, Computer Science & Engineering",
    dates: "June 2018 - June 2022",
    gpa: "3.5",
    coursework: ["Operating Systems", "Data Structures using C", "Software Engineering", "Algorithms", "Data Engineering", "Cloud Computing", "Machine Learning", "Unix Shell Programming", "Artificial Intelligence", "Network Programming", "Problem Solving using C"]
  }
];

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", org: "AWS", year: "Oct 2023 - Oct 2026" },
  { title: "Katalon Practitioner Level Certification", org: "Katalon", year: "Mar 2024 - Mar 2028" }
];