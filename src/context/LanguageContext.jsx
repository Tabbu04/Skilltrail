import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export const languageOptions = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
];

function getNestedValue(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("skilltrail-language") || "en";
  });

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem("skilltrail-language", nextLanguage);
  };

  const t = (key, replacements = {}) => {
    const value =
      getNestedValue(translations[language], key) ??
      getNestedValue(translations.en, key) ??
      key;

    if (typeof value !== "string") return key;

    return Object.entries(replacements).reduce(
      (result, [placeholder, replacement]) =>
        result.replace(`{{${placeholder}}}`, replacement),
      value
    );
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      t,
      languageOptions,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}