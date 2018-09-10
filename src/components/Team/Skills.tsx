import { Progress } from "antd";
import * as React from "react";
import styled from "../../theme";

const Skill = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
`;

const SkillLabel = styled.p``;

interface ISkill {
  color: string;
  label: string;
  percent: number;
}

interface ISkillsProps {
  skills: ISkill[];
}

const Skills: React.SFC<ISkillsProps> = ({ skills }) => (
  <div>
    {skills.map(skill => (
      <Skill>
        <Progress
          type="circle"
          strokeColor={skill.color}
          percent={skill.percent}
          width={60}
        />
      </Skill>
    ))}

    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>
);

export default Skills;
