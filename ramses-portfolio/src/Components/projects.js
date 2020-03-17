import React from "react";

function Projects() {
  return (
    <div className="Projects-container Section">
      <h2>Projects</h2>
      <div className="Projects-section">
        <div className="Project-box">
          <h3>Wanderlust</h3>
          <p>
            an online marketplace for booking or offering tour guides and
            experiences worldwide. It’s where any adventure begins! Tech Stack:
            React, React Hooks, Node.Js/Express, SQlite3, Styled-Components,
            Bcrypt
          </p>
        </div>
        <div className="Project-box">
          <h3>Luncher</h3>
          <p>
            a platform that facilitates donations between patrons and schools in
            need of funds to secure a nutritious meal for their students. Tech
            Stack: React, React Hooks, Node.Js/Express, SQlite3,
            Styled-Components, Bcrypt
          </p>
        </div>
        <div className="Project-box">
          <h3>Let's Move!</h3>
          <p>
            Let’s Move is a tool that aids users through the decision making
            process of choosing a new city to call home. Tech Stack: React,
            React Hooks, Node.Js/Express, MongoDB, Materi-alUI, Passport,
            DigitalOcean
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
