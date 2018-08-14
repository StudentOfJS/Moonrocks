import * as React from "react";
import MobileNav from "./mobile/MobileNav";
import NavBar from "./NavBar";
import NavWrapper from "./NavWrapper";

export default () => {
  return (
    <React.Fragment>
      <MobileNav />
      <NavWrapper>
        <NavBar />
      </NavWrapper>
    </React.Fragment>
  );
};
