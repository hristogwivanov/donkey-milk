import React, { useState, useRef } from 'react';

const HeroSection = () => {
  const revealRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
    
    if (revealRef.current) {
      revealRef.current.style.transform = 'translateX(100%)';
      revealRef.current.style.transition = 'transform 0.8s ease';
    }
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.3)';
    
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
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Проект Магарешко Мляко</h1>
        <p className="text-xl mb-8 text-gray-600 leading-relaxed">
          Открийте хранителните и здравословни ползи на този забележителен природен дар
        </p>
        
        {/* Enhanced button with more modern styling */}
        <button 
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            color: 'white',
            fontSize: '1.125rem',
            fontWeight: 600,
            padding: '0.875rem 2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)',
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
      <div className="w-full md:w-1/2 max-w-2xl mt-8 md:mt-0">
        {/* Replace with actual donkey/milk image */}
        <img 
          src="/images/donkey-milk.jpg" 
          alt="Производство на магарешко мляко" 
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
