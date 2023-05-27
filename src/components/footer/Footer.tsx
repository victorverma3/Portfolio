import React from "react";
import "./Footer.css";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => {
  return (
    <div className="flexbox">
      <ListGroup variant="horizontal">
        <ListGroup.Item>617-838-4092</ListGroup.Item>
        <ListGroup.Item>vpverm@bu.edu</ListGroup.Item>
        <ListGroup.Item>LinkedIn</ListGroup.Item>
        <ListGroup.Item>GitHub</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Footer;
