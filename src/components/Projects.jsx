import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Projects() {
  const { apiData, language } = useContext(LanguageContext);
  if (!apiData || !apiData.projects) return null;

  const content = apiData.projects[language] || apiData.projects;

  return (
    <section className="bg-[#CBF281] dark:bg-[#1A2E05] py-16 px-6 md:px-20 transition-colors duration-300 text-left">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4731D3] dark:text-[#CBF281] mb-12 text-left">
          {content.title}
        </h2>

        <div className="space-y-10 text-left">
          {content.list.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#2B2638] rounded-2xl overflow-hidden shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 text-left"
            >
              {project.image && (
                <div className="w-full md:w-1/2 flex-shrink-0 text-left">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                  />
                </div>
              )}
              <div className="w-full md:w-1/2 flex flex-col justify-between text-left">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#4731D3] dark:text-[#CBF281] mb-4 text-left">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 text-left">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 text-left">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-[#4731D3] dark:bg-[#382F48] text-white dark:text-[#CBF281] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-6 font-semibold text-sm pt-4 border-t border-gray-100 dark:border-gray-700 text-left">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#4731D3] dark:text-[#CBF281] hover:underline"
                    >
                      Github
                    </a>
                  )}
                  {project.app && (
                    <a 
                      href={project.app} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#4731D3] dark:text-[#CBF281] hover:underline"
                    >
                      View Site ➔
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}