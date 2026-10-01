import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import data from "../mocks/data.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApiData = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://reqres.in/api/workintech", data);
      const currentData = response.data[language] || data[language];
      setApiData(currentData);
    } catch (error) {
      console.error("Error fetching data, falling back to local mock:", error);
      setApiData(data[language]);
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
  };

  useEffect(() => {
    fetchApiData();
  }, [language]);

  if (loading || !apiData) {
    return <div className="flex justify-center items-center h-screen bg-white dark:bg-[#140E2D] text-gray-800 dark:text-white">Yükleniyor...</div>;
  }

  return (
    <LanguageContext.Provider value={{ apiData, language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};