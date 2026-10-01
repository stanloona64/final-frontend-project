import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function MainContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#140E2D] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;