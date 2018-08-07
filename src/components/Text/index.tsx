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
  font-size: 5em;
  text-align: center;
  font-family: "Kirang Haerang", cursive;
  font-weight: 300;
  animation: ${trackIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const SubTitle = styled.h2`
  font-family: "Kirang Haerang", cursive;
  font-size: 2.3em;
  text-align: center;
  font-weight: 300;
  font-style: oblique;
  animation: ${trackIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const MinorTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.1em;
  font-weight: 500;
  padding: 0 20px;
  text-align: center;
  animation: ${trackIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  padding: 0 20px;
  text-align: left;
  &:first-letter {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export { Title, SubTitle, MinorTitle, Paragraph };
