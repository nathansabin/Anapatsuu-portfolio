import React from 'react';
import './about.css';
import Pagenav from '../../components/pagenav/pagenav';
import betty from '../../assets/porfolio/character-design/Betty_Noire.png';

function About() {
    return (
        <div>
        <div className='about-container'>
            <div className='about-box'>
                <div className='about-content'>
                    <h2 className='about-hero'>About</h2>
                    <hr/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices in. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Sed euismod nisi porta lorem. At varius vel pharetra vel turpis. Et tortor consequat id porta nibh venenatis cras sed felis. Nibh cras pulvinar mattis nunc sed blandit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Porttitor rhoncus dolor purus non. Tellus orci ac auctor augue mauris augue neque gravida. Eleifend mi in nulla posuere sollicitudin. Massa eget egestas purus viverra accumsan. Morbi tempus iaculis urna id volutpat lacus laoreet.
                    </p>
                </div>
            </div>
            <img className='about-img' alt='betty' src={betty} />
        </div>
        <Pagenav /> 
        </div>
    );
}

export default About;