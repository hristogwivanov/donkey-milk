import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });
    
    try {
      // This will be connected to Formspree later
      // Placeholder for future implementation
      console.log('Form submitted:', formData);
      
      // Simulate successful submission for now
      setTimeout(() => {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="contact-content-wrapper">
      <h2>Свържете се с нас</h2>
      <p>Имате въпроси относно нашия проект или продуктите от магарешко мляко? Свържете се с нас!</p>
      
      {formStatus.success && (
        <div className="form-success-message">
          Благодарим за съобщението! Ще се свържем с вас скоро.
        </div>
      )}
      
      {formStatus.error && (
        <div className="form-error-message">
          Възникна грешка при изпращането на съобщението. Моля, опитайте отново по-късно.
        </div>
      )}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Име</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Имейл</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Тема</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Съобщение</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={formStatus.submitting}
        >
          {formStatus.submitting ? 'Изпращане...' : 'Изпрати съобщение'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
