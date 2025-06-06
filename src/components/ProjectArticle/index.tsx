import type React from "react";
import type { Project } from "../../types";
import CopyUrlButton from "../CopyUrlButton";
import { Link } from "react-router-dom";

interface ProjectArticleProps {
  project: Project;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({ project }) => {
  const { title, description, link, gitHub, screenshot, improvements } =
    project;

  return (
    <article className="max-w-[1120px] m-auto grid grid-cols-1 md:grid-cols-[1fr_250px]">
      <header className="flex justify-between items-center mb-4 md:mb-8 md:col-span-full">
        <h1>{title}</h1>
        <CopyUrlButton />
      </header>

      <div className="md:col-1">
        <img src={screenshot.img} alt={screenshot.alt} />
        <div className="text-xs md:text-sm text-font-secondary py-1">
          {screenshot.alt}
        </div>
      </div>

      <nav className="mt-8">
        <ul className="flex justify-between gap-3 flex-wrap md:col-2 md:flex-col md:justify-start md:ml-12 md:gap-10 md:m-0">
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

      <div className="my-8 md:col-span-full">
        <section className="mb-7">
          <h2>About the project</h2>
          <p>{description}</p>
        </section>

        {improvements ? (
          <section>
            <h2>Reflections and Improvements</h2>
            <p className="mb-4">
              After feedback I have made some improvements on this project
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
