import React from "react";
import "../App/App.css";
import Resume from "../images/Resume V.3 Ramses Bermudez.pdf";

function ContactMe() {
  return (
    <div id="Contact Me" className="Contact-Box Section">
      <h2 className="Center-underline">Contact Me</h2>
      <h3>
        Ready to join your team and collaborate in the future of software
        engineering
      </h3>
      <div className="Info-Box">
        <span className="Info-Row">
          <dt>Location</dt>
          <dd>Miami, FL &bull; USA</dd>
        </span>
        <span className="Info-Row">
          <dt>Phone</dt>
          <dd>(786) 309-0172</dd>
        </span>
        <span className="Info-Row">
          <dt>Email</dt>
          <dd>
            gbmudez@gmail.com
          </dd>
        </span>
      </div>
      <a href={Resume} className="SeeCode-Btn">
        View Resume
      </a>
    </div>
  );
}

export default ContactMe;
