import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";
import ProjectItemMain from "../components/ProjectItemMain";
import { ProjectMain } from "../helpers/ProjectMain";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle"> My Personal Projects </h1>
      <div className="projectList">
        <ProjectItemMain
          name={ProjectMain.name}
          image={ProjectMain.image}
          skill={ProjectMain.skill}
        />
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
