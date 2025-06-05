import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import { useEffect, useState } from "react";
import type { Project } from "./types";


function App() {
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
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage projects={projects} />} />
          <Route path="project/:title" element={<ProjectPage projects={projects} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
