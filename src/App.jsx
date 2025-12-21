import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Portfolio isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
        />
        <Route 
          path="/certificates" 
          element={<Certificates isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
