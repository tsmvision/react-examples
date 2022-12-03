import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import samplePdf from "./pdf/spring-boot-reference.pdf";
import "./App.css";

const App = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(2);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess}>
        {[1, 2].map((pageNumber, index) => (
          <div key={index} className="page1">
            <Page width={1000} pageNumber={pageNumber} />
          </div>
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default App;
