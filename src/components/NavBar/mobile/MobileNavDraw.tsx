import * as React from 'react'
import { COMPANY, TOKEN_NAME } from '../../../constants'
import styled from '../../../theme'
import Div from '../../Div'
import { RocketIcon } from '../../icons'
import { MinorTitle } from '../../Text'
import Logo from '../Logo'
import NavBarLink from '../NavBarLink'
import { IMobileNavProps } from './MobileNav'

const Draw = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 80%;
  background-color: black;
  opacity: 0.8;
`
const Border = styled(Div) `
  width: 200px;
  background: transparent;
  border: 3px solid ${props => props.theme.secondaryColor};
  border-radius: 5px;
`

const MobileNavDraw: React.SFC<IMobileNavProps> = ({ leave, open }) =>
  open ? (
    <div onMouseLeave={leave}>
      <Draw>
        <NavBarLink to="/">
          <Logo>{COMPANY} <RocketIcon size={32} title="rocket to the moon" /></Logo>
        </NavBarLink>
        <Border>
          <NavBarLink to="/tokensale" ><MinorTitle>token sale</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/about" ><MinorTitle>what are {TOKEN_NAME}?</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/team" ><MinorTitle>team</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/whitepaper" ><MinorTitle>whitepaper</MinorTitle></NavBarLink>
        </Border>
        <Border>
          <NavBarLink to="/roadmap" ><MinorTitle>roadmap</MinorTitle></NavBarLink>
        </Border>
      </Draw>
    </div>
  ) : (
      null
    )



export default MobileNavDraw