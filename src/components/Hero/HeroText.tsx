import * as React from 'react'
import styled from '../../theme'
import Div from '../Div'
import { MinorTitle, Paragraph, SubTitle, Title } from '../Text'

const HeroText = styled(Div) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primaryColor}

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