// src/componentes/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";

// i18n
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // ⬇️ Claves estables para i18n
  const navItems = [
    { href: "#about", key: "nav.about" },
    { href: "#projects", key: "nav.projects" },
    { href: "#technologies", key: "nav.technologies" },
    { href: "#experience", key: "nav.experience" },
    { href: "#formacion", key: "nav.education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/30"
          : "bg-black/80 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Principal"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Nombre */}
          <a
            href="#home"
            className="font-bold text-2xl text-white hover:text-[#577BC1] transition-all duration-300 group"
          >
            <span className="bg-gradient-to-r from-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent group-hover:from-[#FFEB00] group-hover:to-[#577BC1] transition-all duration-500">
              Bilal El Moudden
            </span>
          </a>

          {/* Links centro (desktop desde md) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative font-medium text-gray-300 hover:text-white transition-all duration-300 group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#577BC1] to-[#FFEB00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Área derecha desktop: Switcher + Botón Contacto */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-[#577BC1] to-[#344CB7] hover:from-[#FFEB00] hover:to-[#577BC1] text-white px-6 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#577BC1]/25 flex items-center gap-2"
            >
              <Send size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>{t("nav.contact")}</span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            </a>
          </div>

          {/* Botón menú móvil (solo < md) */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800/50 transition-all duration-300"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={t("nav.openMenu")}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800/50"
          >
            {/* Switcher ES/EN en móvil */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/30">
              <span className="text-gray-400 text-sm">{t("nav.language")}</span>
              <LanguageSwitcher />
            </div>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 border-b border-gray-800/30 last:border-b-0"
              >
                {t(item.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mx-6 my-4 bg-gradient-to-r from-[#577BC1] to-[#344CB7] hover:from-[#FFEB00] hover:to-[#577BC1] text-white px-6 py-3 rounded-full font-medium text-center transition-all duration-300"
            >
              {t("nav.contact")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
