import Input from ".";

it("Make sure inputted text is shorter than max length", () => {
  const result = mount(
    <Input
      placeholder="test"
      submit={value => console.log(value)}
      type="text"
    />
  );
  result
    .find("input")
    .simulate("change", { target: { value: "1234567890!!!" } });
  expect(result.state().value).to.equal("1234567890");
});
