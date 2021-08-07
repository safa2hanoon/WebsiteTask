import React from "react";
// import styled, { css } from "styled-components/macro";

import { Button } from "../Button/Button";

import "../../App.css";
import "./styles.css";

// const HeroSections= styled.section`
// height:100vh;
// max-height:1100px;
// position:relative;
// overflow:hidden;
// `;

const HeroSection = () => {
  return (
    <div className={"hero-container"}>
      <h1>Natural Cosmatics </h1>
      <p>What are you waiting for ?</p>
      <div className={"hero-btns"}>
        <Button
          className={"btns"}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className={"btns"}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className={"far fa-play-circle"} />
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
