import * as React from 'react'
import { IThemeInterface } from '../../theme'

interface IProps {
  theme?: IThemeInterface;
  className?: string;
}

const Div: React.StatelessComponent<IProps> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

export default Div