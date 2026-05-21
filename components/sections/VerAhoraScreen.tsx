"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Maximize2,
  MonitorPlay,
  Radio,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AGENDA_URL = "https://futbollibregol.pe/";
const AGENDA_CROP_TOP = 245;
const AGENDA_EXTRA_HEIGHT = 360;
const AGENDA_LOADING_IMAGE = "/ver-ahora/eventos-loading.webp";

export function VerAhoraScreen() {
  const [isAgendaLoaded, setIsAgendaLoaded] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const playerBoxRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isPlayerOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPlayerOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlayerOpen]);

  const openFullscreen = async () => {
    try {
      await playerBoxRef.current?.requestFullscreen();
    } catch {
      // El navegador puede bloquear pantalla completa si no viene de una acción directa.
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8">
      <div className="pointer-events-none absolute left-[-12%] top-24 h-80 w-80 rounded-full bg-[#149df5]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-52 h-96 w-96 rounded-full bg-[#00e0c6]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-200">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
            Mira aquí
          </div>

          <h1 className="max-w-5xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Mira los eventos {" "}
            <span className="bg-gradient-to-r from-[#ff3b3b] via-[#ff9f43] to-[#00e0c6] bg-clip-text text-transparent">
             DEPORTIVOS
            </span>{" "}
            
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Adquiere una plataforma de streming o distruta de los eventos deportivos que tenemos disponibles para ti 
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.04] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-4"
        >
          <div className="mb-4 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-[#020b1f]/85 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                <Radio size={24} />
              </div>

              <div>
                <h2 className="text-lg font-black text-white sm:text-xl">
                  Agenda de eventos disponibles
                </h2>
                <p className="text-sm text-slate-400">
                  
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                <ShieldCheck size={15} />
                Disponible
              </div>

              <button
                type="button"
                onClick={() => setIsPlayerOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#149df5] px-5 py-3 text-sm font-black text-white shadow-[0_0_30px_rgba(20,157,245,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0f8ee0]"
              >
                <MonitorPlay size={17} />
                ACCEDE AQUI 
              </button>
            </div>
          </div>

          <div className="relative h-[560px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white shadow-2xl sm:h-[640px] lg:h-[690px]">
            {!isAgendaLoaded && (
  <div className="absolute inset-0 z-10 overflow-hidden bg-[#020b1f]">
    <Image
      src={AGENDA_LOADING_IMAGE}
      alt="Eventos deportivos en vivo"
      fill
      priority
      sizes="(min-width: 1024px) 1200px, 100vw"
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#020b1f]/90 via-[#020b1f]/35 to-[#020b1f]/40" />

    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-[2rem] border border-white/10 bg-[#020b1f]/70 px-8 py-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
          <MonitorPlay size={26} />
        </div>

        <h3 className="text-xl font-black text-white sm:text-2xl">
          Preparando eventos en vivo
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
          Estamos cargando la agenda deportiva disponible para ti.
        </p>

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scaleX: [0.35, 1, 0.35],
                  opacity: [0.45, 1, 0.45],
                }
          }
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-5 h-1.5 w-48 origin-center rounded-full bg-gradient-to-r from-[#149df5] to-[#00e0c6]"
        />
      </motion.div>
    </div>
  </div>
)}

            <iframe
             src={AGENDA_URL}
             title="Agenda de eventos en vivo"
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
             allowFullScreen
             sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
             onLoad={() => setIsAgendaLoaded(true)}
             className="absolute left-0 top-0 max-w-none border-0"
             style={{
              width: "1450px",
              height: `${980 + AGENDA_EXTRA_HEIGHT}px`,
              transform: `translate(-300px, -${AGENDA_CROP_TOP}px) scale(0.95)`,
              transformOrigin: "top left",
            }}
        />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 to-transparent" />
          </div>

          <div className="mt-4 grid gap-4 rounded-[1.5rem] border border-white/10 bg-[#020b1f]/80 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                <CalendarDays size={20} />
              </div>

              <div>
                <h3 className="font-black text-white">
                  Selecciona un evento desde la agenda
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Busca tu evento favorito y abre canales .Empieza a divertirte
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsPlayerOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-400/20"
            >
              <Maximize2 size={17} />
              Abrir visor
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-200">
              <Sparkles size={20} />
            </div>

            <p className="text-sm leading-7 text-slate-300">
              Esta sección llega gracias a Fuñbol Libre .pe
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isPlayerOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={playerBoxRef}
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 20 }
              }
              animate={
                shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, scale: 0.96, y: 20 }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex h-[88vh] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-[#020b1f] shadow-2xl shadow-cyan-950/40"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-[#061a3d]/95 px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                    <Radio size={21} />
                  </div>

                  <div>
                    <h3 className="font-black text-white">
                      Reproductor de eventos
                    </h3>
                    <p className="text-xs text-slate-400">
                      Elige evento, canal y reproduce sin salir de DevWeb
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={openFullscreen}
                    className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 sm:inline-flex"
                  >
                    <Maximize2 size={16} />
                    Fullscreen
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlayerOpen(false)}
                    aria-label="Cerrar reproductor"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-red-500/20"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

            <div className="relative flex-1 overflow-hidden bg-black">
              <iframe
                src={AGENDA_URL}
                title="Visor grande de eventos en vivo"
                referrerPolicy="no-referrer-when-downgrade"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                className="absolute left-0 top-0 w-full border-0"
                style={{
                  height: `calc(100% + ${AGENDA_CROP_TOP + AGENDA_EXTRA_HEIGHT}px)`,
                  transform: `translateY(-${AGENDA_CROP_TOP}px)`,
                  transformOrigin: "top left",
                }}
            />
        </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}