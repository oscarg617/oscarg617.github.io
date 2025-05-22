import { useState } from 'react';

import Oscar from '../../assets/oscar.jpg'
import Kobe from '../../assets/kobe.gif'
import LeBron from '../../assets/lebron.gif'


import './intro.styles.scss'
import Footer from '../footer/footer.component';

const Intro = () => {

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
        <div className='intro-container'>
            <div className='intro-wrapper'>
                <h1 className='name-intro' >Oscar Gutierrez</h1>
                <p className='my-desc' >22 year-old software engineer with a knack for being bad at video games.</p>
                <p className='my-desc' >I like applying my developer skills to my interests, playing with my dog, and trying to improve my 0.83 KD in Warzone.</p>
                <Footer />
            </div>
            <img className='image-container' src={currImage} alt='' />
        </div>
    )
}

export default Intro
