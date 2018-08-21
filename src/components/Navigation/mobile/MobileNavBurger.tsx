import * as React from 'react'
import styled from "../../../theme"
import Div from '../../Div'
import { IMobileNavProps } from './MobileNav';

const Container = styled(Div) `
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: inline-block;
    cursor: pointer;
    z-index: 5000;
    top: 0;
    position: fixed;
    padding: 10px;
  }
`
const Bar = styled(Div) `
  width: 35px;
  height: 5px;
  background-color: ${props => props.theme.primaryColor};
  margin: 6px 0;
`
const Bar1 = Bar.extend`
  background-color: red;
  transform: rotate(-45deg) translate(-8px, 8px);
`
const Bar2 = Bar.extend`
  opacity: 0;
`
const Bar3 = Bar.extend`
  background-color: red;
  transform: rotate(45deg) translate(-8px, -8px);
`

const MobileNavBurger: React.SFC<IMobileNavProps> = ({ onClick, open }) => {
  return open
    ? (<div onClick={onClick}><Container><Bar1 /><Bar2 /><Bar3 /></Container></div>)
    : (<div onClick={onClick}><Container><Bar /><Bar /><Bar /></Container></div>)
}


export default MobileNavBurger