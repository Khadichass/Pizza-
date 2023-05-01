import React, { useState, useEffect } from "react";

const CardItem = (product, changeNumb) => {
  return (
    <div className="cartItem">
      <img src={product.url} alt="cart-item" className="cartItemImage" />
      <div className="cartMain">
        <div>
          <p>{product.title}</p>
          <span>UZS:{product.price}</span>
        </div>
        <div>
          <p>
            Date <span>{product.quantity}</span>
          </p>

          <div>
            <button
              className="quantityBtn"
              onClick={() => {
                changeNumb(product, "-");
              }}
            >
              -
            </button>
            <button
              className="quantityBtn"
              onClick={() => {
                changeNumb(product, "+");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
