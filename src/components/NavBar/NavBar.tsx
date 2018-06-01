import * as React from "react"
import { Link } from 'react-router-dom'
import { COMPANY, TOKEN_NAME } from "../../constants"
import styled from "../../theme"
import { RocketIcon } from "../icons/index"
import { MinorTitle } from "../Text"
import Logo from "./Logo"
import NavButton from "./NavButton"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: nav;
  width: 100%;
`


const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
interface IState {
  lock: boolean
}

class NavBar extends React.Component<{}, IState> {
  public state: IState = {
    lock: true
  }
  public render() {
    return (
      <Wrapper>
        <StartWrapper>
          <Link to="/">
            <Logo>{COMPANY} <RocketIcon size={32} title="rocket to the moon" /></Logo>
          </Link>
          <NavButton>
            <Link to="/tokensale" ><MinorTitle>token sale</MinorTitle></Link>
          </NavButton>
        </StartWrapper>
        <EndWrapper>
          <NavButton>
            <Link to="/about" ><MinorTitle>what are {TOKEN_NAME}?</MinorTitle></Link>
          </NavButton>
          <NavButton>
            <Link to="/team" ><MinorTitle>team</MinorTitle></Link>
          </NavButton>
          <NavButton>
            <Link to="/whitepaper" ><MinorTitle>whitepaper</MinorTitle></Link>
          </NavButton>
          <NavButton>
            <Link to="/roadmap" ><MinorTitle>roadmap</MinorTitle></Link>
          </NavButton>
        </EndWrapper>
      </Wrapper>
    )
  }
}



export default NavBar