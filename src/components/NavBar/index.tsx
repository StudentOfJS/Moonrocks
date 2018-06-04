import * as React from "react"
import MobileNavBurger from "./MobileNavBurger"
import MobileNavDraw from "./MobileNavDraw"
import MobileNavWrapper from "./MobileNavWrapper"
import NavBar from "./NavBar"
import NavWrapper from "./NavWrapper"

export default () => {
  return (
    <React.Fragment>
      <NavWrapper>
        <NavBar />
      </NavWrapper>
      <MobileNavWrapper>
        <MobileNavBurger />
        <MobileNavDraw />
      </MobileNavWrapper>
    </React.Fragment>
  )
}
