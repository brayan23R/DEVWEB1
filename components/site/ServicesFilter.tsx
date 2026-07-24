"use client";

import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  Gauge,
  Globe2,
  PanelsTopLeft,
  Route,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { buildWhatsAppUrl } from "@/lib/site";

type Category =
  | "Todos"
  | "Sistemas"
  | "Web"
  | "IA"
  | "Cloud"
  | "Automatización"
  | "Consultoría";

type Service = {
  category: Exclude<
    Category,
    "Todos"
  >;

  title: string;
  description: string;
  result: string;
  features: string[];
  icon: LucideIcon;
};

const categories: Category[] = [
  "Todos",
  "Sistemas",
  "Web",
  "IA",
  "Cloud",
  "Automatización",
  "Consultoría",
];

const services: Service[] = [
  {
    category: "Sistemas",

    title:
      "Sistemas empresariales a medida",

    description:
      "Aplicaciones creadas alrededor de tus procesos, usuarios, permisos, documentos y objetivos reales.",

    result:
      "Centraliza la operación y reduce el trabajo manual.",

    features: [
      "Inventario",
      "Ventas",
      "Usuarios",
      "Reportes",
    ],

    icon: DatabaseZap,
  },

  {
    category: "Web",

    title:
      "Páginas y plataformas web premium",

    description:
      "Experiencias rápidas, responsivas y orientadas a convertir visitas en oportunidades comerciales.",

    result:
      "Mejora la percepción de marca y la generación de contactos.",

    features: [
      "UX/UI",
      "SEO",
      "Responsive",
      "Analítica",
    ],

    icon: PanelsTopLeft,
  },

  {
    category: "Web",

    title:
      "Comercio electrónico e integraciones",

    description:
      "Catálogos, pagos, gestión de pedidos, automatizaciones e integración con sistemas comerciales.",

    result:
      "Construye un canal de venta disponible todo el día.",

    features: [
      "Catálogo",
      "Pagos",
      "CRM",
      "APIs",
    ],

    icon: Globe2,
  },

  {
    category: "IA",

    title:
      "Agentes y asistentes de inteligencia artificial",

    description:
      "Asistentes conectados con la información empresarial para consultar, atender y ejecutar tareas.",

    result:
      "Respuestas rápidas y equipos menos saturados.",

    features: [
      "RAG",
      "Chatbots",
      "Copilotos",
      "LLM",
    ],

    icon: Bot,
  },

  {
    category: "IA",

    title:
      "Automatización inteligente",

    description:
      "Procesamiento de documentos, clasificación, análisis, extracción de información y decisiones asistidas.",

    result:
      "Convierte procesos repetitivos de horas en minutos.",

    features: [
      "OCR",
      "Resumen",
      "Clasificación",
      "Predicción",
    ],

    icon: BrainCircuit,
  },

  {
    category: "Cloud",

    title:
      "Arquitectura cloud en Azure y AWS",

    description:
      "Diseño y despliegue de soluciones cloud seguras, observables, escalables y fáciles de mantener.",

    result:
      "Infraestructura preparada para crecer sin improvisaciones.",

    features: [
      "Azure",
      "AWS",
      "CI/CD",
      "Monitoreo",
    ],

    icon: CloudCog,
  },

  {
    category: "Automatización",

    title:
      "Automatización de procesos empresariales",

    description:
      "Conectamos formularios, sistemas, correos, aprobaciones, reportes y notificaciones.",

    result:
      "Flujos más rápidos, consistentes y visibles.",

    features: [
      "Webhooks",
      "Alertas",
      "APIs",
      "Aprobaciones",
    ],

    icon: Workflow,
  },

  {
    category: "Automatización",

    title:
      "Dashboards y analítica empresarial",

    description:
      "Centralizamos indicadores y datos operativos para convertir información dispersa en decisiones.",

    result:
      "Indicadores disponibles sin perseguir archivos.",

    features: [
      "KPIs",
      "ETL",
      "BI",
      "Reportes",
    ],

    icon: Gauge,
  },

  {
    category: "Consultoría",

    title:
      "Consultoría y hoja de ruta tecnológica",

    description:
      "Diagnosticamos procesos, riesgos, arquitectura y oportunidades antes de recomendar una solución.",

    result:
      "Prioridades claras para invertir mejor en tecnología.",

    features: [
      "Discovery",
      "Roadmap",
      "Arquitectura",
      "Gobierno",
    ],

    icon: Route,
  },
];

export function ServicesFilter() {
  const [category, setCategory] =
    useState<Category>("Todos");

  const filteredServices =
    useMemo(() => {
      if (category === "Todos") {
        return services;
      }

      return services.filter(
        (service) =>
          service.category ===
          category,
      );
    }, [category]);

  return (
    <>
      <div
        className="service-filters"
        role="tablist"
        aria-label="Categorías de servicios"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={
              category === item
            }
            onClick={() =>
              setCategory(item)
            }
            className={
              category === item
                ? "service-filter is-active"
                : "service-filter"
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="services-grid"
        aria-live="polite"
      >
        {filteredServices.map(
          (service, index) => {
            const Icon =
              service.icon;

            return (
              <article
                key={service.title}
                className="service-card service-card-enter"
                style={{
                  animationDelay: `${
                    index * 35
                  }ms`,
                }}
              >
                <div className="service-card-header">
                  <span className="service-icon">
                    <Icon size={25} />
                  </span>

                  <span className="service-category">
                    {service.category}
                  </span>
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {
                    service.description
                  }
                </p>

                <div className="service-features">
                  {service.features.map(
                    (feature) => (
                      <span
                        key={feature}
                      >
                        {feature}
                      </span>
                    ),
                  )}
                </div>

                <div className="service-result">
                  <strong>
                    Resultado esperado
                  </strong>

                  <span>
                    {service.result}
                  </span>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    `Hola DevWeb, quiero información sobre: ${service.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Consultar solución

                  <ArrowUpRight
                    size={17}
                  />
                </a>
              </article>
            );
          },
        )}
      </div>
    </>
  );
}