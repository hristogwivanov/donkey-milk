import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import BenefitsSection from './components/BenefitsSection'
import PartnersSection from './components/PartnersSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import TailwindTest from './TailwindTest'

// Font styles for consistent application
const fontStyles = {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
};

function App() {
  const [showTest, setShowTest] = useState(false);
  
  return (
    <div className="w-full" style={fontStyles}>
      <Header />
      
      {/* Floating button for showing Tailwind test */}
      <button 
        onClick={() => setShowTest(!showTest)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full z-50"
      >
        Test
      </button>
      
      {/* Test overlay */}
      {showTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="max-w-2xl w-full p-4 bg-white rounded-lg">
            <TailwindTest />
            <button 
              onClick={() => setShowTest(false)}
              className="mt-4 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Increased top padding from pt-24 to pt-36 to prevent overlap */}
      <main className="w-full pt-36">
        {/* First section also needs more top padding */}
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
