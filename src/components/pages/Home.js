import React from "react";

import HeroSection from "../HeroSection/HeroSection";
import Cards from "../Cards/Cards";
import { FooterContainer } from "../../container/Footer";
import SlideShow from "../SlideShow/SlideShow";
import { SliderData } from "../SliderData/SliderData";

import "../../App.css";

function Home() {
  return (
    <>
      <SlideShow slides={SliderData} />
      <HeroSection />
      <Cards />
      <FooterContainer />
    </>
  );
}

export default Home;
