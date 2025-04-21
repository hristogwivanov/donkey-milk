import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home">Магарешко Мляко</a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Затвори меню' : 'Отвори меню'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Начало</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>За нас</a></li>
            <li><a href="#benefits" onClick={() => setMobileMenuOpen(false)}>Ползи</a></li>
            <li><a href="#partners" onClick={() => setMobileMenuOpen(false)}>Партньори</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Контакти</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
