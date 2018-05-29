import * as React from "react"
import styled from "../../theme"
import { MinorTitle } from "../Text"
import Logo from "./Logo"
import NavButton from "./NavButton"
import { LockIcon } from "./NavIcons"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
          <Logo>dAPPur</Logo>
          <NavButton>
            <MinorTitle>token sale</MinorTitle>
          </NavButton>
          {LockIcon(this.state.lock)}
        </StartWrapper>
        <EndWrapper>
          <NavButton>
            <MinorTitle>what is dAPPur?</MinorTitle>
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