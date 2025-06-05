import React from "react";
import ProjectCard from "../../components/ProjectCard";
import type { Project } from "../../types";

interface HomePageProps {
  projects: Project[];
}

const HomePage: React.FC<HomePageProps> = ({ projects }) => {
  return (
    <>
      <h1>My Projects</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
