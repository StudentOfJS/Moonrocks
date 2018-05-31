import styled, { keyframes } from "../../theme"


const flicker = keyframes`
  0% {
    opacity: 0.6;
  }
  48% {
    opacity: 0.6;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  52% {
    opacity: 0;
  }
  53% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.6;
  }

`


export default styled.div`
  z-index: 100;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: black;
  opacity: 0.6;
  grid-area: content;
  animation-name: ${flicker};
  animation-timing-function: linear;
  animation-duration: 10s;
`
