import React, { Component } from "react";
import { Link } from "react-router-dom";

import SocialMediaData from "../../utilities/SocialMediaData.json";

import "./styles.scss";
import "../../App.css";


export default class SocialShare extends Component {
  render() {
    return (
      <>
        {SocialMediaData.map((socialMediaDetials, index) => {
          return (
            <Link className={"socialMediaData"} key={index}>
              <i
                href={socialMediaDetials.link}
                className={socialMediaDetials.icon}
              />
                {" "}
                {socialMediaDetials.title}
            </Link>
          );
        })}
      </>
    );
  }
}
