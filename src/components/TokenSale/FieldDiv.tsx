import * as React from "react";
import styled, { IThemeInterface } from "../../theme";

interface IFieldProps {
  className?: string;
  theme: IThemeInterface;
}

const FieldDiv: React.SFC<IFieldProps> = props => (
  <div className={props.className}>{props.children}</div>
);

export default styled(FieldDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: "flex-start";
  color: ${props => props.theme.primaryColor};
  font-size: 24px;
`;
