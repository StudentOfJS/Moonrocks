import { debounce } from "lodash";
import * as React from "react";
import styled from "../../theme";
import Button from "../Button";

export const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em 0 0.5em 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  &::before {
    content: &#64;
    margin: 0 10px;
  }
`;
const StyledInputSpan = styled.span`
  display: inline-flex;
  align-items: center;
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

export default class InputWithSubmit extends React.Component<
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
        <Button onClick={this.handleSubmit}>{this.props.btnText}</Button>
      </StyledInputSpan>
    );
  }
}
