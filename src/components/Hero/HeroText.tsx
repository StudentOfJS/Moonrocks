import * as React from 'react'
import styled from '../../theme'
import Div from '../Div'
import { MinorTitle, Paragraph, SubTitle, Title } from '../Text'

const HeroText = styled(Div) `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => {
  return (
    <HeroText>
      <Title>dAPPur</Title>
      <SubTitle>dAPPur</SubTitle>
      <MinorTitle>dAPPur</MinorTitle>
      <Paragraph>dAPPur</Paragraph>
    </HeroText>
  )
}