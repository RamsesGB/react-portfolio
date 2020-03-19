import React from "react";
import "../../App/App.css";
import "./styling.css";
import PyramidIcon from "../../images/pyramid.svg";
import GitIcon from "../../images/GitHub-Mark-Light-64px.png";

function Header() {

  return (
    <div className="App-header">
      <img className="Header-Icon" alt="Pyramid" src={PyramidIcon} />
      <h1>Ramses Bermudez</h1>
      <p>
        Fullstack Software Engineer.
        <br></br>
      </p>
      <div className="Git-Box">
        <a className="Git-Link" href="https://github.com/RamsesGB">
          My Github
        </a>
        <a href="https://github.com/RamsesGB">
          <img src={GitIcon} alt="Github Icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
