import * as React from 'react'
import { COMPANY, TOKEN_NAME } from '../../../constants'
import styled, { keyframes } from '../../../theme'
import Div from '../../Div'
import { RocketIcon } from '../../icons'
import { MinorTitle } from '../../Text'
import Logo from '../Logo'
import NavBarLink from '../NavBarLink'
import { IMobileNavProps } from './MobileNav'


const SlideIn = keyframes`
from {
  transform: translate3d(-100%, 0, 0);
  opacity: 1;
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`
const SlideOut = keyframes`
  from {
    opacity: 0.8;
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  to {
    opacity: 0.8;
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`
const ClosedDraw = styled.div`
  animation-name: ${SlideOut};
  animation-timing-function: ease-in;
  animation-duration: 700ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  visibility: hidden;
`

const Draw = styled.div`
  animation-name: ${SlideIn};
  animation-timing-function: ease-in;
  animation-duration: 700ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 0.8;
`
const Border = styled(Div) `
  width: 200px;
  background: transparent;
  border: 3px solid ${props => props.theme.accent};
  border-radius: 5px;
`

const MobileNavDraw: React.SFC<IMobileNavProps> = ({ open, leave, firstTime }) => {
  if (firstTime) { return null }
  return open ? (
    <Draw>
      <NavBarLink to="/" onClick={leave}>
        <Logo>{COMPANY} <RocketIcon size={32} title="rocket to the moon" /></Logo>
      </NavBarLink>
      <Border>
        <NavBarLink to="/tokensale" onClick={leave}><MinorTitle>token sale</MinorTitle></NavBarLink>
      </Border>
      <Border>
        <NavBarLink to="/about" onClick={leave}><MinorTitle>what are {TOKEN_NAME}?</MinorTitle></NavBarLink>
      </Border>
      <Border>
        <NavBarLink to="/team" onClick={leave}><MinorTitle>team</MinorTitle></NavBarLink>
      </Border>
      <Border>
        <NavBarLink to="/whitepaper" onClick={leave}><MinorTitle>whitepaper</MinorTitle></NavBarLink>
      </Border>
      <Border>
        <NavBarLink to="/roadmap" onClick={leave}><MinorTitle>roadmap</MinorTitle></NavBarLink>
      </Border>
    </Draw>
  ) : (
      <ClosedDraw>
        <NavBarLink to="/" onClick={leave}>
          <Logo>{COMPANY} <RocketIcon size={32} title="rocket to the moon" /></Logo>
        </NavBarLink>
        <Border>
          <NavBarLink to="/tokensale" onClick={leave}><MinorTitle>token sale</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/about" onClick={leave}><MinorTitle>what are {TOKEN_NAME}?</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/team" onClick={leave}><MinorTitle>team</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/whitepaper" onClick={leave}><MinorTitle>whitepaper</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/roadmap" onClick={leave}><MinorTitle>roadmap</MinorTitle></NavBarLink>
        </Border>
      </ClosedDraw>
    )
}
export default MobileNavDraw