import * as React from "react"
import MobileNav from "./MobileNav"
import NavBar from "./NavBar"
import NavWrapper from "./NavWrapper"

export default () => {
  return (
    <NavWrapper>
      <MobileNav />
      <NavBar />
    </NavWrapper>
  )
}
