import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import BenefitsSection from './components/BenefitsSection'
import PartnersSection from './components/PartnersSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <main>
          <section id="home">
            <div className="section-container">
              <HeroSection />
            </div>
          </section>
          <section id="about">
            <div className="section-container">
              <AboutSection />
            </div>
          </section>
          <section id="benefits">
            <div className="section-container">
              <BenefitsSection />
            </div>
          </section>
          <section id="partners">
            <div className="section-container">
              <PartnersSection />
            </div>
          </section>
          <section id="contact">
            <div className="section-container">
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
