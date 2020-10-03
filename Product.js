import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is bassket>>>>", basket);

  const addToBasket = (e) => {
    // //dispatch the items into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="Product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>INR </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <strong>*</strong>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product;
