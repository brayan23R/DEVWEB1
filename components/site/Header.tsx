"use client";

import Image from "next/image";

import {
  ArrowUpRight,
  Menu,
  MessageCircleMore,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  buildWhatsAppUrl,
  siteConfig,
} from "@/lib/site";

const navigation = [
  {
    label: "Inicio",
    id: "inicio",
  },
  {
    label: "Servicios",
    id: "servicios",
  },
  {
    label: "Soluciones",
    id: "soluciones",
  },
  {
    label: "Proceso",
    id: "proceso",
  },
  {
    label: "Planes",
    id: "planes",
  },
  {
    label: "Nosotros",
    id: "nosotros",
  },
  {
    label: "Contacto",
    id: "contacto",
  },
] as const;

export function Header() {
  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [active, setActive] =
    useState("inicio");

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(
        window.scrollY > 20,
      );
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateHeader,
      );
    };
  }, []);

  useEffect(() => {
    const sections =
      navigation
        .map((item) =>
          document.getElementById(
            item.id,
          ),
        )
        .filter(
          (
            section,
          ): section is HTMLElement =>
            Boolean(section),
        );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting,
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio,
            )[0];

          if (visible?.target.id) {
            setActive(
              visible.target.id,
            );
          }
        },
        {
          rootMargin:
            "-30% 0px -58% 0px",
          threshold: [
            0.05,
            0.2,
            0.5,
          ],
        },
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [open]);

  function navigateTo(id: string) {
    setOpen(false);

    const element =
      document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`,
    );
  }

  return (
    <header
      className={
        scrolled
          ? "site-header is-scrolled"
          : "site-header"
      }
    >
      <div className="header-highlight" />

      <div className="header-inner">
        <button
          type="button"
          className="brand"
          onClick={() =>
            navigateTo("inicio")
          }
          aria-label={`Ir al inicio de ${siteConfig.name}`}
        >
          <Image
            src="/brand/devweb-logo.webp"
            alt={siteConfig.name}
            width={165}
            height={72}
            priority
          />
        </button>

        <nav
          className="desktop-navigation"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                navigateTo(item.id)
              }
              className={
                active === item.id
                  ? "navigation-link is-active"
                  : "navigation-link"
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl(
            "Hola DevWeb, quiero conversar sobre una solución tecnológica para mi empresa.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="header-contact"
        >
          <MessageCircleMore
            size={17}
          />

          <span>
            Hablar con un consultor
          </span>

          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setOpen(
              (current) => !current,
            )
          }
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={
            open
              ? "Cerrar menú"
              : "Abrir menú"
          }
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={
          open
            ? "mobile-menu is-open"
            : "mobile-menu"
        }
      >
        <div className="mobile-menu-inner">
          <span className="mobile-menu-label">
            Navegación
          </span>

          {navigation.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  navigateTo(
                    item.id,
                  )
                }
                className={
                  active ===
                  item.id
                    ? "mobile-navigation-link is-active"
                    : "mobile-navigation-link"
                }
                style={{
                  transitionDelay: `${
                    index * 25
                  }ms`,
                }}
              >
                <span>
                  0{index + 1}
                </span>

                {item.label}

                <ArrowUpRight
                  size={18}
                />
              </button>
            ),
          )}

          <a
            href={buildWhatsAppUrl(
              "Hola DevWeb, quiero solicitar una evaluación para mi proyecto.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button mobile-contact-button"
          >
            <MessageCircleMore
              size={18}
            />

            Solicitar evaluación
          </a>
        </div>
      </div>
    </header>
  );
}