import * as React from "react";
import * as pdf from "react-pdf/dist/entry.webpack";
import styled from "../../theme";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import { Paragraph, Title } from "../Text";

const { Document, Page } = pdf;

const InnerWrapper = styled(Div)`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: #292a2b;
  border-radius: 30px;
  overflow: hidden;
  padding: 20px;
  margin: 100px;
`;

interface IState {
  numPages: number | null;
  pageNumber: number;
}

export default class Whitepaper extends React.Component<IState> {
  public state = {
    numPages: null,
    pageNumber: 1
  };

  public onDocumentLoadSuccess = ({ numPages }: IState) => {
    this.setState({ numPages });
  };

  public render() {
    const { pageNumber, numPages } = this.state;

    return (
      <MoonBackground>
        <InnerWrapper>
          <Title>Whitepaper</Title>
          <Document
            file={"whitepaper.pdf"}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <Paragraph>
            Page {pageNumber} of {numPages}
          </Paragraph>
        </InnerWrapper>
      </MoonBackground>
    );
  }
}
