import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  // Using hardcoded year 2025 instead of current year
  const currentYear = 2025;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId = null) => {
    if (path === '/') {
      navigate('/');
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Scroll to top of page when no section specified
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

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
        {/* Footer columns container - adjusted column widths */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 0.5fr',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Column 1: About - Wider column */}
          <div style={{ paddingRight: '2rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
            }}>
              МАГАРЕШКО МЛЯКО ДЗЗД
            </h3>
            <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
              Опознайте ползите на магарешкото мляко чрез нашия проект, посветен на тази уникална суперхрана с множество полезни свойства за здравето. Нашата мисия е да проучим и популяризираме полезните ефекти на магарешкото мляко и да направим тези предимства достъпни за всички.
            </p>
          </div>

          {/* Column 2: Navigation - Middle column */}
          <div style={{ paddingRight: '1rem', textAlign: 'center' }}>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#D1D5DB',
            }}>
              Навигация
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <button
                    onClick={() => handleNavigation('/')}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                    onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    Начало
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/', 'about')}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                    onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    За нас
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/', 'benefits')}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                    onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    Ползи
                  </button>
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <button
                    onClick={() => handleNavigation('/', 'partners')}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                    onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    Партньори
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/', 'contact')}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3B82F6'}
                    onMouseOut={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    Контакти
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Social Media - Last column */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://www.facebook.com/people/Donkey-Milk/100086418891295/" target="_blank" rel="noopener noreferrer" style={{ color: '#E5E7EB', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#3B82F6'} onMouseOut={(e) => e.target.style.color = '#E5E7EB'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>

        </div>

        {/* EU Funding Box */}
        <div style={{
          backgroundColor: '#1F2937', // Slightly lighter dark blue-gray
          padding: '1.5rem',
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          minHeight: isMobile ? 'auto' : '8.5rem',
          marginBottom: '2.5rem',
        }}>
          <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: '1.5', marginBottom: '1.5rem' }}>
            Програма за развитие на селските райони за периода 2014- 2020 г.
            по процедура чрез подбор на проектни предложения по подмярка 16.1. „Подкрепа за сформиране и функциониране на оперативни групи в рамките на ЕПИ“
            по мярка 16 „Сътрудничество“ Проект № BG06RDNP001-16.003-0030


          </p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.25rem', width: '100%', justifyContent: 'space-between', marginTop: 'auto' }}>
            <img
              src="/images/flag-eu.png"
              alt="Европейски съюз"
              style={{ display: 'block', background: '#fff', borderRadius: '8px', height: '96px', width: 'auto', maxWidth: '160px', objectFit: 'cover', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
            />
            <img
              src="/images/flag-eip.png"
              alt="EIP"
              style={{ display: 'block', background: '#fff', borderRadius: '8px', height: '96px', width: 'auto', maxWidth: '160px', objectFit: 'cover', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
            />
            <img
              src="/images/flag-dvr.png"
              alt="DVR"
              style={{ display: 'block', background: '#fff', borderRadius: '8px', height: '96px', width: 'auto', maxWidth: '160px', objectFit: 'cover', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
            />
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid #374151', // Lighter border for contrast
        }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
            &copy; {currentYear} МАГАРЕШКО МЛЯКО ДЗЗД. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
