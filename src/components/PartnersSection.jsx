import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  return (
    <div className="partners-content-wrapper">
      <div className="text-center mb-8">
        <h2 className="section-title">Нашите партньори и финансиране</h2>
      </div>
      
      <div className="funding-info">
        <div className="eu-funding">
          <img src="/images/eu-logo.png" alt="Европейски съюз" className="eu-logo" />
          <div className="funding-text">
            <h3>Проект, финансиран от ЕС</h3>
            <p>
              Този проект е получил финансиране от програмата за научни изследвания и иновации
              „Хоризонт Европа" на Европейския съюз по споразумение за отпускане на безвъзмездни
              средства № XXXXXX.
            </p>
          </div>
        </div>
      </div>
      
      <div className="partners-grid">
        <h3>Партньори по проекта</h3>
        <div className="partner-logos">
          {/* Replace with actual partner logos */}
          <div className="partner-logo">
            <img src="/images/partner1-logo.png" alt="Партньорска организация 1" />
          </div>
          <div className="partner-logo">
            <img src="/images/partner2-logo.png" alt="Партньорска организация 2" />
          </div>
          <div className="partner-logo">
            <img src="/images/partner3-logo.png" alt="Партньорска организация 3" />
          </div>
          <div className="partner-logo">
            <img src="/images/partner4-logo.png" alt="Партньорска организация 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
