import * as React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "../../../theme";
import { HandPointLeftIcon } from "../../icons";
import { Nav } from "../NavWrapper";

const Wrapper = styled(Nav)`
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    top: 0;
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 200;
    filter: drop-shadow(1px 1px 1px #4444dd);
    color: ${props => props.theme.secondaryColor};
    font-family: ${props => props.theme.fontFamily};
    background: transparent;
  }
`;

const animatehand = keyframes`
{
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}
`;

const BackHand = styled(HandPointLeftIcon)`
  &:hover {
    animation: shake-horizontal 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) both;
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
        <Link to="/">
          <BackHand size="54px" />
        </Link>
      </Wrapper>
    );
  }
}
