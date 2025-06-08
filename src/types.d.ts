export interface Project {
  id: string;
  title: string;
  teaser: string;
  intro: string;
  description: string;
  technologies: string[];
  link: string;
  gitHub: string;
  screenshot: { img: string; alt: string };
  improvements?: string[];
}

export interface ProjectsJSON {
  projects: Project[];
}