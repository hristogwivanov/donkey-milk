import React, { useState, useEffect } from 'react';
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

  // Track which fields have been touched
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  // Track validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '' ? 'Името е задължително' : '',
      email: formData.email.trim() === '' ? 'Email е задължителен' : 
             !isValidEmail(formData.email) ? 'Моля, въведете валиден Email' : '',
      subject: formData.subject.trim() === '' ? 'Темата е задължителна' : '',
      message: formData.message.trim() === '' ? 'Съобщението е задължително' : ''
    };
    
    setErrors(newErrors);
    
    // Return true if there are no errors
    return Object.values(newErrors).every(error => error === '');
  };
  
  // Handle field blur - mark field as touched
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate just this field on blur
    validateField(name, formData[name]);
  };

  // Validate single field
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        error = value.trim() === '' ? 'Името е задължително' : '';
        break;
      case 'email':
        if (value.trim() === '') {
          error = 'Email е задължителен';
        } else if (!isValidEmail(value)) {
          error = 'Моля, въведете валиден Email';
        }
        break;
      case 'subject':
        error = value.trim() === '' ? 'Темата е задължителна' : '';
        break;
      case 'message':
        error = value.trim() === '' ? 'Съобщението е задължително' : '';
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // If field has been touched, validate on change
    if (touched[name]) {
      validateField(name, value);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    // Validate all fields
    const isValid = validateForm();
    
    if (!isValid) {
      return;
    }
    
    setFormStatus({ submitting: true, success: false, error: false });
    
    try {
      // This will be connected to Formspree later
      // Placeholder for future implementation
      console.log('Form submitted:', formData);
      
      // Simulate successful submission for now
      setTimeout(() => {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      }, 1500);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };
  
  // Clear success message after a delay
  useEffect(() => {
    let timer;
    if (formStatus.success) {
      timer = setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    }
    
    return () => clearTimeout(timer);
  }, [formStatus.success]);

  return (
    <div className="contact-content-wrapper">
      <div className="text-center mb-8">
        <h2 className="section-title">Свържете се с нас</h2>
      </div>
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
        <div className={`form-group ${touched.name && errors.name ? 'error' : touched.name && !errors.name ? 'success' : ''}`}>
          <label htmlFor="name">Име</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Вашето име"
            disabled={formStatus.submitting}
            className={touched.name ? (errors.name ? 'input-error' : 'input-success') : ''}
          />
          {touched.name && errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        
        <div className={`form-group ${touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'success' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Вашият Email"
            disabled={formStatus.submitting}
            className={touched.email ? (errors.email ? 'input-error' : 'input-success') : ''}
          />
          {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className={`form-group ${touched.subject && errors.subject ? 'error' : touched.subject && !errors.subject ? 'success' : ''}`}>
          <label htmlFor="subject">Тема</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Тема на съобщението"
            disabled={formStatus.submitting}
            className={touched.subject ? (errors.subject ? 'input-error' : 'input-success') : ''}
          />
          {touched.subject && errors.subject && <div className="error-message">{errors.subject}</div>}
        </div>
        
        <div className={`form-group ${touched.message && errors.message ? 'error' : touched.message && !errors.message ? 'success' : ''}`}>
          <label htmlFor="message">Съобщение</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Вашето съобщение"
            rows="5"
            disabled={formStatus.submitting}
            className={touched.message ? (errors.message ? 'input-error' : 'input-success') : ''}
          ></textarea>
          {touched.message && errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={formStatus.submitting || Object.values(errors).some(error => error !== '')}
        >
          {formStatus.submitting ? (
            <span className="button-content">
              <span className="loading-spinner"></span>
              Изпращане...
            </span>
          ) : (
            <span className="button-content">Изпрати съобщение</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
