"use client";

import { motion } from "framer-motion";
import {
  Maximize2,
  PlayCircle,
  Radio,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type LiveItem = {
  title: string;
  image: string;
  youtubeId: string;
  tag: string;
};

const liveItems: LiveItem[] = [
  {
    title: "Favela",
    image: "/directo/directo-01.png",
    youtubeId: "dcAgnL8BWCs",
    tag: "En vivo",
  },
  {
    title: "Plan escape 3",
    image: "/directo/directo-02.png",
    youtubeId: "a5QIpWYFsZg",
    tag: "Disfruta FREE",
  },
  {
    title: "No confes en nadie",
    image: "/directo/directo-03.png",
    youtubeId: "a5QIpWYFsZg",
    tag: "Popular",
  },
  {
    title: "Furia",
    image: "/directo/directo-04.png",
    youtubeId: "JEa8H3wKKAs",
    tag: "Nuevo",
  },
  {
    title: "La cazadora",
    image: "/directo/directo-05.png",
    youtubeId: "Qqa1dsi1c1I",
    tag: "Top",
  },
  {
    title: "La estafa rusa",
    image: "/directo/directo-06.png",
    youtubeId: "v66JH1HARes",
    tag: "Ahora",
  },
  {
    title: "Extraction",
    image: "/directo/directo-07.png",
    youtubeId: "0cEYwI1Eb-o",
    tag: "Live",
  },
  {
    title: "La isla misteriosa ",
    image: "/directo/directo-08.png",
    youtubeId: "zXSE4ob5HHM",
    tag: "HD",
  },
  {
    title: "Los indestructibles 4",
    image: "/directo/directo-09.png",
    youtubeId: "zwl_gYjVH58",
    tag: "Premium",
  },
  {
    title: "Sin perdon",
    image: "/directo/directo-10.png",
    youtubeId: "Iv91bVlQ_GQ",
    tag: "Directo",
  },
];

export function DirectoScreen() {
  const [selectedItem, setSelectedItem] = useState<LiveItem | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);

  const embedUrl = useMemo(() => {
    if (!selectedItem) return "";

    return `https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedItem]);

  function postToPlayer(command: string) {
    if (!iframeRef.current?.contentWindow) return;

    iframeRef.current.contentWindow.postMessage(
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
      postToPlayer("unMute");
      setIsMuted(false);
    } else {
      postToPlayer("mute");
      setIsMuted(true);
    }
  }

  async function openFullscreen() {
    if (!videoBoxRef.current) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await videoBoxRef.current.requestFullscreen();
  }

  function openVideo(item: LiveItem) {
    setSelectedItem(item);
    setIsMuted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
        <div className="pointer-events-none absolute left-[-12rem] top-10 h-[30rem] w-[30rem] rounded-full bg-red-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-[-10rem] top-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[55rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-12 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-200">
                <motion.span
                  animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]"
                />
                En Directo
              </div>

              <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Diviertete con {" "}
                <span className="bg-gradient-to-r from-red-500 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
                  nuestras peliculas
                </span>{" "}
                disponibles para ti !
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Envuelvete con nuestras peliculas que tenemos para ti, Disfruta mas comprando una cuenta de streaming,
                sin restrigcciones en tu plataforma favorita
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-200">
                  <Radio size={28} />
                </div>

                <div>
                  <p className="text-xl font-bold text-white">
                    10 peliculas gratis disponibles
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    obten acceso a mas peliculas con una cuenta 
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-red-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050b16]/80 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent" />

              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-red-300">
                    <Sparkles size={16} />
                    Selección en vivo
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Elige una pelicula para reproducir
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300">
                 Obten mas con PREMIUN👑
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
                {liveItems.map((item, index) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    initial={{ opacity: 0, y: 26, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.045,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.025,
                      rotateX: 3,
                      rotateY: index % 2 === 0 ? -2 : 2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openVideo(item)}
                    className="group relative text-left"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition group-hover:border-red-300/45">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        <motion.div
                          animate={{
                            opacity: [0.35, 0.75, 0.35],
                            x: ["-120%", "120%"],
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.15,
                          }}
                          className="pointer-events-none absolute top-0 h-full w-20 rotate-12 bg-white/15 blur-xl"
                        />

                        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-500/20 px-3 py-1.5 text-xs font-bold text-red-100 backdrop-blur-md">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          {item.tag}
                        </div>

                        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md transition group-hover:bg-red-500">
                          <PlayCircle size={22} />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-lg font-black leading-tight text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs font-medium text-slate-300">
                            Reproducir ahora
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 backdrop-blur-md">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedItem(null)}
          />

          <motion.div
            ref={videoBoxRef}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#050b16] shadow-[0_25px_100px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-300">
                  <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.9)]" />
                  En directo
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {selectedItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Cerrar video"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-red-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-video w-full bg-black">
                <iframe
                  ref={iframeRef}
                  src={embedUrl}
                  title={selectedItem.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  <PlayCircle size={16} />
                  Reproductor integrado
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    {isMuted ? "Activar sonido" : "Silenciar"}
                  </button>

                  <button
                    type="button"
                    onClick={openFullscreen}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                  >
                    <Maximize2 size={18} />
                    Pantalla grande
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