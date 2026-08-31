import experienceContent from "@/content/experience.json";

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

export const experience = experienceContent as Experience[];
