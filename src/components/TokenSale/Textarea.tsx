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

const T: React.SFC<
  InputProps & React.InputHTMLAttributes<HTMLTextAreaElement>
> = props => <textarea className={props.className} {...props} />;

const StyledTextarea = styled(T)`
  border: ${props => props.theme.primaryTextColor + " 1px solid"};
  font-size: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
`;

const Textarea = (
  field: BaseFieldProps & WrappedFieldProps & GenericFieldHTMLAttributes
) => (
  <FieldDiv>
    <label htmlFor={field.name}>{field.label}</label>
    {field.meta.touched &&
      field.meta.error && <ErrorInputSpan>{field.meta.error}</ErrorInputSpan>}
    <StyledTextarea type="text" name={field.name} {...field.input} />
  </FieldDiv>
);

export default Textarea;
