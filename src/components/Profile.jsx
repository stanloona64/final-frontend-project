import React from 'react';
import { data } from '../data';

export default function Profile({ language }) {
  const content = data[language].profile;
  return (
    <section className="bg-[#4731D3] dark:bg-[#171043] text-white py-16 px-6 md:px-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#CBF281]">
            {content.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[#5238EE] dark:bg-[#201552] p-8 rounded-2xl shadow-lg border border-[#6b51ff]">
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                    {content.title}
                    </h3>
                    <div className="space-y-4">
                        {content.basicMetrics.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row justify-between border-b border-[#6b51ff] pb-3 gap-1">
                                <span className="font-semibold text-[#CBF281]">{item.label}</span>
                                <span className="text-gray-100 text-right sm:max-w-[60%]">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                    {content.aboutTitle}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed mb-4">
                    {content.aboutText1}
                    </p>
                    <p className="text-gray-200 text-base leading-relaxed">
                    {content.aboutText2}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}