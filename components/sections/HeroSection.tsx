"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/51902175484?text=Hola%20DevWeb%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.";

const highlights = [
  "Diseño y desarrollo web profesional",
  "Software empresarial a medida",
  "Automatización, dashboards y soluciones digitales",
];

const stats = [
  { value: "+50", label: "ideas convertibles en soluciones" },
  { value: "100%", label: "enfoque digital profesional" },
  { value: "24/7", label: "Soporte online para tu empresa" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pt-32 sm:px-8 lg:pt-36"
    >
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex min-h-[calc(100vh-9rem)] flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <Sparkles size={16} />
            Soluciones digitales
          </div>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Diseñamos y desarrollamos{" "}
            <span className="bg-gradient-to-r from-[#149df5] to-[#00e0c6] bg-clip-text text-transparent">
              software profesional
            </span>{" "}
            para empresas que quieren crecer.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            En DevWeb construimos páginas web, sistemas, automatizaciones y
            herramientas digitales con una base visual sólida, rendimiento real
            y enfoque en resultados.
          </p>

          <div className="mt-8 grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-cyan-300" />
                <span className="text-sm text-slate-300 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#149df5] px-7 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(20,157,245,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0f8be0]"
            >
              Ver servicios
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/10"
            >
              <MessageCircleMore size={19} />
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative pb-24"
        >
          <div className="mb-8 flex flex-col justify-between gap-5 border-t border-white/10 pt-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                DevWeb - Software House
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Tecnología, diseño y criterio para construir soluciones reales.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              La solucion Tecnologica que necesitas para tu empresa. Construimos presencia digital,
              sistemas y herramientas que representan profesionalmente a tu
              empresa.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="pointer-events-none absolute -inset-8 z-0 rounded-[3rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#061a3d]/30 shadow-2xl shadow-black/30">
              <div
                className="relative"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
                }}
              >
                <Image
                  src="/home/hero-devweb-persona.png"
                  alt="Profesional DevWeb en oficina"
                  width={2048}
                  height={900}
                  priority
                  className="h-auto w-full select-none object-contain"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#031632] via-[#031632]/45 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#031632] via-[#031632]/45 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#031632] via-[#031632]/45 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#031632] via-[#031632]/45 to-transparent" />

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-5 top-5 z-30 w-[230px] rounded-2xl border border-green-400/25 bg-[#062d1f]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:scale-[1.02] hover:border-green-300/40 max-sm:left-5 max-sm:right-5 max-sm:w-auto"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                    <MessageCircleMore size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">Contáctanos</p>
                    <p className="mt-1 text-xs leading-5 text-green-100/90">
                      Escríbenos por WhatsApp y conversemos sobre tu proyecto.
                    </p>
                  </div>
                </div>
              </motion.a>

              <div className="absolute bottom-5 left-5 z-30 max-w-[320px] rounded-2xl border border-white/10 bg-[#061a3d]/75 p-4 backdrop-blur-xl max-sm:right-5 max-sm:max-w-none">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 text-cyan-200" size={22} />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Desarrollo profesional para empresas reales
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Diseño, tecnología y estructura para que tu negocio tenga
                      una presencia digital sólida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}