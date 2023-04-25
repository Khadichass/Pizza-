import React, { useState, useEffect } from "react";

import Cart from "./components/Cart";
import Products from "./components/Products";

import logo from "./components/logo.png";

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

  const changeNumb = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);

    if (e === "+") {
      productList[index].quantity++;
    } else {
      if (productList[index].quantity > 1) {
        productList[index].quantity--;
      } else {
        productList.splice(index, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(productList));
    setCart(productList);
  };
  return (
    <>
      <div className="header">
        <img src={logo}></img>
        <Cart products={cart} changeNumb={changeNumb} />
      </div>
      <Products products={products} addToCart={addToCart} />
    </>
  );
}

export default App;
