import styled from "../../theme"
import Div from "../Div";

export default styled(Div) `
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: content;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.gradient};
  overflow: hidden;
`