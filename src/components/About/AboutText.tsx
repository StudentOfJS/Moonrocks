import * as React from "react";
import { COMPANY, TOKEN_NAME } from "../../constants";
import { RocketIcon } from "../icons";
import { MinorTitle, Paragraph, Title } from "../Text";

export default () => {
  return (
    <React.Fragment>
      <Title>What is {COMPANY}</Title>
      <MinorTitle style={{ color: "yellow" }}>
        one small step for blockchain, one giant leap for mankind
      </MinorTitle>
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
      <Paragraph>
        The surface of the moon comprises 38 million square kilometers, a little
        less than the continent of Asia.
        {TOKEN_NAME} represent one square kilometer of land each. This governs
        our tokenomics and means we can only ever have 38 million tokens in
        existence. We are selling plots for the discovered land (19m tokens),
        the darkside of the moon is still to be claimed!
      </Paragraph>

      <MinorTitle>
        Lunar discovery requires rockets{" "}
        <RocketIcon size={18} title="rocket to the moon" color={"yellow"} /> and
        rockets require fuel.
      </MinorTitle>
      <Paragraph>
        Rockets are required to transport exploration equipment and supplies to
        lunar exploration teams. Thankfully each plot of land on the visible
        side of the moon contains fuel reserves that can be mined. You can
        choose to join a lunar exploration team and start extracting your fuel.
        In exchange you will recieve a share of discovered blocks of land.
      </Paragraph>
    </React.Fragment>
  );
};
