import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import BenefitsSection from './components/BenefitsSection'
import PartnersSection from './components/PartnersSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

// Font styles for consistent application
const fontStyles = {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
};

// Background styles with natural scene
const backgroundStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.18) 100%), url('/images/donkey-field-bg.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  opacity: 1.0,
  zIndex: -1
};

// Common container style for all sections
const containerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.93)', 
  borderRadius: '12px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
  padding: '2rem',
  marginBottom: '2rem'
};

function App() {
  return (
    <div className="w-full" style={fontStyles}>
      <Header />
      
      {/* Fixed position background image */}
      <div style={backgroundStyles} aria-hidden="true"></div>
      
      <main className="w-full pt-36 relative">
        <section id="home" className="w-full py-24">
          <div className="center-container" style={containerStyle}>
            <HeroSection />
          </div>
        </section>
        
        <section id="about" className="w-full py-24">
          <div className="center-container" style={containerStyle}>
            <AboutSection />
          </div>
        </section>
        
        <section id="benefits" className="w-full py-24">
          <div className="center-container" style={containerStyle}>
            <BenefitsSection />
          </div>
        </section>
        
        <section id="partners" className="w-full py-24">
          <div className="center-container" style={containerStyle}>
            <PartnersSection />
          </div>
        </section>
        
        <section id="contact" className="w-full py-24">
          <div className="center-container" style={containerStyle}>
            <ContactForm />
          </div>
        </section>
      </main>
      
      {/* Add extra margin and a subtle, shorter fade effect before the footer */}
      <div style={{ height: '48px' }} />
      <div 
        style={{
          position: 'relative',
          height: '40px',
          width: '100%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, #111827 100%)',
          marginTop: '-40px',
          zIndex: -1
        }}
      />
      <Footer />
    </div>
  )
}

export default App
