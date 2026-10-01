import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Footer() {
  const { apiData, language } = useContext(LanguageContext);
  if (!apiData) return null;
  const footerData = apiData.footer?.[language] || apiData.footer;

  return (
    <footer className="bg-white dark:bg-[#140E2D] py-20 px-6 text-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#4731D3] dark:text-[#CBF281] mb-6 text-center">
          {footerData?.title || (language === 'tr' ? "Bana mesaj gönderin." : "Send me a message.")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-xl text-center leading-relaxed">
          {footerData?.description || (language === 'tr' ? "Bir sorunuz ya da isteğiniz mi var, ya da sadece merhaba demek mi istiyorsunuz. O zaman buyrun." : "Got a question or proposal, or just want to say hello? Go ahead.")}
        </p>
        <a 
          href={`mailto:${footerData?.email || "onal.beyza@gmail.com"}`}
          className="text-[#4731D3] dark:text-[#CBF281] font-semibold text-lg md:text-xl hover:underline mb-12 block text-center"
        >
          {footerData?.email || "onal.beyza@gmail.com"}
        </a>

        <div className="flex items-center justify-center gap-8 text-[#4731D3] dark:text-[#CBF281]">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-transform hover:scale-110">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <a href="mailto:onal.beyza@gmail.com" className="hover:opacity-80 transition-transform hover:scale-110">
            <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-transform hover:scale-110">
            <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}