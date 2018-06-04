import * as React from "react"
import styled, { IThemeInterface } from "../../theme"

interface INavProps {
  theme?: IThemeInterface;
  className?: string;
}

const Nav: React.StatelessComponent<INavProps> = props => (
  <nav className={props.className}>
    {props.children}
  </nav>
);


export default styled(Nav) `
  @media (min-width: 500px) {
    display: none;
  }
  top: 0;
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 200;
  width: 100%;
  padding: 10px;
  color: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
  font-family: ${props => props.theme.fontFamily};
  background: transparent;
`