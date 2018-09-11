import * as React from "react";
import { Github, Twitter } from "styled-icons/fa-brands";
import {
  ArrowLeft,
  ArrowRight,
  HandPointLeft,
  Rocket as FatRocket
} from "styled-icons/fa-solid";
import { StyledIcon } from "styled-icons/material";
import { Lock, LockOpen, Whatshot } from "styled-icons/material";
import { Rocket } from "styled-icons/octicons";
import { keyframes } from "../../theme";

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

const wiggleLeft = keyframes`
{
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 0 50%;
  }
  10% {
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(4deg);
  }
  80% {
    transform: rotate(-2deg);
  }
  90% {
    transform: rotate(2deg);
  }
}
`;

const wiggleRight = keyframes`
{
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 100% 50%;
  }
  10% {
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(4deg);
  }
  80% {
    transform: rotate(-2deg);
  }
  90% {
    transform: rotate(2deg);
  }
}

`;

export const ArrowLeftIcon: StyledIcon = ArrowLeft.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
  margin-right: 20px;
  &:hover {
    animation: ${wiggleLeft} 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    cursor: pointer;
  }
`;

export const ArrowRightIcon: StyledIcon = ArrowRight.extend`
  color: ${props =>
    props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
  margin-left: 20px;
  &:hover {
    animation: ${wiggleRight} 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    cursor: pointer;
  }
`;
