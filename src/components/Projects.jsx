import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Projects() {
  const { apiData } = useContext(LanguageContext);
  if (!apiData) return null;

  const content = apiData.projects;

  return (
    <section className="bg-[#CBF281] dark:bg-[#1A2E05] py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4832D3] dark:text-[#CBF281] mb-12">
          {content.title}
        </h2>

        <div className="space-y-8">
          {content.list.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#2B2638] rounded-2xl overflow-hidden shadow-lg p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#4832D3] dark:text-[#CBF281] mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-[#4832D3] dark:bg-[#382F48] text-white dark:text-[#CBF281] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 font-semibold text-sm pt-4 border-t border-gray-100 dark:border-gray-700">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#4832D3] dark:text-[#CBF281] hover:underline"
                >
                  Github
                </a>
                <a 
                  href={project.app} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#4832D3] dark:text-[#CBF281] hover:underline"
                >
                  View Site ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}