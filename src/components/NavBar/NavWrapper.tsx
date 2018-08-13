import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

export interface INavProps {
  theme?: IThemeInterface;
  className?: string;
}

export const Nav: React.StatelessComponent<INavProps> = props => (
  <nav className={props.className}>{props.children}</nav>
);

export default styled(Nav)`
  @media (max-width: 500px) {
    display: none;
  }
  @media (min-width: 500px) {
    top: 0;
    position: fixed;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 500;
    width: 100%;
    padding: 10px;
    color: ${props =>
      props.theme.transparent
        ? props.theme.primaryColor
        : props.theme.secondaryColor};
    font-family: ${props => props.theme.fontFamily};
    background-color: rgba(0, 0, 0, 0.3);
    transition: background 300ms ease-out;
  }
`;
