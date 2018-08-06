import styled, { keyframes } from "../../theme";

const trackIn = keyframes`
  {
    0% {
      letter-spacing: 1em;
      transform: translateZ(400px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  font-weight: 800;
  animation: ${trackIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const SubTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  font-weight: 700;
  font-style: oblique;
  animation: ${trackIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const MinorTitle = styled.h3`
  font-size: 1.1em;
  font-weight: 500;
  text-align: center;
  animation: ${trackIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const Paragraph = styled.p`
  font-size: 1em;
  text-align: left;
  &:first-letter {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export { Title, SubTitle, MinorTitle, Paragraph };
