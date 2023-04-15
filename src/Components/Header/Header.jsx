import React from 'react';
import './Header.css';
import Logo from '../../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;