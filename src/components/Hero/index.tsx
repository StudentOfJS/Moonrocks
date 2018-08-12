import * as React from "react";
import astronaut from "../../images/astronaut.png";
import Button from "../Button";
import HeroFilter from "./HeroFilter";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroWrapper from "./HeroWrapper";

export default () => {
  return (
    <HeroFilter>
      <HeroWrapper>
        <HeroImage>
          <img src={astronaut} alt="Astronaught Moonrocks Token" />
          <Button>test</Button>
        </HeroImage>
        <HeroText />
      </HeroWrapper>
    </HeroFilter>
  );
};
