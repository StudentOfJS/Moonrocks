import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

interface IButtonProps {
  theme?: IThemeInterface;
  primary?: boolean;
  className?: string;
}

const Button: React.StatelessComponent<IButtonProps> = props => (
  <button className={props.className}>{props.children}</button>
);

export default styled(Button)`
  background: transparent;
  color: ${props => props.theme.secondaryColor};
  width: 180px;
  height: 60px;
  font-size: 1.1em;
  font-family: ${props => props.theme.fontFamily};
  border: 5px solid black;
  border-radius: 10px;
  transition: transform 800ms ease-in-out;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
  }
`;
