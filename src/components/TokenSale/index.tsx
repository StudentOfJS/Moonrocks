import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "../../theme";
import Countdown from "../Countdown";
import InputWithSubmit from "../InputWithSubmit";
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
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
  grid-row: 1 / 2;
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
        <title>Moonrock's ICO</title>
        <meta name="description" content="Moonrock's token sale information" />
        <link rel="canonical" href="https://moonrocks.com/tokensale" />
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
        <InputWithSubmit
          placeholder="test"
          type="text"
          // tslint:disable-next-line:jsx-no-lambda
          submit={v => null}
          btnText="test"
        />
      </Item4>
      <Item5>
        <SubTitle>MRT</SubTitle>
      </Item5>
    </Grid>
  );
};

export default TokenSale;
