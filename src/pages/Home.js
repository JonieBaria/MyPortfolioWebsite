import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          {" "}
          Hi, My Name is <span>Jonie.</span>
        </h2>
        <div className="prompt">
          <p>
            {" "}
            A Software/Web developer with a passion for learning new
            technologies and building creative ideas.
          </p>
          <a href="https://github.com/JonieBaria">
            <GithubIcon />
          </a>

          <a href="https://www.linkedin.com/in/joniever-baria-a73954276/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS,
              StyledComponents, AntD
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, Cloud Computing-AWS,
              Django
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
