import React from "react";
import "../App/App.css";
import Resume from "../images/Resume V.3 Ramses Bermudez.pdf"


function ContactMe() {
  return (
    <div id="cta" className="Section">
      <h2>Contact Me</h2>
      <h3>
        Ready to join your team and collaborate in the future of software
        engineering
      </h3>
      <a
      href={Resume}
      className="SeeCode-Btn">
        View Resume
      </a>
    </div>
  );
}

export default ContactMe;
