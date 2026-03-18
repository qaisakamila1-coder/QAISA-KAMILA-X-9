// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { TbLanguage } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      const navHeight = 72;

      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top - navHeight - 10;

        if (top <= 0) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-sm border-pink-100 dark:border-pink-900"
          : "bg-white dark:bg-stone-950 border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#beranda");
          }}
          className="text-lg font-bold tracking-tight text-pink-500 hover:text-pink-400 transition-colors duration-200"
        >
          Portofolio Ufaira
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative text-sm transition-colors duration-200 group ${
                    isActive
                      ? "text-pink-500 font-medium"
                      : "text-stone-500 dark:text-stone-400 hover:text-pink-500 font-normal"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
            <TbLanguage size={18} />
            <span className="text-sm font-medium tracking-wide">EN</span>
          </div>

          <div className="w-px h-4 bg-pink-100 dark:bg-pink-900" />

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200"
          >
            {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
        </div>

        {/* Mobile Right */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
            <TbLanguage size={17} />
            <span className="text-xs font-medium">EN</span>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200"
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-pink-500 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-pink-500 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-pink-500 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white dark:bg-stone-950 border-t border-pink-100 dark:border-pink-900 px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`block text-sm py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-pink-500 font-medium"
                      : "text-stone-500 dark:text-stone-400 hover:text-pink-500"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}