export interface About {
  name: string;
  title: string;
  description: string;
  profileImageUrl: string;
  location: string;
  linkedInUrl: string;
  gitUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  logo?: string;
  hover?: boolean;
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface Project {
  projectName: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  projects: Project[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}