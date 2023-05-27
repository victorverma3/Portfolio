import React from "react";
import "./Footer.css";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => {
  return (
    <div className="flexbox">
      <ListGroup variant="horizontal">
        <ListGroup.Item>617-838-4092</ListGroup.Item>
        <ListGroup.Item>vpverm@bu.edu</ListGroup.Item>
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
    </div>
  );
};

export default Footer;
