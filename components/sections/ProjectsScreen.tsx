"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Eye,
  Filter,
  Globe2,
  Layers3,
  MessageCircleMore,
  PlayCircle,
  ReceiptText,
  Rocket,
  Settings2,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  UtensilsCrossed,
  X,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "51902175484";

type ProjectCategory =
  | "Todos"
  | "Web"
  | "Sistemas"
  | "Streaming"
  | "Automatización"
  | "Dashboards";

type Project = {
  title: string;
  category: Exclude<ProjectCategory, "Todos">;
  emoji: string;
  icon: LucideIcon;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  status: string;
  color: string;
};

const categories: ProjectCategory[] = [
  "Todos",
  "Web",
  "Sistemas",
  "Streaming",
  "Automatización",
  "Dashboards",
];

const projects: Project[] = [
  {
    title: "Sistema para Restaurantes",
    category: "Sistemas",
    emoji: "🍽️",
    icon: UtensilsCrossed,
    subtitle: "Control interno para negocios gastronómicos",
    description:
      "Sistema orientado a restaurantes, pollerías y cafeterías que necesitan controlar ventas, pedidos y operación diaria.",
    problem:
      "Muchos negocios gastronómicos trabajan con registros manuales, poca trazabilidad y desorden en ventas o pedidos.",
    solution:
      "Se plantea un sistema interno para registrar operaciones, mejorar el control diario y reducir dependencia de cuadernos o archivos sueltos.",
    features: [
      "Control de ventas y pedidos",
      "Gestión básica de productos",
      "Panel administrativo",
      "Licencia por 1 año",
    ],
    stack: ["Next.js", "React", "Tailwind", "Base de datos"],
    status: "Demo comercial",
    color: "from-orange-500/30 via-red-500/20 to-transparent",
  },
  {
    title: "Sistema para Farmacias",
    category: "Sistemas",
    emoji: "💊",
    icon: Store,
    subtitle: "Gestión comercial para boticas y farmacias",
    description:
      "Solución para organizar movimientos, productos y control básico de operación comercial.",
    problem:
      "La falta de orden en productos y movimientos genera pérdida de información y dificultad para controlar el negocio.",
    solution:
      "Una plataforma sencilla para centralizar registros y tener mayor claridad operativa.",
    features: [
      "Control comercial básico",
      "Registro de productos",
      "Seguimiento de movimientos",
      "Licencia por 1 año",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
    status: "Disponible",
    color: "from-cyan-500/30 via-blue-500/20 to-transparent",
  },
  {
    title: "Sistema para Minimarket",
    category: "Sistemas",
    emoji: "🛒",
    icon: ShoppingCart,
    subtitle: "Control para tiendas surtidas y comercios",
    description:
      "Herramienta para negocios con alta rotación que necesitan orden en ventas y productos.",
    problem:
      "Las tiendas pequeñas suelen crecer sin sistema, generando desorden en ventas, productos y seguimiento diario.",
    solution:
      "Un sistema simple para controlar operación y mejorar el orden comercial.",
    features: [
      "Control de ventas",
      "Gestión de productos",
      "Registro diario",
      "Licencia por 1 año",
    ],
    stack: ["Next.js", "React", "UI Components", "Database"],
    status: "Demo comercial",
    color: "from-green-500/30 via-cyan-500/20 to-transparent",
  },
  {
    title: "Sistema de Facturación",
    category: "Sistemas",
    emoji: "🧾",
    icon: ReceiptText,
    subtitle: "Para ferreterías, tiendas y negocios pequeños",
    description:
      "Sistema práctico para negocios que necesitan registrar operaciones comerciales y facturación básica.",
    problem:
      "Los negocios pequeños necesitan facturar sin complicarse con sistemas pesados o difíciles de usar.",
    solution:
      "Interfaz simple, flujo rápido y registro comercial ordenado.",
    features: [
      "Facturación básica",
      "Registro comercial",
      "Gestión simple de clientes",
      "Licencia por 1 año",
    ],
    stack: ["React", "Tailwind", "TypeScript", "API"],
    status: "Disponible",
    color: "from-yellow-500/30 via-orange-500/20 to-transparent",
  },
  {
    title: "Landing Page Corporativa",
    category: "Web",
    emoji: "🌐",
    icon: Globe2,
    subtitle: "Página web moderna para empresas",
    description:
      "Diseño de página web profesional con enfoque en presentación, contacto y conversión.",
    problem:
      "Una empresa sin presencia digital clara pierde confianza y oportunidades comerciales.",
    solution:
      "Landing moderna, responsive, rápida y orientada a captar contactos por WhatsApp o formulario.",
    features: [
      "Diseño responsive",
      "CTA por WhatsApp",
      "Secciones comerciales",
      "Optimización visual",
    ],
    stack: ["Next.js", "Tailwind", "Framer Motion", "SEO"],
    status: "Plantilla premium",
    color: "from-blue-500/30 via-cyan-500/20 to-transparent",
  },
  {
    title: "Portal Streaming",
    category: "Streaming",
    emoji: "🎬",
    icon: PlayCircle,
    subtitle: "Pantalla visual para cuentas de streaming",
    description:
      "Apartado comercial con hero visual, video embebido, tarjetas de películas y CTA directo por WhatsApp.",
    problem:
      "Vender cuentas sin una presentación visual seria genera poca confianza y poca conversión.",
    solution:
      "Interfaz premium con video, tarjetas, animaciones y llamados a la acción claros.",
    features: [
      "Hero visual",
      "Video embebido",
      "Tarjetas de películas",
      "Botón WhatsApp",
    ],
    stack: ["Next.js", "YouTube Embed", "Motion", "Tailwind"],
    status: "Implementado",
    color: "from-red-500/30 via-purple-500/20 to-transparent",
  },
  {
    title: "Automatización de Reportes",
    category: "Automatización",
    emoji: "⚙️",
    icon: Settings2,
    subtitle: "Flujos digitales para reducir trabajo manual",
    description:
      "Automatización de tareas repetitivas para ordenar información y reducir errores operativos.",
    problem:
      "Cuando los reportes se hacen manualmente, se pierde tiempo y aumenta el riesgo de error.",
    solution:
      "Flujo digital para centralizar datos, procesarlos y presentarlos con mayor velocidad.",
    features: [
      "Digitalización de registros",
      "Reducción de tareas manuales",
      "Alertas o seguimiento",
      "Orden de información",
    ],
    stack: ["Python", "Node.js", "APIs", "Dashboards"],
    status: "Concepto técnico",
    color: "from-purple-500/30 via-blue-500/20 to-transparent",
  },
  {
    title: "Dashboard Ejecutivo",
    category: "Dashboards",
    emoji: "📊",
    icon: Layers3,
    subtitle: "Indicadores para control y decisiones",
    description:
      "Tablero visual para mostrar métricas, indicadores y seguimiento operativo.",
    problem:
      "Sin indicadores visibles, las decisiones se toman tarde o con información incompleta.",
    solution:
      "Dashboard visual con KPIs, filtros y lectura rápida para seguimiento gerencial.",
    features: [
      "KPIs principales",
      "Filtros visuales",
      "Lectura rápida",
      "Panel responsive",
    ],
    stack: ["React", "Charts", "Power BI", "Data Model"],
    status: "Demo visual",
    color: "from-cyan-500/30 via-indigo-500/20 to-transparent",
  },
];

function getWhatsappUrl(projectTitle?: string) {
  const message = projectTitle
    ? `Hola DevWeb, quiero cotizar un proyecto similar a: ${projectTitle}.`
    : "Hola DevWeb, quiero información sobre sus proyectos y soluciones digitales.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ProjectsScreen() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
        <div className="pointer-events-none absolute left-[-10rem] top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-12rem] top-32 h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end"
          >
            <div>
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                <Sparkles size={16} />
                Proyectos y soluciones disponibles 
              </div>

              <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Soluciones digitales, tu lo piensas {" "}
                <span className="bg-gradient-to-r from-[#149df5] to-[#00e0c6] bg-clip-text text-transparent">
                  nosotros lo hacemos 
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Nuestros proyectos, comerciales y soluciones que
                pueden adaptarse a tu empresa
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Rocket size={24} />
                </div>

                <div>
                  <p className="font-bold text-white">
                    Proyectos con enfoque comercial
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Cada solución puede servir como base para cotizar una versión
                    adaptada a tu empresa.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["UI", "UX", "DEV"].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                  >
                    <p className="text-lg font-bold text-white">{item}</p>
                    <p className="mt-1 text-xs text-slate-400"></p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <div className="mr-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300">
              <Filter size={17} />
              Filtrar:
            </div>

            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-[#149df5] text-white shadow-[0_14px_35px_rgba(20,157,245,0.28)]"
                      : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#061a3d]/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color}`}
                  />

                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <motion.div
                        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.12,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                      >
                        <Icon size={30} />
                      </motion.div>

                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold text-cyan-200 backdrop-blur">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-8 flex items-end justify-between">
                      <div>
                        <p className="text-6xl">{project.emoji}</p>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                          {project.category}
                        </p>
                      </div>

                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.15,
                        }}
                        className="rounded-full border border-white/10 bg-white/10 p-3 text-white"
                      >
                        <Star size={18} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <h2 className="text-2xl font-bold leading-tight text-white">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-cyan-200">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
                    >
                      <Eye size={17} />
                      Ver detalle
                    </button>

                    <a
                      href={getWhatsappUrl(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#149df5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f8be0]"
                    >
                      Cotizar
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-16 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-[#061a3d] via-[#072456] to-[#061a3d] p-8 shadow-2xl shadow-black/20"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                  ¿Quieres algo similar?
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Podemos adaptar una de estas soluciones a tu negocio.
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  Primero se entiende tu proceso, luego se define si necesitas
                  una web, sistema interno, dashboard, automatización o una
                  solución combinada.
                </p>
              </div>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#149df5] px-7 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(20,157,245,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0f8be0]"
              >
                <MessageCircleMore size={20} />
                Hablar por WhatsApp
                <ArrowRight size={19} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#06111f] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#06111f]/95 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Detalle del proyecto
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-8 p-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div
                className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${selectedProject.color} p-8`}
              >
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-400/10 blur-2xl" />

                <p className="text-8xl">{selectedProject.emoji}</p>

                <h4 className="mt-8 text-3xl font-bold text-white">
                  {selectedProject.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="grid gap-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-3 flex items-center gap-2 text-cyan-300">
                      <BadgeCheck size={18} />
                      <p className="font-bold text-white">Problema</p>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-3 flex items-center gap-2 text-cyan-300">
                      <Code2 size={18} />
                      <p className="font-bold text-white">Solución propuesta</p>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="font-bold text-white">Funciones principales</p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedProject.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={getWhatsappUrl(selectedProject.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#149df5] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0f8be0]"
                  >
                    <MessageCircleMore size={18} />
                    Cotizar similar
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Ver más proyectos
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}