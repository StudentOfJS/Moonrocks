import styled from "../../theme"
import Div from '../Div'

export default styled(Div) `
  border-top: 2px solid ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
  height: 25px;
  width: 30px;
  box-sizing: border-box;

  left: 20px;
  top: 15px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -khtml-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  @before {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 30px;
    left: 0;
    background: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
    top: 10px;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
  @after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 30px;
    left: 0;
    background: ${props => props.theme.transparent ? props.theme.primaryColor : props.theme.secondaryColor};
    bottom: 0;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -khtml-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
`
