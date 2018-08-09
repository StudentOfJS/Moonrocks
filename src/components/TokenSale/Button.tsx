import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

interface IButtonProps {
  className?: string;
  type: string;
  theme: IThemeInterface;
}

const Button: React.SFC<IButtonProps> = props => (
  <button type={props.type} className={props.className}>
    {props.children}
  </button>
);

export default styled(Button)`
  background: transparent;
  color: ${props => props.theme.primaryColor};
  max-width: 160px;
  font-size: 1.1em;
  font-family: ${props => props.theme.fontFamily};
  padding: 0.4em 1em;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 5px;
  transition: transform 800ms ease-in-out;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
  }
`;
