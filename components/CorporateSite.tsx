import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Braces,
  Check,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  FileCheck2,
  Gauge,
  Gem,
  Headphones,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircleMore,
  PanelsTopLeft,
  Rocket,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { Header } from "@/components/site/Header";
import { ServicesFilter } from "@/components/site/ServicesFilter";

import {
  buildWhatsAppUrl,
  siteConfig,
} from "@/lib/site";

const workingPrinciples = [
  {
    title:
      "Primero entendemos el negocio",

    description:
      "Antes de escribir código analizamos usuarios, procesos, riesgos, datos y objetivos.",

    icon: Compass,
  },

  {
    title:
      "Diseño que transmite confianza",

    description:
      "La experiencia visual, la jerarquía y la claridad forman parte del producto, no son decoración.",

    icon: Gem,
  },

  {
    title:
      "Arquitectura preparada para crecer",

    description:
      "Construimos con criterios de mantenimiento, seguridad, rendimiento y evolución.",

    icon: Layers3,
  },

  {
    title:
      "Entrega visible y documentada",

    description:
      "Trabajamos por etapas, demostraciones y decisiones registradas para evitar sorpresas.",

    icon: FileCheck2,
  },
];

const solutionExamples = [
  {
    number: "01",

    category:
      "Sistema empresarial",

    title:
      "Plataforma central de operaciones",

    description:
      "Una solución para controlar inventario, usuarios, pedidos, movimientos, documentos y reportes.",

    outcome:
      "Información centralizada y trazabilidad por usuario.",

    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],

    icon: DatabaseZap,
  },

  {
    number: "02",

    category:
      "Inteligencia artificial",

    title:
      "Asistente interno de conocimiento",

    description:
      "Un agente que consulta documentación empresarial, organiza solicitudes y propone respuestas.",

    outcome:
      "Acceso rápido al conocimiento y menor carga operativa.",

    tags: [
      "RAG",
      "LLM",
      "Automatización",
    ],

    icon: Bot,
  },

  {
    number: "03",

    category:
      "Experiencia digital",

    title:
      "Plataforma corporativa comercial",

    description:
      "Sitio modular con posicionamiento, páginas de servicio, captación, analítica y administración.",

    outcome:
      "Mayor claridad comercial y mejor percepción de marca.",

    tags: [
      "SEO",
      "UX/UI",
      "Analytics",
    ],

    icon: PanelsTopLeft,
  },

  {
    number: "04",

    category:
      "Cloud y DevOps",

    title:
      "Arquitectura cloud escalable",

    description:
      "Infraestructura con despliegues controlados, respaldos, observabilidad y separación de ambientes.",

    outcome:
      "Mayor estabilidad y capacidad de crecimiento.",

    tags: [
      "Azure",
      "AWS",
      "CI/CD",
    ],

    icon: CloudCog,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Comprendemos el proceso, los usuarios, los problemas actuales y el resultado esperado.",
  },

  {
    number: "02",
    title: "Estrategia y alcance",
    description:
      "Definimos prioridades, arquitectura, experiencia, funciones, riesgos y entregables.",
  },

  {
    number: "03",
    title: "Diseño y prototipo",
    description:
      "Construimos la experiencia antes de invertir en desarrollo completo.",
  },

  {
    number: "04",
    title: "Desarrollo iterativo",
    description:
      "Avanzamos por ciclos cortos con demostraciones, validaciones y control de calidad.",
  },

  {
    number: "05",
    title: "Lanzamiento",
    description:
      "Publicamos, documentamos, medimos y dejamos una ruta clara de evolución.",
  },
];

const stack = [
  {
    name: "Frontend",
    value:
      "Next.js · React · TypeScript",
    icon: Code2,
  },

  {
    name: "Backend",
    value:
      "Node.js · APIs · SQL",
    icon: Braces,
  },

  {
    name: "Cloud",
    value:
      "Azure · AWS · DevOps",
    icon: ServerCog,
  },

  {
    name: "Inteligencia artificial",
    value:
      "Agentes · RAG · LLM",
    icon: Bot,
  },

  {
    name: "Automatización",
    value:
      "Webhooks · flujos · integraciones",
    icon: Workflow,
  },

  {
    name: "Seguridad",
    value:
      "Roles · auditoría · protección",
    icon: LockKeyhole,
  },
];

const plans = [
  {
    name: "Presencia digital",

    description:
      "Para empresas que necesitan una imagen corporativa profesional, rápida y preparada para captar oportunidades.",

    price: "Desde S/ 2,500",

    featured: false,

    features: [
      "Diseño responsive",
      "Hasta 6 secciones",
      "Formulario y WhatsApp",
      "SEO técnico inicial",
      "Optimización de velocidad",
      "Publicación y configuración",
    ],
  },

  {
    name: "Sistema empresarial",

    description:
      "Para empresas que necesitan controlar procesos, información, usuarios, documentos y operaciones.",

    price: "Desde S/ 6,500",

    featured: true,

    features: [
      "Discovery y arquitectura",
      "Diseño UX/UI",
      "Panel administrativo",
      "Usuarios y permisos",
      "Base de datos",
      "Pruebas y despliegue",
    ],
  },

  {
    name: "IA y cloud",

    description:
      "Para organizaciones que quieren validar inteligencia artificial, automatización o arquitectura cloud.",

    price: "Cotización",

    featured: false,

    features: [
      "Evaluación del caso de uso",
      "Prueba de concepto",
      "Integración con datos",
      "Azure o AWS",
      "Seguridad y observabilidad",
      "Ruta de escalamiento",
    ],
  },
];

const commitments = [
  {
    title:
      "Rendimiento desde el diseño",

    description:
      "Optimizamos imágenes, fuentes, código, estructura y experiencia para reducir tiempos de carga.",

    icon: Gauge,
  },

  {
    title:
      "SEO con fundamento técnico",

    description:
      "Jerarquía semántica, metadatos, sitemap, robots, canonical, Open Graph y datos estructurados.",

    icon: BarChart3,
  },

  {
    title:
      "Seguridad y mantenibilidad",

    description:
      "Código organizado, permisos, validaciones, documentación y buenas prácticas de despliegue.",

    icon: ShieldCheck,
  },

  {
    title:
      "Acompañamiento posterior",

    description:
      "La publicación no es el final. Dejamos soporte, medición y una ruta de evolución.",

    icon: Headphones,
  },
];

const faq = [
  {
    question:
      "¿Cuánto tiempo toma desarrollar un sistema?",

    answer:
      "Depende del alcance, número de usuarios, integraciones y complejidad. Un proyecto pequeño puede organizarse en semanas, mientras que una plataforma empresarial requiere etapas y entregas progresivas.",
  },

  {
    question:
      "¿Trabajan con empresas que ya tienen un sistema?",

    answer:
      "Sí. Podemos evaluar el sistema actual, detectar problemas, diseñar una modernización, integrar nuevas funciones o planificar una migración controlada.",
  },

  {
    question:
      "¿Pueden integrar inteligencia artificial a un sistema existente?",

    answer:
      "Sí, siempre que exista un caso de uso claro y datos adecuados. Primero evaluamos viabilidad, privacidad, costo, riesgos y resultado esperado.",
  },

  {
    question:
      "¿Desarrollan soluciones en Azure y AWS?",

    answer:
      "Sí. Podemos diseñar despliegues, servicios, almacenamiento, bases de datos, seguridad, monitoreo y automatización según las necesidades del proyecto.",
  },

  {
    question:
      "¿La página quedará optimizada para celulares?",

    answer:
      "Sí. El diseño se construye desde una experiencia responsive y se prueba en distintos tamaños de pantalla, navegadores y condiciones de uso.",
  },

  {
    question:
      "¿Incluyen soporte luego de publicar?",

    answer:
      "El soporte puede formar parte del proyecto o contratarse como una etapa posterior. Se define según criticidad, mantenimiento, actualizaciones y evolución requerida.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: siteConfig.legalName,

  alternateName: siteConfig.name,

  url: siteConfig.url,

  email: siteConfig.email,

  description:
    siteConfig.description,

  areaServed: [
    {
      "@type": "Country",
      name: "Perú",
    },
    {
      "@type": "AdministrativeArea",
      name: "Latinoamérica",
    },
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone:
      siteConfig.whatsappDisplay,
    contactType:
      "customer service",
    availableLanguage: [
      "Spanish",
    ],
  },

  serviceType: [
    "Consultoría tecnológica",
    "Desarrollo de software a medida",
    "Desarrollo web",
    "Inteligencia artificial",
    "Automatización de procesos",
    "Arquitectura cloud",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: siteConfig.name,

  url: siteConfig.url,

  description:
    siteConfig.description,

  inLanguage: "es-PE",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: faq.map((item) => ({
    "@type": "Question",

    name: item.question,

    acceptedAnswer: {
      "@type": "Answer",

      text: item.answer,
    },
  })),
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="section-heading"
      data-reveal
    >
      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export function CorporateSite() {
  return (
    <div className="site-root">
      <a
        href="#contenido"
        className="skip-link"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <section
          id="inicio"
          className="hero-section"
        >
          <div className="hero-grid-background" />

          <div className="hero-orb hero-orb-one" />

          <div className="hero-orb hero-orb-two" />

          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-status">
                <span />

                Consultoría, software,
                inteligencia artificial y
                cloud
              </div>

              <h1>
                Tecnología que hace que
                una empresa se vea,
                trabaje y crezca mejor.
              </h1>

              <p className="hero-description">
                Diseñamos sistemas a
                medida, experiencias web,
                automatizaciones, agentes
                de inteligencia artificial
                y arquitecturas cloud
                pensadas para procesos
                reales.
              </p>

              <div className="hero-benefits">
                <span>
                  <Check size={15} />

                  Soluciones adaptadas al
                  negocio
                </span>

                <span>
                  <Check size={15} />

                  Diseño rápido y
                  responsive
                </span>

                <span>
                  <Check size={15} />

                  Arquitectura preparada
                  para crecer
                </span>
              </div>

              <div className="hero-actions">
                <a
                  href={buildWhatsAppUrl(
                    "Hola DevWeb, quiero evaluar una solución tecnológica para mi empresa.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  <MessageCircleMore
                    size={18}
                  />

                  Cuéntanos tu proyecto
                </a>

                <a
                  href="#servicios"
                  className="secondary-button"
                >
                  Explorar servicios

                  <ArrowRight
                    size={18}
                  />
                </a>
              </div>

              <div className="hero-technology-line">
                <span>
                  Next.js
                </span>

                <span>
                  TypeScript
                </span>

                <span>
                  Azure
                </span>

                <span>
                  AWS
                </span>

                <span>
                  IA aplicada
                </span>
              </div>
            </div>

            <div className="hero-showcase">
              <div className="showcase-glow" />

              <div className="showcase-window">
                <div className="showcase-window-header">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="window-address">
                    devweb / digital
                    workspace
                  </div>

                  <span className="window-secure">
                    <LockKeyhole
                      size={12}
                    />

                    Seguro
                  </span>
                </div>

                <div className="showcase-image">
                  <Image
                    src="/home/hero-devweb-persona.png"
                    alt="Profesional trabajando en una solución tecnológica"
                    fill
                    priority
                    quality={86}
                    sizes="(max-width: 1000px) 92vw, 44vw"
                  />

                  <div className="showcase-image-gradient" />

                  <div className="showcase-main-card">
                    <span>
                      Entorno tecnológico
                    </span>

                    <strong>
                      Diseñado para
                      resultados reales
                    </strong>

                    <div className="showcase-progress">
                      <span />
                    </div>
                  </div>
                </div>

                <div className="showcase-dashboard">
                  <div>
                    <Gauge size={18} />

                    <span>
                      <small>
                        Rendimiento
                      </small>

                      Experiencias ligeras
                    </span>
                  </div>

                  <div>
                    <ShieldCheck
                      size={18}
                    />

                    <span>
                      <small>
                        Arquitectura
                      </small>

                      Segura y escalable
                    </span>
                  </div>
                </div>
              </div>

              <div className="floating-expertise-card">
                <Sparkles size={17} />

                <span>
                  <small>
                    Capacidades
                  </small>

                  Web · IA · Cloud
                </span>
              </div>

              <div className="floating-delivery-card">
                <BadgeCheck size={17} />

                <span>
                  <small>
                    Metodología
                  </small>

                  Entregas por etapas
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="expertise-rail"
          aria-label="Capacidades principales"
        >
          <span>
            <Target size={17} />
            Estrategia
          </span>

          <span>
            <PanelsTopLeft
              size={17}
            />
            Diseño UX/UI
          </span>

          <span>
            <Code2 size={17} />
            Desarrollo
          </span>

          <span>
            <Bot size={17} />
            Inteligencia artificial
          </span>

          <span>
            <CloudCog size={17} />
            Cloud
          </span>

          <span>
            <Headphones size={17} />
            Evolución
          </span>
        </section>

        <section
          id="servicios"
          className="section-shell"
        >
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones digitales construidas alrededor del negocio."
            description="Cada servicio responde a una necesidad concreta: controlar, vender, atender, automatizar, analizar, integrar o escalar."
          />

          <ServicesFilter />
        </section>

        <section
          id="soluciones"
          className="section-shell alternate-section"
        >
          <SectionHeading
            eyebrow="Una forma distinta de construir"
            title="La experiencia premium comienza mucho antes de elegir colores."
            description="Un producto profesional necesita claridad, arquitectura, velocidad, confianza y una experiencia que resulte natural para cada usuario."
          />

          <div className="principles-grid">
            {workingPrinciples.map(
              (
                principle,
                index,
              ) => {
                const Icon =
                  principle.icon;

                return (
                  <article
                    key={
                      principle.title
                    }
                    className="principle-card"
                    data-reveal
                    style={{
                      transitionDelay: `${
                        index * 50
                      }ms`,
                    }}
                  >
                    <span className="principle-number">
                      0{index + 1}
                    </span>

                    <span className="principle-icon">
                      <Icon size={24} />
                    </span>

                    <h3>
                      {principle.title}
                    </h3>

                    <p>
                      {
                        principle.description
                      }
                    </p>
                  </article>
                );
              },
            )}
          </div>

          <div
            className="premium-statement"
            data-reveal
          >
            <div>
              <span className="eyebrow">
                Nuestro enfoque
              </span>

              <h3>
                No vendemos una plantilla.
                Diseñamos una herramienta
                para que tu empresa avance.
              </h3>
            </div>

            <div className="premium-statement-list">
              <span>
                <Check size={15} />
                Arquitectura antes de
                improvisación
              </span>

              <span>
                <Check size={15} />
                Experiencia antes de
                saturación
              </span>

              <span>
                <Check size={15} />
                Velocidad antes de efectos
                innecesarios
              </span>

              <span>
                <Check size={15} />
                Resultados antes de
                tecnicismos
              </span>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow="Ejemplos de solución"
            title="Productos digitales con una función clara dentro de la empresa."
            description="Estos ejemplos muestran cómo una necesidad empresarial puede convertirse en una solución tecnológica estructurada."
          />

          <div className="solutions-grid">
            {solutionExamples.map(
              (
                solution,
                index,
              ) => {
                const Icon =
                  solution.icon;

                return (
                  <article
                    key={
                      solution.title
                    }
                    className="solution-card"
                    data-reveal
                    style={{
                      transitionDelay: `${
                        index * 55
                      }ms`,
                    }}
                  >
                    <div className="solution-visual">
                      <div className="solution-grid-pattern" />

                      <span className="solution-number">
                        {solution.number}
                      </span>

                      <span className="solution-type">
                        {
                          solution.category
                        }
                      </span>

                      <Icon size={66} />

                      <div className="solution-circuit">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="solution-content">
                      <h3>
                        {solution.title}
                      </h3>

                      <p>
                        {
                          solution.description
                        }
                      </p>

                      <div className="solution-tags">
                        {solution.tags.map(
                          (tag) => (
                            <span
                              key={tag}
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>

                      <div className="solution-outcome">
                        <strong>
                          Impacto esperado
                        </strong>

                        <span>
                          {
                            solution.outcome
                          }
                        </span>
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </section>

        <section
          id="proceso"
          className="section-shell alternate-section"
        >
          <div className="process-layout">
            <div
              className="process-introduction"
              data-reveal
            >
              <span className="eyebrow">
                Cómo trabajamos
              </span>

              <h2>
                Un proceso claro para
                evitar proyectos llenos de
                dudas.
              </h2>

              <p>
                Avanzamos mediante
                decisiones visibles,
                validaciones y entregas
                progresivas. La tecnología
                no debería sentirse como
                una caja negra.
              </p>

              <a
                href={buildWhatsAppUrl(
                  "Hola DevWeb, quiero conocer cómo organizarían mi proyecto.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Conversar sobre el proceso

                <ArrowUpRight
                  size={17}
                />
              </a>
            </div>

            <div className="process-steps">
              {processSteps.map(
                (
                  step,
                  index,
                ) => (
                  <article
                    key={
                      step.number
                    }
                    className="process-step"
                    data-reveal
                    style={{
                      transitionDelay: `${
                        index * 45
                      }ms`,
                    }}
                  >
                    <div className="process-step-number">
                      {step.number}
                    </div>

                    <div>
                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {
                          step.description
                        }
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                    />
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="technology-layout">
            <div
              className="technology-copy"
              data-reveal
            >
              <span className="eyebrow">
                Tecnología
              </span>

              <h2>
                Un ecosistema moderno, sin
                convertir la web en una
                exhibición de siglas.
              </h2>

              <p>
                Seleccionamos las
                herramientas según el
                proyecto, no según una moda.
                La prioridad es construir
                productos rápidos,
                mantenibles y seguros.
              </p>

              <div className="technology-note">
                <Lightbulb
                  size={20}
                />

                <span>
                  <strong>
                    La tecnología correcta
                  </strong>

                  es la que resuelve el
                  problema con el menor
                  nivel de complejidad
                  innecesaria.
                </span>
              </div>
            </div>

            <div className="technology-grid">
              {stack.map(
                (
                  item,
                  index,
                ) => {
                  const Icon =
                    item.icon;

                  return (
                    <article
                      key={item.name}
                      className="technology-card"
                      data-reveal
                      style={{
                        transitionDelay: `${
                          index * 40
                        }ms`,
                      }}
                    >
                      <Icon size={22} />

                      <div>
                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {item.value}
                        </span>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>
        </section>

        <section className="commitment-section">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Estándar de trabajo"
              title="Lo que debe sentirse profesional también debe estar bien construido."
              description="La calidad visual es solo la superficie. Debajo deben existir rendimiento, estructura, seguridad y una estrategia clara."
            />

            <div className="commitments-grid">
              {commitments.map(
                (
                  commitment,
                  index,
                ) => {
                  const Icon =
                    commitment.icon;

                  return (
                    <article
                      key={
                        commitment.title
                      }
                      className="commitment-card"
                      data-reveal
                      style={{
                        transitionDelay: `${
                          index * 45
                        }ms`,
                      }}
                    >
                      <span>
                        <Icon
                          size={22}
                        />
                      </span>

                      <h3>
                        {
                          commitment.title
                        }
                      </h3>

                      <p>
                        {
                          commitment.description
                        }
                      </p>
                    </article>
                  );
                },
              )}
            </div>
          </div>
        </section>

        <section
          id="planes"
          className="section-shell"
        >
          <SectionHeading
            eyebrow="Planes referenciales"
            title="Una referencia para iniciar una conversación seria."
            description="El precio final depende del alcance, funciones, usuarios, integraciones, datos, diseño y nivel de personalización."
          />

          <div className="plans-grid">
            {plans.map(
              (plan, index) => (
                <article
                  key={plan.name}
                  className={
                    plan.featured
                      ? "plan-card is-featured"
                      : "plan-card"
                  }
                  data-reveal
                  style={{
                    transitionDelay: `${
                      index * 60
                    }ms`,
                  }}
                >
                  {plan.featured && (
                    <span className="featured-plan-label">
                      <Sparkles
                        size={13}
                      />

                      Más solicitado
                    </span>
                  )}

                  <span className="plan-name">
                    {plan.name}
                  </span>

                  <p className="plan-description">
                    {plan.description}
                  </p>

                  <strong className="plan-price">
                    {plan.price}
                  </strong>

                  <span className="plan-price-note">
                    Evaluación previa del
                    alcance
                  </span>

                  <ul>
                    {plan.features.map(
                      (feature) => (
                        <li
                          key={feature}
                        >
                          <Check
                            size={15}
                          />

                          {feature}
                        </li>
                      ),
                    )}
                  </ul>

                  <a
                    href={buildWhatsAppUrl(
                      `Hola DevWeb, quiero solicitar información sobre el plan ${plan.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      plan.featured
                        ? "primary-button"
                        : "secondary-button"
                    }
                  >
                    Solicitar evaluación

                    <ArrowRight
                      size={17}
                    />
                  </a>
                </article>
              ),
            )}
          </div>
        </section>

        <section
          id="nosotros"
          className="section-shell alternate-section"
        >
          <div className="about-layout">
            <div
              className="about-visual"
              data-reveal
            >
              <div className="about-image">
                <Image
                  src="/nosotros/brayan-reluz.png"
                  alt="Profesional de DevWeb"
                  fill
                  quality={82}
                  sizes="(max-width: 900px) 92vw, 42vw"
                />

                <div className="about-image-gradient" />
              </div>

              <div className="about-principle">
                <span>
                  Nuestra idea central
                </span>

                <strong>
                  La tecnología debe
                  simplificar el trabajo,
                  no decorar el problema.
                </strong>
              </div>
            </div>

            <div
              className="about-content"
              data-reveal
            >
              <span className="eyebrow">
                Sobre DevWeb
              </span>

              <h2>
                Una consultora tecnológica
                con mentalidad de
                constructor.
              </h2>

              <p>
                Trabajamos en la
                intersección entre negocio,
                experiencia de usuario e
                ingeniería. No entregamos
                código aislado: construimos
                soluciones que el equipo
                pueda usar, comprender y
                hacer crecer.
              </p>

              <p>
                Abordamos sistemas a
                medida, plataformas web,
                automatización,
                inteligencia artificial y
                arquitectura cloud
                combinando diagnóstico,
                diseño, desarrollo y
                acompañamiento.
              </p>

              <div className="about-values">
                <span>
                  <Check size={15} />
                  Comunicación clara
                </span>

                <span>
                  <Check size={15} />
                  Decisiones documentadas
                </span>

                <span>
                  <Check size={15} />
                  Diseño orientado al
                  usuario
                </span>

                <span>
                  <Check size={15} />
                  Tecnología sostenible
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Información clara antes de iniciar."
            description="Estas son algunas de las preguntas habituales al evaluar una solución tecnológica."
          />

          <div className="faq-layout">
            <div
              className="faq-assistance"
              data-reveal
            >
              <Route size={27} />

              <h3>
                ¿Tu pregunta no aparece?
              </h3>

              <p>
                Cuéntanos brevemente el
                contexto y te ayudaremos a
                identificar el siguiente
                paso.
              </p>

              <a
                href={buildWhatsAppUrl(
                  "Hola DevWeb, tengo una consulta sobre un proyecto tecnológico.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Realizar una consulta

                <ArrowUpRight
                  size={17}
                />
              </a>
            </div>

            <div className="faq-list">
              {faq.map(
                (
                  item,
                  index,
                ) => (
                  <details
                    key={
                      item.question
                    }
                    className="faq-item"
                    data-reveal
                    style={{
                      transitionDelay: `${
                        index * 35
                      }ms`,
                    }}
                  >
                    <summary>
                      <span>
                        {
                          item.question
                        }
                      </span>

                      <span className="faq-plus">
                        +
                      </span>
                    </summary>

                    <p>
                      {item.answer}
                    </p>
                  </details>
                ),
              )}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="section-shell alternate-section"
        >
          <SectionHeading
            eyebrow="Contacto"
            title="Cuéntanos el problema. La solución la diseñamos juntos."
            description="Comparte el proceso que quieres mejorar, la idea que necesitas validar o el sistema que ya no acompaña el crecimiento de tu empresa."
          />

          <div className="contact-layout">
            <aside
              className="contact-information"
              data-reveal
            >
              <div className="contact-information-header">
                <span>
                  Primera conversación
                </span>

                <h3>
                  Hablemos con claridad
                  sobre tu proyecto.
                </h3>

                <p>
                  Te haremos preguntas
                  concretas para entender
                  alcance, usuarios,
                  prioridad y contexto.
                </p>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
              >
                <span>
                  <Mail size={19} />
                </span>

                <div>
                  <small>
                    Correo
                  </small>

                  <strong>
                    {siteConfig.email}
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <MessageCircleMore
                    size={19}
                  />
                </span>

                <div>
                  <small>
                    WhatsApp
                  </small>

                  <strong>
                    {
                      siteConfig.whatsappDisplay
                    }
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                />
              </a>

              <div className="contact-location">
                <span>
                  <MapPin size={19} />
                </span>

                <div>
                  <small>
                    Cobertura
                  </small>

                  <strong>
                    {
                      siteConfig.location
                    }
                  </strong>
                </div>
              </div>
            </aside>

            <div data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="final-call-section">
          <div
            className="final-call-card"
            data-reveal
          >
            <div className="final-call-pattern" />

            <div className="final-call-content">
              <span className="eyebrow">
                <Rocket size={15} />

                El siguiente paso
              </span>

              <h2>
                Una buena solución empieza
                con una conversación
                precisa.
              </h2>

              <p>
                Cuéntanos qué proceso
                quieres mejorar, qué estás
                haciendo manualmente o qué
                producto digital necesitas
                construir.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(
                "Hola DevWeb, quiero iniciar una conversación sobre mi proyecto.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Iniciar conversación

              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/brand/devweb-logo.webp"
              alt={siteConfig.name}
              width={150}
              height={65}
            />

            <p>
              Consultoría, sistemas a
              medida, desarrollo web,
              inteligencia artificial,
              automatización y cloud para
              empresas.
            </p>
          </div>

          <div className="footer-column">
            <strong>
              Soluciones
            </strong>

            <a href="#servicios">
              Software a medida
            </a>

            <a href="#servicios">
              Desarrollo web
            </a>

            <a href="#servicios">
              Inteligencia artificial
            </a>

            <a href="#servicios">
              Azure y AWS
            </a>
          </div>

          <div className="footer-column">
            <strong>
              Empresa
            </strong>

            <a href="#nosotros">
              Nosotros
            </a>

            <a href="#proceso">
              Metodología
            </a>

            <a href="#planes">
              Planes
            </a>

            <a href="#contacto">
              Contacto
            </a>
          </div>

          <div className="footer-column">
            <strong>
              Contacto
            </strong>

            <a
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                siteConfig.whatsappDisplay
              }
            </a>

            <span>
              {siteConfig.location}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            ©{" "}
            {new Date().getFullYear()}{" "}
            {siteConfig.name}. Todos los
            derechos reservados.
          </span>

          <span>
            Tecnología con propósito,
            claridad y dirección.
          </span>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              organizationSchema,
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              websiteSchema,
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              faqSchema,
            ),
        }}
      />
    </div>
  );
}