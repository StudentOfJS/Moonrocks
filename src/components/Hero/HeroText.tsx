import * as React from "react";
import styled from "../../theme";
import Div from "../Div";
import { MinorTitle, SubTitle, Title } from "../Text";

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
      <Title>We invite you all</Title>
      <SubTitle> to become citizens of the moon</SubTitle>
      <MinorTitle>moonrock token (MRT)</MinorTitle>
    </HeroText>
  );
};
