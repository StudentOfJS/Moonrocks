import { debounce } from "lodash";
import * as React from "react";
import styled from "../../theme";
import Input from "../Input/Input";

export const StyledInput = styled(Input)`
  color: palevioletred;
  box-shadow: inset 1px 1px 4px darkgrey;
`;
const StyledInputSpan = styled.span`
  &:before {
    color: grey;
    font-size: 52px;
    content: "🚀 ";
  }
  display: inline-flex;
  align-items: center;
  background: white;
  color: ${props => props.theme.primaryColor};
  height: 50px;
  border: 5px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 4px darkgrey;
`;

const SubmitButton = styled.button`
  background: grey;
  border-radius: 8px;
  margin-left: 5px;
  border: none;
  color: ${props => props.theme.primaryColor};
  width: 180px;
  height: 50px;
  font-size: 1.5em;
  font-family: ${props => props.theme.fontFamily};
  &:hover {
    cursor: pointer;
    color: grey;
    background: ${props => props.theme.primaryColor};
  }
`;

interface ISignupProps {
  btnText: string;
  placeholder: string;
  submit: (value: string) => void;
  type: string;
}
interface IState {
  value: string;
}

export default class Signup extends React.Component<
  ISignupProps,
  IState
> {
  public state = {
    value: ""
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  public handleSubmit = () => {
    this.props.submit(this.state.value);
  };

  public render() {
    return (
      <StyledInputSpan>
        <StyledInput
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={debounce(this.handleChange, 1000)}
        />
        <SubmitButton onClick={this.handleSubmit}>
          {this.props.btnText}
        </SubmitButton>
      </StyledInputSpan>
    );
  }
}
