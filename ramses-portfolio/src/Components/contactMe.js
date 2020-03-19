import React from "react";
import "../App/App.css";
import Resume from "../images/Resume V.3 Ramses Bermudez.pdf";

function ContactMe() {
  return (
    <div id="Contact Me" className="Section">
      <h2 className="Center-underline">Contact Me</h2>
      <h3>
        Ready to join your team and collaborate in the future of software
        engineering
      </h3>
      <dl className="Info-Box">
        <dt>Location</dt>
        <dd>Miami, FL &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(786) 309-0172</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">gbmudez@gmail.com</a>
        </dd>
      </dl>
      <a href={Resume} className="SeeCode-Btn">
        View Resume
      </a>
    </div>
  );
}

export default ContactMe;
