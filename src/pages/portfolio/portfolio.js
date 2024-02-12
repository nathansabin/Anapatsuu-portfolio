import React, { useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import './portfolio.css';

function Portfolio(props) {
    const portfolioList = props.entries;
    const [ isLightbox , setIsLightbox ] = useState({
        index: 0,
        on: false
    });

    const activateLightbox = (e) => {
        const index = e.target.id;
        setIsLightbox(prevState => ({
            index: index,
            on: !prevState.on, 
        }));
    }

    return (
        <div className='portfolio-container'>
            <h1 className='title'>{props.title}</h1>
            <ul className='list-container'>
            {portfolioList.map((design, index) => (
                <li key={index} id={index} className='image' onClick={activateLightbox}> 
                    <img key={index} id={index} src={design.image} alt={`Image ${index}`} />
                </li>
            ))}
             { isLightbox.on && 
            <Lightbox 
                mainSrc={portfolioList[isLightbox.index].image}
                onCloseRequest={() => setIsLightbox(prevState => ({ ...prevState, on: false }))}
            />
        }
            </ul>
        </div>
    );
}

export default Portfolio;