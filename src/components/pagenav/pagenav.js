import React from 'react';
import './pagenav.css';

function Pagenav() {
    return (
        <div className='pagenav-container'>
            <hr />
            <nav className='pagenav-box'>
                <a href='/Anapatsuu-portfolio/'><button className='small-button'>Home</button></a>
                <a href='/Anapatsuu-portfolio/#/about'><button className='small-button'>About</button></a>
                <a href='/Anapatsuu-portfolio/#/contact'><button className='small-button'>Contact</button></a>
            </nav>
        </div>
    );
}

export default Pagenav;