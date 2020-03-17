import React from "react";
import NodeIcon from "../images/NodeIcon.png";
import ReactIcon from "../images/ReactIcon.png";
import JsIcon from "../images/icons8-javascript-96.png";
import ReduxIcon from "../images/reduxLogo.png";
import "../App/App.css";

function Skills() {
  return (
    <div className="Section">
      <h2>Skills</h2>
      <h3>
        A collection of technologies I've grown fluent in and utilize in my day
        to day to create my best work.
      </h3>
      <div className="Skill-Icon-Box">
        <ul className="Skill-Icon-Grid">
          <li className="Icon-Style Icon-1">
            <img alt="icon" src={NodeIcon} />
            <h3>Node.js</h3>
          </li>
          <li className="Icon-Style Icon-2">
            <img className="Icon-Img" alt="icon" src={ReactIcon} />
            <h3>React</h3>
          </li>
          <li className="Icon-Style Icon-3">
            <img className="Icon-Img" alt="icon" src={JsIcon} />
            <h3>Javascript</h3>
          </li>
          <li className="Icon-Style Icon-4">
            <img className="Icon-Img" alt="icon" src={ReduxIcon} />
            <h3>Redux</h3>
          </li>
          <li className="Icon-Style Icon-5">
            <img />
            <h3>HTML5</h3>
          </li>
          <li className="Icon-Style Icon-6">
            <img />
            <h3>CSS</h3>
          </li>
          <li className="Icon-Style Icon-7">
            <img />
            <h3>LESS</h3>
          </li>
          <li className="Icon-Style Icon-8">
            <img />
            <h3>MongoDB</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
