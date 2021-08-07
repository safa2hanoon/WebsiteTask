import "../../App.css";
import HeroSection from "../HeroSection/HeroSection";
import React from "react";
import Cards from "../Cards/Cards";
import { FooterContainer } from "../../container/Footer";
import SlideShow from "../SlideShow/SlideShow";
import { SliderData } from "../SliderData/SliderData";

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
