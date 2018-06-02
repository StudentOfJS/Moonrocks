import * as React from 'react'
import { connect } from 'react-redux'
import { openMobileMenu } from '../../redux/actions'
import { IStateMenu } from '../../redux/model'
import styled from "../../theme"
import Div from '../Div'
const Container = styled(Div) `
  display: inline-block;
  cursor: pointer;
`
const Bar = styled(Div) `
  width: 35px;
  height: 5px;
  background-color: ${props => props.theme.secondaryColor};
  margin: 6px 0;
  transition: 0.4s;
`
const Bar1 = Bar.extend`
  transform: rotate(-45deg) translate(-9px, 6px);
`
const Bar2 = Bar.extend`
  opacity: 0;
`
const Bar3 = Bar.extend`
  transform: rotate(45deg) translate(-8px, -8px);
`
export interface ISFCMenuProps {
  open: IStateMenu;
  onClick: () => ({ type: string; payload: true });
}

const MobileNavBurger: React.SFC<ISFCMenuProps> = (props) => {
  return open
    ? (<div onClick={onClick}><Container><Bar /><Bar /><Bar /></Container></div>)
    : (<div onClick={onClick}><Container><Bar1 /><Bar2 /><Bar3 /></Container></div>)
}

const mapStateToProps = (state: IStateMenu) => ({
  open: state.openMobileMenu,
});


export default connect(
  mapStateToProps,
  {
    onClick: openMobileMenu(!open)
  }
)(MobileNavBurger)