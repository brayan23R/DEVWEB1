import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <SearchX size={52} />

      <p className="mini-label">
        Error 404
      </p>

      <h1>
        Esta ruta se quedó sin mapa.
      </h1>

      <p>
        La página no existe o cambió de dirección.
      </p>

      <Link
        href="/"
        className="primary-button"
      >
        <ArrowLeft size={18} />
        Volver al inicio
      </Link>
    </main>
  );
}