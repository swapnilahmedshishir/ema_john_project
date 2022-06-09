import React from 'react';
import logoImage from '../../images/logo.png';
import Menubar from '../MenuVar/Menubar';
import "./Header.css";
const Header = () => {
    return (
        <div className='header'>
           <img src={logoImage} alt="" />
           <Menubar></Menubar>
        </div>
    );
};

export default Header;