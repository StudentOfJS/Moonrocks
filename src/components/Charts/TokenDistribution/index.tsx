import * as React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import styled from "../../../theme";
import { MinorTitle } from "../../Text";

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const options = {
  animation: {
    animateRotate: true
  },
  circumference: 400,
  title: {
    fullWidth: false
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
      backgroundColor: ["#E51C7F", "#FFD052", "#008CC3"],
      data: [10, 40, 50],
      hoverBackgroundColor: ["#FF4B68", "#F9F871", "#008D8B"]
    }
  ],
  labels: ["Marketing", "Development", "Community Fund"],
  options
};

export default () => {
  return (
    <Row>
      <Column>
        <MinorTitle>Token Sale Allocation %</MinorTitle>
        <Doughnut data={saleData} />
      </Column>
      <Column>
        <MinorTitle>Fund Distribution %</MinorTitle>
        <Pie data={distData} />
      </Column>
    </Row>
  );
};
