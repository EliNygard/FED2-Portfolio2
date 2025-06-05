import type React from "react";
import type { Project } from "../../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, link, gitHub, screenshot } = project;

  return (
    <section className="border border-black rounded-md p-3 max-w-[511px]">
      <Link to={`/project/${encodeURIComponent(title)}`}>
        <img src={screenshot.img} alt={screenshot.alt} className="mb-4" />
        <h2 className="mb-2">{title}</h2>
        <p className="mb-6">{description}</p>
        <p className="uppercase inline hover-underline py-1.5">
          Read more about the project
        </p>
      </Link>
      <div className="mt-8 flex justify-between gap-3 flex-wrap">
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover-underline py-1.5"
        >
          View GitHub Repo
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover-underline py-1.5"
        >
          Visit website
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
