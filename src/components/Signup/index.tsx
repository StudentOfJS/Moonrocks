import * as React from "react";
import { string, StringSchema } from "yup";
import styled from "../../theme";
import { NonStyledBtn } from "../Button";
import Input from "../Input/Input";

export const StyledInput = styled(Input)`
  color: palevioletred;
  box-shadow: inset 1px 1px 4px darkgrey;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    height: 40px;
    width: 100%;
  }
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
  margin: 0 20px;
  @media only screen and (max-width: 600px) {
    &:before {
      color: grey;
      font-size: 20px;
      content: "🚀 ";
      padding: 0 5px;
    }
    font-size: 18px;
    height: 40px;
    border: 2px solid white;
  }
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
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    height: 40px;
    width: 100px;
  }
`;

const Message = styled.label`
  background-color: white;
  border-radius: 8px;
  font-size: 1.5em;
  font-family: ${props => props.theme.fontFamily};
  margin-top: 5px;
  padding: 2px 10px;
`;

const ErrorMessage = styled(Message)`
  color: darkred;
`;

const SuccessMessage = styled(Message)`
  color: darkgrey;
`;

const SignupDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface ISignupProps {
  btnText: string;
  placeholder: string;
  type: string;
}
interface IState {
  error: string;
  schema: StringSchema;
  success: boolean;
  touched: boolean;
  value: string;
}

export default class Signup extends React.Component<ISignupProps, IState> {
  public state = {
    error: "",
    schema: string()
      .email()
      .required(),
    success: false,
    touched: false,
    value: ""
  };

  public handleChange = ({ target: { value } }: any) => {
    this.state.schema.isValidSync(this.state.value)
      ? this.setState({ error: "", value, touched: true })
      : this.setState({ error: "invalid email", value, touched: true });
  };

  public handleSubmit = () => {
    const data = {
      email: this.state.value
    };
    fetch("http://localhost:4000/api/tgenews", {
      body: JSON.stringify(data),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(response => {
        this.setState(prevProps => ({
          error: "",
          success: true,
          touched: false,
          value: ""
        }));
        this.resetSuccess();
      })
      .catch(err => {
        this.setState(prevProps => ({
          error: err.status,
          success: false,
          touched: false,
          value: ""
        }));
      });
  };

  public resetSuccess = () => {
    setTimeout(() => this.setState({ success: false }), 4000);
  };

  public render() {
    const { error, success, touched } = this.state;
    return (
      <SignupDiv>
        <StyledInputSpan>
          <StyledInput
            placeholder={this.props.placeholder}
            type={this.props.type}
            onChange={this.handleChange}
            value={this.state.value}
          />
          <SubmitButton
            onClick={this.handleSubmit}
            disabled={!touched || !!error}
          >
            {this.props.btnText}
          </SubmitButton>
        </StyledInputSpan>
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>Thanks for signing up</SuccessMessage>}
      </SignupDiv>
    );
  }
}
