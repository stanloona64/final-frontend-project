import React from 'react';

export default function Header({ language, setLanguage, darkMode, setDarkMode }) {
    const content = language === 'tr' ?
    {
        title: "Frontend Developer'ım...",
        description: "...harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir arayüzler tasarlamayı seven.",
        modeSwitch: "DARK MODE",
    } :
    {
        title: "I am a Frontend Developer...",
        description: "...who likes to craft solid and scalable frontend products with great user experiences.",
        modeSwitch: "DARK MODE",
    };

    return (
        <header className="bg-[#4731D3] dark:bg-[#171043] text-white py-8 px-6 md:px-20 transition-colors duration-300">
            <div className="flex justify-end items-center gap-6 text-sm font-bold tracking-wider mb-12">
                <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} className="hover:opacity-80 transition cursor-pointer">
                    <span className="text-[#CBF281]">{language === 'tr' ? 'ENGLISH' : 'TÜRKÇE'}</span>
                    <span className="text-gray-300 font-normal ml-1">{language === 'tr' ? ' CHOOSE' : "'YE GEÇ"}</span>
                </button>
                <span className="text-gray-400">|</span>
                <button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
                    🌙 {content.modeSwitch}
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="max-w-xl">
                    <p className="text-[#CBF281] font-bold text-lg mb-4">beyza</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        {content.title}
                    </h1>
                    <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                        {content.description}
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#4731D3] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition flex items-center gap-2">
                            Github
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#4731D3] transition flex items-center gap-2">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#CBF281]">
                        <img src="https://i.ibb.co/VcJycPhY/beyzaonal.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}