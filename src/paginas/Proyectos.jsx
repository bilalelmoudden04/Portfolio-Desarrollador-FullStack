import React from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

import portadaPortfolio from "../assets/portadaPortfolio.png";
import portadaBlog from "../assets/portadaBlog.png";
import portadaChatBot from "../assets/portadaChatBot.png";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Portfolio Personal",
      description:
        "Portfolio actual creado con React y Tailwind, desplegado en Vercel. Aquí muestro mis proyectos y lo que voy aprendiendo como desarrollador junior.",
      image: portadaPortfolio,
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Tailwind", logo: "💨" },
        { name: "Vercel", logo: "▲" },
      ],
      github: "https://github.com/bilalelmoudden04",
      demo: "",
      featured: true,
    },
    {
      id: 2,
      title: "Blog Fullstack",
      description:
        "Aplicación fullstack de un blog sobre tecnología, desarrollado con React y Tailwind en el frontend, y Node.js, Express y MongoDB en el backend.",
      image: portadaBlog,
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Tailwind", logo: "💨" },
        { name: "Node.js", logo: "🟢" },
        { name: "Express", logo: "🚀" },
        { name: "MongoDB", logo: "🍃" },
      ],
      github: "https://github.com/bilalelmoudden04",
      demo: "https://blog-full-stack-t3xy.vercel.app/",
    },
    {
      id: 3,
      title: "Chatbot Personal",
      description:
        "Chatbot entrenado con mi información personal para que reclutadores y visitantes puedan interactuar conmigo. Proyecto en proceso.",
      image: portadaChatBot,
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Tailwind", logo: "💨" },
        { name: "Python", logo: "🐍" },
      ],
      github: "https://github.com/bilalelmoudden04",
      status: "En proceso",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full max-w-[100vw] overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#577BC1]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#FFEB00]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#577BC1]" />
            <Sparkles className="text-[#FFEB00]" size={28} />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#577BC1]" />
          </div>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent">
              {t("Mis Proyectos")}
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 md:text-xl">
            {t(
              "Algunos de los proyectos que he realizado para practicar y mejorar mis habilidades como desarrollador junior."
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Container */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-800/40 bg-gradient-to-b from-gray-900/80 to-gray-950/90 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-[#577BC1]/60 group-hover:shadow-[#577BC1]/20">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {project.status && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                        <Sparkles size={12} />
                        <span>{t(project.status)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#FFEB00]">
                    {t(project.title)}
                  </h3>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                    {t(project.description)}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {t("Stack")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#344CB7]/30 to-[#577BC1]/30 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:from-[#577BC1]/40 hover:to-[#344CB7]/40"
                        >
                          <span className="text-lg">{tech.logo}</span>
                          <span>{t(tech.name)}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center space-x-2 rounded-xl border border-gray-700/50 bg-gray-800/40 px-4 py-2.5 text-sm font-medium text-gray-300 shadow-inner transition-all duration-300 hover:border-[#577BC1]/60 hover:text-white hover:shadow-[#577BC1]/20"
                    >
                      <Github size={16} />
                      <span>{t("Código")}</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#577BC1] to-[#344CB7] px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-[#577BC1]/90 hover:to-[#344CB7]/90"
                      >
                        <ExternalLink size={16} />
                        <span>{t("Demo")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#577BC1]/20 via-[#FFEB00]/20 to-[#577BC1]/20 blur-xl"></div>
            <a
              href="https://github.com/bilalelmoudden04"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center space-x-3 rounded-2xl border border-gray-800/50 bg-gray-900/40 px-10 py-4 text-lg font-semibold text-white shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-[#577BC1]/50"
            >
              <Github size={24} />
              <span>{t("Ver más proyectos en GitHub")}</span>
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#FFEB00]"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
