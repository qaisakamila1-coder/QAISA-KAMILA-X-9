// src/components/Skills.jsx

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: "🗣️",
    title: "Bahasa",
    color: "bg-red-100 dark:bg-[#800020]/30",
    skills: [
      { name: "Bahasa Indonesia", level: 92 },
      { name: "Bahasa Inggris", level: 100 },
      { name: "Bahasa Arab", level: 80 },
      { name: "Bahasa Jepang", level: 70 },
    ],
  },
  {
    icon: "🌍",
    title: "IPS",
    color: "bg-red-100 dark:bg-[#800020]/30",
    skills: [
      { name: "Sosiologi", level: 90 },
      { name: "Ekonomi", level: 78 },
      { name: "Geografi", level: 85 },
      { name: "Sejarah", level: 86 },
    ],
  },
  {
    icon: "🧠",
    title: "IPA",
    color: "bg-red-100 dark:bg-[#800020]/30",
    skills: [
      { name: "Biologi", level: 100 },
      { name: "Kimia", level: 92 },
      { name: "Fisika", level: 85 },
      { name: "Matematika", level: 77 },
    ],
  },
];

// Skill progress bar
function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-stone-700 dark:text-stone-300">
          {name}
        </span>
        <span className="text-sm text-stone-500 dark:text-stone-400">
          {level}%
        </span>
      </div>
      <div className="w-full h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#800020] dark:bg-[#a8324a] rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// Skill category card
function SkillCard({ category, animate }) {
  return (
    <div
      className="
        bg-white dark:bg-stone-800
        border border-stone-100 dark:border-stone-700
        rounded-2xl shadow-sm p-6
        hover:shadow-md hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Header Card */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${category.color}`}
        >
          {category.icon}
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      {/* Skill Bars */}
      {category.skills.map((skill) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          animate={animate}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="keahlian"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-rose-50 via-white to-red-100/40
        dark:from-stone-950 dark:via-stone-900 dark:to-red-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#800020] dark:text-[#a8324a] tracking-widest uppercase mb-2">
            Keahlian
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Kemampuan Akademis
          </h2>
          <div className="w-16 h-1 bg-[#800020] dark:bg-[#a8324a] rounded-full mx-auto" />
        </div>

        {/* Grid 3 Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <SkillCard category={category} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}