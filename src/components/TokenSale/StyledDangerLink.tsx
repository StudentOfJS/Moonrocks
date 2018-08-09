import { Link } from "react-router-dom";
import styled from "../../theme";

export default styled(Link)`
  margin: 5px;
  background: transparent;
  color: ${props => props.theme.primaryHeaderColor};
  max-width: 160px;
  font-size: 1.1em;
  font-family: ${props => props.theme.contentFont};
  padding: 0.4em 1em;
  border: 2px solid ${props => props.theme.primaryHeaderColor};
  border-radius: 5px;
  transition: transform 800ms ease-in-out;
  text-decoration: none;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.primaryHeaderColor};
    color: ${props => props.theme.primaryTextColorInverted};
  }
`;
