import React from "react";
import { Project } from "../components/project";
import { projects } from "../helpers/ProjectsList";

export const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project img={project.img} title={project.title} key={index} index={index} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};
