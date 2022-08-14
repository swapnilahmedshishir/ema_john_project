import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fakeData from "../../fakeData";
import { getDb, removeFromDb } from "../../utilities/fakedb";
import CartItem from "../CartItem/CartItem";
import Order from "../Order/Order";

const Review = () => {
  const [reviewItem, setReviewItem] = useState([]);

  const removeProduct = (productKey) => {
    const newCartItem = reviewItem.filter((pd) => pd.key !== productKey);
    setReviewItem(newCartItem);
    removeFromDb(productKey);
  };

  useEffect(() => {
    const getData = getDb();
    const ObjData = JSON.parse(getData);
    const dataObjKey = Object.keys(ObjData);
    const cartProduct = dataObjKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = ObjData[key];
      return product;
    });

    setReviewItem(cartProduct);
  }, []);

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
      </div>
      <div className="cart_container">
      <Order cartData={reviewItem} reviewBtn={false}></Order>
      </div>
    </div>
  );
};

export default Review;
