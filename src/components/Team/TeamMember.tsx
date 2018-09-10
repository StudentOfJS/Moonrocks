import * as React from "react";
import { Link } from "react-router-dom";
import styled from "../../theme";
import { MinorTitle, Paragraph } from "../Text";
import TeamSocial, { ITeamSocialProps } from "./TeamSocial";

const TeamAvatar = styled.img`
  border-radius: 100%;
  height: 80px;
  width: 80px;
`;

const Row = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100px;
  justify-content: flex-start;
  padding: 40px;
  width: 320px;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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
  title: string;
}

const TeamMember: React.SFC<ITeamMemberProps> = ({
  name,
  title,
  profile: { bio, image, page },
  social: { exercism, github, twitter }
}) => (
  <Row>
    <TeamAvatar src={image} alt={`${name} - ${title} mugshot`} />
    <Column>
      <MinorTitle>{name}</MinorTitle>
      <MinorTitle style={{ color: "yellow" }}>{title}</MinorTitle>
      <Paragraph>
        {bio}
        <Link to={page}>...read more</Link>
      </Paragraph>
      <TeamSocial exercism={exercism} github={github} twitter={twitter} />
    </Column>
  </Row>
);

export default TeamMember;
