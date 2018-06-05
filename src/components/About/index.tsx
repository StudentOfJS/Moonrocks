import * as React from 'react';
import styled from 'styled-components'
import { COMPANY, TOKEN_NAME } from '../../constants'
import Div from '../Div';
import { Paragraph, Title } from '../Text';

const Wrapper = styled(Div) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: ${props => props.theme.primaryColor};
`

const InnerWrapper = styled(Div) `
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export default () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>What is {COMPANY}</Title>
        <Paragraph>
          {COMPANY} is redefining what it means to got to the moon.
      </Paragraph>
        <Paragraph>
          {TOKEN_NAME} will fuel our rocket and provide you with part ownership for our little rock in the sky.
          Built utilizing the blockchain, this technological breakthrough provides the first completely safe environment on the web where decentralized applications are detached from the internet while also permitting full scalability to millions of users.
          Elastos enables the generation of wealth through ownership and exchange of your data and digital assets.
      </Paragraph>
      </InnerWrapper>
    </Wrapper>
  );
}
