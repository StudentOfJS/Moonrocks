import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

interface InputProps {
  className?: string;
  theme: IThemeInterface;
}

const I: React.SFC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = props => <input className={props.className} {...props} />;

const Input = styled(I)`
  border: ${props => props.theme.primaryColor + " 1px solid"};
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 20px;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
`;

export default Input;
