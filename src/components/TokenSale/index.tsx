import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "../../theme";
import Countdown from "../Countdown";
import { SubTitle, Title } from "../Text";
import ContactForm from "./ContactForm";

// const BgDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex-wrap: no-wrap;
//   overflow: hidden;
//   width: 100vw;
//   height: 300vh;
//   background-image: linear-gradient(
//     to right bottom,
//     #000000,
//     #260017,
//     #3a0033,
//     #40005c,
//     #080292
//   );
// `;

const Grid = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 20%);
    grid-template-rows: repeat(30%, 100px);
    align-content: space-around;
    justify-content: space-between;
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
  }
`;

const Item1 = styled.div`
  grid-column: 1 / 5;
`;
const Item2 = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
`;
const Item3 = styled.div`
  grid-column: 3 / 5;
`;
const Item4 = styled.div`
  grid-column: 4 / 5;
`;
const Item5 = styled.div`
  grid-column: 5 / 5;
`;

interface ITokenSaleProps {
  TokenSale: object;
}

const TokenSale: React.SFC<ITokenSaleProps> = props => {
  return (
    <Grid>
      <Helmet>
        <title>Moonrock's Whitepaper'</title>
        <meta
          name="description"
          content="Read Moonrock's whitepaper and find out mroe about our tech"
        />
        <link rel="canonical" href="https://moonrocks.com/whitepaper" />
      </Helmet>
      <Item1>
        <Title>Moonrocks</Title>
      </Item1>
      <Item2>
        <ContactForm />
      </Item2>
      <Item3>
        <Countdown />
      </Item3>
      <Item4>
        <SubTitle>MRT</SubTitle>
      </Item4>
      <Item5>
        <SubTitle>MRT</SubTitle>
      </Item5>
    </Grid>
  );
};

export default TokenSale;
