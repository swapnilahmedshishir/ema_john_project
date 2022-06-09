import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Order from "../Order/Order";

const Shop = () => {
 
  const frist10 = fakeData.slice(0, 10);
  const [product] = useState(frist10);

  const [cart,setCart] = useState([]);
  const HandleAddProduct = (product) =>{
    const newCart = [...cart,product ] ;
    setCart(newCart);
   
  }

  return (
    <div className="shop_container">
      <div className="product_coantainer">
        {product.map((pd) => (
          <Product product={pd} HandleAddProduct={HandleAddProduct}></Product>
        ))}
      </div>
      <div className="cart_container">
       <Order cartData={cart} ></Order>
      </div>
    </div>
  );
};

export default Shop;
