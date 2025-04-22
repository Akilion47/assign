import './About.css';
import cam1 from '../assets/images/image1.png';
import cam2 from '../assets/images/image2.png';
import cam3 from '../assets/images/image3.png';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-images">
        <div className="about-left-column">
          <img src={cam1} alt="Camera 1" />
          <img src={cam2} alt="Camera 2" />
        </div>
        <div className="about-right-column">
          <img src={cam3} alt="Camera 3" />
        </div>
      </div>

      <div className="about-content">
        <h2>About Technical Chowkidar</h2>
        <p>
          Technical Chowkidar is your trusted security partner across Haryana, offering live CCTV
          monitoring and real-time alerts. We combine technology-driven surveillance with trained
          quick response teams to ensure your home, shop, or building is safe — all for a simple
          monthly subscription.
        </p>
        <ul>
          <li>✔️ Real-Time Monitoring</li>
          <li>✔️ Instant Voice Alerts</li>
          <li>✔️ Immediate Response Team (Smart Chowkidars)</li>
        </ul>
        <button className="secure-button">Get Secure Now</button>
      </div>
    </section>
  );
}
