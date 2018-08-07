import * as React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import rocket from "../../../images/rocket.svg";
import styled from "../../../theme";
import { MinorTitle, Paragraph, SubTitle } from "../../Text";

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 540px;
  justify-content: center;
  width: 100%;
`;

const List = styled.ul`
  padding-top: 40px;
`;
const ListItem = styled.li`
  list-style-image: url(${rocket});
  list-style-type: circle;
`;

const ChartDiv = styled.div`
  height: 500px;
  padding-top: 40px;
  width: 500px;
`;

const options = {
  animation: {
    animateRotate: true
  }
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
      <SubTitle>Token Sale Details</SubTitle>
      <MinorTitle>Token Sale Allocation %</MinorTitle>
      <Row>
        <List>
          <ListItem>
            <Paragraph>19m tokens will be premined for sale.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>9.5m tokens available for the Public Sale</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>50% of tokens for Public</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              15% Early backers reserve released after 6 months
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              15% Early backers reserve released after 24 months
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              5% Early backers reserve released after 48 months
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>5% released to Team </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>5% Team reserve released after 1 year</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>5% Team reserve released after 3 years</Paragraph>
          </ListItem>
        </List>
        <ChartDiv>
          <Doughnut data={saleData} />
        </ChartDiv>
      </Row>
      <MinorTitle>Fund Distribution %</MinorTitle>
      <Row>
        <ChartDiv>
          <Pie data={distData} />
        </ChartDiv>
        <List>
          <ListItem>
            <Paragraph>10% of funds will be spent on Marketing</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Year one Marketing budget will be allocated 7%
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Development will be allocated 10% of funds p/a for 4 years
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>15% will be used for Legal</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              15% will be assigned to building a self-governing community
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>10% will be reserved for community events</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              25% will be placed under community control after the first year
            </Paragraph>
          </ListItem>
        </List>
      </Row>
    </Column>
  );
};
