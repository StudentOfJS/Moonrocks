import * as React from "react";

import styled from "../../theme";

const BgDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #000000,
    #260017,
    #3a0033,
    #40005c,
    #080292
  );
`;

interface ITokenSaleProps {
  TokenSale: object;
}

const TokenSale: React.SFC<ITokenSaleProps> = props => {
  return <BgDiv>TokenSale</BgDiv>;
};

export default TokenSale;
