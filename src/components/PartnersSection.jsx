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
          <img src="/images/flag-eu.png" alt="Европейски съюз" className="eu-logo" />
          <div className="funding-text">
            <h3>Проект, финансиран от ЕС</h3>
            <p>
            Програма за развитие на селските райони за периода 2014- 2020 г. по процедура чрез подбор на проектни предложения по подмярка 16.1. „Подкрепа за сформиране и функциониране на оперативни групи в рамките на ЕПИ“ по мярка 16 „Сътрудничество“ Проект № BG06RDNP001-16.003-0030
            </p>
          </div>
        </div>
      </div>

      <div className="partners-grid">
        <h3>Партньори по проекта</h3>
        <div className="partner-logos">
          {/* Replace with actual partner logos */}
          <div className="partner-logo">
            <img src="/images/ICBFT.png" alt="ИНСТИТУТ ПО КРИОБИОЛОГИЯ И ХРАНИТЕЛНИ ТЕХНОЛОГИИ" />
          </div>
          <div className="partner-logo" style={{ textAlign: 'center' }}>
            <h4>Фермата 2016 ЕООД</h4>
          </div>
          <div className="partner-logo">
            <img src="/images/assoc.png" alt="асоциация на магарешките ферми в българия" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
