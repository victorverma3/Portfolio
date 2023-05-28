import React from "react";
import "./MainCard.css";
import Card from "react-bootstrap/Card";
import image from "../../assets/ikea.jpeg";

const MainCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} alt="error loading image" />
        <Card.Body>
          <Card.Text>I like solving problems.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainCard;
