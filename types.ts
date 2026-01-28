export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // Placeholder or path to uploaded image
  githubUrl?: string;
  demoUrl?: string;
  storeUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  location: string;
}

export interface Volunteer {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  skills?: string[];
  credentialId?: string;
}

export interface Award {
  title: string;
  issuer: string;
  description: string;
}