"use client";

import {
  Check,
  Send,
} from "lucide-react";

import {
  type FormEvent,
  useState,
} from "react";

import { buildWhatsAppUrl } from "@/lib/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  service:
    "Sistema empresarial a medida",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] =
    useState(initialState);

  const [status, setStatus] =
    useState<
      "idle" | "success" | "error"
    >("idle");

  function updateField(
    field: keyof FormState,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (form.website) {
      return;
    }

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      return;
    }

    const message = [
      "Hola DevWeb, quiero solicitar una evaluación para mi proyecto.",
      "",
      `Nombre: ${form.name.trim()}`,
      `Empresa: ${
        form.company.trim() ||
        "No indicada"
      }`,
      `Correo: ${form.email.trim()}`,
      `Servicio: ${form.service}`,
      "",
      "Necesidad:",
      form.message.trim(),
    ].join("\n");

    const popup = window.open(
      buildWhatsAppUrl(message),
      "_blank",
    );

    if (popup) {
      popup.opener = null;
      setStatus("success");
      return;
    }

    setStatus("error");
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div
        className="honeypot"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Sitio web
        </label>

        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) =>
            updateField(
              "website",
              event.target.value,
            )
          }
        />
      </div>

      <div className="form-grid">
        <label>
          Nombre completo *

          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              updateField(
                "name",
                event.target.value,
              )
            }
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Empresa

          <input
            type="text"
            value={form.company}
            onChange={(event) =>
              updateField(
                "company",
                event.target.value,
              )
            }
            placeholder="Nombre de la empresa"
            autoComplete="organization"
          />
        </label>

        <label>
          Correo electrónico *

          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              updateField(
                "email",
                event.target.value,
              )
            }
            placeholder="nombre@empresa.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Servicio de interés

          <select
            value={form.service}
            onChange={(event) =>
              updateField(
                "service",
                event.target.value,
              )
            }
          >
            <option>
              Sistema empresarial a
              medida
            </option>

            <option>
              Página o plataforma web
            </option>

            <option>
              Inteligencia artificial
            </option>

            <option>
              Automatización de procesos
            </option>

            <option>
              Azure o AWS
            </option>

            <option>
              Consultoría tecnológica
            </option>
          </select>
        </label>
      </div>

      <label className="message-field">
        ¿Qué necesitas resolver? *

        <textarea
          value={form.message}
          onChange={(event) =>
            updateField(
              "message",
              event.target.value,
            )
          }
          placeholder="Describe el proceso, problema, usuarios y resultado que esperas obtener."
          required
        />
      </label>

      <div className="contact-form-footer">
        <p>
          Al enviar se abrirá WhatsApp
          con la información preparada
          para que puedas revisarla antes
          de enviarla.
        </p>

        <button
          type="submit"
          className="primary-button"
        >
          <Send size={17} />

          Preparar consulta
        </button>
      </div>

      <div
        className="form-status"
        aria-live="polite"
      >
        {status === "success" && (
          <span className="status-success">
            <Check size={16} />

            Consulta preparada. Revisa
            la ventana de WhatsApp.
          </span>
        )}

        {status === "error" && (
          <span className="status-error">
            Completa los campos
            obligatorios o verifica que
            el navegador permita abrir
            WhatsApp.
          </span>
        )}
      </div>
    </form>
  );
}