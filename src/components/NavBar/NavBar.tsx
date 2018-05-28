import * as React from "react"
import styled from "../../theme"
import { MinorTitle } from "../Text"
import Logo from "./Logo"
import NavButton from "./NavButton"
import { Locked, UnLocked } from "./NavIcons"

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

class NavBar extends React.Component {
  public render() {
    return (
      <Wrapper>
        <StartWrapper>
          <Logo>ICO dAPP</Logo>
          <Locked size={32} title="Unlock account" />
          <UnLocked size={32} title="Unlock account" />
        </StartWrapper>
        <EndWrapper>
          <NavButton>
            <MinorTitle> test end</MinorTitle>
          </NavButton>
          <NavButton>
            <MinorTitle> test end</MinorTitle>
          </NavButton>
          <NavButton>
            <MinorTitle> test end</MinorTitle>
          </NavButton>
          <NavButton>
            <MinorTitle> test end</MinorTitle>
          </NavButton>
        </EndWrapper>
      </Wrapper>
    )
  }
}



export default NavBar