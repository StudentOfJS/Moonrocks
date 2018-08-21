import * as React from "react";
import { Helmet } from "react-helmet";
import rod from "../../images/rod.jpg";
import styled from "../../theme";
import Div from "../Div";
import { GithubIcon, TwitterIcon, WhatshotIcon } from "../icons";
import { MinorTitle, Title } from "../Text";

const InnerWrapper = styled(Div)`
  color: ${props => props.theme.primaryColor};
  display: flex;
  width: 100%;
  height: 60vh;
  max-width: 800px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 80px 0 0 0;
`;

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
  width: 100%;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

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

export default () => {
  return (
    <div>
      <Helmet>
        <title>Moonrock's Team</title>
        <meta name="description" content="Meet the Moonrock team members" />
        <link rel="canonical" href="https://moonrocks.com/team" />
      </Helmet>
      <InnerWrapper>
        <Title>Moon Rockers</Title>
        <Row>
          <TeamAvatar src={rod} alt="Rod lewis - Developer mugshot" />
          <Column>
            <MinorTitle>Rod Lewis</MinorTitle>
            <MinorTitle style={{ color: "yellow" }}>
              Frontend Developer
            </MinorTitle>
            <Inline>
              <A href="https://github.com/StudentOfJS" target="_blank">
                <GithubIcon size={iconSize} />
              </A>
              <A href="https://twitter.com/StudentofJS" target="_blank">
                <TwitterIcon size={iconSize} />
              </A>
              <A
                href="https://exercism.io/profiles/StudentOfJS "
                target="_blank"
              >
                <WhatshotIcon size={iconSize} />
              </A>
            </Inline>
          </Column>
        </Row>
      </InnerWrapper>
    </div>
  );
};
