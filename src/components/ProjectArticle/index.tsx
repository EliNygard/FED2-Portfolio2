import type React from "react";
import type { Project } from "../../types";
import CopyUrlButton from "../CopyUrlButton";
import { Link } from "react-router-dom";

interface ProjectArticleProps {
  project: Project;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({ project }) => {
  const {
    title,
    intro,
    description,
    technologies,
    link,
    gitHub,
    screenshot,
    improvements,
  } = project;

  return (
    <article className="max-w-[1120px] m-auto grid grid-cols-1 md:grid-cols-[1fr_250px]">
      <header className="flex justify-between items-center mb-4 md:mb-8 md:col-span-full">
        <h1>{title}</h1>
        <CopyUrlButton />
      </header>

      <div className="md:col-1">
        <img src={screenshot.img} alt={screenshot.alt} className="w-full" />
        <div className="text-xs md:text-sm text-font-secondary py-1">
          {screenshot.alt}
        </div>
      </div>

      <nav className="mt-8 md:col-2 md:justify-start md:ml-12 md:m-0">
        <ul className="flex justify-between gap-3 flex-wrap md:flex-col md:gap-10">
          <li>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase hover-underline py-1.5"
            >
              Visit website
            </a>
          </li>
          <li>
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase hover-underline py-1.5"
            >
              View GitHub Repo
            </a>
          </li>
        </ul>
      </nav>

      <div className="my-8 md:col-span-2">
        <section className="mb-7 flex flex-col gap-4">
          <h2>About the project</h2>
          <div className="flex flex-col gap-4">
            <p>{intro}</p>
            <p>{description}</p>
          </div>
          {technologies ? (
            <div>
              <h3>Designed and built with:</h3>
              <ul className="flex flex-wrap gap-4">
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </section>

        {improvements ? (
          <section>
            <h2>Improvements</h2>
            <p className="mb-4">
              Since delivery and after received feedback I have made some
              improvements on this project:
            </p>
            <ul className="list-disc ml-6 flex flex-col gap-2">
              {improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : (
          ""
        )}
      </div>

      <Link to={"/"} className="mt-4 md:col-start-1 uppercase">
        <span className="hover-underline py-1.5">Back to projects</span>
      </Link>
    </article>
  );
};

export default ProjectArticle;
