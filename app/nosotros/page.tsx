import { Header } from "@/components/layout/Header";
import { NosotrosScreen } from "@/components/sections/NosotrosScreen";

export const metadata = {
  title: "Nosotros | DevWeb Software House",
  description:
    "Conoce a DevWeb Software House, nuestro enfoque de desarrollo, tecnologías y soluciones digitales para empresas.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <NosotrosScreen />
    </main>
  );
}