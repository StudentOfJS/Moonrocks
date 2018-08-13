import * as React from "react";
import { Pie } from "react-chartjs-2";
import LazyLoad from "react-lazyload";
import rocket from "../../../images/rocket.svg";
import styled from "../../../theme";
import { MinorTitle, Paragraph } from "../../Text";

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Row = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  padding-bottom: 20px;
  width: 100%;
`;

const List = styled.ul``;
const ListItem = styled.li`
  list-style-image: url(${rocket});
  list-style-type: circle;
`;

const ChartDiv = styled.div`
  height: 300px;
  width: 400px;
`;

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
