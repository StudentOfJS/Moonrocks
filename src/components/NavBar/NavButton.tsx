import * as React from "react"
import styled, { IThemeInterface } from "../../theme"

interface IButtonProps {
  theme?: IThemeInterface;
  primary?: boolean;
  className?: string;
}

const Button: React.StatelessComponent<IButtonProps> = props => (
  <button className={props.className}>
    {props.children}
  </button>
);


export default styled(Button) `
  display: inline-flex;
  background: transparent;
  color: ${props => props.theme.primaryColor};
  max-width: 200px;
  font-size: 1.1em;
  font-family: ${props => props.theme.fontFamily};
  border: none;
  margin-right: 10px;
  margin-top 5px;
  transition: 200ms ease-in-out;
  &:hover {
    transition: 200ms ease-out-in;
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0 4px ${props => props.theme.secondaryColor} inset;
  }
`