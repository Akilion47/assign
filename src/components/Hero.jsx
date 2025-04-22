import { useState, useEffect } from 'react';
import './Hero.css';

import slider1 from '../assets/images/slider.png';
import slider2 from '../assets/images/slider1.jpg';
import slider3 from '../assets/images/slider2.jpg';

const images = [slider1, slider2, slider3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="hero">
      <div className="slider">
        <img src={images[current]} alt="Slider" className="slider-image" />
        <div className="slider-overlay">
          <span className="slider-tag">Interior</span>
          <h2>Building excellence</h2>
        </div>
        <div className="slider-controls">
          <button onClick={handlePrev}>&lt;</button>
          <span>{`0${current + 1}`}</span>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </section>
  );
}
