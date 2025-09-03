// src/paginas/Hero.jsx
import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const email = "elmouddenbilal04@gmail.com";

  // Abrir Gmail compose con fallback a mailto
  const handleEmailClick = (e) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    const mailto = `mailto:${email}`;
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = mailto;
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-[100vw] min-h-[88vh] overflow-hidden flex items-center justify-center bg-black text-white px-4 sm:px-6"
    >
      {/* Grid sutil animada */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `
              linear-gradient(rgba(87,123,193,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(87,123,193,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Figuras suaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-4 sm:left-12 w-28 sm:w-32 h-28 sm:h-32 border border-[#577BC1]/10 rotate-45" />
        <div className="absolute top-48 right-6 sm:right-24 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#FFEB00]/10 to-transparent rounded-full" />
        <div className="absolute bottom-28 left-6 sm:left-16 w-14 sm:w-16 h-14 sm:h-16 border-2 border-[#577BC1]/10" />
        <div className="absolute bottom-10 right-10 sm:right-40 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr from-[#577BC1]/10 to-[#FFEB00]/10 rotate-12" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="inline-block bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent bg-300% animate-gradient">
            {/* El nombre no suele traducirse */}
            Bilal El Moudden
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-3">
          {t("hero.dev")}{" "}
          <span className="text-[#577BC1] font-semibold">{t("hero.junior")}</span>{" "}
          {t("hero.learning")}{" "}
          <span className="text-[#FFEB00] font-semibold">{t("hero.modernTechs")}</span>.
        </p>

        <p className="text-sm md:text-base text-gray-400 mb-10">
          {t("hero.subtitle")}
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="group relative overflow-hidden bg-gradient-to-r from-[#577BC1] to-[#344CB7] hover:from-[#FFEB00] hover:to-[#577BC1] text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#577BC1]/30 flex items-center justify-center gap-2"
          >
            {t("hero.cta.work")}
            <ArrowDown size={18} className="group-hover:translate-y-1 group-hover:rotate-90 transition-all duration-300" />
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          </a>

          <a
            href="#contact"
            className="group border-2 border-[#577BC1] text-[#577BC1] hover:bg-[#577BC1] hover:text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#577BC1]/30"
          >
            {t("hero.cta.talk")}
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-5 mb-12">
          <span className="text-gray-500 text-sm">{t("hero.follow")}</span>
          <div className="flex gap-3">
            <a
              href="https://github.com/bilalelmoudden04"
              target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-[#577BC1] transition hover:scale-110"
            >
              <Github size={18} className="text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-[#577BC1] transition hover:scale-110"
            >
              <Linkedin size={18} className="text-gray-300" />
            </a>
            <a
              href="#"
              onClick={handleEmailClick}
              className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-[#FFEB00] transition hover:scale-110"
            >
              <Mail size={18} className="text-gray-300" />
            </a>
          </div>
        </div>

        {/* Indicador scroll */}
        <div className="mx-auto w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center items-start">
          <div className="w-1.5 h-3 bg-[#577BC1] rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-xs text-gray-400 mt-3">{t("hero.discoverMore")}</p>
      </div>
    </section>
  );
};

export default Hero;
