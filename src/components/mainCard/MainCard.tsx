import React from "react";
import "./MainCard.css";
import Card from "react-bootstrap/Card";

const MainCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>I like solving problems.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainCard;
