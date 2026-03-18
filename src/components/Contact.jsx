// src/components/Contact.jsx

import { useEffect, useRef, useState } from "react";
import { TbMail, TbPhone, TbMapPin, TbSend } from "react-icons/tb";

const contactInfo = [
  {
    icon: <TbMail size={20} />,
    label: "Email",
    value: "qaisakamila1@gmail.com"
  },
  {
    icon: <TbPhone size={20} />,
    label: "Telepon",
    value: "+62 821-6064-1911"
  },
  {
    icon: <TbMapPin size={20} />,
    label: "Lokasi",
    value: "Banda Aceh, Indonesia",
  },
];

export default function Contact() {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ nama: "", email: "", subjek: "", pesan: "" });
  };

  const inputClass = `
    w-full px-4 py-2.5 rounded-xl text-sm
    border border-stone-200 dark:border-stone-600
    bg-white dark:bg-stone-700/50
    text-stone-900 dark:text-stone-100
    placeholder:text-stone-400 dark:placeholder:text-stone-500
    focus:outline-none focus:ring-2 focus:ring-[#800020]
    dark:focus:ring-[#a8324a] focus:border-transparent
    transition-all duration-200
  `;

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-rose-50 via-white to-red-100/40
        dark:from-stone-950 dark:via-stone-900 dark:to-red-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-sm font-semibold text-[#800020] dark:text-[#a8324a] tracking-widest uppercase mb-2">
            Kontak
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white mb-4">
            Hubungi Saya
          </h2>
          <div className="w-16 h-1 bg-[#800020] dark:bg-[#a8324a] rounded-full mx-auto" />
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Contact Info */}
          <div
            className="w-full md:w-[45%] flex flex-col gap-6 transition-all duration-700"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(-40px)",
              transitionDelay: "150ms",
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                Mari Berkonsultasi!
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                Ingin meningkatkan keterampilan belajar Anda? Saya siap membantu
                Anda mencapai tujuan tersebut.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  className="
                    flex items-center gap-4 p-4
                    bg-white dark:bg-stone-800
                    border border-stone-100 dark:border-stone-700
                    rounded-2xl shadow-sm
                    hover:shadow-md transition-shadow duration-200
                  "
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateX(0)" : "translateX(-30px)",
                    transition: `opacity 0.6s ease-out ${300 + i * 100}ms, transform 0.6s ease-out ${300 + i * 100}ms`,
                  }}
                >
                  <div
                    className="
                      w-10 h-10 flex items-center justify-center flex-shrink-0
                      rounded-xl bg-red-50 dark:bg-[#5c0018]/30
                      text-[#800020] dark:text-[#a8324a]
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs text-stone-400 dark:text-stone-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="
              w-full md:flex-1
              bg-white dark:bg-stone-800
              border border-stone-100 dark:border-stone-700
              rounded-2xl shadow-sm p-6
              transition-all duration-700
            "
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "200ms",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  required
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                name="subjek"
                value={formData.subjek}
                onChange={handleChange}
                placeholder="Subjek pesan"
                required
                className={inputClass}
              />

              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Tuliskan pesan Anda..."
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="
                  w-full flex items-center justify-center gap-2
                  py-3 bg-[#800020] hover:bg-[#a8324a]
                  text-white text-sm font-medium rounded-xl
                  transition-colors duration-200
                "
              >
                <TbSend size={17} />
                {submitted ? "Pesan Terkirim! ✓" : "Kirim Pesan"}
              </button>

              {submitted && (
                <p className="text-center text-sm text-[#800020] dark:text-[#a8324a] animate-pulse">
                  Terima kasih! Pesan kamu sudah diterima.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}