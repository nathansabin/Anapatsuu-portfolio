import React, { useState} from 'react';
import Pagenav from '../../components/pagenav/pagenav';
import './portfolio.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Portfolio(props) {
    const portfolioList = props.entries;
    const [ isLightbox , setIsLightbox ] = useState({
        index: 0,
        on: false
    });

    const activateLightbox = (e) => {
        const index = e.target.id;
        setIsLightbox(prevState => ({ ...prevState, index: index }));
        setIsLightbox(prevState => ({ ...prevState, on: true }));
    }

    const closeLightbox = () => {
        setIsLightbox(prevState => ({ ...prevState, on: false }))
    }

    return (
        <div className='portfolio-container'>
            <h1 className='title'>{`⊹˙⋆${props.title}⋆˙⊹`}</h1>

            <ul className='list-container'>
            {portfolioList.map((design, index) => (
                <li key={index} id={index} className='image' onClick={activateLightbox}> 
                    <img key={index} id={index} src={design.image} alt={`Image ${index}`} />
                </li>
            ))}
            <Lightbox
                open={isLightbox.on}
                close={closeLightbox}
                slides={[{src:portfolioList[isLightbox.index].image}]}
            />
            </ul>
            <Pagenav />
        </div>
    );
}

export default Portfolio;