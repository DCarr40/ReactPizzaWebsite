import React from "react";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar/index";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroItems,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <Sidebar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 secs</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
