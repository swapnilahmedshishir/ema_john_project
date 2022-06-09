import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  const frist10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(frist10);
  return (
    <div className="shop_container">
      <div className="product_coantainer">
        {product.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </div>
      <div className="cart_container">
        <h1>this is a cart </h1>
      </div>
    </div>
  );
};

export default Shop;
