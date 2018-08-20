import * as React from "react";
import { COMPANY, TOKEN_NAME } from "../../constants";
import styled from "../../theme";
import { RocketIcon } from "../icons";
import { MinorTitle } from "../Text";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import NavButton from "./NavButton";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: nav;
  width: 100%;
`;

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TextShadow = styled(MinorTitle)`
  filter: drop-shadow(0.5px 0.5px 1px #4444dd);
`;
interface IState {
  lock: boolean;
}

class NavBar extends React.Component<{}, IState> {
  public state: IState = {
    lock: true
  };
  public render() {
    return (
      <Wrapper>
        <StartWrapper>
          <NavBarLink to="/">
            <Logo>
              {COMPANY} <RocketIcon size={32} title="rocket to the moon" />
            </Logo>
          </NavBarLink>
          <NavButton>
            <NavBarLink to="/tokensale">
              <MinorTitle>token sale</MinorTitle>
            </NavBarLink>
          </NavButton>
        </StartWrapper>
        <EndWrapper>
          <NavButton>
            <NavBarLink to="/about">
              <TextShadow>what are {TOKEN_NAME}?</TextShadow>
            </NavBarLink>
          </NavButton>
          <NavButton>
            <NavBarLink to="/team">
              <TextShadow>team</TextShadow>
            </NavBarLink>
          </NavButton>
          <NavButton>
            <NavBarLink to="/whitepaper">
              <MinorTitle>whitepaper</MinorTitle>
            </NavBarLink>
          </NavButton>
          <NavButton>
            <NavBarLink to="/roadmap">
              <MinorTitle>roadmap</MinorTitle>
            </NavBarLink>
          </NavButton>
        </EndWrapper>
      </Wrapper>
    );
  }
}

export default NavBar;
