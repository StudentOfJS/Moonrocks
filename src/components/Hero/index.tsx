import * as React from "react";
import astronaut from "../../images/astronaut.png";
import HeroFilter from "./HeroFilter";
import HeroImage from "./HeroImage";
import HeroImageDiv from "./HeroImageDiv";
import HeroText from "./HeroText";
import HeroWrapper from "./HeroWrapper";

export default () => {
  return (
    <HeroFilter>
      <HeroWrapper>
        <HeroImageDiv>
          <HeroImage src={astronaut} alt="Astronaught Moonrocks Token" />
        </HeroImageDiv>
        <HeroText />
      </HeroWrapper>
    </HeroFilter>
  );
};
