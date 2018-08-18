import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

interface IButtonProps {
  className?: string;
  type?: string;
  theme: IThemeInterface;
  disabled?: boolean;
  onClick?: () => void;
}

export const NonStyledBtn: React.SFC<IButtonProps> = props => (
  <button
    type={props.type}
    className={props.className}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default styled(NonStyledBtn)`
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
