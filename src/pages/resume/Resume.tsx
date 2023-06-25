import React from "react";
import "./Resume.css";
import Footer from "../../components/footer/Footer";
import resume from "../../images/resume.png";
import PDFView from "../../components/pdfview/PDFView";
import { Button } from "react-bootstrap";

const Resume = () => {
  const onButtonClick = () => {
    window.open("../../../public/VictorVerma.pdf", "_blank");
  };
  return (
    <>
      <div className="resumeContent">
        <h1 className="pageTitle">Resume</h1>
        <img className="resumePic" src={resume} alt="image not loading"></img>
        <div className="resumeView">
          <Button className="pdfButton" variant="dark" onClick={onButtonClick}>
            View as PDF
          </Button>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Resume;
