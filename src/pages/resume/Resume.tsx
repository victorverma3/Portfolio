import React from "react";
import "./Resume.css";
import Footer from "../../components/footer/Footer";
import resume from "../../images/resume.png";
import PDFView from "../../components/pdfview/PDFView";

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
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Resume;
