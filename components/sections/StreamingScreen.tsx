"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Maximize2,
  MessageCircleMore,
  PlayCircle,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const WHATSAPP_NUMBER = "51932402821";
const YOUTUBE_VIDEO_ID = "Pw1X-57Ms-8"; // cambia este por tu video principal

const platformNames = [
  "Netflix",
  "Disney+",
  "Prime Video",
  "Max",
  "Apple TV+",
  "Paramount+",
  "Crunchyroll",
  "Hulu",
  "Peacock",
  "YouTube TV",
  "Discovery+",
  "Spotify",
  "Viki",
  "Tubi",
];

const movies = [
  { title: "Oppenheimer", youtubeId: "uYPbbksJxIg" },
  { title: "Dune: Parte Dos", youtubeId: "Way9Dexny3w" },
  { title: "John Wick 4", youtubeId: "qEVUtrk8_B4" },
  { title: "Top Gun: Maverick", youtubeId: "giXco2jaZ_4" },
  { title: "The Batman", youtubeId: "mqqft2x_Aa4" },
  { title: "Interstellar", youtubeId: "zSWdZVtXT7E" },
  { title: "Avatar: El Camino del Agua", youtubeId: "d9MyW72ELq0" },
  { title: "Misión Imposible", youtubeId: "avz06PDqDbM" },
  { title: "Everything Everywhere", youtubeId: "wxN1T1uxQ2g" },
  { title: "Inception", youtubeId: "YoHD9XEInc0" },
];

function getWhatsappUrl() {
  const message =
    "Hola DevWeb, quiero información para obtener cuentas de streaming.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type MovieItem = {
  title: string;
  youtubeId: string;
};

export function StreamingScreen() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const modalIframeRef = useRef<HTMLIFrameElement | null>(null);
  const modalPlayerWrapperRef = useRef<HTMLDivElement | null>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);
  const [isModalMuted, setIsModalMuted] = useState(true);

  const embedUrl = useMemo(() => {
    return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
  }, []);

  const modalEmbedUrl = useMemo(() => {
    if (!selectedMovie) return "";
    return `https://www.youtube.com/embed/${selectedMovie.youtubeId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
  }, [selectedMovie]);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMovie]);

  function postToPlayer(
    target: HTMLIFrameElement | null,
    command: string
  ) {
    if (!target?.contentWindow) return;

    target.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*"
    );
  }

  function toggleMute() {
    if (isMuted) {
      postToPlayer(iframeRef.current, "unMute");
      setIsMuted(false);
    } else {
      postToPlayer(iframeRef.current, "mute");
      setIsMuted(true);
    }
  }

  function toggleModalMute() {
    if (isModalMuted) {
      postToPlayer(modalIframeRef.current, "unMute");
      setIsModalMuted(false);
    } else {
      postToPlayer(modalIframeRef.current, "mute");
      setIsModalMuted(true);
    }
  }

  async function openFullscreen() {
    if (!modalPlayerWrapperRef.current) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await modalPlayerWrapperRef.current.requestFullscreen();
    }
  }

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
        <div className="pointer-events-none absolute left-[-10rem] top-0 h-[26rem] w-[26rem] rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-12rem] top-24 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-black/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 max-w-4xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200">
              <Sparkles size={16} />
              Acceso a entretenimiento digital
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Obtén tu cuenta de{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-300 bg-clip-text text-transparent">
                streaming
              </span>{" "}
               y vive una mejor experiencia.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Accede a una cuenta de streaming y no te pierdas ningun estreno de tu plataforma favorita 
            </p>
          </motion.div>

          {/* Hero con imagen + video */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-red-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="relative">
                <Image
                  src="/streaming/hero-streaming.png"
                  alt="Streaming hero"
                  width={1600}
                  height={1600}
                  priority
                  className="h-auto w-full object-contain"
                />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020b1f] via-[#020b1f]/50 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020b1f] via-[#020b1f]/60 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020b1f] via-[#020b1f]/55 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020b1f] via-[#020b1f]/55 to-transparent" />

                <motion.div
                  whileHover={{ scale: 1.015, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 top-[45%] z-20 w-[88%] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] border border-red-400/20 bg-black/50 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                >
                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
                    <div className="aspect-video w-full">
                      <iframe
                        ref={iframeRef}
                        src={embedUrl}
                        title="Video de streaming"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                        <PlayCircle size={16} />
                        Video destacado
                      </div>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/65"
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        {isMuted ? "Activar sonido" : "Silenciar"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bloque info */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-300">
                Obtén cuentas de streaming
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Entretenimiento digital al alcance de un clic.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Ofrecemos acceso a cuentas de streaming con una experiencia clara,
                directa y moderna. Si estás buscando una forma rápida de obtener
                tu acceso, aquí puedes solicitar información de manera inmediata.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#081120]/70 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">
                Solicita información ahora
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Escríbenos por WhatsApp y te brindamos detalles sobre
                disponibilidad, acceso y el servicio ofrecido.
              </p>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                <MessageCircleMore size={18} />
                Solicitar por WhatsApp
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* NUEVA IMAGEN CON MARQUESINA */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/streaming/streaming-platforms.png"
                alt="Plataformas de streaming"
                width={1600}
                height={1600}
                className="h-auto w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020b1f] via-[#020b1f]/55 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020b1f] via-[#020b1f]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020b1f] via-[#020b1f]/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020b1f] via-[#020b1f]/60 to-transparent" />

              {/* Línea corriendo */}
              <div className="absolute inset-x-0 top-6 overflow-hidden">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex w-max gap-4 whitespace-nowrap"
                >
                  {[...platformNames, ...platformNames].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="rounded-full border border-cyan-300/20 bg-black/45 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* CTA dentro de imagen */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-5 rounded-[1.8rem] border border-white/10 bg-[#020b1f]/70 p-6 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Adquiere una de estas cuentas aquí
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                    Elige tu plataforma favorita y escríbenos por WhatsApp para
                    recibir información sobre acceso y disponibilidad.
                  </p>
                </div>

                <motion.a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(34,197,94,0.35)] transition hover:bg-green-400"
                >
                  <MessageCircleMore size={18} />
                  Pedir por WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* PELÍCULAS */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-24"
          >
            <div className="mb-10 max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Explora películas
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                Selecciona un tráiler o mira una pelicula en directo
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Tambien puedes mirar peliculas en nuestra seccion en directo 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
              {movies.map((movie, index) => (
                <motion.button
                  key={movie.title}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => {
                    setSelectedMovie(movie);
                    setIsModalMuted(true);
                  }}
                  className="group text-left"
                >
                  <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#081120] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={`https://i.ytimg.com/vi/${movie.youtubeId}/hqdefault.jpg`}
                        alt={movie.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                      <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md">
                        <PlayCircle size={22} />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-lg font-bold leading-tight text-white">
                          {movie.title}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-white/10 px-4 py-3">
                      <p className="text-sm font-medium text-slate-300">
                        Ver video
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL VIDEO */}
      {selectedMovie && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setSelectedMovie(null)} />

          <motion.div
            ref={modalPlayerWrapperRef}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#06111f] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Reproduciendo
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {selectedMovie.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMovie(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-video w-full bg-black">
                <iframe
                  ref={modalIframeRef}
                  src={modalEmbedUrl}
                  title={selectedMovie.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <PlayCircle size={16} />
                  Video integrado
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={toggleModalMute}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/65"
                  >
                    {isModalMuted ? (
                      <VolumeX size={18} />
                    ) : (
                      <Volume2 size={18} />
                    )}
                    {isModalMuted ? "Sonido" : "Silenciar"}
                  </button>

                  <button
                    type="button"
                    onClick={openFullscreen}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/65"
                  >
                    <Maximize2 size={18} />
                    Pantalla completa
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