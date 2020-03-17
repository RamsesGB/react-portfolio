import React from "react";
import IMG_0031 from "../images/IMG_0031.jpg";
import "../App/App.css";

function AboutMe() {
  return (
    <div className="AboutMe-Box Section">
      <div className="AboutMe-Content">
        <h2>About Me</h2>
        <p>
          My name is Ramses, I was born and raised in Colombia. Music production
          software was what initially peaked my curiosity for software
          engineering. I recently graduated from Lambda School which is a 9
          month technical training program specializing in web dev and computer
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

