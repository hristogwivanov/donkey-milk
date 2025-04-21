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

function App() {
  return (
    <div className="w-full" style={fontStyles}>
      <Header />
      
      <main className="w-full pt-36">
        <section id="home" className="w-full py-24 pt-12">
          <div className="center-container">
            <HeroSection />
          </div>
        </section>
        
        <section id="about" className="w-full bg-gray-50 py-24">
          <div className="center-container">
            <AboutSection />
          </div>
        </section>
        
        <section id="benefits" className="w-full py-24">
          <div className="center-container">
            <BenefitsSection />
          </div>
        </section>
        
        <section id="partners" className="w-full bg-gray-50 py-24">
          <div className="center-container">
            <PartnersSection />
          </div>
        </section>
        
        <section id="contact" className="w-full py-24">
          <div className="center-container">
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
