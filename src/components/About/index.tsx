import * as React from 'react';
import styled from 'styled-components'
import { COMPANY, TOKEN_NAME } from '../../constants'
import Div from '../Div';
import { Paragraph, Title } from '../Text';

const Wrapper = styled(Div) `
  height: 100vh;
  grid-area: about;
  color: ${props => props.theme.secondaryColor};
`
export default () => {
  return (
    <Wrapper>
      <Title>What is {COMPANY}</Title>
      <Paragraph>
        {COMPANY} is redefining what it means to got to the moon. {TOKEN_NAME} will fuel our rocket and provide you with part ownership for our little rock in the sky. Built utilizing the blockchain, this technological breakthrough provides the first completely safe environment on the web where decentralized applications are detached from the internet while also permitting full scalability to millions of users. Elastos enables the generation of wealth through ownership and exchange of your data and digital assets.
      </Paragraph>
    </Wrapper>
  );
}
