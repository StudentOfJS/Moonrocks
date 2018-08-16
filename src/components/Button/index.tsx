import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

interface IButtonProps {
  theme?: IThemeInterface;
  primary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

const Button: React.StatelessComponent<IButtonProps> = props => (
  <button onClick={props.onClick} className={props.className}>
    {props.children}
  </button>
);

export default styled(Button)`
  background: transparent;
  color: ${props => props.theme.primaryColor};
  width: 180px;
  height: 60px;
  font-size: 1.1em;
  font-family: ${props => props.theme.fontFamily};
  border: 5px solid white;
  border-radius: 10px;
  transition: transform 800ms ease-in-out;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
  }
`;
