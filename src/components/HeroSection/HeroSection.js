import React from "react";

import "../../App.css";
import "./styles.scss";

import { Button } from "reactstrap";

const HeroSection = () => {
  return (
    <div className={"hero-container"}>
      <span className="HeroContainerTitle">Natural Cosmatics </span>
      <span>What are you waiting for ?</span>
      <div className={"hero-btns"}>
        <Button className="GetStartedBtn">
          GET STARTED
        </Button>
        <Button className="WatchTrailerBtn">
          WATCH TRAILER
          <i className={"far fa-play-circle"} />
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
