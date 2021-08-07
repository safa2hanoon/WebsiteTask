import "./styles.css";

import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const { 
    path,
    src, 
    price, 
    text, 
    label } = props;
  return (
    <>
      <div className={"CardsItem"}>
        <Link className={"CardsItemLink"} to={path}>
          <figure className={"CardsItemPicWrap"} data-category={label}>
            <img src={src} alt={"Products"} className={"CardsItemImg"} />
          </figure>
          <div className={"CardsItemInfo"}>
            <span className={"CardsItemText"}>{text}</span>
            <span className={"CardsPriceText"}>{price}</span>
          </div>
            <button className={"AddToBagBtn"}>Add to Bag</button>
        </Link>
      </div>
    </>
  );
};

export default CardItem;
