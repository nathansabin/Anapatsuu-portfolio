import React from 'react';
import './home.css';
import Header from '../../components/header/header';
import Button from '../../components/button/button';

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <nav className='button-container'> 
                <div>
                    <Button category={'character-design'} text='Character Design'/>
                    <Button category={'sketches'} text='Sketches'/>
                    <Button category={'animation'} text='Animation'/>
                    <Button category={'chibi'} text='Chibi'/>  
                </div>    
            </nav>
            <hr />
            <nav className='button-container'>
                <div>
                    <Button category={'about'} text='About Me'/>
                    <Button category={'contact'} text='Contact'/>
                </div>
            </nav>
        </div>
    );
}

export default Home;