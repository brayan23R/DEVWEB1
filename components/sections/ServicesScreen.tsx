"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Globe2,
  Headphones,
  Layers3,
  MessageCircleMore,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Zap,
  type LucideIcon,
} from "lucide-react";

const WHATSAPP_NUMBER = "51902175484";
const USD_RATE = 3.439;

const servicePillars: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Globe2,
    title: "Desarrollo digital",
    description:
      "Creamos páginas web, sistemas internos y plataformas digitales con estructura profesional, diseño claro y base preparada para crecer.",
  },
  {
    icon: Zap,
    title: "Digitalización de procesos",
    description:
      "Transformamos controles manuales en flujos digitales para reducir errores, ordenar información y mejorar la velocidad operativa.",
  },
  {
    icon: Headphones,
    title: "Soporte y continuidad",
    description:
      "Acompañamos la implementación, resolvemos dudas y damos soporte para que el sistema se use de verdad, no solo se entregue.",
  },
];

const softwareCatalog: {
  icon: LucideIcon;
  name: string;
  sector: string;
  description: string;
  idealFor: string[];
  modules: string[];
  outcomes: string[];
  pricePen: number;
  featured?: boolean;
}[] = [
  {
    icon: UtensilsCrossed,
    name: "Sistema de control interno para restaurantes",
    sector: "Restaurantes, pollerías, cafeterías y negocios gastronómicos",
    description:
      "Controla ventas, pedidos, productos y operaciones internas para que el negocio trabaje con mayor orden y menos dependencia de cuadernos o archivos sueltos.",
    idealFor: ["Restaurantes", "Pollerías", "Cafeterías", "Dark kitchens"],
    modules: [
      "Control de ventas y pedidos",
      "Gestión básica de productos",
      "Registro operativo interno",
      "Software + licencia por 1 año",
    ],
    outcomes: [
      "Mejor control diario",
      "Menos desorden operativo",
      "Información disponible para decidir",
    ],
    pricePen: 600,
    featured: true,
  },
  {
    icon: Store,
    name: "Sistema de control para farmacias",
    sector: "Farmacias, boticas y negocios de atención farmacéutica",
    description:
      "Organiza la operación comercial y permite llevar un mejor seguimiento interno de ventas, productos y movimientos básicos del negocio.",
    idealFor: ["Farmacias", "Boticas", "Locales pequeños", "Puntos de venta"],
    modules: [
      "Control comercial básico",
      "Gestión de productos",
      "Registro de movimientos",
      "Software + licencia por 1 año",
    ],
    outcomes: [
      "Mayor orden comercial",
      "Seguimiento más claro",
      "Menos pérdida de información",
    ],
    pricePen: 600,
  },
  {
    icon: ShoppingCart,
    name: "Sistema para minimarket",
    sector: "Minimarkets, tiendas surtidas y pequeños comercios",
    description:
      "Diseñado para negocios con alta rotación de productos que necesitan controlar ventas, operación diaria y gestión básica del punto de atención.",
    idealFor: ["Minimarkets", "Bodegas", "Tiendas surtidas", "Comercios locales"],
    modules: [
      "Control de ventas",
      "Gestión de productos",
      "Registro de operación diaria",
      "Software + licencia por 1 año",
    ],
    outcomes: [
      "Control más rápido",
      "Menos trabajo manual",
      "Mejor orden de atención",
    ],
    pricePen: 600,
  },
  {
    icon: ReceiptText,
    name: "Sistema de facturación para negocios",
    sector: "Ferreterías, tiendas de ropa, comercios y negocios pequeños",
    description:
      "Una solución práctica para negocios que necesitan facturar, registrar operaciones comerciales y trabajar con una herramienta simple y ordenada.",
    idealFor: ["Ferreterías", "Tiendas de ropa", "Bazares", "Negocios pequeños"],
    modules: [
      "Facturación para negocio",
      "Registro comercial básico",
      "Gestión simple de clientes",
      "Software + licencia por 1 año",
    ],
    outcomes: [
      "Facturación más ordenada",
      "Proceso comercial más claro",
      "Menos dependencia de registros manuales",
    ],
    pricePen: 450,
  },
  {
    icon: Layers3,
    name: "Sistema de control interno para panadería",
    sector: "Panaderías, pastelerías y negocios de producción artesanal",
    description:
      "Ayuda a ordenar la gestión diaria de ventas, productos y control interno para negocios que combinan producción y atención al cliente.",
    idealFor: ["Panaderías", "Pastelerías", "Negocios de producción", "Locales familiares"],
    modules: [
      "Control operativo interno",
      "Registro de ventas",
      "Seguimiento básico del negocio",
      "Software + licencia por 1 año",
    ],
    outcomes: [
      "Operación más ordenada",
      "Mayor claridad diaria",
      "Mejor seguimiento del negocio",
    ],
    pricePen: 540,
  },
  {
    icon: Stethoscope,
    name: "Sistema para clínicas y consultorios",
    sector: "Clínicas pequeñas, consultorios, centros médicos y atención privada",
    description:
      "Solución para organizar citas, pacientes, atenciones y registros administrativos básicos, manteniendo una operación más ordenada y profesional.",
    idealFor: ["Clínicas pequeñas", "Consultorios", "Centros médicos", "Atención privada"],
    modules: [
      "Registro de pacientes",
      "Control de citas",
      "Historial básico de atenciones",
      "Software + licencia por 1 año",
    ],
    outcomes: [
      "Mejor atención administrativa",
      "Menos desorden en citas",
      "Mayor control de pacientes",
    ],
    pricePen: 870,
    featured: true,
  },
];

const commercialBenefits = [
  "Precio base por rubro",
  "Licencia incluida por 1 año",
  "Implementación inicial orientada al uso real",
  "Soporte para puesta en marcha",
];

function formatPen(value: number) {
  return value.toLocaleString("es-PE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatUsdFromPen(value: number) {
  return (value / USD_RATE).toFixed(2);
}

function getWhatsappUrl(productName?: string) {
  const message = productName
    ? `Hola DevWeb, quiero información sobre el ${productName}.`
    : "Hola DevWeb, quiero información sobre sus servicios y software.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ServicesScreen() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[22rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Layers3 size={16} />
              Servicios DevWeb
            </div>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Software para empresas que necesitan{" "}
              <span className="bg-gradient-to-r from-[#149df5] to-[#00e0c6] bg-clip-text text-transparent">
                 el control. 
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Desarrollamos soluciones digitales para empresas que quieren
              dejar de depender de hojas sueltas, procesos manuales y controles
              desordenados   </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Qué incluye 
            </p>

            <div className="mt-5 grid gap-4">
              {commercialBenefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                <BadgeCheck className="text-cyan-200" size={22} />
                <p className="mt-3 text-sm font-semibold text-white">
                  Licencia
                </p>
                <p className="text-xs text-slate-400">Incluida por 1 año</p>
              </div>

              <div className="rounded-2xl border border-blue-300/15 bg-blue-300/10 p-4">
                <Clock3 className="text-blue-200" size={22} />
                <p className="mt-3 text-sm font-semibold text-white">
                  Activación
                </p>
                <p className="text-xs text-slate-400">Rapida y segura</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {servicePillars.map((block, index) => {
            const Icon = block.icon;

            return (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#061a3d]/65 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#08204a]/80"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

                <motion.div
                  animate={{ y: [0, -5, 0], rotate: [0, 1.5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-blue-500/10 text-cyan-200 shadow-[0_16px_45px_rgba(0,0,0,0.25)]"
                >
                  <Icon size={30} />
                </motion.div>

                <h2 className="relative mt-7 text-2xl font-bold text-white">
                  {block.title}
                </h2>

                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {block.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Software para negocios
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Paquetes para negocios que necesitan empezar a
                digitalizarse sin complicarse.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Cada sistema incluye software + licencia por 1 año. Los precios
              son base y pueden ajustarse si se agregan módulos, integraciones
              o personalizaciones específicas.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {softwareCatalog.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18 + index * 0.06,
                    ease: "easeOut",
                  }}
                  className={`group relative flex min-h-[680px] flex-col overflow-hidden rounded-[2rem] border p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition ${
                    product.featured
                      ? "border-cyan-300/35 bg-[#061d42]/90"
                      : "border-white/10 bg-[#05152f]/85"
                  }`}
                >
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                  <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-10 translate-y-10 rounded-full bg-blue-500/10 blur-2xl" />

                  <div className="relative flex items-start justify-between gap-4">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                    >
                      <Icon size={30} />
                    </motion.div>

                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      Software + licencia
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      {product.sector}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {product.description}
                    </p>
                  </div>

                  <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Precio 
                    </p>

                    <div className="mt-3 flex flex-wrap items-end gap-3">
                      <span className="text-4xl font-bold text-white">
                        S/ {formatPen(product.pricePen)}
                      </span>
                      <span className="pb-1 text-sm font-medium text-cyan-300">
                        ≈ US$ {formatUsdFromPen(product.pricePen)}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Incluye software + licencia por 1 año.
                    </p>
                  </div>

                  <div className="relative mt-6">
                    <p className="text-sm font-bold text-white">Ideal para:</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.idealFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-6 grid gap-5">
                    <div>
                      <p className="text-sm font-bold text-white">Incluye:</p>
                      <div className="mt-3 space-y-3">
                        {product.modules.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-cyan-300"
                            />
                            <span className="text-sm leading-6 text-slate-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Resultado esperado:
                      </p>
                      <div className="mt-3 space-y-3">
                        {product.outcomes.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span className="text-sm leading-6 text-slate-400">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-auto pt-7">
                    <a
                      href={getWhatsappUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#149df5] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(20,157,245,0.28)] transition hover:bg-[#0f8be0]"
                    >
                      Solicitar este sistema
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-[#061a3d] via-[#072456] to-[#061a3d] p-8 shadow-2xl shadow-black/20"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex gap-4">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 sm:flex">
                <ShieldCheck size={27} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  ¿Tu negocio necesita algo más específico?
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  Se puede partir desde uno de estos sistemas y adaptarlo según
                  tus procesos: módulos, permisos, reportes, integraciones o
                  mejoras de diseño.
                </p>
              </div>
            </div>

            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#149df5] px-7 py-4 text-base font-bold text-white shadow-[0_18px_45px_rgba(20,157,245,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0f8be0]"
            >
              <MessageCircleMore size={20} />
              Consultar por WhatsApp
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs leading-6 text-slate-500">
            * Precios base referenciales. Incluyen software + licencia por 1
            año. El equivalente en dólares se calcula con tipo de cambio
            referencial configurado en esta pantalla: US$1 = S/ {USD_RATE}.
            Personalizaciones, integraciones especiales, migración de datos o
            módulos adicionales se cotizan aparte.
          </p>
        </div>
      </div>
    </section>
  );
}