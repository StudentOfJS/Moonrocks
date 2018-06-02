import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled, { keyframes } from 'styled-components';
import { IThemeInterface } from '../../theme';

const slideupin = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

const slideupout = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`

const Container = styled.section`
height: 100vh;

&.enter {
    animation-name: ${slideupin};
    animation-duration: 2s;
}

&.leave {
  animation-name: ${slideupout};
  animation-duration: 2s;
}`;

interface IProps {
  theme?: IThemeInterface;
  className?: string;
}

const Transition: React.StatelessComponent<IProps> = props => (
  <ReactCSSTransitionGroup
    transitionName={{
      enter: 'enter',
      leave: 'leave'
    }}
  >
    <Container>
      {props.children}
    </Container>
  </ReactCSSTransitionGroup>
)

export default Transition