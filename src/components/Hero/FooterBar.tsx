// import * as React from "react";
// import styled, {keyframes} from "../../theme";
// import Div from "../Div";
// import { RocketIcon } from "../icons";

// const launch = keyframes`
// {
//   0% {
//     -webkit-transform: translate(0);
//             transform: translate(0);
//   }
//   10% {
//     -webkit-transform: translate(-2px, -2px);
//             transform: translate(-2px, -2px);
//   }
//   20% {
//     -webkit-transform: translate(2px, -2px);
//             transform: translate(2px, -2px);
//   }
//   30% {
//     -webkit-transform: translate(-2px, 2px);
//             transform: translate(-2px, 2px);
//   }
//   40% {
//     -webkit-transform: translate(2px, 2px);
//             transform: translate(2px, 2px);
//   }
//   50% {
//     -webkit-transform: translate(-2px, -2px);
//             transform: translate(-2px, -2px);
//   }
//   60% {
//     -webkit-transform: translate(2px, -2px);
//             transform: translate(2px, -2px);
//   }
//   70% {
//     -webkit-transform: translate(-2px, 2px);
//             transform: translate(-2px, 2px);
//   }
//   80% {
//     -webkit-transform: translate(-2px, -2px);
//             transform: translate(-2px, -2px);
//   }
//   90% {
//     -webkit-transform: translate(2px, -2px);
//             transform: translate(2px, -2px);
//   }
//   100% {
//     -webkit-transform: translate(0);
//             transform: translate(0);
//   }
// }
// `

// const RocketDiv = styled.div`

//   animation: ${launch} 0.5s linear infinite both;
// `

// const Bar = styled(Div)`
//   align-items: center;
//   background: transparent;
//   display: flex;
//   height: 80px;
//   justify-content: flex-end;
//   position: sticky;
//   top: 0;
//   width: 100%;
//   z-index: 200;
// `;

// export interface IRocketProps {
//   backToTop: boolean;
// }

// const Rocket: React.SFC<IRocketProps> = ({backToTop}) => {
//   if(backToTop)
// };

// export interface IAppProps {
// }

// export default class FooterBar extends React.Component<IAppProps, any> {
//   public render() {
//     return (
//       <Bar>
//         <RocketIcon />
//       </Bar>
//     );
//   }
// }
