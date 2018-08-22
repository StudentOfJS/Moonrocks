import * as React from "react";
import styled from "../../../theme";
import { Nav } from "../NavWrapper";
import MobileNavBurger from "./MobileNavBurger";
import MobileNavDraw from "./MobileNavDraw";

const Wrapper = styled(Nav)`
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    top: 0;
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 2000;
    filter: drop-shadow(1px 1px 1px #4444dd);
    color: ${props => props.theme.secondaryColor};
    font-family: ${props => props.theme.fontFamily};
    background: transparent;
  }
`;
export interface IMobileNavProps {
  className?: string;
  style?: React.CSSProperties;
  leave?: () => void;
  onClick?: () => void;
  open: boolean;
  firstTime?: boolean;
}
export interface IMobileNavState {
  openMobileMenu: boolean;
  firstTime: boolean;
}

export default class MobileNav extends React.Component<any, IMobileNavState> {
  public state = {
    firstTime: true,
    openMobileMenu: false
  };
  public leave = () => this.setState({ openMobileMenu: false });
  public onClick = () =>
    this.setState(prevProps => ({
      firstTime: false,
      openMobileMenu: !prevProps.openMobileMenu
    }));
  public render() {
    return (
      <Wrapper>
        <MobileNavBurger
          open={this.state.openMobileMenu}
          onClick={this.onClick}
        />
        <MobileNavDraw
          open={this.state.openMobileMenu}
          leave={this.leave}
          firstTime={this.state.firstTime}
        />
      </Wrapper>
    );
  }
}
