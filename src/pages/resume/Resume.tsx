import React from "react";
import "./Resume.css";
import resume from "../../images/resume.png";
import { Button } from "react-bootstrap";
import PDF from "../../components/VictorVerma.pdf";

const Resume = () => {
  return (
    <div className="resume-content">
      <h1 className="page-title">Resume</h1>
      <img className="resume-pic" src={resume} alt="image not loading"></img>
      <div className="resume-view">
        <Button
          className="pdf-button"
          variant="dark"
          href={PDF}
          target="_blank"
        >
          View as PDF
        </Button>
      </div>
    </div>
  );
};

export default Resume;
