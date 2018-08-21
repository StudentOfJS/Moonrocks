import * as React from "react";
import MobileNav from "./mobile/MobileNav";
import NavBar from "./NavBar";
import NavWrapper from "./NavWrapper";

export default (props: any) => {
  // tslint:disable-next-line:no-console
  console.log(props);
  return (
    <React.Fragment>
      <MobileNav />
      <NavWrapper>
        <NavBar />
      </NavWrapper>
    </React.Fragment>
  );
};
