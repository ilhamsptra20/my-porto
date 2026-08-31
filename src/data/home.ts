import homeContent from "@/content/home.json";

export type Brand = {
  name: string;
  monogram: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  section?: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string[];
  name: string[];
  subtitle: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  consoleLabel: string;
  footerLabel: string;
  footerLink: LinkItem;
};

export type SelectedWorkContent = {
  eyebrow: string;
  title: string;
  archiveLinkLabel: string;
  projectPrefix: string;
  figurePrefix: string;
  roleLabel: string;
  stackLabel: string;
  ctaLabel: string;
};

export type ExperienceSectionContent = {
  eyebrow: string;
  title: string;
  range: string;
  detailPrefix: string;
  detailLabels: {
    responsibilities: string;
    projects: string;
    technologies: string;
    contribution: string;
  };
};

export type AboutPrinciple = {
  label: string;
  description: string;
  accentClass: string;
};

export type AboutContent = {
  eyebrow: string;
  titleLines: string[];
  profileImage: string;
  profileCaption: string;
  profileInitials: string;
  intro: string;
  body: string;
  principles: AboutPrinciple[];
  coreCapabilitiesLabel: string;
  coreCapabilities: string[];
};

export type ContactContent = {
  eyebrow: string;
  titleLines: string[];
  description: string;
  linksLabel: string;
};

export type FooterContent = {
  copyright: string;
  backToTopLabel: string;
  location: string;
};

export type TechTickerItem = {
  label: string;
  slug: string;
};

export type HeroConsoleRow = [label: string, value: string, colorClass: string];

export type LabelValueItem = [label: string, value: string];

export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

type HomeContent = {
  brand: Brand;
  navigation: NavigationItem[];
  hero: HeroContent;
  selectedWork: SelectedWorkContent;
  experienceSection: ExperienceSectionContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
  techTicker: TechTickerItem[];
  capabilities: string[];
  heroConsoleRows: HeroConsoleRow[];
  heroStats: LabelValueItem[];
  heroMeta: LabelValueItem[];
  contactLinks: ContactLink[];
};

const content = homeContent as HomeContent;

export const {
  brand,
  navigation,
  hero,
  selectedWork,
  experienceSection,
  about,
  contact,
  footer,
  techTicker,
  capabilities,
  heroConsoleRows,
  heroStats,
  heroMeta,
  contactLinks,
} = content;
