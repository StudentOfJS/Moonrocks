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
  background: transparent;
  color: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
  max-width: 160px;
  font-size: 1.1em;
  font-family: ${props => props.theme.fontFamily};
  padding: 0.4em 1em;
  border: 2px solid ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
  border-radius: 5px;
  transition: transform 800ms ease-in-out;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
    color: ${props => props.theme.transparent ? props.theme.secondaryColor : props.theme.primaryColor};
    border: 2px solid ${props => props.theme.transparent ? props.theme.secondaryColor : props.theme.primaryColor};
  }
`