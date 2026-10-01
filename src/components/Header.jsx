import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Header() {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { language, toggleLanguage, apiData } = useContext(LanguageContext);

  if (!apiData || !apiData.header) return null;
  const header = apiData.header;

  return (
    <header className="relative bg-[#4731D3] dark:bg-[#171023] text-white overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CBF281] dark:bg-[#1A2E05] hidden md:block z-0"></div>
      <div className="relative z-10 py-6 px-6 md:px-20 text-left">
        <div className="flex justify-between items-center mb-16 max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-xl font-bold text-[#CBF281]">{header.name}</div>
          
          <div className="flex items-center gap-6 mr-12 md:mr-24">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold uppercase tracking-wider text-[#CBF281] hover:opacity-80"
            >
              {language === 'en' ? 'TÜRKÇE\'YE GEÇ' : 'SWITCH TO ENGLISH'}
            </button>

            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
              <div className={`w-12 h-6 flex items-center rounded-full p-1 ${darkMode ? 'bg-[#CBF281]' : 'bg-gray-400'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-6' : ''}`}></div>
              </div>
              <span className="text-xs font-semibold text-[#4731D3] dark:text-[#CBF281]">
                {darkMode ? 'DARK MODE' : 'LIGHT MODE'}
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-10">
          <div className="max-w-xl text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#CBF281] leading-tight mb-6">
              {header.title}
            </h1>
            <p className="text-gray-100 dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              {header.description}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-[#CBF281] text-[#CBF281] font-semibold hover:bg-[#CBF281] hover:text-black transition"
              >
                {header.github}
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-[#CBF281] text-[#CBF281] font-semibold hover:bg-[#CBF281] hover:text-black transition"
              >
                {header.linkedin}
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 z-20">
            <img 
              src="https://i.ibb.co/VcJycPhY/beyzaonal.png" 
              alt="Beyza Önal" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-[#CBF281]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}