import React, { useState, useEffect } from "react";
import Card from "./Card";
const CardList = ({ products, addToCart }) => {
  /* Cardlarni list qilish va loader */

  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 5000);
  });
  return <div></div>;
};

export default CardList;
