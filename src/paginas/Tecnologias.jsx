import React from "react";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const groups = [
  {
    title: "Frontend",
    layout: "grid",
    items: [
      { name: "HTML5", src: "/icons/html5.svg", color: "#E34F26" },
      { name: "CSS", src: "/icons/css_old.svg", color: "#1572B6" },
      { name: "JavaScript", src: "/icons/javascript.svg", color: "#F7DF1E" },
      { name: "React", src: "/icons/react_light.svg", color: "#61DAFB" },
      { name: "TailwindCSS", src: "/icons/tailwindcss.svg", color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    layout: "grid",
    items: [
      { name: "Node.js", src: "/icons/nodejs.svg", color: "#339933" },
      { name: "Express", src: "/icons/expressjs_dark.svg", color: "#E5E7EB" },
      { name: "Python", src: "/icons/python.svg", color: "#3776AB" },
      { name: "Django", src: "/icons/django.svg", color: "#092E20" },
      { name: "FastAPI", src: "/icons/fastapi.svg", color: "#009688" },
      { name: "PHP", src: "/icons/php_dark.svg", color: "#777BB4" },
    ],
  },
  {
    title: "Bases de datos",
    layout: "row",
    items: [
      { name: "PostgreSQL", src: "/icons/postgresql.svg", color: "#336791" },
      { name: "MongoDB", src: "/icons/mongodb.svg", color: "#47A248" },
    ],
  },
  {
    title: "Herramientas",
    layout: "grid",
    items: [
      { name: "GitHub", src: "/icons/github_dark.svg", color: "#FFFFFF" },
      { name: "Git", src: "/icons/git.svg", color: "#F05032" },
      { name: "Copilot", src: "/icons/copilot_dark.svg", color: "#9333EA" },
      { name: "VS Code", src: "/icons/vscode.svg", color: "#007ACC" },
      { name: "OpenAI API", src: "/icons/openai_dark.svg", color: "#10A37F" },
    ],
  },
];

export default function Tecnologias() {
  const { t } = useTranslation();

  return (
    <section
      id="technologies"
      className="relative w-full max-w-[100vw] overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#577BC1]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-gradient-to-tl from-[#FFEB00]/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#577BC1]" />
            <Sparkles className="text-[#FFEB00]" size={26} />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#577BC1]" />
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent">
              {t("Stack Tecnológico")}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            {t("Tecnologías que estoy aprendiendo y usando en mis proyectos.")}
          </p>
        </div>

        {/* Renderizado */}
        <div className="space-y-20">
          {groups.map((g) => (
            <div key={g.title} className="text-center">
              <h3 className="mb-10 text-xl font-semibold text-white md:text-2xl">
                {t(g.title)}
              </h3>

              {g.layout === "grid" ? (
                <div
                  className="
                    grid place-items-center gap-6
                    grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]
                  "
                >
                  {g.items.map((tItem, index) => (
                    <div
                      key={tItem.name}
                      className={`group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-800/60 bg-gray-900/40 px-6 py-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        // En móvil: si es el último elemento y hay número impar, que ocupe 2 columnas
                        index === g.items.length - 1 && g.items.length % 2 !== 0 
                          ? 'col-span-2 md:col-span-1' 
                          : ''
                      }`}
                      style={{ boxShadow: `0 0 0 transparent` }}
                    >
                      <img
                        src={tItem.src}
                        alt={tItem.name}
                        className="h-12 w-12 md:h-14 md:w-14 select-none transition-transform duration-300 group-hover:scale-110"
                        style={{ color: tItem.color }}
                      />
                      <span className="text-sm font-medium text-gray-200 md:text-base">
                        {t(tItem.name)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center gap-10">
                  {g.items.map((tItem) => (
                    <div
                      key={tItem.name}
                      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-800/60 bg-gray-900/40 px-8 py-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <img
                        src={tItem.src}
                        alt={tItem.name}
                        className="h-14 w-14 md:h-16 md:w-16 select-none transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-base font-medium text-gray-200 md:text-lg">
                        {t(tItem.name)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}