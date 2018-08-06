import moon from "../../images/moon.png";
import styled, { keyframes } from "../../theme";

const showerAnimation = keyframes`
{
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 100%;
    filter: blur(0);
    opacity: 1;
  }
}
`;

export const Shower = styled.div`
  animation: ${showerAnimation} 0.5s cubic-bezier(0.23, 1, 0.32, 1) infinite
    both;
  background: white;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  height: 50px;
  position: absolute;
  width: 1px;
`;

export const MoonBackground = styled.div`
  align-items: center;
  background-color: black;
  background-image: url(${moon});
  background-position: left top;
  background-repeat: no-repeat;
  color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
