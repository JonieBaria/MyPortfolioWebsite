import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/joniever-baria-a73954276/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/JonieBaria">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2024 jbariatechporfolio.com</p>
    </div>
  );
}

export default Footer;
