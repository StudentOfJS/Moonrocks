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
  background: ${props => props.theme.transparent ? props.theme.secondaryColor : props.theme.primaryColor};
  color: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
  max-width: 160px;
  font-size: 1.1em;
  font-family: ${props => props.theme.fontFamily};
  border: none;
  margin-right: 10px;
  margin-top 5px;
  transition: 300ms ease-in;
  &:hover {
    transition: 300ms ease-out;
    cursor: pointer;
    box-shadow: 0 4px ${props => props.theme.secondaryColor} inset;
  }
`