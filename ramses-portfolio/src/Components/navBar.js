import React from "react";
import "../App/App.css"

function NavBar() {
  return (
    <nav id="nav">
    <ul className="Nav-Bar">
      <li><a href="#intro">About me</a></li>
      <li><a href="#first">Projects</a></li>
      <li><a href="#second">Skills</a></li>
      <li><a href="#cta">Contact Me</a></li>
    </ul>
    </nav>
  );
}

export default NavBar;