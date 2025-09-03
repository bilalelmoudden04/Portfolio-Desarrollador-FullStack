// src/componentes/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const email = "elmouddenbilal04@gmail.com";

  // Función igual que en Contacto.jsx
  const handleEmailClick = (e) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    const mailto = `mailto:${email}`;
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = mailto;
  };

  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#technologies", label: "Tecnologías" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  const socials = [
    {
      href: "#",
      label: "Email",
      icon: Mail,
      hover: "hover:bg-[#FFEB00]/20 hover:text-[#FFEB00]",
      onClick: handleEmailClick,
    },
    {
      href: "https://github.com/bilalelmoudden04",
      label: "GitHub",
      icon: Github,
      hover: "hover:bg-[#577BC1]/20 hover:text-[#577BC1]",
    },
    {
      href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      label: "LinkedIn",
      icon: Linkedin,
      hover: "hover:bg-[#0077B5]/20 hover:text-[#0077B5]",
    },
  ];

  return (
    <footer className="relative w-full max-w-[100vw] overflow-hidden bg-black">
      {/* Glow decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#577BC1]/15 to-transparent blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 translate-x-1/2 rounded-full bg-gradient-to-tl from-[#FFEB00]/15 to-transparent blur-3xl" />
      </div>

      {/* Top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#577BC1]/60 to-transparent opacity-70" />

      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Marca centrada */}
        <div className="flex justify-center">
          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-xl border border-gray-800/60 bg-gray-900/40 px-5 py-3 backdrop-blur-xl transition-colors hover:border-[#577BC1]/60"
          >
            <span className="text-lg font-bold">
              <span className="bg-gradient-to-r from-white via-[#577BC1] to-[#FFEB00] bg-clip-text text-transparent">
                Bilal El Moudden
              </span>
            </span>
            <span className="text-xs text-gray-400">
              {t("Junior Fullstack • Aprendiendo cada día")}
            </span>
          </a>
        </div>

        {/* Navegación */}
        <nav className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t(l.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {socials.map(({ href, icon: Icon, label, hover, onClick }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") && !onClick ? "_blank" : undefined}
              rel={href.startsWith("http") && !onClick ? "noopener noreferrer" : undefined}
              onClick={onClick}
              aria-label={label}
              className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-800/60 bg-gray-900/40 text-gray-400 backdrop-blur-xl transition-all hover:scale-110 ${hover}`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Línea separadora */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center gap-3 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Bilal El Moudden. {t("Todos los derechos reservados.")}{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
