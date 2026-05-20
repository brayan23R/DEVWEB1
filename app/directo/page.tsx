import { Header } from "@/components/layout/Header";
import { DirectoScreen } from "@/components/sections/DirectoScreen";

export const metadata = {
  title: "En Directo | DevWeb Software House",
  description:
    "Contenido en directo con tarjetas visuales, videos embebidos y experiencia interactiva.",
};

export default function DirectoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DirectoScreen />
    </main>
  );
}