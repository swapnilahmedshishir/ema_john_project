import React, { useState } from 'react';
import "./Shop.css";
import fakeData from "../../fakeData";

const Shop = () => {
    //const frist10 = fakeData.slice(0,10);
    const [product , setProduct] = useState(fakeData);
    return (
        <div>
            <h1>{product.length}</h1>
            <ul>
                {product.map(pd => <li>{pd.name}</li>)}
            </ul>
        </div>
    );
};

export default Shop;