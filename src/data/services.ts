import servicesContent from "@/content/services.json";
import type { SiteNavItem } from "@/data/site";

export type Service = {
  number: string;
  name: string;
  description: string;
  pricePrefix: string;
  price: string;
  duration: string;
  fit: string;
  deliverables: string[];
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServicesPageContent = {
  nav: SiteNavItem[];
  backLabel: string;
  eyebrow: string;
  titleLines: string[];
  description: string;
  pricingEyebrow: string;
  pricingNote: string;
  includedLabel: string;
  durationLabel: string;
  fitLabel: string;
  deliverablesLabel: string;
  contactCta: string;
  contactHref: string;
  processEyebrow: string;
  processTitle: string;
  process: ServiceProcessStep[];
};

const content = servicesContent as {
  page: ServicesPageContent;
  services: Service[];
};

export const { page: servicesPage, services } = content;
