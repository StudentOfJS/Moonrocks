import * as React from "react";
import styled from "../../theme";
import Button from "../Button";
import Div from "../Div";
import { MinorTitle, SubTitle, Title } from "../Text";
import HeroButton from "./HeroButton";

const HeroText = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 101;
  color: white;
`;

export default () => {
  return (
    <HeroText>
      <Title>We are Moonrock, a community lunar project</Title>
      <SubTitle>we invite you all to become citizens of the Moon</SubTitle>
      <HeroButton>
        <Button>learn how</Button>
      </HeroButton>
      <MinorTitle>moonrock token (MRT)</MinorTitle>
    </HeroText>
  );
};
