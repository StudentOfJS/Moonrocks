import * as React from "react";
import { COMPANY, TOKEN_NAME } from "../../constants";
import { Paragraph, Title } from "../Text";

export default () => {
  return (
    <React.Fragment>
      <Title>What is {COMPANY}</Title>
      <Paragraph style={{ color: "yellow" }}>
        one small step for blockchain, one giant leap for mankind
      </Paragraph>
      <Paragraph>
        {COMPANY} is knocking Buzz Aldrin out the way to secure your realestate
        rights on the moon.
      </Paragraph>
      <Paragraph>
        {TOKEN_NAME} will fuel our rocket and provide you with part ownership
        for our little rock in the sky. Built utilizing the blockchain, this
        technological breakthrough provides the first completely safe,
        transparent and immutable way to secure realestate on the moon.
      </Paragraph>
    </React.Fragment>
  );
};
