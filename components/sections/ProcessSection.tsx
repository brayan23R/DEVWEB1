"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Diagnóstico del negocio",
    description:
      "Analizamos tu proceso, tus problemas reales y lo que la solución digital debe resolver. No empezamos diseñando sin entender.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño UX/UI estratégico",
    description:
      "Creamos la estructura visual, navegación, componentes y experiencia de usuario antes de tocar código.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo a medida",
    description:
      "Construimos la solución con código limpio, componentes reutilizables y arquitectura preparada para crecer.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Pruebas y optimización",
    description:
      "Validamos rendimiento, navegación, responsive, errores visuales y comportamiento antes del lanzamiento.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Lanzamiento y mejora",
    description:
      "Publicamos la solución y dejamos una base lista para futuras mejoras, mantenimiento y escalabilidad.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden px-5 py-24 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Método de trabajo
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              No improvisamos. Construimos con proceso, criterio y visión.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Una web profesional no se arma juntando bloques. Se define desde
              el problema, se diseña con intención y se desarrolla con una base
              técnica estable.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <ArrowUpRight size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Enfoque empresarial, no solo visual.
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Diseñamos pensando en conversión, orden, velocidad,
                    escalabilidad y facilidad de uso.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/40 to-cyan-300/0 sm:block" />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                      ease: "easeOut",
                    }}
                    className="relative rounded-3xl border border-white/10 bg-[#061a3d]/60 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#08204a]/70 sm:ml-12"
                  >
                    <div className="absolute -left-[3.25rem] top-7 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[#061a3d] text-cyan-200 shadow-[0_0_35px_rgba(0,224,198,0.18)] sm:flex">
                      <Icon size={23} />
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex items-center gap-4 sm:hidden">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                          <Icon size={23} />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-sm font-bold text-cyan-300">
                          {step.number}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}