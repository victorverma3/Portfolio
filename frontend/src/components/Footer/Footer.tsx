import React from "react";

import "./footer.css";

import githublogo from "../../images/githublogo.png";
import maillogo from "../../images/maillogo.png";
import linkedinlogo from "../../images/linkedinlogo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <a
        href="https://www.linkedin.com/in/victor-verma-91713022b/"
        target="_blank"
      >
        <img className="footer-logo" src={linkedinlogo}></img>
      </a>
      <a href="https://github.com/victorverma3" target="_blank">
        <img className="footer-logo" src={githublogo}></img>
      </a>
      <a href="mailto:vpverm@bu.edu" target="_blank">
        <img className="footer-logo" src={maillogo}></img>
      </a>
    </footer>
  );
};

export default Footer;
