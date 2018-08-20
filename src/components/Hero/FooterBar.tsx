import * as React from "react";
import styled, { keyframes } from "../../theme";
import Div from "../Div";
import { RocketIcon } from "../icons";

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
const liftOff = keyframes`
{
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  5% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  10% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  15% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  20% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  25% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  30% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  35% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  45% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  50% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
}
`;

const RocketDiv = styled.div`
  &:hover {
    animation: ${preLaunch} 0.5s linear infinite both;
    cursor: pointer;
  }
`;

const RocketLaunchDiv = styled.div`
  animation: ${liftOff} 0.7s ease-in both;
`;

const Bar = styled(Div)`
  align-items: center;
  background: transparent;
  display: flex;
  height: 80px;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 200;
`;

export interface IRocketProps {
  launch: boolean;
  top: boolean;
}

const Rocket: React.SFC<IRocketProps> = ({ launch, top }) => {
  if (top) {
    return <div />;
  }
  if (launch) {
    return (
      <RocketLaunchDiv>
        <RocketIcon />
      </RocketLaunchDiv>
    );
  }
  return (
    <RocketDiv>
      <RocketIcon />
    </RocketDiv>
  );
};

export interface IState {
  launch: boolean;
  top: boolean;
}

export interface IScrollProps {
  delay: number;
  duration: number;
  smooth: boolean;
}

export interface IFooterBarProps {
  scrollToTop: (options: IScrollProps) => void;
  top: boolean;
}

export default class FooterBar extends React.Component<
  IFooterBarProps,
  IState
> {
  public state = {
    launch: false,
    top: this.props.top
  };
  public launchRocket = () => {
    this.setState({ launch: true });
    this.props.scrollToTop({
      delay: 700,
      duration: 1500,
      smooth: true
    });
  };
  public render() {
    return (
      <Bar>
        <a onClick={this.launchRocket}>
          <Rocket {...this.state} />
        </a>
      </Bar>
    );
  }
}
