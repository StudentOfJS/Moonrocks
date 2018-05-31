import * as React from "react"
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
          <Logo>{COMPANY} <RocketIcon size={32} title="rocket to the moon" /></Logo>
          <NavButton>
            <MinorTitle>token sale</MinorTitle>
          </NavButton>
        </StartWrapper>
        <EndWrapper>
          <NavButton>
            <MinorTitle>what are {TOKEN_NAME}?</MinorTitle>
          </NavButton>
          <NavButton>
            <MinorTitle>team</MinorTitle>
          </NavButton>
          <NavButton>
            <MinorTitle>whitepaper</MinorTitle>
          </NavButton>
          <NavButton>
            <MinorTitle>roadmap</MinorTitle>
          </NavButton>
        </EndWrapper>
      </Wrapper>
    )
  }
}



export default NavBar