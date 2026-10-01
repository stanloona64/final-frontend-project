import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Profile() {
  const { apiData, language } = useContext(LanguageContext);
  if (!apiData) return null;

  const content = apiData.profile;

  return (
    <section className="bg-[#4731D3] dark:bg-[#171023] py-16 px-6 md:px-20 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#CBF281] mb-12 text-left">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-left">
          <div className="bg-[#523EB7] dark:bg-[#2B2638] p-6 rounded-2xl shadow-md text-left">
            <h3 className="text-xl font-bold text-[#CBF281] mb-6 text-left">
              {language === 'tr' ? 'Temel Bilgiler' : 'Basic Information'}
            </h3>
            <ul className="space-y-4 text-sm text-left">
              {content.basicMetrics.map((item, index) => (
                <li key={index} className="flex flex-col text-left">
                  <span className="text-[#CBF281] font-semibold">{item.label}</span>
                  <span className="text-gray-100">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center text-left">
            <img 
              src="https://i.ibb.co/VcJycPhY/beyzaonal.png" 
              alt="Profile" 
              className="w-64 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#CBF281]"
            />
          </div>

          <div className="bg-[#523EB7] dark:bg-[#2B2638] p-6 rounded-2xl shadow-md flex flex-col justify-between h-full text-left">
            <div>
              <h3 className="text-xl font-bold text-[#CBF281] mb-6 text-left">
                {content.aboutTitle}
              </h3>
              <p className="text-gray-100 text-sm leading-relaxed mb-4 text-left">
                {content.aboutText1}
              </p>
              <p className="text-gray-100 text-sm leading-relaxed text-left">
                {content.aboutText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}