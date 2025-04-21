import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Проект Магарешко Мляко</h3>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Бързи връзки</h4>
              <ul>
                <li><a href="#home">Начало</a></li>
                <li><a href="#about">За нас</a></li>
                <li><a href="#benefits">Ползи</a></li>
                <li><a href="#partners">Партньори</a></li>
                <li><a href="#contact">Контакти</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Правна информация</h4>
              <ul>
                <li><a href="/privacy-policy">Политика за поверителност</a></li>
                <li><a href="/terms-of-service">Общи условия</a></li>
                <li><a href="/cookie-policy">Политика за бисквитките</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="eu-disclaimer">
          <img src="/images/eu-logo.png" alt="Европейски съюз" className="eu-logo-small" />
          <p>
            Този проект е получил финансиране от програмата за научни изследвания и иновации
            „Хоризонт Европа" на Европейския съюз по споразумение за отпускане на безвъзмездни
            средства № XXXXXX. Съдържанието на този уебсайт отразява само възгледите на авторите.
            Европейската комисия не носи отговорност за каквото и да е използване на информацията,
            която се съдържа в него.
          </p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Проект Магарешко Мляко. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
