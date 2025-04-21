import React, { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Handle responsive layout changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#111827', // Very dark blue-gray
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      position: 'relative',
    }}>
      {/* Top wave decoration */}
      <div style={{
        position: 'absolute',
        top: '-3px',
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: 'rotate(180deg)',
      }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: '40px',
            fill: '#111827', // Same as footer background
          }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="center-container">
        {/* Footer columns container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Column 1: About */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
            }}>
              Проект Магарешко Мляко
            </h3>
            <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
              Опознайте ползите на магарешкото мляко чрез нашия проект, посветен на тази уникална суперхрана.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {/* Social Media Icons */}
              <a href="#" style={{ color: '#E5E7EB', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#3B82F6'} onMouseOut={(e) => e.target.style.color = '#E5E7EB'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" style={{ color: '#E5E7EB', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#3B82F6'} onMouseOut={(e) => e.target.style.color = '#E5E7EB'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" style={{ color: '#E5E7EB', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#3B82F6'} onMouseOut={(e) => e.target.style.color = '#E5E7EB'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem', 
              color: '#D1D5DB',
            }}>
              Бързи връзки
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a 
                  href="#home" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Начало
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  За нас
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Ползи
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Партньори
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal Information */}
          <div>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem', 
              color: '#D1D5DB',
            }}>
              Правна информация
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a 
                  href="/privacy-policy" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Политика за поверителност
                </a>
              </li>
              <li>
                <a 
                  href="/terms-of-service" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Общи условия
                </a>
              </li>
              <li>
                <a 
                  href="/cookie-policy" 
                  style={{ 
                    color: '#D1D5DB', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                  onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                >
                  Политика за бисквитките
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* EU Funding Box */}
        <div style={{
          backgroundColor: '#1F2937', // Slightly lighter dark blue-gray
          padding: '1.5rem',
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          marginBottom: '2.5rem',
        }}>
          <img 
            src="/images/eu-logo.png" 
            alt="Европейски съюз" 
            style={{
              height: '4rem',
              marginRight: '1rem',
              marginBottom: isMobile ? '1rem' : 0,
            }} 
          />
          <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: '1.5' }}>
            Този проект е получил финансиране от програмата за научни изследвания и иновации
            „Хоризонт Европа" на Европейския съюз по споразумение за отпускане на безвъзмездни
            средства № XXXXXX. Съдържанието на този уебсайт отразява само възгледите на авторите.
            Европейската комисия не носи отговорност за каквото и да е използване на информацията,
            която се съдържа в него.
          </p>
        </div>
        
        {/* Copyright Section */}
        <div style={{
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid #374151', // Lighter border for contrast
        }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
            &copy; {currentYear} Проект Магарешко Мляко. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
