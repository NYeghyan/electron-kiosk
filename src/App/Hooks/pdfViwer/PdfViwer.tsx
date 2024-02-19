import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./pdfViwer.scss"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';




pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


import MyPDF from '/Users/siriusbit/Desktop/RedTop/2023-07-13/RedTop20230712_220454.pdf'

interface State {
  numPages: number | null;
  pageNumber: number;
}

class PDFViewer extends Component<{}, State> {
  state: State = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    this.setState({ numPages });
  };

  renderAllPages = () => {
    const { numPages } = this.state;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= numPages!; pageNumber++) {
      pages.push(
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          className={"pdf-page"} // Adjust the width as needed
          width={950}
          scale={1}
        />
      );
    }

    return pages;
  };

  render() {
    const { numPages } = this.state;

    return (
      <div>
        <Document file={MyPDF} onLoadSuccess={this.onDocumentLoadSuccess} className={"my-pdf-document"} >
          {this.renderAllPages()}
        </Document>
        <p>
          Showing {numPages} pages.
        </p>
      </div>
    );
  }
}

export default PDFViewer;
