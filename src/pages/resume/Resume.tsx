import React from "react";
import "./Resume.css";
import Footer from "../../components/footer/Footer";
import resume from "../../images/resume.png";
import PDFDownload from "../../components/pdfdownload/PDFDownload";

const Resume = () => {
  const resumePDF = {
    source: "resume.pdf",
  };
  return (
    <>
      <div className="resumeContent">
        <h1 className="pageTitle">Resume</h1>
        <img src={resume} alt="image not loading"></img>
      </div>
      <div className="resumeDownload">
        <PDFDownload pdf={resumePDF} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Resume;
