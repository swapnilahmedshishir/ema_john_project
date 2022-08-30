import React, { useContext } from 'react';
import './Menubar.css';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContexApi } from '../../App';
const Menubar = () => {

  const [userLoginInfo,setUserLoginInfo] = useContext(UserContexApi);
    return (
        <div className='menuBar'>
          <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/manage">Manage Inventory</Link>
           <Button onClick={() => setUserLoginInfo({})}>Sing Out </Button>
          </nav>
          
        </div>
    );
};

export default Menubar;