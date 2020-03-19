import React from "react";
import "../App/App.css";
import WanderlustIcon from "../images/WanderlustIcon.svg";
import LuncherIcon from "../images/LuncherIcon.svg";
import LetsMoveIcon from "../images/LetsMoveIcon.svg";



function Projects() {
  return (
    <div id="Projects" className="Projects-container Section">
      <h2 className="Center-underline">Projects</h2>
      <div className="Projects-Section">
        <div className="Project-box">
          <img className="Project-Img" alt="Project icon" src={WanderlustIcon} />
          <h3>Wanderlust</h3>
          <p>
            an online marketplace for booking or offering tour guides and
            experiences worldwide. It’s where any adventure begins! Tech Stack:
            React, React Hooks, Node.Js/Express, SQlite3, Styled-Components,
            Bcrypt
          </p>
          <a
            href="https://github.com/wanderlust-bw/wanderlust-UI-Ramses"
            className="SeeCode-Btn"
          >
            See Code
          </a>
        </div>
        <div className="Project-box">
          <img className="Project-Img" alt="Project icon" src={LuncherIcon} />
          <h3>Luncher</h3>
          <p>
            a platform that facilitates donations between patrons and schools in
            need of funds to secure a nutritious meal for their students. Tech
            Stack: React, React Hooks, Node.Js/Express, SQlite3,
            Styled-Components, Bcrypt
          </p>
          <a
            href="https://github.com/luncher-lambda-buildweek/FrontEnd"
            className="SeeCode-Btn"
          >
            See Code
          </a>
        </div>
        <div className="Project-box">
          <img className="Project-Img" alt="Project icon" src={LetsMoveIcon} />
          <h3>Let's Move!</h3>
          <p>
            Let’s Move is a tool that aids users through the decision making
            process of choosing a new city to call home. Tech Stack: React,
            React Hooks, Node.Js/Express, MongoDB, Materi-alUI, Passport,
            DigitalOcean
          </p>
          <a
            href="https://github.com/Lambda-School-Labs/best-places-to-live-fe/tree/labs15"
            className="SeeCode-Btn"
          >
            See Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
