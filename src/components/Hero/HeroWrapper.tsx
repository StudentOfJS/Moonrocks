import * as React from "react"
import styled, { IThemeInterface } from "../../theme"




interface IHeroWrapperProps {
  theme?: IThemeInterface;
  className?: string;
}

const Hero: React.StatelessComponent<IHeroWrapperProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);


export default styled(Hero) `
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: hero;
  padding: 100px;
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.gradient};
`