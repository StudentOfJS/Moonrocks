import * as React from "react"
import astronaut from '../../images/astronaut.png'
import HeroImage from "./HeroImage"
import HeroText from "./HeroText"
import HeroWrapper from "./HeroWrapper"
export default () => {
  return (
    <HeroWrapper>
      <HeroImage>
        <img src={astronaut} />
      </HeroImage>
      <HeroText />
    </HeroWrapper>
  )
}
