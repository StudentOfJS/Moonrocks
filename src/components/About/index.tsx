import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "../../theme";
import TokenDistribution from "../Charts/TokenDistribution";
import Tokenomics from "../Charts/Tokenomics";
import Countdown from "../Countdown";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import AboutText from "./AboutText";
import LazyLoad from "react-lazyload";
import Roadmap from "../Roadmap";

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
  max-width: 880px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 30px;
  overflow: hidden;
  border: 8px dashed yellow;
  padding: 20px;
`;
const TimeWrap = styled(Div)`
  color: ${props => props.theme.primaryColor};
  margin: 30px 0;
`;

export default () => {
  return (
    <MoonBackground>
      <Helmet>
        <title>About Moonrock's ICO</title>
        <meta
          name="description"
          content="Find out more about Moonrock's token sale"
        />
        <link rel="canonical" href="https://moonrocks.com/about" />
      </Helmet>
      <InnerWrapper>
        <i />
        <i />
        <i />
        <AboutText />
        <LazyLoad once={true} offset={1} height={"100%"}>
          <Roadmap />
        </LazyLoad>
        <LazyLoad once={true} offset={1} height={"100%"}>
          <Tokenomics />
        </LazyLoad>
        <LazyLoad once={true} offset={1} height={"100%"}>
          <TimeWrap>
            <Countdown />
          </TimeWrap>
        </LazyLoad>
        <LazyLoad once={true} offset={1} height={"100%"}>
          <TokenDistribution />
        </LazyLoad>
      </InnerWrapper>
    </MoonBackground>
  );
};
