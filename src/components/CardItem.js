import React, { useState, useEffect } from "react";
import setProducts from "./Products";

const CardItem = () => {
  return (
    <div className="cartItem">
      <img src={product.url} alt="cart-item" className="cartItemImage" />
    </div>
  );
};

export default CardItem;
