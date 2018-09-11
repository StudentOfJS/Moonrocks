import * as React from "react";
import { Helmet } from "react-helmet";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import { RouteComponentProps } from "react-router";
import styled from "../../theme";
import Button from "../Button";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import Navigation from "../Navigation";

const WhitepaperDiv = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 800px;
  width: 100wh;
  @media print {
    display: none;
  }
`;

const OuterDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 80px 0 40px 0;
  width: 100wh;
`;

const WhitepaperPrint = styled.div`
  @media screen {
    display: none;
  }
`;

const PrintButton = styled(Button)`
  top: 0;
  right: 0;
  margin: 80px;
  position: absolute;
  box-sizing: border-box;
  z-index: 2000;
`;

interface IState {
  numPages: number;
  pageNumber: number;
}

export default class Whitepaper extends React.Component<
  RouteComponentProps<{}>,
  IState
> {
  public state = {
    numPages: 0,
    pageNumber: 1
  };

  public onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    this.setState({ numPages });
  };
  public onDec = () =>
    this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 }));
  public onInc = () =>
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));

  public onPrint = () => window.print();
  public render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Helmet>
          <title>Moonrock's Whitepaper</title>
          <meta
            name="description"
            content="Read Moonrock's whitepaper and find out more about our tech"
          />
          <link rel="canonical" href="https://moonrocks.io/whitepaper" />
        </Helmet>
        <OuterDiv>
          <WhitepaperPrint>
            <Document
              file="FrontendCV.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={1} />
              <Page pageNumber={2} />
            </Document>
          </WhitepaperPrint>
          <WhitepaperDiv>
            <Document
              file="FrontendCV.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              {pageNumber > 1 && (
                <ArrowLeftIcon size={20} onClick={this.onDec} />
              )}
              Page {pageNumber} of {numPages}
              {pageNumber < numPages && (
                <ArrowRightIcon size={20} onClick={this.onInc} />
              )}
            </p>
          </WhitepaperDiv>
        </OuterDiv>
        <Navigation path={this.props.match.path} />
        <PrintButton onClick={this.onPrint}>print</PrintButton>
      </div>
    );
  }
}
