import React from "react";
import "./Resume.css";
import resume from "../../images/resume.png";
import { Button } from "react-bootstrap";
import PDF from "../../components/VictorVerma.pdf";

const Resume = () => {
  return (
    <>
      <div className="resumeContent">
        <h1 className="pageTitle">Resume</h1>
        <img className="resumePic" src={resume} alt="image not loading"></img>
        <div className="resumeView">
          <Button
            className="pdfButton"
            variant="dark"
            href={PDF}
            target="_blank"
          >
            View as PDF
          </Button>
        </div>
      </div>
    </>
  );
};

export default Resume;
