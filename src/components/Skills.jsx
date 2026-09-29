import React from 'react';
import { data } from '../data';

export default function Skills({ language }) {
  const content = data[language].skills;
  const titleText = language === 'tr' ? 'Yetenekler' : 'Skills';

  return (
    <section className="bg-white dark:bg-[#252128] py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4832D3] dark:text-[#CBF281] mb-12">
          {titleText}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {content.map((skill, index) => (
            <div 
              key={index} 
              className="bg-[#F7F7F7] dark:bg-[#382F48] p-4 rounded-xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg p-2 flex items-center justify-center shadow-inner">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm md:text-base uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}