import "./styles.css";
import React, { Component } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";

class Cards extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => {
        this.setState({
          products: res.data,
        });
      });
  }
  render() {
    const { products } = this.state;
    return (
      <>
        {products.map((product, index) => (
          <div className={"Cards"} key={index}>
            <CardItem
              src={product.image_link}
              text={product.name}
              path={product.product_link}
              price={`${product.price} $`}
            />
          </div>
        ))}
      </>
    );
  }
}
export default Cards;
