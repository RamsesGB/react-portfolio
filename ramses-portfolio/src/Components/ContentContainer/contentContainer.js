import React from "react";
import AboutMe from "../AboutMe/aboutMe";
import Projects from "../Projects/projects";
import Skills from "../Skills/skills";
import NavBar from "../NavBar/navBar";
import "../../App/App.css";

function contentContainer(){
  return(
    <div className="Content-container">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default contentContainer;
