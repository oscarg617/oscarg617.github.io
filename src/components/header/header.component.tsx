import React, { useState } from 'react';

import Oscar from '../../assets/oscar.jpg'
import Kobe from '../../assets/kobe.gif'
import LeBron from '../../assets/lebron.gif'


import './header.styles.css'

const Header = () => {

    const [currImage, setImage] = useState(Oscar);

    var images = [
        Kobe,
        LeBron
    ]

    function randomImage () {
        var randomNumber = Math.floor(Math.random() * images.length);
        var randomImage = images[randomNumber];
        setImage(randomImage);
    }

    function defaultImage () {
        setImage(Oscar);
    }

    return (
        <div className='header-container'>
            <img className='image-container' src={currImage} alt='' />
            <div className='header-wrapper'>
                <h1 className='name-header' >Oscar Gutierrez</h1>
                <p className='my-desc' >22 year-old software engineer with a knack for being bad at video games.</p>
                <p className='my-desc' >I like applying my developer skills to my interests, playing with my dog, and trying to improve my <span className='kd-ratio' onMouseOver={randomImage} onMouseLeave={defaultImage}>0.83 K/D</span> in Warzone.</p>
            </div>
        </div>
    )
}

export default Header