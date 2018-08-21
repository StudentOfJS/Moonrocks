import rocket from "../../images/rocket.svg";
import styled from "../../theme";

export const Column = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  color: ${props => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 800px;
  width: 100%;
`;

export const Row = styled.div`
  align-items: space-between;
  color: ${props => props.theme.secondaryColor};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  padding-bottom: 20px;
  width: 100%;
`;

export const List = styled.ul`
  color: ${props => props.theme.secondaryColor};
`;
export const ListItem = styled.li`
  color: ${props => props.theme.secondaryColor};
  list-style-image: url(${rocket});
  list-style-type: circle;
`;

export const ChartDiv = styled.div`
  height: 300px;
  width: 400px;
`;
