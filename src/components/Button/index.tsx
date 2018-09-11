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
  font-size: 1em;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
  border: 3px solid white;
  border-radius: 10px;
  outline: none;
  padding: 10px 20px;
  transition: transform 800ms ease-in-out;
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: ${props => props.theme.primaryColor};
    color: black;
  }
`;
