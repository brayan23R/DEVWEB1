"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Code2,
  DollarSign,
  Globe2,
  Layers3,
  MessageCircleMore,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "51902175484";

type PlanType = "Web" | "Software" | "Soporte";

type Plan = {
  type: PlanType;
  name: string;
  tag: string;
  icon: LucideIcon;
  price: string;
  usd: string;
  description: string;
  bestFor: string;
  delivery: string;
  features: string[];
  highlight?: boolean;
  accent: string;
};

const planTypes: PlanType[] = ["Web", "Software", "Soporte"];

const plans: Plan[] = [
  {
    type: "Web",
    name: "Web Start",
    tag: "Presencia digital",
    icon: Globe2,
    price: "S/ 650",
    usd: "≈ US$ 190",
    description:
      "Para negocios que necesitan una web profesional, rápida y directa para presentarse y captar contactos.",
    bestFor: "Emprendimientos, servicios profesionales y negocios pequeños.",
    delivery: "Entrega base según alcance acordado.",
    features: [
      "Landing page profesional",
      "Diseño responsive",
      "Secciones comerciales básicas",
      "Optimización visual inicial",
    ],
    accent: "from-cyan-400/30 via-blue-500/20 to-transparent",
  },
  {
    type: "Web",
    name: "Web Business",
    tag: "Más completo",
    icon: Rocket,
    price: "S/ 950",
    usd: "≈ US$ 277",
    description:
      "Para empresas que necesitan una web más sólida, con varias secciones, mejor estructura comercial y navegación clara.",
    bestFor: "Empresas, marcas locales y servicios con mayor oferta.",
    delivery: "Entrega por bloques y validación visual.",
    features: [
      "Página web multipantalla",
      "Inicio, servicios, nosotros y contacto",
      "Animaciones profesionales",
      "SEO básico inicial",
      "Integración con WhatsApp",
      "Diseño alineado a marca",
    ],
    highlight: true,
    accent: "from-blue-500/35 via-cyan-400/20 to-transparent",
  },
  {
    type: "Web",
    name: "Web Premium",
    tag: "Alto impacto",
    icon: Star,
    price: "S/ 1,600",
    usd: "≈ US$ 468",
    description:
      "Para marcas que quieren una experiencia visual más fuerte, con mejores efectos, páginas internas y estructura comercial superior.",
    bestFor: "Empresas que quieren diferenciarse y vender mejor.",
    delivery: "Diseño avanzado por secciones.",
    features: [
      "Diseño premium personalizado",
      "Microanimaciones y efectos visuales",
      "Estructura por pantallas",
      "CTA comerciales estratégicos",
      "Optimización responsive",
      "Preparado para escalar",
    ],
    accent: "from-purple-500/30 via-cyan-400/20 to-transparent",
  },
  {
    type: "Software",
    name: "Sistema Base",
    tag: "Licencia 1 año",
    icon: Layers3,
    price: "S/ 600",
    usd: "≈ US$ 175",
    description:
      "Sistema por rubro para negocios que necesitan empezar a controlar mejor su operación diaria.",
    bestFor: "Restaurantes, farmacias, minimarkets y negocios similares.",
    delivery: "Software + licencia por 1 año.",
    features: [
      "Sistema por rubro",
      "Panel operativo básico",
      "Gestión inicial de registros",
      "Licencia por 1 año",
      "Soporte de puesta en marcha",
    ],
    highlight: true,
    accent: "from-cyan-400/35 via-blue-500/20 to-transparent",
  },
  {
    type: "Software",
    name: "Facturación Comercial",
    tag: "Negocios pequeños",
    icon: Code2,
    price: "S/ 450",
    usd: "≈ US$ 131",
    description:
      "Solución práctica para negocios que necesitan registrar operaciones comerciales y trabajar con mayor orden.",
    bestFor: "Ferreterías, tiendas de ropa, comercios y servicios pequeños.",
    delivery: "Software + licencia por 1 año.",
    features: [
      "Flujo comercial simple",
      "Registro de operaciones",
      "Gestión básica de clientes",
      "Licencia por 1 año",
      "Interfaz rápida y clara",
    ],
    accent: "from-orange-400/30 via-yellow-500/20 to-transparent",
  },
  {
    type: "Software",
    name: "Sistema Clínico",
    tag: "Mayor control",
    icon: ShieldCheck,
    price: "S/ 870",
    usd: "≈ US$ 253",
    description:
      "Sistema orientado a clínicas pequeñas, consultorios y centros médicos que requieren orden administrativo.",
    bestFor: "Consultorios, clínicas pequeñas y atención privada.",
    delivery: "Software + licencia por 1 año.",
    features: [
      "Registro de pacientes",
      "Control de citas",
      "Historial básico de atención",
      "Licencia por 1 año",
      "Panel administrativo",
    ],
    accent: "from-emerald-400/30 via-cyan-500/20 to-transparent",
  },
  {
    type: "Soporte",
    name: "Soporte Básico",
    tag: "Continuidad",
    icon: BadgeCheck,
    price: "S/ 150",
    usd: "≈ US$ 44",
    description:
      "Acompañamiento mensual para ajustes menores, orientación y revisión general del funcionamiento.",
    bestFor: "Clientes con web o sistema ya implementado.",
    delivery: "Atención mensual según alcance.",
    features: [
      "Revisión mensual",
      "Ajustes menores",
      "Orientación técnica",
      "Soporte por WhatsApp",
      "Seguimiento básico",
    ],
    accent: "from-cyan-400/30 via-sky-500/20 to-transparent",
  },
  {
    type: "Soporte",
    name: "Soporte Pro",
    tag: "Recomendado",
    icon: Zap,
    price: "S/ 300",
    usd: "≈ US$ 87",
    description:
      "Para negocios que necesitan mayor acompañamiento, mejoras recurrentes y respuesta más continua.",
    bestFor: "Empresas que ya operan con herramientas digitales.",
    delivery: "Bolsa mensual de soporte.",
    features: [
      "Ajustes recurrentes",
      "Mejoras visuales menores",
      "Revisión de incidencias",
      "Soporte prioritario",
      "Recomendaciones de mejora",
    ],
    highlight: true,
    accent: "from-blue-500/35 via-cyan-400/20 to-transparent",
  },
  {
    type: "Soporte",
    name: "Soporte Escalable",
    tag: "Crecimiento",
    icon: Rocket,
    price: "A cotizar",
    usd: "Según alcance",
    description:
      "Para empresas que requieren mejoras constantes, nuevos módulos, integraciones o automatizaciones.",
    bestFor: "Negocios en crecimiento con necesidades específicas.",
    delivery: "Plan definido según diagnóstico.",
    features: [
      "Nuevos módulos",
      "Integraciones",
      "Automatizaciones",
      "Mejoras de interfaz",
      "Acompañamiento técnico",
    ],
    accent: "from-purple-500/30 via-blue-500/20 to-transparent",
  },
];

function getWhatsappUrl(planName?: string) {
  const message = planName
    ? `Hola DevWeb, quiero información sobre el plan ${planName}.`
    : "Hola DevWeb, quiero información sobre sus planes.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function PlansScreen() {
  const [activeType, setActiveType] = useState<PlanType>("Web");

  const filteredPlans = useMemo(
    () => plans.filter((plan) => plan.type === activeType),
    [activeType]
  );

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
      <div className="pointer-events-none absolute left-[-10rem] top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Sparkles size={16} />
              Descubre uno de nuestros planes 
            </div>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Elige un plan para construir, vender y{" "}
              <span className="bg-gradient-to-r from-[#149df5] to-[#00e0c6] bg-clip-text text-transparent">
                digitalizar mejor
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Elige uno de nuestros planes y obtem tu páginas web o un software 
              con una licencia anual y soporte. Dale un propósito comercial a tu negocio 
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <DollarSign size={27} />
              </div>

              <div>
                <p className="text-xl font-bold text-white">
                  Precios referenciales
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Obten uno de nuestros super precios , o agrega mas modulos 
                  segun tu necesidad 
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="mt-12 inline-flex flex-wrap gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl"
        >
          {planTypes.map((type) => {
            const isActive = activeType === type;

            return (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`relative rounded-full px-6 py-3 text-sm font-bold transition ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="plan-active-pill"
                    className="absolute inset-0 rounded-full bg-[#149df5] shadow-[0_14px_35px_rgba(20,157,245,0.35)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 34, rotateX: -8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: index === 0 ? -2 : index === 2 ? 2 : 0,
                }}
                className={`group relative flex min-h-[620px] flex-col overflow-hidden rounded-[2.2rem] border p-7 shadow-2xl shadow-black/20 backdrop-blur-xl ${
                  plan.highlight
                    ? "border-cyan-300/40 bg-[#06214a]/90"
                    : "border-white/10 bg-[#061a3d]/70"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.accent}`} />
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/25" />
                <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-12 translate-y-12 rounded-full bg-blue-500/10 blur-2xl" />

                {plan.highlight && (
                  <motion.div
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute top-0 h-full w-24 rotate-12 bg-white/10 blur-xl"
                  />
                )}

                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.18,
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_16px_45px_rgba(0,0,0,0.25)]"
                  >
                    <Icon size={30} />
                  </motion.div>

                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold text-cyan-200 backdrop-blur-md">
                    {plan.tag}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h2 className="text-3xl font-bold text-white">{plan.name}</h2>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {plan.description}
                  </p>
                </div>

                <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                    Desde
                  </p>

                  <div className="mt-3 flex flex-wrap items-end gap-3">
                    <span className="text-4xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm font-semibold text-cyan-300">
                      {plan.usd}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {plan.delivery}
                  </p>
                </div>

                <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-sm font-bold text-white">Ideal para:</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {plan.bestFor}
                  </p>
                </div>

                <div className="relative mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
                      <span className="text-sm leading-6 text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-auto pt-7">
                  <a
                    href={getWhatsappUrl(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#149df5] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(20,157,245,0.32)] transition hover:bg-[#0f8be0]"
                  >
                    Consultar este plan
                    <ArrowRight
                      size={18}
                      className="transition group-hover/button:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-gradient-to-r from-[#061a3d] via-[#072456] to-[#061a3d] p-8 shadow-2xl shadow-black/25"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                ¿No sabes qué plan elegir?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Primero vemos tu necesidad, luego se define el plan correcto.
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                No todo negocio necesita lo más caro. Lo correcto es identificar
                qué problema quieres resolver: vender mejor, ordenar procesos,
                controlar información o automatizar tareas.
              </p>
            </div>

            <motion.a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(34,197,94,0.35)] transition hover:bg-green-400"
            >
              <MessageCircleMore size={20} />
              Asesorarme por WhatsApp
              <ArrowRight size={19} />
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs leading-6 text-slate-500">
            * Los precios son referenciales y pueden variar según alcance,
            personalización, integraciones, cantidad de pantallas, módulos,
            soporte requerido y condiciones de implementación.
          </p>
        </div>
      </div>
    </section>
  );
}