import type { NavItem, Portfolio } from './components/types'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
//   { id: 'education', label: 'Education' },
//   { id: 'blog', label: 'Blog' },
]

export const fallbackData: Portfolio = {
  name: 'Abhishek Yadav',
  role: 'Associate Software Engineer Trainee',
  focus: 'Full-Stack & AI Engineering',
  interests: ['React', 'Microservices', 'API Design', 'AI Workflows', 'Agile Delivery'],
  qualification: 'B.Tech in Computer Science and Engineering',
  status: 'Working on production web applications',
  skills: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Node.js'],
    },
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Microservices', 'jOOQ', 'Design Patterns'],
    },
    {
      title: 'Data & AI',
      items: ['PostgreSQL', 'MongoDB', 'SQL', 'JWT', 'Authentication', 'LLM Evaluation', 'LangChain', 'LangGraph', 'AI workflows'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Docker', 'Maven', 'AWS', 'Postman', 'IntelliJ IDEA', 'VS Code'],
    },
    {
      title: 'Agile Delivery',
      items: ['Scrum', 'Jira', 'Confluence', 'Sprint Planning', 'Backlog Refinement', 'SDLC Collaboration'],
    },
  ],
  projects: [
    {
      name: 'EcommerceHub',
      summary: 'Spring Boot e-commerce platform with JWT-based RBAC, Stripe payments, PostgreSQL data model, and AWS deployment.',
    },
    {
      name: 'Team Task Manager',
      summary: 'Full-stack task collaboration platform with role-based access, multi-status workflows, dashboard analytics, and secure REST APIs.',
    },
    {
      name: 'Agentic Chatbot',
      summary: 'LLM-powered agentic workflow using LangGraph, LangSmith, Groq/OpenAI, FastAPI, and evaluation pipelines for quality automation.',
    },
  ],
  experience: [
    {
      title: 'Associate Software Engineer Trainee',
      company: 'Current Role',
      period: 'May, 2026 — Present',
      details: [
        'Automating manual business processes by developing web-based software solutions.',
        'Building backend services and REST APIs using Node.js and Express.js.',
        'Developing secure integration endpoints with appropriate authentication, authorization, validation, and access controls.',
        'Designing and integrating PostgreSQL databases for application workflows and data persistence.',
        'Developing React interfaces to support automated business workflows.',
        'Contributing to API design, integration, testing, debugging, and production releases.',
        'Working within Agile/Scrum practices using Jira and Confluence.',
      ],
    },
  ],
}

export const getCommandOutput = (portfolio: Portfolio): Record<string, string> => ({
  help: 'available: about, skills, experience, projects, contact, ls, whoami, theme green, theme mono, clear',
  ls: 'about/  skills/  experience/  projects/  contact/',
  whoami: `${portfolio.name} - ${portfolio.role}`,
  about: 'opening /home/abhishek/about',
  skills: 'opening /home/abhishek/skills',
  experience: 'opening /home/abhishek/experience',
  projects: 'opening /home/abhishek/projects',
  contact: 'opening /home/abhishek/contact',
})
