import { Link } from "react-scroll";
import styled from "../../theme";

export default styled(Link)`
  display: inline-flex;
  background: transparent;
  color: ${props => props.theme.primaryColor};
  max-width: 250px;
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  border: none;
  margin-right: 10px;
  margin-top 5px;
  transition: 200ms ease-in-out;
  &:hover {
    transition: 200ms ease-out-in;
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0 4px ${props => props.theme.accent} inset;
  }
`;
