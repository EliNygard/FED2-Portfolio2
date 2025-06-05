import type React from "react";
import type { Project } from "../../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, link, gitHub, screenshot } = project;

  return (
    <section className="border border-black rounded-md p-3">
      <img src={screenshot.img} alt={screenshot.alt} className="mb-4" />
      <h2 className="mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <Link to={"/project"} className="uppercase hover-underline pt-2.5">
        Read more about the project
      </Link>
      <div className="mt-8 flex justify-between gap-3 flex-wrap">
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover-underline pt-2.5"
        >
          Visit GitHub Repo
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover-underline pt-2.5"
        >
          Visit website
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
