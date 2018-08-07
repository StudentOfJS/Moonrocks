import * as React from "react";
import LazyLoad from "react-lazyload";
import styled, { keyframes } from "../../theme";
import TokenDistribution from "../Charts/TokenDistribution";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import AboutText from "./AboutText";

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
  max-width: 800px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 30px;
  overflow: hidden;
  border: 8px dashed yellow;
  padding: 20px;
  margin: 100px;
`;

export default () => {
  return (
    <MoonBackground>
      <InnerWrapper>
        <i />
        <i />
        <i />
        <AboutText />
      </InnerWrapper>
      <LazyLoad once={true} offset={100} height={"100%"}>
        <TokenDistribution />
      </LazyLoad>
    </MoonBackground>
  );
};
