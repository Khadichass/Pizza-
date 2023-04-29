import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";

const Cart = ({ products, changeNumb }) => {
  /* Shopping card inside  */

  const [classActive, toggleClass] = useState(flase);
  const [sum, setSum] = useState(0);

  const toggleButton = () => {
    toggleClass(!classActive);
  };

  useEffect(() => {
    let total = 0;
    for (var i = 0; i < products.length; i++) {
      total += products[i].price * products[i].quantity;
    }
    setSum(total);
  }, [products]);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Cart;
