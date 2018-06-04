import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TOKEN_NAME } from "../../constants"
import * as mobileActions from '../../redux/actions'
import { IState } from '../../redux/model'
import styled from '../../theme'
import Div from '../Div'
import { MinorTitle } from '../Text'
import NavBarLink from './NavBarLink'
import NavButton from './NavButton'

const Draw = styled(Div) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 60%;
  background-color: black;
  opacity: 0.7;
  z-index: 200;
`

interface IDispatchProps {
  close: () => void
}

type Props = IState & IDispatchProps


const MobileNavDraw: React.SFC<Props> = ({ close, openMobileMenu }) =>
  openMobileMenu ? (
    <div onMouseLeave={close}>
      <Draw>
        <NavButton>
          <NavBarLink to="/tokensale" ><MinorTitle>token sale</MinorTitle></NavBarLink>
        </NavButton>
        <NavButton>
          <NavBarLink to="/about" ><MinorTitle>what are {TOKEN_NAME}?</MinorTitle></NavBarLink>
        </NavButton>
        <NavButton>
          <NavBarLink to="/team" ><MinorTitle>team</MinorTitle></NavBarLink>
        </NavButton>
        <NavButton>
          <NavBarLink to="/whitepaper" ><MinorTitle>whitepaper</MinorTitle></NavBarLink>
        </NavButton>
        <NavButton>
          <NavBarLink to="/roadmap" ><MinorTitle>roadmap</MinorTitle></NavBarLink>
        </NavButton>
      </Draw>
    </div>
  ) : (
      null
    )

const mapStateToProps = (state: IState, props: Props) => ({
  openMobileMenu: state.openMobileMenu,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  close: mobileActions.closeMobileMenu,
}, dispatch)

export default connect<IState, IDispatchProps>(mapStateToProps, mapDispatchToProps)(MobileNavDraw)