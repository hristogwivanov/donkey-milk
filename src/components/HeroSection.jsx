import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-content-wrapper">
      <div className="hero-content">
        <h1>Проект Магарешко Мляко</h1>
        <p>Открийте хранителните и здравословни ползи на този забележителен природен дар</p>
        <button className="cta-button">Научете повече</button>
      </div>
      <div className="hero-image">
        {/* Replace with actual donkey/milk image */}
        <img src="/images/donkey-milk.jpg" alt="Производство на магарешко мляко" />
      </div>
    </div>
  );
};

export default HeroSection;
