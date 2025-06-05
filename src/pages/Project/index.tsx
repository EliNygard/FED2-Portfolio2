import { useParams } from "react-router-dom";
import type { Project } from "../../types";

interface ProjectPageProps {
  projects: Project[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ projects }) => {
  const { title: titleParam } = useParams<"title">();

  if (projects.length === 0) {
    return <p>Loading project...</p>;
  }

  const decodedTitle = titleParam ? decodeURIComponent(titleParam) : "";

  const project = projects.find((project) => project.title === decodedTitle);

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
        <p>
          Could not find a project with the title “
          <strong>{decodedTitle}</strong>”.
        </p>
      </div>
    );
  }

  return (
    <article>
      <h1>{project.title}</h1>
    </article>
  );
};

export default ProjectPage;
