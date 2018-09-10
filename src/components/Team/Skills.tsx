import * as React from "react";
import CircularProgressbar from "react-circular-progressbar";
import styled from "../../theme";

import "react-circular-progressbar/dist/styles.css";

const Skill = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  padding: 20px;
`;

const SkillsWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

const SkillLabel = styled.p`
  color: ${props => props.color};
  font-family: "Roboto", sans-serif;
  font-size: 1em;
`;

export interface ISkill {
  color: string;
  label: string;
  percent: number;
}

interface ISkillsProps {
  skills: ISkill[];
}

const Skills: React.SFC<ISkillsProps> = ({ skills }) => (
  <SkillsWrap>
    {skills.map(skill => (
      <Skill>
        <SkillLabel color={skill.color}>{skill.label}</SkillLabel>
        <CircularProgressbar
          percentage={skill.percent}
          text={`${skill.percent}%`}
          styles={{
            path: { stroke: skill.color },
            root: {
              height: 100,
              width: 100
            },
            text: {
              fill: skill.color,
              fontFamily: '"Roboto", sans-serif',
              fontSize: "30px"
            }
          }}
        />
      </Skill>
    ))}
  </SkillsWrap>
);

export default Skills;
