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
  top: 0;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 500;
  width: 100%;
  padding: 10px;
  color: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.transparent ? props.theme.secondaryColor : 'transparent'};
  transition: background 300ms ease-out;
`