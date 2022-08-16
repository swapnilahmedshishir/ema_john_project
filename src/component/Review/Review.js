import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fakeData from "../../fakeData";
import { getDb, removeFromDb,processOrder } from "../../utilities/fakedb";
import CartItem from "../CartItem/CartItem";
import Order from "../Order/Order";
import HappyImage from '../../images/happy.gif';

const Review = () => {
  const [reviewItem, setReviewItem] = useState([]);
  const [orderPlaced, setOrderPlace] = useState(false);
  
  const HandelOrderPlace =() => {
    setReviewItem([]);
    setOrderPlace(true);
    processOrder();
 };
  const removeProduct = (productKey) => {
    const newCartItem = reviewItem.filter((pd) => pd.key !== productKey);
    setReviewItem(newCartItem);
    removeFromDb(productKey);
  };

  useEffect(() => {
    const getData = getDb();
    const ObjData = JSON.parse(getData);
    const dataObjKey = Object.keys(ObjData || {});
    const cartProduct = dataObjKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = ObjData[key];
      return product;
    });

    setReviewItem(cartProduct);
  }, []);

  
let  orderComplite ;
if(orderPlaced){
  orderComplite = <img src={HappyImage} alt=""/>
} 
  return (
    <div className="shop_container">
      <div className="product_coantainer">
        <h2 style={{ textAlign: "center" }}>Cart Item : {reviewItem.length}</h2>
        
        {reviewItem.map((pd) => (
          <CartItem
            key={pd.key}
            product={pd}
            removeProduct={removeProduct}
          ></CartItem>
        ))}
        {
        orderComplite  
        }
      </div>
      <div className="cart_container">
      <Order cartData={reviewItem}>
      <button onClick={HandelOrderPlace} className="Order_btn">Order place </button>
      </Order>
     
        
      
      </div>
    </div>
  );
};

export default Review;
