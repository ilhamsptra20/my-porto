export type Education = {
  institution: string;
  program: string;
  startYear?: string;
  endYear?: string;
  period?: string;
  location?: string;
  gpa?: string;
};

export type Credential = {
  title: string;
  provider: string;
  year?: string;
  credentialUrl?: string;
  credentialId?: string;
  featured?: boolean;
};

export const education: Education[] = [
  {
    institution: "Nusa Mandiri University",
    program: "Informatics Engineering",
    period: "2020 — 2024",
    location: "Jakarta / Indonesia",
  },
];

export const credentials: Credential[] = [
  {
    title: "Backend Development",
    provider: "Dicoding",
    year: "2025",
    credentialUrl: "https://example.com/credentials/backend-development",
    featured: true,
  },
  {
    title: "Cloud Practitioner Essentials",
    provider: "AWS Training",
    year: "2025",
    credentialUrl: "https://example.com/credentials/cloud-practitioner",
    featured: true,
  },
  {
    title: "Database Design Fundamentals",
    provider: "Coursera",
    year: "2024",
    credentialUrl: "https://example.com/credentials/database-design",
    featured: true,
  },
  {
    title: "Intro to Programming",
    provider: "Online Course",
    year: "2023",
    featured: false,
  },
];

export const featuredCredentials = credentials.filter(
  (credential) => credential.featured,
);
