import React from "react";
import IMG_0031 from "../../images/IMG_0031.jpg";
import "../../App/App.css";
import "./styling.css";

function AboutMe() {
  return (
    <div id="About Me" className="AboutMe-Box Section">
      <div className="AboutMe-Content">
        <h2 className="Mobile-Center-underline">About Me</h2>
        <p>
          Welcome! 
          <br></br>
          I'm Ramses, I was born and raised in Colombia. At an early
          age I discovered my passion for technology and the visual + performing
          arts. Through music production software I recognized the intersection
          of these two interests and their potential for creating tools others
          could use to unleash their creativity.
          <br></br>
          <br></br>
          This realization motivated me to create products that would leverage
          the power of tech to have a positive impact in my community and thus
          began my mission to become a software engineer.
          <br></br>
          <br></br>I recently graduated from Lambda School which is a 9 month
          technical training program specializing in web dev and computer
          science fundamentals, with a focus on group project work that mimics
          the product development lifecycle.
        </p>
      </div>
      <div className="AboutMe-PicBox">
        <img className="AboutMe-Pic" alt="headshot" src={IMG_0031} />
      </div>
    </div>
  );
}

export default AboutMe;
