export type SectionId = "home" | "about" | "skills" | "portfolio" | "contact";

export type NavItem = {
  label: string;
  sectionId: SectionId;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: readonly string[];
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: readonly string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  repositoryUrl: string;
  technologies: readonly string[];
};

export const navigation: readonly NavItem[] = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "portfolio" },
  { label: "Contact", sectionId: "contact" },
];

export const experiences: readonly Experience[] = [
  {
    role: "Frontend & AI Developer Intern",
    organization: "KodeHauz Solutions Planet Limited",
    period: "2026",
    summary:
      "Architecting agentic AI workflows, backend microservices, and knowledge-graph ingestion pipelines. I also build OAuth flows, and strict API guardrails for production reliability.",
    highlights: ["Agentic AI", "Knowledge graphs", "OAuth", "Microservices"],
  },
  {
    role: "Software & AI Intern (SIWES)",
    organization: "Galaxy Backbone Limited",
    period: "2026",
    summary:
      "Contributed to enterprise cloud operations and system administration, authored High-Level Designs and Bills of Quantities, and conducted technical network pre-surveys, including on-site assessments.",
    highlights: ["Cloud operations", "System design", "Network surveys"],
  },
  {
    role: "Lead AI Developer — KodeCamp 6.0 Finalist",
    organization: "KodeCamp Bootcamp Finale Phase",
    period: "2026",
    summary:
      "Led the AI architecture for KodeBuddy AI, a full-stack retrieval-augmented learning assistant built with FastAPI, LangGraph, and pgvector embeddings with enrollment-scoped access control.",
    highlights: ["FastAPI", "LangGraph", "RAG", "pgvector"],
  },
  {
    role: "Coursera IoT Specialization",
    organization: "Coursera",
    period: "2026",
    summary:
      "Completed a comprehensive Internet of Things specialization spanning connected sensors, edge architectures, and cloud data pipelines that connect hardware telemetry to full-stack applications.",
    highlights: ["IoT", "Edge systems", "Cloud pipelines"],
  },
  {
    role: "Frontend Web Developer Intern",
    organization: "Genesys Tech Hub — Learnable",
    period: "2022–2023",
    summary:
      "Collaborated across design, quality assurance, and engineering teams to build a full-featured Learning Management System with React and JavaScript, supported by usability testing and iterative interface improvements.",
    highlights: ["React", "Product delivery", "Usability testing"],
  },
];

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Production-minded intelligent systems grounded in useful context.",
    skills: [
      "LangGraph",
      "LangChain",
      "Mastra",
      "RAG architectures",
      "pgvector",
      "Knowledge graphs",
      "Scikit-learn",
      "Prompt & guardrail engineering",
    ],
  },
  {
    title: "Full-Stack Engineering",
    description: "End-to-end products from resilient APIs to polished interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "OAuth pipelines",
    ],
  },
  {
    title: "Data, IoT & Infrastructure",
    description: "Connected foundations for systems that need to scale reliably.",
    skills: [
      "PostgreSQL",
      "Redis",
      "Docker",
      "IoT systems & sensors",
      "REST APIs",
      "Git & GitHub",
      "Network infrastructure",
    ],
  },
  {
    title: "Leadership & Collaboration",
    description: "Clear technical direction across people, products, and constraints.",
    skills: [
      "AI team coordination",
      "Technical documentation",
      "Cross-functional collaboration",
      "Analytical problem-solving",
      "Agile iteration",
      "Stakeholder communication",
    ],
  },
];

export const projects: readonly Project[] = [
  {
    title: "Learning Management System",
    description:
      "A modern full-stack learning platform with secure Google and email/password authentication, built for a focused and reliable learning experience.",
    image: "/images/lms.webp",
    imageAlt: "Learning Management System dashboard preview",
    liveUrl: "https://lms-silk-phi.vercel.app/",
    repositoryUrl: "https://github.com/Anyadiegwu/lms",
    technologies: ["React", "Vite", "Node.js", "Express"],
  },
  {
    title: "Bank AI Assistant",
    description:
      "An AI-powered banking assistant that handles customer inquiries through intent categorization, guarded responses, and a conversational interface.",
    image: "/images/bank-ai-assistant.webp",
    imageAlt: "Bank AI Assistant conversational interface",
    liveUrl: "https://bank-ai-react-assistant.vercel.app/",
    repositoryUrl: "https://github.com/Anyadiegwu/bank-ai-react-assistant",
    technologies: ["React", "Python", "FastAPI", "Gemini API"],
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired music player powered by the Spotify Web API, with authorization-aware access and playback through an active Spotify device.",
    image: "/images/spotify.webp",
    imageAlt: "Spotify-inspired music player interface",
    liveUrl: "https://a-spotify-clone.vercel.app/",
    repositoryUrl: "https://github.com/Anyadiegwu/a-spotify-clone",
    technologies: ["React", "JavaScript", "Spotify API"],
  },
  {
    title: "ShopHub",
    description:
      "A responsive e-commerce experience with category filtering, theme support, and a sidebar cart for quick product discovery and shopping.",
    image: "/images/shophub.webp",
    imageAlt: "ShopHub e-commerce storefront preview",
    liveUrl: "https://shophub-wine.vercel.app/",
    repositoryUrl: "https://github.com/Anyadiegwu/shophub",
    technologies: ["React", "Vite", "CSS", "HTML"],
  },
  {
    title: "Savora Restaurant",
    description:
      "A refined restaurant website designed around premium international cuisine, clear storytelling, and a polished responsive dining experience.",
    image: "/images/savora.webp",
    imageAlt: "Savora restaurant website preview",
    liveUrl: "https://savora-restaurant-beta.vercel.app/",
    repositoryUrl: "https://github.com/Anyadiegwu/savora-restaurant",
    technologies: ["TypeScript", "React", "Vite"],
  },
  {
    title: "Shopify Dashboard Clone",
    description:
      "A responsive merchant dashboard with interactive analytics and order views, built to reproduce the structure of a modern commerce workspace.",
    image: "/images/shopify.webp",
    imageAlt: "Shopify merchant dashboard clone preview",
    liveUrl: "https://shopify-challenge-xi.vercel.app/",
    repositoryUrl: "https://github.com/Anyadiegwu/shopify-challenge-",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
];
