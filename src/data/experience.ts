export type ExperienceDetail = {
  responsibilities: string[];
  projects: string[];
  technologies: Technology[];
  contributions: string[];
};

export type Technology = {
  name: string;
  iconSlug?: string;
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  focus: string;
  details: ExperienceDetail;
};

export const experience: Experience[] = [
  {
    period: "2025 — NOW",
    company: "PT SAKTI KINERJA KOLABORASI",
    role: "Full Stack Developer",
    focus: "Financial systems · Core banking · Enterprise applications",
    details: {
      responsibilities: [
        "Develop and maintain core banking modules across frontend and backend flows.",
        "Translate operational requirements into usable financial application features.",
        "Debug production issues across data, API, permissions, and reporting layers.",
      ],
      projects: [
        "Core banking dashboard, member administration, ledger operations, and reports.",
        "Role-based access, approval flow, transaction history, and operational tooling.",
      ],
      technologies: [
        { name: "Next.js", iconSlug: "nextdotjs" },
        { name: "Laravel", iconSlug: "laravel" },
        { name: "PostgreSQL", iconSlug: "postgresql" },
        { name: "Redis", iconSlug: "redis" },
        { name: "REST APIs" },
        { name: "Queues" },
      ],
      contributions: [
        "Owned feature delivery from analysis to implementation, testing, and iteration.",
        "Improved maintainability by separating UI, API, data, and business workflow concerns.",
      ],
    },
  },
  {
    period: "2025",
    company: "PT BANGKIT MEMBANGUN NEGERI",
    role: "Full Stack Developer",
    focus: "Web applications · API development · Business systems",
    details: {
      responsibilities: [
        "Build internal web applications for business operations and team workflows.",
        "Create backend endpoints, validation rules, and database structures for app features.",
      ],
      projects: [
        "Operational dashboards, CRUD modules, reporting views, and integration-ready APIs.",
      ],
      technologies: [
        { name: "Laravel", iconSlug: "laravel" },
        { name: "PHP", iconSlug: "php" },
        { name: "MySQL", iconSlug: "mysql" },
        { name: "JavaScript", iconSlug: "javascript" },
        { name: "REST APIs" },
      ],
      contributions: [
        "Delivered practical business features with clear data flow and maintainable structure.",
        "Helped shape application behavior from requirement discussion to implementation.",
      ],
    },
  },
  {
    period: "2023 — 2024",
    company: "PT ANANTA BANGUN GRAHA",
    role: "Data Collection & Programmer",
    focus: "Document management · Telecom operations · Internal systems",
    details: {
      responsibilities: [
        "Support data collection, document management, and operational tracking workflows.",
        "Create small tools to reduce manual work and organize recurring internal processes.",
      ],
      projects: [
        "Document tracking, reporting support, data cleanup, and telecom operation records.",
      ],
      technologies: [
        { name: "PHP", iconSlug: "php" },
        { name: "JavaScript", iconSlug: "javascript" },
        { name: "Spreadsheets" },
        { name: "Internal databases" },
      ],
      contributions: [
        "Improved daily operation visibility by turning scattered data into clearer records.",
        "Bridged administrative needs with simple software and data organization practices.",
      ],
    },
  },
];
