"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircleMore, PlayCircle, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "51902175484";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Streaming", href: "/streaming" },
  { label: "En Directo", href: "/directo" },
  { label: "Planes", href: "/planes" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

function getWhatsappUrl() {
  const message = "Hola DevWeb, quiero informacion sobre sus servicios y software.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const glowAnimation = shouldReduceMotion
    ? {}
    : {
        boxShadow: [
          "0 0 0 rgba(20, 157, 245, 0)",
          "0 0 24px rgba(20, 157, 245, 0.45)",
          "0 0 42px rgba(0, 224, 198, 0.35)",
          "0 0 0 rgba(20, 157, 245, 0)",
        ],
      };

  const shineAnimation = shouldReduceMotion
    ? {}
    : {
        x: ["-140%", "140%"],
        opacity: [0, 1, 0],
      };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020b1f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Ir al inicio">
          <Image
            src="/brand/devweb-logo.webp"
            alt="DevWeb Software House"
            width={150}
            height={70}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.div
            animate={glowAnimation}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full"
          >
            <Link
              href="/ver-ahora"
              aria-label="Ver eventos ahora"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/35 bg-white/[0.07] px-4 py-3 text-sm font-bold text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:border-cyan-200/80 hover:bg-cyan-400/15 hover:text-white xl:px-5"
>
              <motion.span
                aria-hidden="true"
                animate={shineAnimation}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />

              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#149df5]/10 via-[#00e0c6]/10 to-[#149df5]/10 opacity-70 transition group-hover:opacity-100"
              />

              <PlayCircle
                size={17}
                className="relative z-10 text-cyan-200 transition group-hover:text-white"
              />

              <span className="relative z-10 tracking-wide">VER AHORA</span>
            </Link>
          </motion.div>

          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/70 hover:bg-cyan-400/20 xl:px-5"
          >
            <MessageCircleMore size={17} />
            Contáctanos
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#020b1f]/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/ver-ahora"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-300/35 bg-white/[0.07] px-5 py-3 text-sm font-bold text-cyan-100 backdrop-blur-xl transition hover:border-cyan-200/80 hover:bg-cyan-400/15 hover:text-white"
            >
              <PlayCircle size={17} />
              VER AHORA
            </Link>

            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#149df5] px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircleMore size={17} />
              Contáctanos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}