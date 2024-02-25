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
                    <h2 className='about-hero'>⊹˙⋆About⋆˙⊹</h2>
                    <hr/>
                    <p>
                    Hi! My name is Ana, I’ve been an artist for over 15 years of experience and still ongoing. I practice different variations of art, Digital Art, Traditional Art, Animation, Storyboarding, etc. I’m currently a college student majoring in Media Arts and Motion Design (Animation). I have some of my school work presented in this portfolio and personal projects. I have some commissions I’ve worked on in the past as well.
                    I work hard and I’m incredibly motivated in the art field, especially Animation since it’s something I’m still getting the grasp of but absolutely enjoying it! 
                    I intend to continue pursuing Animation as my major, however I will continue to do Traditional and Digital Art as I love the form of drawing and art itself, as I’m really good with creating characters and dramatic poses.
                    Thank you for reading about me! Hope we can get to know each other! If you have any concerns or questions don’t be afraid to reach out! 
                    </p>
                    <em>~Ana</em>
                </div>
            </div>
            <div className='img-container'>
                <img className='about-img' alt='betty' src={betty} />
            </div>
        </div>
        <Pagenav /> 
        </div>
    );
}

export default About;