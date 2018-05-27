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
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  max-width: 160px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.secondaryColor};
  border-radius: 3px;
  transition: transform 800ms ease-in-out;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryColor};
  }
`