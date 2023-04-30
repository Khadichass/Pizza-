// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// const CardList = ({ products, addToCart }) => {
//   /* Cardlarni list qilish va loader */

//   const [delay, setDelay] = useState(true);

//   useEffect(() => {
//     setDelay(true);
//     setTimeout(() => {
//       setDelay(false); //5s sekundan keyin loader o'chadi false qiymatga o'tadi
//     }, 5000); //5s loader aylanishi
//   });

//   return (
//     <>
//       {delay ? (
//         <div className="loader">
//           {/* <img
//             src="https://pandagif.com/gifs/ysjA8HY1lA.gif"
//             alt="loader"
//             className="loader"
//           /> */}
//           {/* <div class="newtons-cradle">
//             <div class="newtons-cradle__dot"></div>
//             <div class="newtons-cradle__dot"></div>
//             <div class="newtons-cradle__dot"></div>
//             <div class="newtons-cradle__dot"></div>
//           </div> */}
//         </div>
//       ) : (
//         <>
//           <div className="card-list">
//             {Array.isArray(products) && products.length > 0 ? (
//               products.map((item) => (
//                 <Card key={item.id} data={item} addToCart={addToCart} />
//               ))
//             ) : (
//               <p>Нет продукты!</p>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default CardList;

import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardList = ({ products, addToCart }) => {
  /**CARDLARNI LIST QILISH VA LOADER */
  const [delay, setDelay] = useState(true); //default holatda loader ko'rinadi

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false); //5s sekundan keyin loader o'chadi false qiymatga o'tadi
    }, 5000); //5s loader aylanishi
  }, [products]);

  return (
    <>
      {delay ? (
        <div className="loader">
          {/* <img
            src="https://pandagif.com/gifs/ysjA8HY1lA.gif"
            alt="loader"
            className="loader"
          /> */}
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
