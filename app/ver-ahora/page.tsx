import { Header } from "@/components/layout/Header";
import { VerAhoraScreen } from "@/components/sections/VerAhoraScreen";

export const metadata = {
  title: "Ver Ahora | DevWeb Software House",
  description:
    "Agenda de eventos en vivo integrada dentro de DevWeb, con visor moderno y reproductor en pantalla grande.",
};

export default function VerAhoraPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VerAhoraScreen />
    </main>
  );
}