import React from "react";
import "./Resume.css";
import Footer from "../../components/footer/Footer";
import resume from "../../images/resume.png";
import PDFView from "../../components/pdfview/PDFView";
import { Button } from "react-bootstrap";
import PDF from "../../components/VictorVerma.pdf";

const Resume = () => {
  const resumePDF = {
    source: "VictorVerma.pdf",
  };
  return (
    <>
      <div className="resumeContent">
        <h1 className="pageTitle">Resume</h1>
        <img className="resumePic" src={resume} alt="image not loading"></img>
        <div className="resumeView">
          <PDFView pdf={resumePDF} />
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
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Resume;
