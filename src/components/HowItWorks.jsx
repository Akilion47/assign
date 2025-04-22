import React from 'react';
import { FaVideo, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="work-steps">
        <div className="step">
          <FaVideo size={48} color="#000" />
          <h3>1. WE WATCH</h3>
          <p>High-quality cameras installed and monitored around the clock for total peace of mind.</p>
        </div>
        <div className="step">
          <FaExclamationTriangle size={48} color="#000" />
          <h3>2. WE WARN</h3>
          <p>Instant voice alerts are triggered at the first sign of suspicious activity.</p>
        </div>
        <div className="step">
          <FaShieldAlt size={48} color="#000" />
          <h3>3. WE RESPOND</h3>
          <p>If the situation escalates, our Smart Chowkidars are dispatched in minutes.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
