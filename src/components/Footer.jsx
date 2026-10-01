import React from 'react';
import { data } from '../data';

export default function Footer({ language }) {
  const content = data[language].footer;

  return (
    <footer className="bg-[#F7F7F7] dark:bg-[#140E2D] py-20 px-6 md:px-20 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4832D3] dark:text-[#CBF281] leading-tight mb-6">
            {content.title}
          </h2>
          <a 
            href={`mailto:${content.email}`}
            className="text-lg font-semibold text-[#4832D3] dark:text-[#CBF281] hover:underline flex items-center gap-2"
          >
            👉 {content.email}
          </a>
        </div>

        <div className="flex gap-6 text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#4832D3] dark:hover:text-[#CBF281] transition"
          >
            {content.github}
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#4832D3] dark:hover:text-[#CBF281] transition"
          >
            {content.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}