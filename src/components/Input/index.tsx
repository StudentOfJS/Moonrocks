import { debounce } from "lodash";
import * as React from "react";
import styled from "../../theme";
import Button from "../Button";

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  &::before {
    content: &#64;
    margin: 0 10px;
  }
`;

interface ISignupProps {
  placeholder: string;
  submit: (value: string) => void;
  type: string;
}
interface IState {
  value: string;
}

export default class Input extends React.Component<ISignupProps, IState> {
  public state = {
    value: ""
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  public render() {
    return (
      // tslint:disable-next-line:jsx-no-lambda
      <form onSubmit={() => this.props.submit(this.state.value)}>
        <StyledInput
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={debounce(this.handleChange, 1000)}
        />
        <Button />
      </form>
    );
  }
}
