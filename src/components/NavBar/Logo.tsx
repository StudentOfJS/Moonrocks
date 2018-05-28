import * as React from "react"
import styled, { IThemeInterface } from "../../theme"

interface ILogoProps {
  theme?: IThemeInterface;
  className?: string;
}

const Box: React.StatelessComponent<ILogoProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);


export default styled(Box) `
  height: 42px;
  padding: 2px;
  color: ${props => props.theme.secondaryColor};
  border-color: ${props => props.theme.secondaryColor};
  border-top-style: solid;
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.secondaryColor};
  transition: background 300ms ease-in;
`