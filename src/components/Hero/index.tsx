import * as React from "react";
import { Helmet } from "react-helmet";
import astronaut from "../../images/astronaut.png";
import About from "../About";
import NavBar from "../NavBar";
import HeroFilter from "./HeroFilter";
import HeroImage from "./HeroImage";
import HeroImageDiv from "./HeroImageDiv";
import HeroText from "./HeroText";
import HeroWrapper from "./HeroWrapper";

export default (props: any) => {
  // tslint:disable-next-line:no-console
  console.log(props);
  return (
    <HeroFilter>
      <NavBar />
      <Helmet>
        <title>Moonrock (MRT)</title>
        <meta name="description" content="Moonrock's (MRT) token sale " />
        <link rel="canonical" href="https://moonrocks.com" />
      </Helmet>
      <HeroWrapper>
        <HeroImageDiv>
          <HeroImage src={astronaut} alt="Astronaught Moonrocks Token" />
        </HeroImageDiv>
        <HeroText />
      </HeroWrapper>
      <About />
    </HeroFilter>
  );
};
