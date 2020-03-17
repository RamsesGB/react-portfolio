import React from "react";
import NodeIcon from "../images/NodeIcon.png";
import ReactIcon from "../images/ReactIcon.png";
import JsIcon from "../images/icons8-javascript-96.png";
import ReduxIcon from "../images/reduxLogo.png";
import HTMLIcon from "../images/HTMLIcon.png";
import CSSIcon from "../images/CSSIcon.png";
import LESSIcon from "../images/LESSIcon.png";
import MongoDBIcon from "../images/MongoDBIcon.png";

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
          <li className="Icon-Style Icon-Row-1 Icon-1">
            <img className="Icon-Img" alt="icon" src={JsIcon} />
          </li>
          <li className="Icon-Style Icon-Row-1 Icon-2">
            <img alt="icon" src={NodeIcon} />
          </li>
          <li className="Icon-Style Icon-Row-1 Icon-3">
            <img className="Icon-Img" src={MongoDBIcon} />
          </li>
          <li className="Icon-Style Icon-Row-1 Icon-4">
            <img className="Icon-Img" src={LESSIcon} />
          </li>
          <li className="Icon-Style Icon-5">
            <img className="Icon-Img" alt="icon" src={ReactIcon} />
            <h3>React</h3>
          </li>
          <li className="Icon-Style Icon-6">
            <img className="Icon-Img" alt="icon" src={ReduxIcon} />
            <h3>Redux</h3>
          </li>
          <li className="Icon-Style Icon-7">
            <img className="Icon-Img" src={HTMLIcon} />
            <h3>HTML5</h3>
          </li>
          <li className="Icon-Style Icon-8">
            <img className="Icon-Img" src={CSSIcon} />
            <h3>CSS</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
