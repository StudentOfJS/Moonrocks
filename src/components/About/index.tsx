import * as React from "react";
import styled from "styled-components";
import { COMPANY, TOKEN_NAME } from "../../constants";
import Div from "../Div";
import { Paragraph, Title } from "../Text";

const Wrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: ${props => props.theme.primaryColor};
`;

const InnerWrapper = styled(Div)`
  display: flex;
  width: 75%;
  max-width: 600px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>What is {COMPANY}</Title>
        <Paragraph>
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
    </Wrapper>
  );
};
