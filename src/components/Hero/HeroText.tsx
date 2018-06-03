import * as React from 'react'
import styled from '../../theme'
import Div from '../Div'
import { MinorTitle, Paragraph, SubTitle, Title } from '../Text'

const HeroText = styled(Div) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: content;
  z-index: 101;
  width: 100%;
  padding-left: 10%;
  color: white;
`

export default () => {
  return (
    <HeroText>
      <Title>We invite you all</Title>
      <SubTitle> to become citizens of the moon</SubTitle>
      <MinorTitle>moonrock token (MRT)</MinorTitle>
      <Paragraph>one small step for blockchain, one giant leap for mankind</Paragraph>
    </HeroText>
  )
}