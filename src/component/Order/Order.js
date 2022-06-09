import React from 'react';
import './Order.css';
const Order = (props) => {
    const cart = props.cartData;
    console.log(cart);
     
    let Total = 0;
    for(let i = 0 ; i < cart.length ; i++){
        let newCart = cart[i];
        console.log(newCart);
        Total = Total + newCart.price;
    }     
       

    function numberRound(num){
        const modifyNumber = num ;
        let fixNumber = Math.round(modifyNumber).toFixed(2); 
        return fixNumber;
    }

    let Shiping = 0 ;
    if(Total > 200){ 
        Shiping = 0 ;
    }else if(Total > 100) {
        Shiping = 4.99;
    }else if(Total > 0 ){
        Shiping = 12.99 ;
    }
    let totalBeforTaxt = Total + Shiping ;
    let Taxt = totalBeforTaxt / 10 ;
    let orderTotal = Total + Shiping + Taxt;
    return (
        <div>
            <div className='order_summ'>
            <h3>Order Summary</h3>
            <p>items Ordered: {cart.length}</p>
            </div>
            <div>
                <span>items Price :{numberRound(Total)}</span>
                <span>Shipping & Handling: {numberRound(Shiping)} </span>
                <span>Total Before Tax : {numberRound(totalBeforTaxt)} </span>
                <span>Estimated Tax : {numberRound(Taxt)}</span>
                <hr/>
                <span className='total_amount'>Order Total Price: {numberRound(orderTotal)} </span>
                <button className="Order_btn" >Review Your Order</button>
            </div>
            

        </div>
    );
};

export default Order;