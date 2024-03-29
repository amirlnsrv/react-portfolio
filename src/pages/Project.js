import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../helpers/ProjectsList";
import { BtnGitHub } from "../components/BtnGitHub";
import { BtnLinkToOpen } from "../components/BtnLinkToOpen";

export const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <div className="project-details__links">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.linkToOpen && <BtnLinkToOpen link={project.linkToOpen} />}
          </div>
        </div>
      </div>
    </main>
  );
};
