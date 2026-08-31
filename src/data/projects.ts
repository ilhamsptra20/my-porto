import projectsContent from "@/content/projects.json";

export type ProjectMedia = {
  src: string;
  title: string;
  subtitle: string;
  figure: string;
  caption: string;
};

export type Project = {
  slug: string;
  selected: boolean;
  archiveLayout: "featured" | "split" | "portrait" | "landscape";
  index: string;
  category: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  impact: string;
  constraint: string;
  role: string;
  roleDescription: string;
  stack: string[];
  accent: string;
  metric: string;
  details: string[];
  image: string;
  media: ProjectMedia[];
  href: string;
  scope: string[];
  responsibilities: string[];
  highlights: string[];
};

export const projects = projectsContent as Project[];

export const selectedProjects = projects.filter((project) => project.selected);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
