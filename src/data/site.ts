import siteContent from "@/content/site.json";

export type SiteBrand = {
  name: string;
  monogram: string;
};

export type SiteNavItem = {
  label: string;
  href: string;
};

export type ProjectsArchiveContent = {
  nav: SiteNavItem[];
  backLabel: string;
  eyebrow: string;
  titleLines: string[];
  description: string;
  countSuffix: string;
  footerCountSuffix: string;
  backToTopLabel: string;
  itemLabels: {
    featured: string;
    split: string;
    landscape: string;
    portrait: string;
    role: string;
    focus: string;
    viewCaseStudy: string;
  };
};

export type ProjectDetailContent = {
  notFoundTitle: string;
  metadataTitleSuffix: string;
  backLabel: string;
  heroEyebrowPrefix: string;
  metaLabels: {
    category: string;
    role: string;
    focus: string;
  };
  overviewEyebrow: string;
  roleEyebrow: string;
  previousLabel: string;
  nextLabel: string;
  nav: SiteNavItem[];
  executionColumns: {
    scope: string;
    responsibility: string;
    highlights: string;
  };
  statementEyebrow: string;
  executionEyebrow: string;
  executionTitle: string;
  executionMeta: string;
  executionNumber: string;
  systemEyebrow: string;
  systemTitle: string;
  systemNumber: string;
  stackLabel: string;
  flowEyebrow: string;
  flowTitle: string;
  flowNumber: string;
};

type SiteContent = {
  brand: SiteBrand;
  projectsArchive: ProjectsArchiveContent;
  projectDetail: ProjectDetailContent;
};

const content = siteContent as SiteContent;

export const { brand, projectsArchive, projectDetail } = content;
