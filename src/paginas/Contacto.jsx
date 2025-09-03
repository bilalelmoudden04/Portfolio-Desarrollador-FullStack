// src/paginas/Contacto.jsx
import React from "react";
import { Mail, MapPin, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t } = useTranslation();
  const email = "elmouddenbilal04@gmail.com";

  // Abrir Gmail compose sin asunto/cuerpo; fallback a mailto simple
  const handleEmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    const mailto = `mailto:${email}`;
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-[100vw] overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Fondos suaves */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#577BC1]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-gradient-to-tl from-[#FFEB00]/10 to-transparent blur-3xl" />
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
              {t("Contacto")}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            {t("¿Tienes un proyecto en mente? Escríbeme y vemos cómo puedo ayudarte 🚀")}
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Email */}
          <div className="group relative rounded-3xl border border-gray-800/60 bg-gray-900/40 p-10 text-center backdrop-blur-xl transition-transform duration-500 hover:scale-105 hover:border-[#577BC1]">
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#577BC1] to-[#344CB7] p-6 transition-transform duration-500 group-hover:scale-110">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">{t("Email")}</h3>
            <a
              href={`mailto:${email}`}
              className="font-medium text-lg text-gray-300 transition-colors duration-300 hover:text-[#FFEB00]"
            >
              {email}
            </a>
            <p className="mt-3 text-sm text-gray-500">{t("Respuesta en menos de 24 horas")}</p>
          </div>

          {/* Ubicación */}
          <div className="group relative rounded-3xl border border-gray-800/60 bg-gray-900/40 p-10 text-center backdrop-blur-xl transition-transform duration-500 hover:scale-105 hover:border-[#FFEB00]">
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#FFEB00] to-[#FFC107] p-6 transition-transform duration-500 group-hover:scale-110">
              <MapPin size={32} className="text-black" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">{t("Ubicación")}</h3>
            <p className="font-medium text-lg text-gray-300">{t("Barcelona, España")}</p>
            <p className="mt-3 text-sm text-gray-500">{t("Disponible para trabajar en remoto")}</p>
          </div>
        </div>

        {/* Redes */}
        <div className="mb-16 text-center">
          <div className="relative inline-block rounded-3xl border border-gray-800/60 bg-gray-900/40 px-12 py-8 backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-bold text-white">
              {t("También puedes encontrarme en:")}
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/bilalelmoudden04"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-gray-800/50 p-4 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
              >
                <Github
                  size={28}
                  className="relative z-10 text-gray-400 transition-colors group-hover:text-white"
                />
                <div className="absolute inset-0 scale-0 rounded-2xl bg-[#577BC1] transition-transform duration-300 group-hover:scale-100" />
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-gray-800/50 p-4 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
              >
                <Linkedin
                  size={28}
                  className="relative z-10 text-gray-400 transition-colors group-hover:text-white"
                />
                <div className="absolute inset-0 scale-0 rounded-2xl bg-[#0077B5] transition-transform duration-300 group-hover:scale-100" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            {/* importante: no bloquear el click del enlace/botón */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#577BC1]/30 to-[#FFEB00]/30 blur-lg" />
            <button
              type="button"
              onClick={handleEmailClick}
              className="relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#577BC1] to-[#344CB7] px-10 py-4 font-semibold text-lg text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-[#FFEB00] hover:to-[#577BC1]"
            >
              <Send size={20} />
              <span>{t("Envíame un mensaje")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
