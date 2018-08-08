import * as React from "react";
import * as pdf from "react-pdf/dist/entry.webpack";
import styled, { keyframes } from "../../theme";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import { Paragraph, Title } from "../Text";

const { Document, Page } = pdf;

const slide = keyframes`
  {
    0% {
      transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
      transform-origin: 0% 50%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }
`;

const InnerWrapper = styled(Div)`
  animation: ${slide} 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 150vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 30px;
  overflow: hidden;
  border: 8px dashed yellow;
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
          <i />
          <i />
          <i />
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
