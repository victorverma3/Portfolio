import React from "react";
import "./PDFView.css";
import Button from "react-bootstrap/Button";

interface PDF {
  source: string;
}

interface PDFDownloadProps {
  pdf: PDF;
}

const PDFView = ({ pdf }: PDFDownloadProps) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(pdf.source).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.target = "_blank";
        alink.click();
      });
    });
  };
  return (
    <Button variant="dark" onClick={onButtonClick}>
      View as PDF
    </Button>
  );
};

export default PDFView;
