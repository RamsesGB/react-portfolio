import React from "react";
import "../../App/App.css";
import "./styling.css";
import PyramidIcon from "../../images/pyramid.svg";
import GitIcon from "../../images/GitHub-Mark-Light-64px.png";
import GmailIcon from "../../images/icons8-gmail-96.png";
import inIcon from "../../images/icons8-linkedin.svg";

function Header() {
  return (
    <div className="App-header">
      <img className="Header-Icon" alt="Pyramid" src={PyramidIcon} />
      <h1>Ramses Bermudez</h1>
      <p>
        Fullstack Software Engineer
        <br></br>
        JS | React | Redux | Node | MongoDB
        <br></br>
        Miami, FL
      </p>
      <div className="Git-Box">
        <a href="mailto: gbmudez@gmail.com">
          <img src={GmailIcon} alt="Gmail Icon" />
        </a>
        <a className="Centerlink" href="https://github.com/RamsesGB">
          <img  src={GitIcon} alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/ramses-bermudez/">
          <img src={inIcon} alt="Linkedin Icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
