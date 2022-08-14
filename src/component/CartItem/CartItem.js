import React from "react";
import "./CartItem.css";
const CartItem = (props) => {
  //console.log(props);
  const { name, quantity, img, price, key } = props.product;
  return (
    <div className="cart_item">
      <img src={img} alt="" />
      <h3 className="product-name">{name}</h3>
      <p>Quantity : {quantity}</p>
      <h2>Price ${price}</h2>

      <button className="Order_btn" onClick={() => props.removeProduct(key)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
