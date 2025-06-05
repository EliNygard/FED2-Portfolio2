import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import type { Project } from "../../types";

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok)
          throw new Error("Could not get projects. Please try again.");
        return response.json();
      })
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error loading projects: ", error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <h1>My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Home;
