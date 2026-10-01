import React from 'react';
import { data } from '../data';

export default function Skills({ language }) {
  const content = data[language].skills;
  const title = language === 'tr' ? 'Yetenekler' : 'Skills';

  return (
    <section className="bg-white dark:bg-[#252128] py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4832D3] dark:text-[#CBF281] mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {content.map((skill, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#F7F7F7] dark:bg-[#2B2638] p-4 rounded-xl shadow-sm">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              <span className="font-bold text-gray-800 dark:text-gray-200 uppercase text-sm tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}