export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  gitHub: string;
  screenshot: { img: string; alt: string };
  improvements?: Record<string, string>;
}

export interface ProjectsJSON {
  projects: Project[];
}