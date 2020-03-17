import React from "react";
import "../App/App.css";
import PyramidIcon from "../images/pyramid.svg"

function Header() {
  return (
    <div className="App-header">
      <img className="Header-Icon" alt="Pyramid" src={PyramidIcon} />
      <h1>Ramses Bermudez</h1>
      <p>
        Fullstack Software Engineer.
        <br></br>
        <a className="Git-Link" href="https://github.com/RamsesGB">
          My Github
        </a>
      </p>
    </div>
  );
}

export default Header;
