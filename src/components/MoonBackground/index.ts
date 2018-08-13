import moon from "../../images/moon.png";
import styled, { keyframes } from "../../theme";

const shooting = keyframes`
{

  0% {
    transform: translate3d(100px,0px,0px) rotate(160deg);
  }

  3% {
    transform:
    translate3d(450px,900px,0) rotate(160deg);
    opacity: 0;
  }
  100% {
    transform:
    translate3d(450px,900px,0) rotate(160deg);
    opacity: 0;
  }
}
`;

const shooting2 = keyframes`
{
  0% {
    transform:translate3d(100px,0,0) rotate(130deg);
  }
  
  15% {
    transform:translate3d(800px,580px,0) rotate(130deg);
    opacity: 0;
  }
  
  100% {
    transform: translate3d(800px,680px,0) rotate(180deg);
    opacity: 0;
  }
}
`;

const shooting3 = keyframes`
{
  0% {
    transform: translate3d(0,0,0) rotate(150deg);
  }
  
  10% {
    transform: translate3d(430px,640px,0) rotate(150deg);
    opacity: 0;
  }
  
  100% {
    transform: translate3d(430px,640px,0) rotate(150deg);
    opacity: 0;
  }
}
`;

export const MoonBackground = styled.div`
  align-items: center;
  background-color: black;
  background-image: url(${moon});
  background-position: left top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 100px 5px;
  justify-content: center;
  width: 100%;
  i {
    display: inline-block;
    width: 250px;
    height: 150px;
    position: absolute;
    border-radius: 5% 40% 70%;
    box-shadow: inset 0px 0px 1px yellow;
    border: 1px solid #333;
    background-color: #fff;
    opacity: 0.7;
    animation: ${shooting} 10s 0s infinite;
    animation-timing-function: ease-in;
    animation-delay: -3s;
  }
  i:nth-child(1) {
    left: 100vw;
    height: 73px;
    width: 3px;
    background-color: #fff;
  }
  i:nth-child(2) {
    animation: ${shooting2} 6s 1s infinite;
    animation-delay: -3s;
    left: 30vw;
    height: 70px;
    width: 4px;
    background-color: #fff;
  }
  i:nth-child(3) {
    height: 11px;
    width: 3px;
    animation-delay: -3s;
    animation: ${shooting3} 8s 3s infinite;
    left: 10vw;
    background-color: #fff;
  }
`;
