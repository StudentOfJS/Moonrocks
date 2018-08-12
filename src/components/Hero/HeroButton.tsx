import styled, { keyframes } from "../../theme";

const pulse = keyframes`
{
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}

`;

export default styled.div`
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${pulse} 1.5s ease-in-out infinite both;
  }
`;
