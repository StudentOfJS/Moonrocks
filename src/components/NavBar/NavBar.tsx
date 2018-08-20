import * as React from "react";
import { animateScroll as scroll } from "react-scroll";
import { COMPANY, TOKEN_NAME } from "../../constants";
import styled from "../../theme";
import { RocketIcon } from "../icons";
import { MinorTitle } from "../Text";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import NavButton from "./NavButton";
import ScrollLink, { ScrollA } from "./ScrollLink";

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

interface IOptions {
  duration: number;
  offset: number;
  smooth: boolean;
  spy: boolean;
}
interface IState {
  lock: boolean;
  options: IOptions;
}

class NavBar extends React.Component<{}, IState> {
  public state: IState = {
    lock: true,
    options: {
      duration: 500,
      offset: 1,
      smooth: true,
      spy: true
    }
  };
  public scrollTop = () => scroll.scrollToTop();
  public render() {
    return (
      <Wrapper>
        <StartWrapper>
          <ScrollA onClick={this.scrollTop}>
            <Logo>
              {COMPANY} <RocketIcon size={32} title="rocket to the moon" />
            </Logo>
          </ScrollA>
          <ScrollLink to="tokensale" {...this.state.options}>
            <MinorTitle>token sale</MinorTitle>
          </ScrollLink>
        </StartWrapper>
        <EndWrapper>
          <ScrollLink to="about" {...this.state.options}>
            <TextShadow>what are {TOKEN_NAME}?</TextShadow>
          </ScrollLink>
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
          <ScrollLink to="roadmap" {...this.state.options}>
            <MinorTitle>roadmap</MinorTitle>
          </ScrollLink>
        </EndWrapper>
      </Wrapper>
    );
  }
}

export default NavBar;
