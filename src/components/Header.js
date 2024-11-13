import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
<header>
    <h1 className="logo">
        catfe'
    </h1>

    <nav>
        <ul>
            <li className="headerList">About</li>
            <li className="headerList">FAQ</li>
            <li className="headerList">Adopt</li>
            <li><button className="contactButton">Book a Reservation</button></li>
        </ul>

    
    </nav>
</header>
    );
};

export default Header;