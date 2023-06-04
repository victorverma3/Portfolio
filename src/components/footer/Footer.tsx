import React from "react";
import "./Footer.css";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => {
  return (
    <div className="bottom">
      <ListGroup horizontal className="footer">
        <ListGroup.Item>
          <a>617-838-4092</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="footerLink" href="mailto:vpverm@bu.edu">
            vpverm@bu.edu
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            className="footerLink"
            href="https://www.linkedin.com/in/victor-verma-91713022b/"
            target="_blank"
          >
            LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            className="footerLink"
            href="https://github.com/victorverma3"
            target="_blank"
          >
            GitHub
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Footer;
