import profileContent from "@/content/profile.json";

export type Education = {
  institution: string;
  program: string;
  period?: string;
  startYear?: string;
  endYear?: string;
  location?: string;
  gpa?: string;
};

export type Credential = {
  title: string;
  provider: string;
  year: string;
  credentialUrl?: string;
  credentialId?: string;
  featured: boolean;
};

export type ProfileSectionContent = {
  label: string;
  educationHeading: string;
  credentialsHeading: string;
  credentialIdLabel: string;
  gpaLabel: string;
};

type ProfileContent = {
  section: ProfileSectionContent;
  education: Education[];
  credentials: Credential[];
};

const content = profileContent as ProfileContent;

export const { section: profileSection, education, credentials } = content;

export const featuredCredentials = credentials.filter(
  (credential) => credential.featured,
);
