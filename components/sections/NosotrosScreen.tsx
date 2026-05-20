"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Layers3,
  MonitorCog,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps } from "react";

const TIKTOK_URL = "https://www.instagram.com/software_hause?igsh=dmxtczZ6dHZtd3lq&utm_source=qr";
const INSTAGRAM_URL = "https://www.instagram.com/software_hause?igsh=dmxtczZ6dHZtd3lq&utm_source=qr";
const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Bases de datos",
];

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Desarrollo web",
    description:
      "Construcción de páginas, plataformas y sistemas con estructura moderna, responsive y escalable.",
  },
  {
    icon: Database,
    title: "Gestión de datos",
    description:
      "Organización de información, modelos de datos y bases para reportes, control y trazabilidad.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Digitalización de tareas repetitivas para reducir errores, ahorrar tiempo y ordenar procesos.",
  },
  {
    icon: MonitorCog,
    title: "Sistemas internos",
    description:
      "Herramientas para controlar ventas, operaciones, clientes, productos, citas y procesos del negocio.",
  },
];

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 3v10.2a4.3 4.3 0 1 1-4.3-4.3c.4 0 .8.1 1.2.2v3a1.7 1.7 0 1 0 1.1 1.6V3h2Z"
        fill="currentColor"
      />
      <path
        d="M14 3c.5 3 2.3 4.8 5 5.2v3c-1.9-.1-3.6-.8-5-2V3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function NosotrosScreen() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-80 h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex min-h-[70vh] flex-col items-center justify-center text-center"
        >
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/15 blur-3xl" />

            <Image
              src="/brand/devweb-logo.webp"
              alt="DevWeb Software House"
              width={360}
              height={180}
              priority
              className="relative h-auto w-[260px] object-contain sm:w-[340px]"
            />
          </div>

          <div className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <Sparkles size={16} />
            Desarrollo, software y digitalización para empresas 
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Somos DevWeb, una agencia de software enfocada en{" "}
            <span className="bg-gradient-to-r from-[#149df5] to-[#00e0c6] bg-clip-text text-transparent">
              Soluciones Digitales
            </span>
            
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Diseñamos y desarrollamos sistemas, páginas web, automatizaciones y
            herramientas digitales para empresas que necesitan ordenar sus
            procesos, vender mejor y trabajar con información de alto valor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#061a3d]/40 shadow-2xl shadow-black/30">
              <Image
                src="/nosotros/brayan-reluz.png"
                alt="Brayan Reluz - DevWeb"
                width={900}
                height={1100}
                className="h-auto w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#031632] via-[#031632]/35 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#031632] via-[#031632]/35 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#031632] via-[#031632]/30 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#031632] via-[#031632]/30 to-transparent" />
            </div>
          </div>

          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <BadgeCheck size={16} />
              Perfil técnico
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Brayan Reluz
            </h2>

            <p className="mt-3 text-xl font-semibold text-cyan-300">
              Desarrollador de software, sistemas web y soluciones digitales.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300">
              En DevWeb trabajamos con un enfoque práctico: entender el negocio,
              detectar el problema operativo y construir una solución digital
              que realmente pueda usarse. No se trata solo de programar; se
              trata de convertir procesos desordenados en herramientas claras,
              rápidas y mantenibles.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"
                    >
                      <Icon size={22} />
                    </motion.div>

                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#061a3d]/60 p-6 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Tecnologías que manejamos
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-20"
        >
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Cómo trabajamos
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Combinamos criterio técnico, diseño y visión de negocio.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Un sistema no debe verse bonito solamente. Debe ser entendible,
              rápido, mantenible y útil para quien lo usa todos los días. Esa es
              la diferencia entre una web genérica y una solución profesional.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#061a3d]/35 shadow-2xl shadow-black/30">
            <Image
              src="/nosotros/brayan-oficina.png"
              alt="DevWeb trabajando en oficina"
              width={1800}
              height={900}
              className="h-auto w-full object-contain"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#031632] via-[#031632]/40 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#031632] via-[#031632]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#031632] via-[#031632]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#031632] via-[#031632]/45 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 z-20 grid gap-5 rounded-[1.7rem] border border-white/10 bg-[#020b1f]/70 p-6 backdrop-blur-xl lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Diseño, desarrollo y mejora continua.
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                  Creamos soluciones digitales pensando en el cliente final, en
                  la operación diaria y en el crecimiento del negocio. Cada
                  pantalla, botón y módulo debe tener una razón de existir.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/40"
                >
                  <TikTokIcon className="h-5 w-5" />
                  TikTok
                  <ExternalLink size={15} />
                </motion.a>

                <motion.a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/40"
                >
                  <InstagramIcon className="h-5 w-5" />
                  Instagram
                  <ExternalLink size={15} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 pb-10 sm:grid-cols-3">
          {[
            {
              icon: Cpu,
              value: "Tecnología",
              text: "Herramientas modernas para construir soluciones rápidas y escalables.",
            },
            {
              icon: ShieldCheck,
              value: "Orden",
              text: "Estructura clara para que el sistema pueda mantenerse y crecer.",
            },
            {
              icon: Rocket,
              value: "Resultado",
              text: "Soluciones pensadas para operar, vender y controlar mejor.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white">{item.value}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}