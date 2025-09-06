import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page and store section to scroll to
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = '/';
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNewsClick = () => {
    navigate('/news');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Improved link style that doesn't cause layout shifts
  const getLinkStyle = (index) => {
    const isHovered = hoveredLink === index;
    return {
      color: isHovered ? '#3B82F6' : '#1a202c',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 600, // Keep font weight constant to prevent width changes
      position: 'relative',
      padding: '0.25rem 0.5rem',
      transition: 'color 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      display: 'inline-block',
      textShadow: isHovered ? '0 1px 2px rgba(59, 130, 246, 0.2)' : 'none',
      borderRadius: '4px',
    };
  };

  // Underline style - will be positioned absolutely under the link
  const getUnderlineStyle = (index) => {
    const isHovered = hoveredLink === index;
    return {
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      width: '100%',
      height: '2px',
      backgroundColor: '#3B82F6',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'center',
      opacity: isHovered ? 1 : 0,
    };
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: isScrolled ? 'white' : 'white', // Changed from transparent to white for better visibility
      boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : '0 1px 2px rgba(0,0,0,0.05)',
      padding: isScrolled ? '1.5rem 0' : '2rem 0', // Increased padding in both states
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#1a202c', 
              textDecoration: 'none',
            }}
          >
            МАГАРЕШКО МЛЯКО ДЗЗД
          </Link>
        </div>

        {/* Flags moved to HeroSection */}

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <nav style={{ display: window.innerWidth >= 1024 ? 'block' : 'none' }}>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              margin: 0, 
              padding: 0,
              gap: '2.5rem'
            }}>
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                style={{...getLinkStyle(0), background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={() => setHoveredLink(0)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Начало
                <div style={getUnderlineStyle(0)}></div>
              </button>
            </li>
            <li>
              <button 
                onClick={handleNewsClick}
                style={{...getLinkStyle(1), background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={() => setHoveredLink(1)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Новини
                <div style={getUnderlineStyle(1)}></div>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                style={{...getLinkStyle(2), background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={() => setHoveredLink(2)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                За нас
                <div style={getUnderlineStyle(2)}></div>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('benefits')}
                style={{...getLinkStyle(3), background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={() => setHoveredLink(3)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Ползи
                <div style={getUnderlineStyle(3)}></div>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('partners')}
                style={{...getLinkStyle(4), background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={() => setHoveredLink(4)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Партньори
                <div style={getUnderlineStyle(4)}></div>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                style={{...getLinkStyle(5), background: 'none', border: 'none', cursor: 'pointer'}}
                onMouseEnter={() => setHoveredLink(5)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Контакти
                <div style={getUnderlineStyle(5)}></div>
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          style={{
            display: window.innerWidth < 1024 ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '30px',
            height: '21px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            marginLeft: '24px'
          }}
        >
          <span style={{
            width: '30px',
            height: '3px',
            backgroundColor: '#1a202c',
            borderRadius: '9999px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '30px',
            height: '3px',
            backgroundColor: '#1a202c',
            borderRadius: '9999px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '30px',
            height: '3px',
            backgroundColor: '#1a202c',
            borderRadius: '9999px',
            transition: 'all 0.3s ease'
          }}></span>
        </button>
      </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '80%',
          maxWidth: '300px',
          height: '100vh',
          backgroundColor: 'white',
          padding: '6rem 2rem 2rem',
          zIndex: 5,
          boxShadow: '-2px 0 10px rgba(0,0,0,0.1)'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {/* Removed the text as requested */}
            
            {/* Flags moved to HeroSection */}

            <li style={{ margin: '1.5rem 0' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('home');
                }}
                style={{
                  color: '#1a202c',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3B82F6';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1a202c';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Начало
              </button>
            </li>
            <li style={{ margin: '1.5rem 0' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNewsClick();
                }}
                style={{
                  color: '#1a202c',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3B82F6';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1a202c';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Новини
              </button>
            </li>
            <li style={{ margin: '1.5rem 0' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('about');
                }}
                style={{
                  color: '#1a202c',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3B82F6';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1a202c';
                  e.target.style.paddingLeft = '0';
                }}
              >
                За нас
              </button>
            </li>
            <li style={{ margin: '1.5rem 0' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('benefits');
                }}
                style={{
                  color: '#1a202c',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3B82F6';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1a202c';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Ползи
              </button>
            </li>
            <li style={{ margin: '1.5rem 0' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('partners');
                }}
                style={{
                  color: '#1a202c',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3B82F6';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1a202c';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Партньори
              </button>
            </li>
            <li style={{ margin: '1.5rem 0' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('contact');
                }}
                style={{
                  color: '#1a202c',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'block',
                  padding: '0.5rem 0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3B82F6';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1a202c';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Контакти
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
};

export default Header;
