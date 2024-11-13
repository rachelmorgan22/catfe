import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutInfo from './AboutInfo';
import About from './About.js';

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.aboutInfo');
            const heroSection = document.querySelector('.heroSection');
            const scrollPosition = window.scrollY;

            // Calculate the scroll threshold as half the Hero section's height
            const fadeThreshold = heroSection.offsetHeight / 2;

            // Calculate opacity values based on scroll position
            if (scrollPosition <= fadeThreshold) {
                // Gradually fade out Hero and fade in AboutInfo as scroll progresses
                const opacityValue = 1 - scrollPosition / fadeThreshold;
                heroSection.style.opacity = opacityValue;
                aboutSection.style.opacity = 1 - opacityValue;
            } else {
                // Once past the threshold, Hero is fully transparent, and AboutInfo is fully opaque
                heroSection.style.opacity = '0';
                aboutSection.style.opacity = '1';
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <AboutInfo />
            <About />
        </div>
    );
};

export default Home;
