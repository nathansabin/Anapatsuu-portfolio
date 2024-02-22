import React from 'react';
import './button.css';

function Button(props) {
    console.log(props);
    return (
        <a href={`/#/${props.category}`}>
            <button className='button'>
                <h3>
                    {props.text}
                </h3>
            </button>
        </a>
    );
}

export default Button;