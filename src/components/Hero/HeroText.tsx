import * as React from 'react'
import styled from '../../theme'
import Div from '../Div'
import { MinorTitle, Paragraph, SubTitle, Title } from '../Text'

const HeroText = styled(Div) `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 101;
  width: 100%;
  color: white;
`

export default () => {
  return (
    <HeroText>
      <Title>We invite you all</Title>
      <SubTitle> to become citizens of the moon</SubTitle>
      <MinorTitle>dAPPur</MinorTitle>
      <Paragraph>dAPPur</Paragraph>
    </HeroText>
  )
}