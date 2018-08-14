import { Timeline } from "antd";
import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "../../theme";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import { MinorTitle, Title } from "../Text";

const InnerWrapper = styled(Div)`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: #292a2b;
  border-radius: 30px;
  overflow: hidden;
  padding: 20px;
  margin: 100px;
`;

export default () => {
  return (
    <MoonBackground>
      <Helmet>
        <title>Moonrock's Roadmap</title>
        <meta
          name="description"
          content="Find out more about Moonrock's roadmap"
        />
        <link rel="canonical" href="https://moonrocks.com/roadmap" />
      </Helmet>
      <InnerWrapper>
        <Title>Roadmap</Title>
        <Timeline mode="alternate">
          <Timeline.Item color="red">
            <MinorTitle>
              Start Development of Moon Rocks Platform October 2018
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="purple">
            <MinorTitle>Token Generation Event December 2018</MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="purple">
            <MinorTitle>
              Open lottery to public sale participants - unsold tokens airdrop
              January 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="purple">
            <MinorTitle>
              Airdrop tokens to lottery winners February 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="yellow">
            <MinorTitle>
              Start development of the community site and marketing campaign to
              engage community March 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item>
            <MinorTitle>
              Open voting to MRT holders on community development direction
              April 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item>
            <MinorTitle>Release beta community site May 2019</MinorTitle>
          </Timeline.Item>

          <Timeline.Item color="green">
            <MinorTitle>Release testnet June 2019</MinorTitle>
          </Timeline.Item>

          <Timeline.Item>
            <MinorTitle>Community site launch July 2019</MinorTitle>
          </Timeline.Item>
          <Timeline.Item>
            <MinorTitle>
              Community appointment of positions and allocation of community
              events fund August 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="yellow">
            <MinorTitle>
              Start of mainnet launch marketing campaign Sepetember 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item color="green">
            <MinorTitle>
              Mainnet launch and start of lunar exploration pools by community
              October 2019
            </MinorTitle>
          </Timeline.Item>
          <Timeline.Item>
            <MinorTitle>
              Community funds allocation released to community and all code open
              sourced November 2019
            </MinorTitle>
          </Timeline.Item>
        </Timeline>
      </InnerWrapper>
    </MoonBackground>
  );
};
