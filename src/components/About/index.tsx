import * as React from "react";
import { COMPANY, TOKEN_NAME } from "../../constants";
import styled, { keyframes } from "../../theme";
import Div from "../Div";
import { Paragraph, Title } from "../Text";
import { MoonBackground } from "./Background";

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
  width: 75%;
  max-width: 600px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 30px;
  border-radius: 30px;
`;

export default () => {
  return (
    <MoonBackground>
      <InnerWrapper>
        <i />
        <i />
        <i />
        <Title>What is {COMPANY}</Title>
        <Paragraph style={{ color: "yellow" }}>
          one small step for blockchain, one giant leap for mankind
        </Paragraph>
        <Paragraph>
          {COMPANY} is knocking Buzz Aldrin out the way to secure your
          realestate rights on the moon.
        </Paragraph>
        <Paragraph>
          {TOKEN_NAME} will fuel our rocket and provide you with part ownership
          for our little rock in the sky. Built utilizing the blockchain, this
          technological breakthrough provides the first completely safe,
          transparent and immutable way to secure realestate on the moon.
        </Paragraph>
      </InnerWrapper>
    </MoonBackground>
  );
};
