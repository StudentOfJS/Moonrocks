import * as React from "react";
import { Link } from "react-router-dom";
import styled from "../../theme";
import { MinorTitle, Paragraph } from "../Text";
import Skills, { ISkill } from "./Skills";
import TeamSocial, { ITeamSocialProps } from "./TeamSocial";

const TeamAvatar = styled.img`
  border-radius: 100%;
  height: 80px;
  width: 80px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;
  width: 100%;
`;

const MemberDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const MemberDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

interface IProfile {
  bio: string;
  image: string;
  page: string;
}

interface ITeamMemberProps {
  profile: IProfile;
  name: string;
  social: ITeamSocialProps;
  skills: ISkill[];
  title: string;
}

const TeamMember: React.SFC<ITeamMemberProps> = ({
  name,
  title,
  profile: { bio, image, page },
  social: { exercism, github, twitter },
  skills
}) => (
  <Row>
    <MemberDiv>
      <TeamAvatar src={image} alt={`${name} - ${title} mugshot`} />
      <MemberDetails>
        <MinorTitle>{name}</MinorTitle>
        <TeamSocial exercism={exercism} github={github} twitter={twitter} />
        <MinorTitle style={{ color: "yellow" }}>{title}</MinorTitle>
      </MemberDetails>
    </MemberDiv>
    <Paragraph>
      {bio}
      <Link to={page}>...read more</Link>
    </Paragraph>
    <Skills skills={skills} />
  </Row>
);

export default TeamMember;
