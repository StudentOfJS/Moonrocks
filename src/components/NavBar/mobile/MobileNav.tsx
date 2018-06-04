import * as React from 'react'
import styled from "../../../theme"
import { Nav } from '../NavWrapper'
import MobileNavBurger from './MobileNavBurger'
import MobileNavDraw from './MobileNavDraw'



const Wrapper = styled(Nav) `
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    top: 0;
    position: fixed;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 200;
    width: 100%;
    height: 100vh;
    color: ${props => props.theme.secondaryColor};
    font-family: ${props => props.theme.fontFamily};
    background: transparent;
  }
`
export interface IMobileNavProps {
  className?: string
  style?: React.CSSProperties
  leave?: () => void
  onClick?: () => void
  open: boolean
}
export interface IMobileNavState {
  openMobileMenu: boolean
}

export default class MobileNav extends React.Component<any, IMobileNavState> {
  public state = {
    openMobileMenu: false
  }
  public leave = () => this.setState({ openMobileMenu: false })
  public onClick = () => this.setState(prevProps => ({ openMobileMenu: !prevProps.openMobileMenu }))
  public render() {
    return (
      <Wrapper>
        <MobileNavBurger open={this.state.openMobileMenu} onClick={this.onClick} />
        <MobileNavDraw open={this.state.openMobileMenu} leave={this.leave} />
      </Wrapper>
    );
  }
}

