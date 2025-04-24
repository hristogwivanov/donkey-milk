import React, { useState, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const revealRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 20px rgba(117, 170, 58, 0.4)';
    
    if (revealRef.current) {
      revealRef.current.style.transform = 'translateX(100%)';
      revealRef.current.style.transition = 'transform 0.8s ease';
    }
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 14px rgba(117, 170, 58, 0.3)';
    
    if (revealRef.current) {
      revealRef.current.style.transform = 'translateX(-100%)';
      revealRef.current.style.transition = 'transform 0.4s ease';
    }
  };

  const handleClick = () => {
    // Scroll to the About section when clicked
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        <h1 className="hero-title" style={{ fontSize: '2rem', textAlign: 'left' }}>Проект "Иновативни продукти, плод от забравени традиции"</h1>
        <br />
        <p className="hero-description">
          Открийте хранителните и здравословни ползи на този забележителен природен дар
        </p>
        <br />
        
        {/* Enhanced button with more modern styling */}
        <button 
          style={{
            backgroundColor: '#75AA3A',
            color: 'white',
            fontSize: '1.125rem',
            fontWeight: 600,
            padding: '0.875rem 2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 14px rgba(117, 170, 58, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            Научете повече
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                marginLeft: '6px',
                transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
          
          {/* Animated reveal effect */}
          <div 
            ref={revealRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
              transform: 'translateX(-100%)',
              pointerEvents: 'none',
            }}
            className="reveal-effect"
          />
        </button>
      </div>
        {/* Replace with actual donkey/milk image */}
        <img 
          src="/images/milk-production.png" 
          alt="Производство на магарешко мляко" 
          className="hero-image"
        />
    </div>
  );
};

export default HeroSection;