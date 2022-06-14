import React from 'react';
import './Menubar.css';
const Menubar = () => {
    return (
        <div className='menuBar'>
          <nav><a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Manage Inventory Here</a></nav>
        </div>
    );
};

export default Menubar;