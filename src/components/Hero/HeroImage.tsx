import styled, { keyframes } from "../../theme";

const float = keyframes`
{
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(10px, -10px);
  }
  40% {
    transform: translate(10px, 10px);
  }
  60% {
    transform: translate(-10px, 10px);
  }
  80% {
    transform: translate(-10px, -10px);
  }
  100% {
    transform: translate(0);
  }
}


`;

export default styled.img`
   {
    animation: ${float} 3s linear 20s both;
  }
`;
