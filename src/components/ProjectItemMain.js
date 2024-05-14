import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItemMain({ name, image }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/main-project/");
      }}
    >
      <div
        style={{ backgroundImage: `url(${image[0]})` }}
        className="bgImage"
      />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItemMain;
