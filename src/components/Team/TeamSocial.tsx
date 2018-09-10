import * as React from "react";
import styled from "../../theme";
import { GithubIcon, TwitterIcon, WhatshotIcon } from "../icons";

const iconSize = "28px";

const Inline = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  height: 34px;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 160px;
`;

const A = styled.a`
  color: ${props => props.theme.primaryColor};
  &:hover {
    color: yellow;
  }
`;

export interface ITeamSocialProps {
  exercism: string;
  github: string;
  twitter: string;
}

const TeamSocial: React.SFC<ITeamSocialProps> = ({
  exercism,
  github,
  twitter
}) => {
  return (
    <Inline>
      <A href={`https://github.com/${github}`} target="_blank">
        <GithubIcon size={iconSize} />
      </A>
      <A href={`https://twitter.com/${twitter}`} target="_blank">
        <TwitterIcon size={iconSize} />
      </A>
      <A href={`https://exercism.io/profiles/${exercism}`} target="_blank">
        <WhatshotIcon size={iconSize} />
      </A>
    </Inline>
  );
};

export default TeamSocial;
