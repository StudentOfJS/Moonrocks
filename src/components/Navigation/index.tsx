import * as React from "react";
import { RouteComponentProps } from "react-router";
import ReturnHome from "./back";
import MobileNav from "./mobile/MobileNav";
import NavBar from "./NavBar";
import NavWrapper from "./NavWrapper";

const Navigation: React.SFC<RouteComponentProps<{}>> = ({ match }) =>
  match && match.path === "/" ? (
    <React.Fragment>
      <MobileNav />
      <NavWrapper>
        <NavBar />
      </NavWrapper>
    </React.Fragment>
  ) : (
    <ReturnHome />
  );

export default Navigation;
