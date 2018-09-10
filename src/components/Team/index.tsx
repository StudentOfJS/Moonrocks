import * as React from "react";
import { Helmet } from "react-helmet";
import rod from "../../images/rod.jpg";
import styled from "../../theme";
import Div from "../Div";
import { Title } from "../Text";
import TeamMember from "./TeamMember";

const OuterDiv = styled(Div)`
  color: ${props => props.theme.primaryColor};
  width: 100wh;
  height: 100%;
`;

const MemberDiv = styled(Div)`
  color: ${props => props.theme.primaryColor};
  display: flex;
  flex-wrap: wrap;
  width: 100wh;
  height: 100%;
`;

const TitleDiv = styled(Title)`
  color: ${props => props.theme.primaryColor};
  margin-top: 40px;
  width: 100%;
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
    skills: [
      {
        color: "#366DE9",
        label: "HTML /CSS",
        percent: 90
      },
      {
        color: "#1FEE40",
        label: "React",
        percent: 90
      },
      {
        color: "#EE1F2B",
        label: "JS",
        percent: 98
      }
    ],
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
    skills: [
      {
        color: "#366DE9",
        label: "rest API",
        percent: 80
      },
      {
        color: "#1FEE40",
        label: "graphql API",
        percent: 95
      },
      {
        color: "#EE1F2B",
        label: "auth",
        percent: 70
      }
    ],
    social: {
      exercism: "StudentOfJS",
      github: "StudentOfJS",
      twitter: "StudentOfJS"
    },
    title: "Backend Developer"
  },
  {
    name: "Rod Lewis",
    profile: { bio: "lorem ispum dollar bill ja", image: rod, page: "/" },
    skills: [
      {
        color: "#366DE9",
        label: "Solidity",
        percent: 50
      },
      {
        color: "#1FEE40",
        label: "Go",
        percent: 70
      },
      {
        color: "#EE1F2B",
        label: "c++",
        percent: 0
      }
    ],
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
    skills: [
      {
        color: "#366DE9",
        label: "Networks",
        percent: 80
      },
      {
        color: "#1FEE40",
        label: "Aws",
        percent: 60
      },
      {
        color: "#EE1F2B",
        label: "CI",
        percent: 30
      }
    ],
    social: {
      exercism: "StudentOfJS",
      github: "StudentOfJS",
      twitter: "StudentOfJS"
    },
    title: "Sys Ops/ Dev Ops"
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
      <TitleDiv>Moon Rockers</TitleDiv>
      <MemberDiv>
        {members.map(member => (
          <TeamMember
            name={member.name}
            profile={member.profile}
            skills={member.skills}
            social={member.social}
            title={member.title}
          />
        ))}
      </MemberDiv>
    </OuterDiv>
  );
};
