import React, { useState } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import './index.css';
function App() {
  const [language, setLanguage] = useState('tr');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
        <Skills language={language} />
        <Profile language={language} />
      </div>
    </div>
  );
}

export default App;