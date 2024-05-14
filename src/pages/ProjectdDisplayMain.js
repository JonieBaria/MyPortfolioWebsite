import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { ProjectMain } from "../helpers/ProjectMain";

function ProjectdDisplayMain() {
  return (
    <div className="project">
      <h1>{ProjectMain.name}</h1>
      <img src={ProjectMain.image[1]} alt="prjimage" />
      <img src={ProjectMain.image[2]} alt="prjimage" />
      <img src={ProjectMain.image[3]} alt="prjimage" />
      <img src={ProjectMain.image[4]} alt="prjimage" />
      <p>
        <a href="https://www.youtube.com/watch?v=HClahMQqoqI">
          {" "}
          <h3>Video Demo</h3>
        </a>
      </p>
      <p>
        <b>Skills: </b>
        {ProjectMain.skill}
      </p>
      <div className="icons-main">
        <a href="https://github.com/JonieBaria">
          <GithubIcon />
        </a>
        <a href="https://www.youtube.com/watch?v=HClahMQqoqI">
          <YouTubeIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectdDisplayMain;
