import React from "react";
import CardList from "./CardList";

const setProducts = (products, addToCart) => {
  return (
    <div className="products">
      <h3 className="themeText">Pizza</h3>
      <CardList products={products} addToCart={addToCart} />
    </div>
  );
};

export default setProducts;
