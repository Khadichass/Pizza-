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
  return (
    <>
      {delay ? (
        <div className="loader">
          <img
            src="https://pandagif.com/gifs/ysjA8HY1lA.gif"
            alt="loader"
            className="loader"
          />
        </div>
      ) : (
        <>
          <div className="card-list">
            {products.length === 0 ? (
              <p>Нет продукты!</p>
            ) : (
              products.map((item) => {
                return <Card key={item.id} data={item} addToCart={addToCart} />;
              })
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CardList;
