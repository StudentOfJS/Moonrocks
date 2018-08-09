import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { sendForm } from "../../redux/actions";
import Button from "./Button";
import { countriesData } from "./countriesData";
import Form from "./Form";
import StyledDangerLink from "./StyledDangerLink";

export interface IForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  eth?: string;
  country?: string;
}

const C: React.SFC<any> = props => {
  return (
    <Form
      onSubmit={props.handleSubmit(async (values: IForm) => {
        await props.sendForm(values);
        props.history.push("/");
      })}
    >
      <Field name="country" component="select">
        <option />
        {countriesData.map(country => (
          <option key={country.key} value={country.value}>
            {country.title}
          </option>
        ))}
      </Field>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="eth">Ethereum Contribution Address</label>
        <Field
          name="eth"
          component="input"
          type="text"
          placeholder="Eth Address"
        />
      </div>
      <StyledDangerLink to="/">Cancel</StyledDangerLink>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const validate = (values: IForm) => {
  const errors: IForm = {};
  if (!values.firstName) {
    errors.firstName = "enter your first name";
  }
  if (values.firstName && values.firstName.length < 3) {
    errors.firstName = "enter a name that's at least 3 characters";
  }
  if (!values.lastName) {
    errors.lastName = "enter your last name";
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
