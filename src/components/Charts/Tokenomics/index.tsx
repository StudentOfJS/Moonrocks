import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import LazyLoad from "react-lazyload";
import rocket from "../../../images/rocket.svg";
import styled from "../../../theme";
import { MinorTitle, Paragraph, SubTitle } from "../../Text";

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
            <Paragraph>50% of tokens for Public 50%</Paragraph>
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
