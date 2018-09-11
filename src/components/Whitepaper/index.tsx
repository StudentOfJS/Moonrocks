import * as React from "react";
import { Helmet } from "react-helmet";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import { RouteComponentProps } from "react-router";
import styled from "../../theme";
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
`;

const OuterDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 80px 0 40px 0;
  width: 100wh;
`;

export default class Whitepaper extends React.Component<
  RouteComponentProps<{}>
> {
  public state = {
    numPages: null,
    pageNumber: 1
  };

  public onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    this.setState({ numPages });
  };
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
          <WhitepaperDiv>
            <Document
              file="FrontendCV.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              <ArrowLeftIcon size={20} />
              Page {pageNumber} of {numPages}
              <ArrowRightIcon size={20} />
            </p>
          </WhitepaperDiv>
        </OuterDiv>
        <Navigation path={this.props.match.path} />
      </div>
    );
  }
}
