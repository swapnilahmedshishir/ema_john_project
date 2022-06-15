import React from "react";
import "./Product.css";
import imgs from './image/shopping-cart-of-checkered-design.png';
import { Link } from "react-router-dom";
const Product = (props) => {
  
  const {name,img,seller,price,stock,key}=props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-style">
        <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
        <br/>
        <p><small>by: {seller} </small></p>
        <p>${price}</p>
        <br/>
        <p><small>only {stock} available - Order soon</small></p>
       {props.addToCart && <button id="cart_btn" onClick={() => props.HandleAddProduct(props.product)} ><img src={imgs} className="image_style" alt=""/> add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
