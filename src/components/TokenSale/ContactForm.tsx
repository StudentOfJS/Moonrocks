import { Select } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { sendForm } from "../../redux/actions";
import Button from "./Button";
import { countriesData } from "./countriesData";
import ErrorInputSpan from "./ErrorInputSpan";
import FieldDiv from "./FieldDiv";
import Form from "./Form";
import Input from "./Input";

const Option = Select.Option;

export interface IForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  eth?: string;
  country?: string;
}

const C: React.SFC<any> = props => {
  const { handleSubmit, history, pristine, reset, submitting } = props;
  return (
    <Form
      onSubmit={handleSubmit(async (values: IForm) => {
        await sendForm(values);
        history.push("/");
      })}
    >
      <Field
        name="country"
        component={renderSelectField}
        type="select"
        label="Country"
      />
      <FieldDiv>
        <Field
          name="firstName"
          component={renderField}
          type="text"
          label="First Name"
        />
      </FieldDiv>
      <FieldDiv>
        <Field
          name="lastName"
          component={renderField}
          type="text"
          label="Last Name"
        />
      </FieldDiv>
      <FieldDiv>
        <Field
          name="email"
          component={renderField}
          type="email"
          label="Email"
        />
      </FieldDiv>
      <FieldDiv>
        <Field
          name="eth"
          component={renderField}
          type="text"
          label="Eth Address"
        />
      </FieldDiv>
      <div>
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  );
};

// interface IrenderFieldProps {
//   input?: WrappedFieldInputProps;
//   label: string;
//   type: string;
//   meta: WrappedFieldMetaProps;
// }

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}: any) => (
  <div>
    <label>{label}</label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <ErrorInputSpan>{error}</ErrorInputSpan>) ||
          (warning && <ErrorInputSpan>{warning}</ErrorInputSpan>))}
    </div>
  </div>
);

const filterOptions = (inputValue: string, option: JSX.Element) =>
  option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}: any) => (
  <FieldDiv>
    <Select
      showSearch={true}
      style={{ width: 200 }}
      placeholder={label}
      optionFilterProp="country"
      // tslint:disable-next-line:jsx-no-lambda
      onChange={value => input.onChange(value)}
      filterOption={filterOptions}
    >
      {countriesData.map(country => (
        <Option key={country.key} value={country.value}>
          {country.title}
        </Option>
      ))}
    </Select>

    {touched && (error && <ErrorInputSpan>{error}</ErrorInputSpan>)}
  </FieldDiv>
);

const validate = (values: IForm) => {
  const errors: IForm = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (values.firstName && values.firstName.length < 3) {
    errors.firstName = "enter a name that's at least 3 characters";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (values.lastName && values.lastName.length < 3) {
    errors.lastName = "enter a name that's at least 3 characters";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.country) {
    errors.country = "select your country of residence";
  }
  if (values.country === "US") {
    errors.country = "Sorry US citizens are not permitted";
  }
  if (values.country === "CN") {
    errors.country = "Sorry CN citizens are not permitted";
  }

  return errors;
};

const CreatePost = reduxForm({
  form: "create_post",
  validate
})(C);

export default connect(
  null,
  { sendForm }
)(CreatePost);
