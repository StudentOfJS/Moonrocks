import * as React from "react";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import { Element } from "react-scroll";
import styled, { keyframes } from "../../theme";
import TokenDistribution from "../Charts/TokenDistribution";
import Tokenomics from "../Charts/Tokenomics";
import Countdown from "../Countdown";
import Div from "../Div";
import FooterBar from "../FooterBar/FooterBar";
import { MoonBackground } from "../MoonBackground";
import Roadmap from "../Roadmap";
import Signup from "../Signup";
import Team from "../Team";
import { MinorTitle } from "../Text";
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
  max-width: 880px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 30px;
  overflow: hidden;
  padding: 20px;
`;
const TimeWrap = styled(Div)`
  color: ${props => props.theme.primaryColor};
  margin: 30px 0;
`;

export default () => {
  return (
    <div>
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
          <Element name="about" className="element">
            <AboutText />
          </Element>
          <TimeWrap>
            <MinorTitle>Sign up now for early access</MinorTitle>
            <Signup
              placeholder="Enter your email..."
              type="email"
              // tslint:disable-next-line:jsx-no-lambda
              submit={v => null}
              btnText="Signup"
            />
          </TimeWrap>
          <Element name="roadmap" className="element">
            <Roadmap />
          </Element>
          <Element name="tokensale" className="element">
            <LazyLoad once={true} offset={1} height={"100%"}>
              <Tokenomics />
            </LazyLoad>
          </Element>
          <LazyLoad once={true} offset={1} height={"100%"}>
            <TimeWrap>
              <Countdown />
            </TimeWrap>
          </LazyLoad>
          <LazyLoad once={true} offset={1} height={"100%"}>
            <TokenDistribution />
          </LazyLoad>
          <Element name="team" className="element">
            <Team />
          </Element>
        </InnerWrapper>
      </MoonBackground>
      <FooterBar />
    </div>
  );
};
