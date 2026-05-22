"use client";

import { motion } from "framer-motion";
import { MessageCircleMore, MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "51902175484"; // cambia por tu número
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20DevWeb,%20quiero%20información%20sobre sus servicios y software.`;

export function ContactScreen() {
  return (
    <section className="relative min-h-screen px-5 py-32 sm:px-8">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Contáctanos
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Hablemos sobre tu proyecto
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Completa el formulario o presiona el botón de WhatsApp para iniciar
            un chat directo con nuestro equipo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="grid gap-10 rounded-2xl border border-white/10 bg-[#061a3d]/60 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-2"
        >
          {/* Formulario */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Gracias! Formulario enviado (simulado).");
            }}
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-slate-300">
                Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Tu nombre completo"
                className="rounded-md border border-white/10 bg-[#031632]/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-slate-300">
                Correo electrónico
              </label>
              <input
                type="email"
                required
                placeholder="tu@enail.com"
                className="rounded-md border border-white/10 bg-[#031632]/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-slate-300">
                Mensaje
              </label>
              <textarea
                required
                rows={5}
                placeholder="Escribe tu consulta o proyecto"
                className="rounded-md border border-white/10 bg-[#031632]/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#149df5] px-6 py-4 text-white transition hover:-translate-y-0.5 hover:bg-[#0f8be0] font-bold"
            >
              Enviar formulario
              <MessageCircleMore size={18} />
            </button>
          </form>

          {/* Contacto + WhatsApp */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#051b3f]/50 p-6">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition"
            >
              <MessageCircleMore size={20} />
              Contactar por WhatsApp
            </motion.a>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} />
                <span>Chiclayo, Perú</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={20} />
                <span>+51 902 175 484</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={20} />
                <span>reluzminopebrayan36@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}