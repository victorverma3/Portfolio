import React from "react";
import "./Footer.css";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => {
  return (
    <ListGroup horizontal className="footer">
      <ListGroup.Item>
        <a href="tel:1-617-838-4092">617-838-4092</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="mailto:vpverm@bu.edu">vpverm@bu.edu</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          href="https://www.linkedin.com/in/victor-verma-91713022b/"
          target="_blank"
        >
          LinkedIn
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href="https://github.com/victorverma3" target="_blank">
          GitHub
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Footer;
