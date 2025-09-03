// src/paginas/About.jsx
import React from "react";
import { Code, Zap, Target, Sparkles, Rocket, Heart } from "lucide-react";
import { aboutCards, aboutHighlights } from "../data/about";
import { useTranslation } from "react-i18next";

const ICONS = { Code, Zap, Target, Sparkles, Rocket, Heart };

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full max-w-[100vw] overflow-hidden bg-black py-24 md:py-32"
    >
      {/* BG decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-16 left-4 sm:left-10 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-[#577BC1]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-4 sm:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-[#FFEB00]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] md:h-[600px] md:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#577BC1]/20 via-transparent to-[#FFEB00]/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-[#577BC1]" />
            <Sparkles className="text-[#FFEB00]" size={24} />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-[#577BC1]" />
          </div>

          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent">
              {t("Desarrollador Fullstack (Junior)")}
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 md:text-xl">
            {t("Dando mis primeros pasos con proyectos sencillos y muchas ganas de aprender y mejorar.")}
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Columna texto */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-3 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#577BC1] via-[#FFEB00] to-[#577BC1]" />
              <div className="pl-6 sm:pl-8">
                <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
                  {t("Soy un desarrollador junior que disfruta construyendo")}{" "}
                  <span className="font-semibold text-[#577BC1]">{t("pequeños proyectos")}</span>{" "}
                  {t("para aprender haciendo.")}
                </p>
                <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
                  {t("Me siento cómodo con")}{" "}
                  <span className="font-semibold text-[#FFEB00]">
                    {t("React, Tailwind y Node.js")}
                  </span>{" "}
                  {t("a nivel básico, y sigo mejorando con práctica constante. También tengo conocimientos introductorios en")}{" "}
                  <span className="font-semibold text-[#577BC1]">{t("Python")}</span>{" "}
                  {t("y he empezado a explorar el mundo de la")}{" "}
                  <span className="font-semibold text-[#FFEB00]">
                    {t("inteligencia artificial")}
                  </span>
                  {t(", un área que me interesa mucho y en la que quiero seguir profundizando.")}
                </p>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                  {t("Busco oportunidades para")}{" "}
                  <span className="font-semibold text-[#577BC1]">
                    {t("colaborar, aprender de un equipo experimentado y crecer profesionalmente")}
                  </span>
                  {t(", aportando motivación y ganas de mejorar en cada proyecto.")}
                </p>
              </div>
            </div>
          </div>

          {/* Columna tarjetas (desde data/about.js) */}
          <div className="grid gap-6">
            {aboutCards.map(({ icon, titulo, texto }, i) => {
              const Icon = ICONS[icon] || Sparkles;
              const borderHover =
                i === 0
                  ? "hover:border-[#577BC1]/50"
                  : i === 1
                  ? "hover:border-[#FFEB00]/50"
                  : "hover:border-purple-500/50";
              const glow =
                i === 0
                  ? "from-[#577BC1]/20 to-[#FFEB00]/20"
                  : i === 1
                  ? "from-[#FFEB00]/20 to-[#577BC1]/20"
                  : "from-purple-500/20 to-pink-500/20";
              const pillBg =
                i === 0
                  ? "from-[#577BC1] to-[#344CB7]"
                  : i === 1
                  ? "from-[#FFEB00] to-[#FFC107]"
                  : "from-purple-500 to-pink-500";
              const pillIconColor = i === 1 ? "text-black" : "text-white";

              return (
                <div key={titulo} className="group relative">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${glow} blur-xl transition-all duration-500 group-hover:blur-2xl`}
                  />
                  <div
                    className={`relative rounded-2xl border border-gray-800/50 bg-gray-900/40 p-7 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] ${borderHover} sm:p-8`}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`rounded-xl bg-gradient-to-br ${pillBg} p-3`}>
                        <Icon className={pillIconColor} size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{t(titulo)}</h3>
                    </div>
                    <p className="leading-relaxed text-gray-300">{t(texto)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights inferiores */}
        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3">
          {aboutHighlights.map(({ icon, titulo, texto }) => {
            const Icon = ICONS[icon] || Code;
            const glow =
              icon === "Code"
                ? "bg-[#577BC1]/20"
                : icon === "Zap"
                ? "bg-[#FFEB00]/20"
                : "bg-purple-500/20";
            const bubble =
              icon === "Code"
                ? "from-[#577BC1] to-[#344CB7]"
                : icon === "Zap"
                ? "from-[#FFEB00] to-[#FFC107]"
                : "from-purple-500 to-pink-500";
            const iconColor = icon === "Zap" ? "text-black" : "text-white";

            return (
              <div key={titulo} className="group text-center">
                <div className="relative mb-4 inline-block">
                  <div
                    className={`absolute inset-0 rounded-full ${glow} blur-xl transition-all duration-500 group-hover:blur-2xl`}
                  />
                  <div
                    className={`relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${bubble}`}
                  >
                    <Icon className={iconColor} size={32} />
                  </div>
                </div>
                <h4 className="mb-2 text-2xl font-bold text-white">{t(titulo)}</h4>
                <p className="text-gray-400">{t(texto)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
