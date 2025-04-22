import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <h2 className="cta-heading">
          Kya Aapke Ghar Ke Bahar Technical Chowkidar Hai? <span className="cta-bold">Get Secured Now.</span>
        </h2>
        <button className="cta-button">Book a Free Demo</button>
      </div>
    </section>
  );
};

export default CTASection;
