import React from "react";
import Button from "react-bootstrap/Button";

interface PDF {
  source: string;
}

interface PDFDownloadProps {
  pdf: PDF;
}

const PDFDownload = ({ pdf }: PDFDownloadProps) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(pdf.source).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = pdf.source;
        alink.click();
      });
    });
  };
  return (
    <Button variant="dark" onClick={onButtonClick}>
      Download PDF
    </Button>
  );
};

export default PDFDownload;
