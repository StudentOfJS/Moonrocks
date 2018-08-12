import styled, { keyframes } from "../../theme";
import Div from "../Div";

const flyCycle = keyframes`
  0% {
    transform: scale(0.1) translate3d(-100%, -10%, 0);
    filter: blur(500px) saturate(0);
  }
  25% {
    transform: scale(0.5) rotate(360deg);
    filter: blur(80px) saturate(1);
  }
  50% {
    transform: scale(2.5) rotate(720deg);
    filter: blur(0.5px) saturate(3);
  }
  55% {
    transform: scale(2.5) rotate(720deg);
    filter: blur(0.5px) saturate(3);
  }
  60% {
    transform: scale(2.5) rotate(720deg);
    filter: blur(0.5px) saturate(3);
  }
  75% {
    transform: scale(2);
    filter: blur(1px) saturate(2.5);
  }
  97% {
    transform: scale(1);
    filter: blur(6px) saturate(2);
  }
  98% {
    transform: scale(1);
    filter: blur(2px) saturate(2);
  }
  99% {
    transform: scale(1);
    filter: blur(6px) saturate(1.5);
  }
  100% {
    transform: scale(0.8);
    filter: blur(1px) saturate(1);
  }

`;

export default styled(Div)`
  @media (max-width: 500px) {
    display: none;
  }
  @media (min-width: 500px) {
    width: 20%;
    animation-name: ${flyCycle};
    display: flex;
    justify-content: flex-start;
    animation-timing-function: linear;
    animation-duration: 5s;
    transform: scale(0.8);
    filter: blur(1px) saturate(1);
  }
`;
