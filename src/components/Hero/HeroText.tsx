import * as React from "react";
import styled from "../../theme";
import Div from "../Div";
import Signup from "../Signup";
import { MinorTitle, SubTitle, Title } from "../Text";

const HeroText = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  z-index: 101;
  color: white;
`;

const HeroGroup = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return (
    <HeroText>
      <HeroGroup>
        <Title>We are Moonrock,</Title>
        <Title>a community lunar project</Title>
        <SubTitle>we invite you all to become citizens of the Moon</SubTitle>
      </HeroGroup>
      <HeroGroup>
        <MinorTitle>Sign up now for early access.</MinorTitle>
        <Signup
          placeholder="Enter your email..."
          type="email"
          // tslint:disable-next-line:jsx-no-lambda
          submit={v => null}
          btnText="Signup"
        />
      </HeroGroup>
    </HeroText>
  );
};
