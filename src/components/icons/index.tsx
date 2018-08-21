import * as React from "react";
import { Github, Twitter } from "styled-icons/fa-brands";
import { HandPointLeft, Rocket as FatRocket } from "styled-icons/fa-solid";
import { StyledIcon } from "styled-icons/material";
import { Lock, LockOpen, Whatshot } from "styled-icons/material";
import { Rocket } from "styled-icons/octicons";

const Locked: StyledIcon = Lock.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;
const UnLocked: StyledIcon = LockOpen.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;

export const LockIcon = (locked: boolean) =>
  locked ? (
    <Locked size={32} title="account locked" />
  ) : (
    <UnLocked size={32} title="account unlocked" />
  );

export const RocketIcon: StyledIcon = Rocket.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;

export const FatRocketIcon: StyledIcon = FatRocket.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;

export const GithubIcon: StyledIcon = Github.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;

export const TwitterIcon: StyledIcon = Twitter.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;

export const WhatshotIcon: StyledIcon = Whatshot.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;

export const HandPointLeftIcon: StyledIcon = HandPointLeft.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`;
