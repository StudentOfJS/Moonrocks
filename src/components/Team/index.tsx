import * as React from "react";
import { Github } from "styled-icons/fa-brands";
import rod from "../../images/rod.jpg";
import styled, { keyframes } from "../../theme";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import { MinorTitle, Paragraph, Title } from "../Text";

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
  height: 60vh;
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

const TeamAvatar = styled.img`
  border-radius: 100%;
  height: 100px;
  width: 100px;
  border: 4px solid white;
`;

const Row = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100px;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export default () => {
  return (
    <MoonBackground>
      <InnerWrapper>
        <i />
        <i />
        <i />
        <Title>Moon Rockers</Title>
        <Row>
          <TeamAvatar src={rod} />
          <Column>
            <MinorTitle style={{ color: "yellow" }}>
              Frontend Developer
            </MinorTitle>
            <Paragraph>Mad skills</Paragraph>
            <Github color="white" />
          </Column>
        </Row>
      </InnerWrapper>
    </MoonBackground>
  );
};
