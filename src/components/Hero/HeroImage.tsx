import styled, { keyframes } from "../../theme"
import Div from '../Div'



const flyCycle = keyframes`
  0% {
    transform: scale(0.1) translate3d(-100%, -10%, 0);
    filter: blur(500px) saturate(0) invert(100%);
  }
  25% {
    transform: scale(0.5) rotate(360deg);
    filter: blur(80px) saturate(1) invert(100%);
  }
  50% {
    transform: scale(2.5) rotate(720deg);
    filter: blur(0px) saturate(4) invert(100%);
  }
  75% {
    transform: scale(2);
    filter: blur(1px) saturate(3.5) invert(100%);
  }
  100% {
    transform: scale(1);
    filter: blur(4px) saturate(3) invert(100%);
  }

`


export default styled(Div) `
  animation-name: ${flyCycle};
  animation-timing-function: linear;
  animation-duration: 20s;
  filter: blur(4px) saturate(3) invert(100%);
`