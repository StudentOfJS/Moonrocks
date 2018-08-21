import * as React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from "../../theme";
// import Div from "../Div";
import { FatRocketIcon } from "../icons";
import { MinorTitle } from "../Text";

const preLaunch = keyframes`
{
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
`;

const RocketDiv = styled.div`
  align-self: flex-end;
  background: transparent;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  width: 95%
  z-index: 1;
  &:hover {
    animation: ${preLaunch} 0.5s linear infinite both;
    cursor: pointer;
  }
`;

export interface IRocketProps {
  launch: boolean;
}

const Rocket: React.SFC<IRocketProps> = ({ launch }) => (
  <RocketDiv>
    <MinorTitle>
      <FatRocketIcon size={32} color={launch ? "tomato" : "white"} /> Top
    </MinorTitle>
  </RocketDiv>
);

export interface IState {
  launch: boolean;
}

export interface IScrollProps {
  delay: number;
  duration: number;
  smooth: boolean;
}

export default class FooterBar extends React.Component<{}, IState> {
  public state = {
    launch: false
  };
  public launchRocket = () => {
    this.setState({ launch: true });
    scroll.scrollToTop({
      delay: 700,
      duration: 1000,
      smooth: true
    });
    setTimeout(() => this.setState({ launch: false }), 1700);
  };
  public render() {
    return (
      <a onClick={this.launchRocket}>
        <Rocket {...this.state} />
      </a>
    );
  }
}
