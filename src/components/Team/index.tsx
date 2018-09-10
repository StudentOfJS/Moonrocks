import * as React from "react";
import { Helmet } from "react-helmet";
import rod from "../../images/rod.jpg";
import styled from "../../theme";
import Div from "../Div";
import { Title } from "../Text";
import TeamMember from "./TeamMember";

const OuterDiv = styled(Div)`
  color: ${props => props.theme.primaryColor};
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 80px 0 0 0;
`;

const InnerDiv = styled(Div)`
  color: ${props => props.theme.primaryColor};
  display: flex;
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

// @todo: create GET endpoint for team info. Pull from there and then iterate over for this section.

// Mock data
const members = [
  {
    name: "Rod Lewis",
    profile: {
      bio: "lorem ispum dollar bill ja",
      image: rod,
      page: "/"
    },
    social: {
      exercism: "StudentOfJS",
      github: "StudentOfJS",
      twitter: "StudentOfJS"
    },
    title: "Frontend Developer"
  },
  {
    name: "Rod Lewis",
    profile: { bio: "lorem ispum dollar bill ja", image: rod, page: "/" },
    social: {
      exercism: "StudentOfJS",
      github: "StudentOfJS",
      twitter: "StudentOfJS"
    },
    title: "Blockchain Engineer"
  },
  {
    name: "Rod Lewis",
    profile: { bio: "lorem ispum dollar bill ja", image: rod, page: "/" },
    social: {
      exercism: "StudentOfJS",
      github: "StudentOfJS",
      twitter: "StudentOfJS"
    },
    title: "Backend Go Devil"
  },
  {
    name: "Rod Lewis",
    profile: { bio: "lorem ispum dollar bill ja", image: rod, page: "/" },
    social: {
      exercism: "StudentOfJS",
      github: "StudentOfJS",
      twitter: "StudentOfJS"
    },
    title: "React Ninja"
  }
];

export default () => {
  return (
    <OuterDiv>
      <Helmet>
        <title>Moonrock's Team</title>
        <meta name="description" content="Meet the Moonrock team members" />
        <link rel="canonical" href="https://moonrocks.com/team" />
      </Helmet>
      <Title>Moon Rockers</Title>
      <InnerDiv>
        {members.map(member => (
          <TeamMember
            name={member.name}
            profile={member.profile}
            social={member.social}
            title={member.title}
          />
        ))}
      </InnerDiv>
    </OuterDiv>
  );
};
