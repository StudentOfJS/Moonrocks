// import { debounce } from "lodash";
import * as React from "react";
import { string, StringSchema } from "yup";
import styled from "../../theme";
import { NonStyledBtn } from "../Button";
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

const SubmitButton = styled(NonStyledBtn)`
  background: ${props => (props.disabled ? props.theme.primaryColor : "grey")};
  border-radius: 8px;
  margin-left: 5px;
  border: none;
  color: ${props => (props.disabled ? "grey" : props.theme.primaryColor)};
  outline: none;
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

const ErrorMessage = styled.label`
  color: palevioletred;
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
`;

interface ISignupProps {
  btnText: string;
  placeholder: string;
  submit: (value: string) => void;
  type: string;
}
interface IState {
  error: string;
  schema: StringSchema;
  touched: boolean;
  value: string;
}

export default class Signup extends React.Component<ISignupProps, IState> {
  public state = {
    error: "",
    schema: string()
      .email()
      .required(),
    touched: false,
    value: ""
  };

  public handleChange = ({ target: { value } }: any) => {
    this.state.schema.isValidSync(this.state.value)
      ? this.setState({ error: "", value, touched: true })
      : this.setState({ error: "invalid email", value, touched: true });
  };

  public handleSubmit = () => {
    this.props.submit(this.state.value);
    this.setState(prevProps => ({
      error: "",
      touched: false,
      value: ""
    }));
  };
  public render() {
    const { error, touched } = this.state;
    return (
      <StyledInputSpan>
        <StyledInput
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.handleChange}
          value={this.state.value}
        />
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton
          onClick={this.handleSubmit}
          disabled={!touched || !!error}
        >
          {this.props.btnText}
        </SubmitButton>
      </StyledInputSpan>
    );
  }
}