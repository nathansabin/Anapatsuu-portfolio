import React from 'react';
import Logo from '../../assets/Logo.png';
import './header.css';

function Header() {
    return (
        <div className='hero'>
            <img src={Logo} alt='logo' />
            <h1>Anapatsuu</h1>
            <hr />
            <h2>Portfolio</h2>
        </div>
    );
}

export default Header;