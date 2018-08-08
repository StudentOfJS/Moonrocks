import { Icon, Timeline } from "antd";
import * as React from "react";
import styled from "../../theme";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import { MinorTitle, Title } from "../Text";

import "./index.css";

const InnerWrapper = styled(Div)`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 30px;
  overflow: hidden;
  padding: 20px;
  margin: 100px;
`;

export default () => {
  return (
    <MoonBackground>
      <InnerWrapper>
        <Title>Roadmap</Title>
        <Timeline mode="alternate">
          <Timeline.Item>
            <MinorTitle>Token Sale Event November 2018</MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="green">
            <MinorTitle>Create a services site 2015-09-01</MinorTitle>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
          >
            <MinorTitle>Create a services site 2015-09-01</MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="red">
            <MinorTitle>Create a services site 2015-09-01</MinorTitle>
          </Timeline.Item>
          <Timeline.Item>
            <MinorTitle>Create a services site 2015-09-01</MinorTitle>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
          >
            <MinorTitle>Create a services site 2015-09-01</MinorTitle>
          </Timeline.Item>
        </Timeline>,
      </InnerWrapper>
    </MoonBackground>
  );
};
