import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Order from "../Order/Order";
import { addToDb ,getDb } from "../../utilities/fakedb";
import { useEffect } from "react";

const Shop = () => {
  const frist10 = fakeData.slice(0, 10);
  const [product] = useState(frist10);

  const [cart, setCart] = useState([]);

   useEffect(() => {
     const getData = getDb() ;
     const objData = JSON.parse(getData);
     const dataObjKey = Object.keys(objData);

     const priviousCart = dataObjKey.map(exitKey => {
       const product = fakeData.find(pd => pd.key === exitKey);
       product.quantity = objData[exitKey];
       return product;
     });
     setCart(priviousCart)
   }, []);
   
  const HandleAddProduct = (product) => {
    const toBeAddedKey = product.Key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const other = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...other, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key, count);
  };

  return (
    <div className="shop_container">
      <div className="product_coantainer">
        {product.map((pd) => (
          <Product
            key={pd.key}
            product={pd}
            HandleAddProduct={HandleAddProduct}
            addToCart={true}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
        <Order cartData={cart} reviewBtn={true}></Order>
      </div>
    </div>
  );
};

export default Shop;
