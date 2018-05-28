import * as React from "react"
import styled from "../../theme"
import { MinorTitle } from "../Text"
import { Locked, UnLocked } from "./NavIcons"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  box-sizing: border-box;
  z-index: 500;
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
          <Locked size={32} title="Unlock account" />
          <UnLocked size={32} title="Unlock account" />
        </StartWrapper>
        <EndWrapper><MinorTitle> test end</MinorTitle></EndWrapper>
      </Wrapper>
    )
  }
}



export default NavBar