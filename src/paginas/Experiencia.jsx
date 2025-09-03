// src/paginas/Experiencia.jsx
import React from "react";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Experiencia() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: "Desarrollador en Prácticas",
      company: "Iris Technology Solutions",
      location: "Barcelona, España",
      period: "Septiembre 2024 − Marzo 2025",
      description:
        "Apoyo en desarrollo de simulaciones 2D en Java. Primer contacto con metodologías ágiles, trabajo en equipo y control de versiones.",
      achievements: [
        "Simulaciones 2D interactivas con Java (lógica básica y rendering).",
        "Desarrollo de pequeñas funcionalidades aplicando principios de POO.",
        "Práctica con estructuras de control, colecciones y lógica aplicada en Java.",
        "Trabajo en ejercicios prácticos centrados en lógica y fundamentos de programación."
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full max-w-[100vw] overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-20 top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#577BC1]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-16 right-20 h-64 w-64 rounded-full bg-gradient-to-tl from-[#FFEB00]/15 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,123,193,0.05),transparent_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#577BC1]" />
            <Sparkles className="text-[#FFEB00]" size={24} />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#577BC1]" />
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent">
              {t("Experiencia")}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            {t("Prácticas y primeros pasos en entornos reales, con foco en aprender y aportar.")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gray-800 md:block" aria-hidden="true" />
          <div className="absolute left-1/2 top-0 block h-full w-px -translate-x-1/2 bg-gray-800 md:hidden" aria-hidden="true" />

          <ol className="space-y-10">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative md:pl-24">
                {/* Punto del timeline */}
                <div
                  className="
                    absolute left-8 top-4 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-[#577BC1] shadow md:block
                  "
                  aria-hidden="true"
                />
                <div
                  className="
                    absolute left-1/2 top-4 block h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-[#577BC1] shadow md:hidden
                  "
                  aria-hidden="true"
                />

                {/* Tarjeta */}
                <div className="relative rounded-2xl border border-gray-800/60 bg-gray-900/40 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">{t(exp.title)}</h3>
                      <p className="text-lg font-semibold text-[#577BC1]">{t(exp.company)}</p>
                    </div>

                    <div className="text-gray-400">
                      <div className="flex items-center justify-start md:justify-end">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm md:text-base">{t(exp.period)}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-start md:justify-end">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm md:text-base">{t(exp.location)}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 leading-relaxed text-gray-300">{t(exp.description)}</p>

                  {/* Logros */}
                  {exp.achievements?.length > 0 && (
                    <div className="mt-5">
                      <h4 className="mb-2 font-semibold text-white">{t("Tareas / logros:")}</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-[#FFEB00]" />
                            <span className="text-gray-300">{t(a)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
