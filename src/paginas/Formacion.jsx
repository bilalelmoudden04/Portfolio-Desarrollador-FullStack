// src/paginas/Formacion.jsx
import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Formacion() {
  const { t } = useTranslation();

  const education = [
    {
      degree: "Desarrollo de Aplicaciones Web (FP Grado Superior)",
      institution: "Institut TIC de Barcelona",
      period: "2022 – 2025",
      description:
        "Formación enfocada en fundamentos de programación, desarrollo web y bases de datos. Proyectos sencillos para aprender practicando y trabajo en equipo.",
      highlights: [
        "Programación Orientada a Objetos",
        "Bases de datos",
        "Desarrollo Frontend",
        "Desarrollo Backend",
        "Prácticas en empresa",
      ],
    },
    {
      degree: "Bachillerato Tecnológico",
      institution: "Institut Quatre Cantons",
      period: "2020 – 2022",
      description:
        "Orientación técnica con base en matemáticas, física, tecnología e informática.",
      highlights: ["Tecnología", "Informática", "Matemáticas", "Ciencias aplicadas"],
    },
  ];

  return (
    <section
      id="formacion"
      className="relative w-full max-w-[100vw] overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-20 top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#577BC1]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-16 right-20 h-64 w-64 rounded-full bg-gradient-to-tl from-[#FFEB00]/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#577BC1]" />
            <GraduationCap className="text-[#FFEB00]" size={26} />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#577BC1]" />
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent">
              {t("Formación")}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            {t("Estudios que me han dado la base para comenzar como desarrollador junior.")}
          </p>
        </div>

        {/* Educación */}
        <div className="space-y-8">
          {education.map((edu, i) => (
            <article
              key={i}
              className="rounded-2xl border border-gray-800/60 bg-gray-900/40 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <h4 className="text-xl font-bold text-white md:text-2xl">{t(edu.degree)}</h4>
                  <p className="text-lg font-semibold text-[#577BC1]">{t(edu.institution)}</p>
                  <p className="mt-3 max-w-prose leading-relaxed text-gray-300">
                    {t(edu.description)}
                  </p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2 shrink-0" />
                  <span className="text-sm md:text-base">{edu.period}</span>
                </div>
              </div>

              {/* Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {edu.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-[#577BC1]/30 bg-[#577BC1]/10 px-3 py-1 text-sm font-medium text-[#9DB6F0]"
                  >
                    {t(h)}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Nota final */}
        <div className="mt-12 rounded-2xl border border-gray-800/60 bg-gradient-to-r from-[#577BC1]/15 to-[#FFEB00]/15 p-6 text-center backdrop-blur-xl">
          <p className="font-medium text-gray-300">
            {t("📚 Sigo formándome con proyectos pequeños, cursos online y práctica constante.")}
          </p>
        </div>
      </div>
    </section>
  );
}
