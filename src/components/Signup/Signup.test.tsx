import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import Signup, { StyledInput } from ".";
import Button from "../Button";

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(
    <Signup
      placeholder="test"
      type="text"
      // tslint:disable-next-line:jsx-no-lambda
      submit={v => null}
      btnText="test"
    />
  );
});

describe("input component", () => {
  it("should render 1 input", () => {
    expect(wrapped.find(StyledInput)).toHaveLength(1);
  });

  it("should render 1 button", () => {
    expect(wrapped.find(Button)).toHaveLength(1);
  });

  it("simulates click events", () => {
    const onButtonClick = sinon.spy();
    wrapped.find("button").simulate("click");
    expect(onButtonClick).toHaveProperty("callCount", 1);
  });
});
