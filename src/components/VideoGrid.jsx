import React from 'react';
import './VideoGrid.css';
import camImg from '../assets/images/image.png'; 

const gridItems = [
  { type: 'image', src: camImg },
  { type: 'card', title: 'Visible Deterrence', text: 'Speaker warnings & cameras scare intruders instantly.' },
  { type: 'image', src: camImg },
  { type: 'card', title: 'Tech + Team + Ease', text: 'Smart systems backed by fast human response. Made easy with an easy monthly subscription model.' },
  { type: 'image', src: camImg },
  { type: 'card', title: 'Real-Time Action', text: 'No delays — we act the moment threat appears.' },
];

const VideoGrid = () => {
  return (
    <section className="video-grid-section">
      <div className="video-grid">
        {gridItems.map((item, index) => (
          item.type === 'image' ? (
            <div className="video-card image" key={index}>
              <img src={item.src} alt="Camera" />
            </div>
          ) : (
            <div className="video-card text" key={index}>
              <div className="icon-circle">📷</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
