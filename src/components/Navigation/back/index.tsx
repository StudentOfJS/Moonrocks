import * as React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "../../../theme";
import { HandPointLeftIcon } from "../../icons";
import { Nav } from "../NavWrapper";

const Wrapper = styled(Nav)`
  top: 0;
  padding: 60px;
  position: absolute;
  box-sizing: border-box;
  z-index: 2000;
`;

const animatehand = keyframes`
{
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}
`;

const BackHand = styled(HandPointLeftIcon)`
  &:hover {
    animation: ${animatehand} 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) both;
  }
`;

const ReturnHome: React.SFC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <BackHand size="54px" color="white" />
      </Link>
    </Wrapper>
  );
};

export default ReturnHome;
