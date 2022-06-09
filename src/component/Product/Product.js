import React from "react";
import "./Product.css";
import imgs from './image/shopping-cart-of-checkered-design.png';
const Product = (props) => {
  //console.log(props.product);
  const {name,img,seller,price,stock}=props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-style">
        <h4 className="product-name">{name}</h4>
        <br/>
        <p><small>by: {seller} </small></p>
        <p>${price}</p>
        <br/>
        <p><small>only {stock} available - Order soon</small></p>
        <button id="cart_btn"><img src={imgs} className="image_style" alt=""/> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
