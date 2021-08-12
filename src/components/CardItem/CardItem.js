import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "./styles.scss";

const CardItem = (props) => {
  const { path, src, price, text } = props;
  return (
    <>
      <Link className={"CardsItemLink"}  
            to={path}>
        <div className={"CardsItemPicWrap"}>
          <img className={"CardsItemImg"} 
               src={src} 
               alt={"Products"} />
        </div>
        <div className={"CardsItemInfo"}>
          <span className={"CardsItemText"}>{text}</span>
          <span className={"CardsPriceText"}>{price}</span>
        </div>
        <Button
          className={"AddToBagBtn"}
        >
          Add to Bag
        </Button>
      </Link>
    </>
  );
};
export default CardItem;
