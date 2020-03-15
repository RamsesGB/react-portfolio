import React from "react";
import AboutMe from "./aboutMe"
import Projects from "./projects"
import Skills from "./skills"
import ContactMe from "./contactMe"

function contentContainer(){
  return(
    <div className="Content-container">
      <AboutMe/>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  )
}

export default contentContainer;
