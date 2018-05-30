import * as React from 'react'
import styled, { IThemeInterface, keyframes } from "../../theme"


const flyCycle = keyframes`
  0% {
    transform: translate3d(-100%, -10%, 0);
  }

  25% {
    transform: scale(1.1) translate3d(0, -15%, 20%);
  }
  40% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1.5) rotate(360deg);
  }
  100% {
    transform: translate3d(100%, -20%, 100%) scale(1) rotate(360deg);
  }

`

interface IHeroImageProps {
  theme?: IThemeInterface;
  className?: string;
}

const Box: React.StatelessComponent<IHeroImageProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);


export default styled(Box) `
  animation-name: ${flyCycle};
  animation-timing-function: steps(1000);
  animation-duration: 10s;
  animation-delay: -1s;
  transition: ease-in-out;
`