import { Header } from "@/components/layout/Header";
import { PlansScreen } from "@/components/sections/PlansScreen";

export const metadata = {
  title: "Planes | DevWeb Software House",
  description:
    "Planes de desarrollo web, software por rubro, licencia anual, soporte y soluciones digitales para negocios.",
};

export default function PlanesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PlansScreen />
    </main>
  );
}