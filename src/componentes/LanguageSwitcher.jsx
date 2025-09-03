// src/componentes/LanguageSwitcher.jsx
import React from "react";
import i18n from "../i18n/i18n";

const LanguageSwitcher = () => {
  const [lang, setLang] = React.useState(i18n.language || "es");

  React.useEffect(() => {
    const handler = () => setLang(i18n.language);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  const change = (code) => {
    if (code !== lang) i18n.changeLanguage(code);
  };

  const languages = [
    {
      code: "es",
      flag: "🇪🇸",
      name: "Español"
    },
    {
      code: "en", 
      flag: "🇺🇸",
      name: "English"
    }
  ];

  return (
    <div
      className="relative flex items-center bg-white/5 rounded-lg border border-white/10"
      aria-label={lang === "es" ? "Cambiar idioma" : "Change language"}
      title={lang === "es" ? "Cambiar idioma" : "Change language"}
    >
      {/* Indicador de selección animado */}
      <div
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-white/15 rounded-md transition-all duration-200 ease-out ${
          lang === "es" ? "left-0.5" : "left-[calc(50%+1px)]"
        }`}
      />
      
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => change(language.code)}
          className={`relative z-10 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all duration-150 ease-out ${
            lang === language.code
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
          aria-pressed={lang === language.code}
          title={language.name}
        >
          <span className="text-sm leading-none" role="img" aria-label={`${language.name} flag`}>
            {language.flag}
          </span>
          <span className="font-medium">
            {language.code.toUpperCase()}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;