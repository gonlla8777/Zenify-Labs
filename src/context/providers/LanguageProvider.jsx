/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { languageContext } from "..";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "spanish"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}
