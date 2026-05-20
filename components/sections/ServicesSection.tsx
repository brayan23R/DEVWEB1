"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe2,
  LineChart,
  Settings2,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Páginas web profesionales",
    description:
      "Diseñamos sitios modernos, rápidos y adaptados a celulares para empresas que necesitan presencia digital seria.",
  },
  {
    icon: Code2,
    title: "Software a medida",
    description:
      "Creamos sistemas web personalizados para controlar operaciones, ventas, inventario, producción o procesos internos.",
  },
  {
    icon: LineChart,
    title: "Dashboards empresariales",
    description:
      "Construimos paneles de control para visualizar indicadores, reportes y datos clave en tiempo real.",
  },
  {
    icon: Settings2,
    title: "Automatización de procesos",
    description:
      "Reducimos trabajo manual mediante flujos digitales, formularios, integraciones y lógica de negocio.",
  },
  {
    icon: Database,
    title: "Gestión de datos",
    description:
      "Ordenamos, estructuramos y conectamos información para que tu empresa tome decisiones con datos confiables.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones responsivas",
    description:
      "Interfaces pensadas para funcionar correctamente en laptop, tablet y celular sin perder calidad visual.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden px-5 py-24 sm:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Servicios
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Soluciones digitales para empresas que necesitan crecer con orden.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            No hacemos páginas decorativas. Construimos herramientas digitales
            para vender mejor, controlar procesos y convertir información en
            decisiones.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon size={27} />
                </div>

                <h3 className="relative mt-7 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}