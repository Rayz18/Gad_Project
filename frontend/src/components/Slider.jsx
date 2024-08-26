import { useState, useEffect } from 'react';
import "../styles/Slider.css";

import A from '../assets/photos/A.jpg';
import B from '../assets/photos/B.jpg';
import C from '../assets/photos/C.jpg';

const Slider = () => {
    const images = [A, B, C];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Automatic sliding every 5 seconds
    useEffect(() => {
        const autoSlide = setInterval(nextSlide, 2500);
        return () => clearInterval(autoSlide); // Cleanup on unmount
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
            <button className="slider-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
            <button className="slider-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;