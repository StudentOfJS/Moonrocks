import * as React from "react";
import { Pie } from "react-chartjs-2";
import LazyLoad from "react-lazyload";
import { MinorTitle, Paragraph } from "../../Text";
import { ChartDiv, Column, List, ListItem, Row } from "../style";

const options = {
  animation: {
    animateRotate: true
  },
  circumference: 300
};

const distData = {
  datasets: [
    {
      backgroundColor: ["#E51C7F", "#FFD052", "#008CC3", "#488900"],
      data: [10, 35, 15, 40],
      hoverBackgroundColor: ["#FF4B68", "#F9F871", "#008D8B", "#009000"]
    }
  ],
  labels: ["Marketing", "Development", "Legal", "Community Fund"],
  options
};

export default () => {
  return (
    <Column>
      <MinorTitle>Fund Distribution %</MinorTitle>
      <Row>
        <LazyLoad once={true} offset={1} height={300}>
          <ChartDiv>
            <Pie data={distData} />
          </ChartDiv>
        </LazyLoad>
        <List>
          <ListItem>
            <Paragraph>10% Year one Marketing Budget</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>35% Development</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>15% reserved for Legal</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>15% building self-governing community</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>10% reserved for community events</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>25% community controlled after the first year</Paragraph>
          </ListItem>
        </List>
      </Row>
    </Column>
  );
};
