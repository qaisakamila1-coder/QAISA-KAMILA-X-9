// src/components/About.jsx

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PiBookOpenTextBold } from "react-icons/pi";
import { TbMedal, TbPencil, TbRocket } from "react-icons/tb";

const stats = [
  {
    icon: <PiBookOpenTextBold size={28} />,
    value: "100+",
    label: "Tugas Selesai",
  },
  { icon: <TbMedal size={28} />, value: "5+", label: "Juara Kelas" },
  { icon: <TbPencil size={28} />, value: "50+", label: "Tinta Pulpen" },
  { icon: <TbRocket size={28} />, value: "9+", label: "Pengalaman Belajar" },
];

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="tentang"
      className="
        py-24 px-6
        bg-gradient-to-br from-rose-50 via-white to-red-100/40
        dark:from-stone-950 dark:via-stone-900 dark:to-red-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#800020] dark:text-[#a8324a] tracking-widest uppercase mb-2">
            Tentang Saya
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-[#800020] dark:bg-[#a8324a] rounded-full mx-auto" />
        </div>

        {/* ── Konten Utama ── */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* KIRI */}
          <div className="w-full md:w-[45%] flex-shrink-0">
            <div
              className="
              relative rounded-2xl overflow-visible
              bg-red-100 dark:bg-[#5c0018]/30
              min-h-[420px] flex items-center justify-center
            "
            >
              <img
                src="/images/woman-working-home.png"
                alt="Ilustrasi"
                className="w-52 sm:w-64 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/300x300/fecaca/7f1d1d?text=Ilustrasi";
                }}
              />

              <div
                className="
                absolute -bottom-4 right-6
                bg-white dark:bg-stone-800
                border border-stone-100 dark:border-stone-700
                rounded-xl px-5 py-3 shadow-lg
              "
              >
                <p className="text-xl font-bold text-stone-900 dark:text-white leading-tight">
                  9+ Tahun
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Pengalaman Belajar
                </p>
              </div>
            </div>
          </div>

          {/* KANAN */}
          <div className="w-full md:flex-1 flex flex-col gap-4 md:mt-0 mt-8">
            {/* Accordion */}
            <div
              className="
              bg-white dark:bg-stone-800
              border border-stone-100 dark:border-stone-700
              rounded-2xl shadow-sm overflow-hidden
            "
            >
              <button
                onClick={() => setOpen(!open)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-left
                  hover:bg-stone-50 dark:hover:bg-stone-700/50
                  transition-colors duration-200
                "
              >
                <span className="text-xl font-bold text-stone-900 dark:text-white">
                  Deskripsi
                </span>
                <span className="text-[#800020] dark:text-[#a8324a]">
                  {open ? (
                    <FiChevronUp size={22} />
                  ) : (
                    <FiChevronDown size={22} />
                  )}
                </span>
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="px-6 pb-6 flex flex-col gap-3">
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    Perkenalkan nama saya Qaisa Kamila, biasa dipanggil Qaisa.
                    Saya lahir di Banda Aceh pada tanggal 16 Mei 2010. Saat ini
                    saya bersekolah di MAN 1 Banda Aceh dan tinggal di Kp.
                    Laksana, Kec. Kuta Alam.
                  </p>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    Saya membangun aplikasi web menarik dan interaktif, serta
                    terus belajar untuk menciptakan pengalaman pengguna yang
                    modern dan inspiratif.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    bg-white dark:bg-stone-800
                    border border-stone-100 dark:border-stone-700
                    rounded-2xl shadow-sm p-6
                    flex flex-col items-center justify-center gap-2
                    hover:shadow-md transition-shadow duration-200
                  "
                >
                  <span className="text-[#800020] dark:text-[#a8324a]">
                    {stat.icon}
                  </span>
                  <p className="text-2xl font-bold text-stone-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}