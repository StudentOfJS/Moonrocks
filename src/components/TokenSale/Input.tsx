import * as React from "react";
import {
  BaseFieldProps,
  GenericFieldHTMLAttributes,
  WrappedFieldProps
} from "redux-form";
import styled, { IThemeInterface } from "../../theme";
import ErrorInputSpan from "./ErrorInputSpan";
import FieldDiv from "./FieldDiv";

interface InputProps {
  className?: string;
  theme: IThemeInterface;
}

const I: React.SFC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = props => <input className={props.className} {...props} />;

const StyledInput = styled(I)`
  border: ${props => props.theme.primaryTextColor + " 1px solid"};
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 20px;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
`;

const Input = (
  field: BaseFieldProps & WrappedFieldProps & GenericFieldHTMLAttributes
) => (
  <FieldDiv>
    <label htmlFor={field.name}>{field.label}</label>
    {field.meta.touched &&
      field.meta.error && <ErrorInputSpan>{field.meta.error}</ErrorInputSpan>}
    <StyledInput type="text" name={field.name} {...field.input} />
  </FieldDiv>
);

export default Input;
