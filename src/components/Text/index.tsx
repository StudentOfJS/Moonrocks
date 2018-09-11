import styled from "../../theme";

const Title = styled.h1`
  text-align: center;
  font-family: "Kirang Haerang", cursive;
  font-weight: 300;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 3em;
  }
  @media only screen and (min-width: 600px) {
    font-size: 5em;
  }
`;
const SubTitle = styled.h2`
  font-family: "Kirang Haerang", cursive;
  font-size: 2.3em;
  text-align: center;
  font-weight: 300;
  font-style: oblique;
`;
const MinorTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.1em;
  padding: 0 20px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;
const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  padding: 0 20px;
  text-align: left;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export { Title, SubTitle, MinorTitle, Paragraph };
