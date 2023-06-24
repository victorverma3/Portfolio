import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bottom">
      <div className="footerItem">
        <a>617-838-4092</a>
      </div>
      <div className="footerItem">
        <a className="footerLink" href="mailto:vpverm@bu.edu">
          vpverm@bu.edu
        </a>
      </div>
      <div className="footerItem">
        <a
          className="footerLink"
          href="https://www.linkedin.com/in/victor-verma-91713022b/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div className="footerItem">
        <a
          className="footerLink"
          href="https://github.com/victorverma3"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
