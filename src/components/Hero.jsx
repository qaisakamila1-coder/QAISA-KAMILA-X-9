// src/components/Hero.jsx

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    icon: <FaGithub size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/username",
    icon: <FaLinkedin size={18} />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@username",
    icon: <FaYoutube size={18} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/username",
    icon: <FaInstagram size={18} />,
  },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="
        relative min-h-screen flex items-center
        px-6 pt-24 pb-16 overflow-hidden
        bg-gradient-to-br from-teal-50 via-cyan-50 to-white
        dark:from-stone-950 dark:via-teal-950 dark:to-stone-950
      "
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/60 dark:bg-teal-900/20 blur-3xl -z-0 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-100/40 dark:bg-cyan-900/10 blur-3xl -z-0 -translate-x-1/3 translate-y-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center justify-center mb-6">
              <span
                className="
                text-xs font-medium tracking-widest text-stone-500
                dark:text-stone-400 border border-stone-300
                dark:border-stone-600 rounded-full px-4 py-1.5
              "
              >
                Selamat Datang
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              <span className="text-stone-900 dark:text-white">Hai 👋</span>
              <br />
              <span className="text-cyan-500 dark:text-cyan-400">
                Salam Kenal
              </span>
            </h1>

            <p
              className="
              text-stone-500 dark:text-stone-400 text-base
              leading-relaxed max-w-sm mx-auto md:mx-0 mb-8
            "
            >
              Saya membangun aplikasi web yang menarik dan interaktif, serta
              membagikan pengalaman belajar yang inspiratif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <a
                href="#proyek"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#proyek")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400
                  text-white text-sm font-medium rounded-full
                  transition-colors duration-200
                "
              >
                Lihat Projects
              </a>

              <a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#kontak")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  px-6 py-2.5 border border-stone-300 dark:border-stone-600
                  text-stone-700 dark:text-stone-300 text-sm font-medium
                  rounded-full hover:border-cyan-400 hover:text-cyan-500
                  dark:hover:border-cyan-400 dark:hover:text-cyan-400
                  transition-colors duration-200 bg-white/60 dark:bg-stone-900/40
                "
              >
                Hubungi Saya
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full border border-stone-200 dark:border-stone-700
                    text-stone-500 dark:text-stone-400
                    hover:border-cyan-400 hover:text-cyan-500
                    dark:hover:border-cyan-400 dark:hover:text-cyan-400
                    bg-white/60 dark:bg-stone-900/40
                    transition-all duration-200
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div
                className="
                absolute inset-0 rounded-full
                border-4 border-teal-200 dark:border-teal-700
                scale-110
              "
              />

              <div
                className="
                absolute inset-0 rounded-full
                bg-teal-100 dark:bg-teal-900/40
              "
              />

              <img
                src="/images/foto-profil.jpg"
                alt="Foto Profil"
                className="
                  relative w-full h-full object-cover
                  rounded-full border-4
                  border-white dark:border-stone-900
                  shadow-xl
                "
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/400x400/ccfbf1/0d9488?text=Foto";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}