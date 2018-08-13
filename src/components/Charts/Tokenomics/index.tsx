import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import LazyLoad from "react-lazyload";
import { MinorTitle, Paragraph, SubTitle } from "../../Text";
import { ChartDiv, Column, List, ListItem, Row } from "../style";

const options = {
  animation: {
    animateRotate: true
  },
  circumference: 300
};

const saleData = {
  datasets: [
    {
      backgroundColor: ["#E51C7F", "#FFD052", "#008CC3"],
      data: [15, 35, 50],
      hoverBackgroundColor: ["#FF4B68", "#F9F871", "#008D8B"]
    }
  ],
  labels: ["Team", "Seed Investors", "Public Sale"],
  options
};

export default () => {
  return (
    <Column>
      <SubTitle>Token Sale Details</SubTitle>
      <MinorTitle>Token Sale Allocation %</MinorTitle>
      <Row>
        <LazyLoad once={true} offset={1} height={300}>
          <ChartDiv>
            <Doughnut data={saleData} />
          </ChartDiv>
        </LazyLoad>
        <List>
          <ListItem>
            <Paragraph>19m tokens will be premined for sale</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>50% of tokens for Public Sale</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>35% for Early Investors</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>15% reserved for Team </Paragraph>
          </ListItem>
        </List>
      </Row>
    </Column>
  );
};
