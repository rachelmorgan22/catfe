import React from 'react';
import '../styles/About.css';
import coffee from '../images/coffee.png';
import coffeeCup from '../images/coffeeCup.png';
import manAndCat from '../images/manAndCat.png';
import yellowCat from '../images/yellowCat.png';

const About = () => {
    return (
        <div className="aboutImages">
            <img src={coffee} alt="Coffee"></img>
            <img src={coffeeCup} alt="Coffee Cup"></img>
            <img src={yellowCat} alt="Cute Cat"></img>
            <img src={manAndCat} alt="Man and Cat"></img>
        </div>

    );
}

export default About;