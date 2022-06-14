import React from 'react';
import logoImage from '../../images/logo.png';
import Menubar from '../MenuVar/Menubar';
import "./Header.css";
const Header = () => {
    return (
        <div className='header'>
           <a href='/'><img src={logoImage} alt="" /></a>
           <Menubar></Menubar>
        </div>
    );
};

export default Header;