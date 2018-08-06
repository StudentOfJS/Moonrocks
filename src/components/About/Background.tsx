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

const shower = styled.div`
  animation: slide-in-blurred-top 0.5s cubic-bezier(0.23, 1, 0.32, 1) infinite
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

const moonBackground = styled.div`
  background-image: url(${moon});
`;
