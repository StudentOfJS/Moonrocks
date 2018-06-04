import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mobileActions from '../../redux/actions'
import { IState } from '../../redux/model'
import styled from "../../theme"
import Div from '../Div'
const Container = styled(Div) `
  @media (min-width: 500px) {
    display: none;
  }
  display: inline-block;
  cursor: pointer;
  z-index: 201;
  top: 0;
  left: 0;
  padding: 10px;
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

interface IDispatchProps {
  onOpen: () => void
  onClose: () => void
}

type Props = IState & IDispatchProps


const MobileNavBurger: React.SFC<Props> = ({ onOpen, onClose, openMobileMenu }) => {
  return openMobileMenu
    ? (<div onClick={onOpen}><Container><Bar /><Bar /><Bar /></Container></div>)
    : (<div onClick={onClose}><Container><Bar1 /><Bar2 /><Bar3 /></Container></div>)
}

const mapStateToProps = (state: IState, props: Props) => ({
  openMobileMenu: state.openMobileMenu,
})

const mapDispatchToProps = (dispatch: Dispatch, props: Props) => bindActionCreators({
  onClose: mobileActions.closeMobileMenu,
  onOpen: mobileActions.openMobileMenu,
}, dispatch)

export default connect<IState, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavBurger)