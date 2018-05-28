import * as React from "react"
import styled, { IThemeInterface, keyframes } from "../../theme"


const tada = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

interface ILogoProps {
  theme?: IThemeInterface;
  className?: string;
}

const Box: React.StatelessComponent<ILogoProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);


export default styled(Box) `
  display: inline-flex;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  color: ${props => props.theme.secondaryColor};
  border: solid 3px ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};;
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.transparent ? props.theme.secondaryColor : props.theme.primaryColor};
  &:hover {
    animation: ${tada} 1s;
  }
`