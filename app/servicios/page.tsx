import { Header } from "@/components/layout/Header";
import { ServicesScreen } from "@/components/sections/ServicesScreen";

export const metadata = {
  title: "Servicios | DevWeb Software House",
  description:
    "Servicios de desarrollo web, software a medida, automatización, dashboards y soluciones digitales para empresas.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesScreen />
    </main>
  );
}