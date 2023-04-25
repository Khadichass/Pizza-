import React, { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const productList = [...cart];
    if (!productList.includes(item)) {
      productList.push(item);
    }

    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));

    alert("Pizza added", cart);
    console.log(index);
  };
  return <div></div>;
}

export default App;
