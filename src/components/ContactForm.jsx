import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-content-wrapper">
      <div className="text-center mb-8">
        <h2 className="section-title">Свържете се с нас</h2>
      </div>
      <p>Имате въпроси относно нашия проект или продуктите от магарешко мляко? Свържете се с нас!</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div className="contact-details">
            <h3>Имейл</h3>
            <a href="mailto:gerganastoeva54@gmail.com">gerganastoeva54@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div className="contact-details">
            <h3>Телефон</h3>
            <a href="tel:+359882525227">+359 88 25 25 227</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </div>
          <div className="contact-details">
            <h3>Facebook</h3>
            <a href="https://www.facebook.com/people/Donkey-Milk/100086418891295/" target="_blank" rel="noopener noreferrer">Donkey Milk</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
