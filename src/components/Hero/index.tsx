import * as React from "react"
import astronaut from '../../images/astronaut.png'
import HeroFilter from "./HeroFilter"
import HeroImage from "./HeroImage"
import HeroText from "./HeroText"
import HeroWrapper from "./HeroWrapper"

export default () => {
  return (
    <HeroFilter>
      <HeroWrapper>
        <HeroImage>
          <img src={astronaut} />
        </HeroImage>
        <HeroText />
      </HeroWrapper>
    </HeroFilter>
  )
}
