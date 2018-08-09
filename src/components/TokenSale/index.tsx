import * as React from "react";
import styled from "../../theme";
import { Title } from "../Text";
import ContactForm from "./ContactForm";

const BgDiv = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.primaryColor};
  background-image: linear-gradient(
    to right bottom,
    #000000,
    #260017,
    #3a0033,
    #40005c,
    #080292
  );
  padding: 40px;
`;

interface ITokenSaleProps {
  TokenSale: object;
}

const TokenSale: React.SFC<ITokenSaleProps> = props => {
  return (
    <BgDiv>
      <Title>Register for Public TGE</Title>
      <ContactForm />
    </BgDiv>
  );
};

export default TokenSale;
