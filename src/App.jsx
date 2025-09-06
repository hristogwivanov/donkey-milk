import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import './App.css';

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
    <Router>
      <div className="w-full" style={fontStyles}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
