import { Header } from "@/components/layout/Header";
import { ProjectsScreen } from "@/components/sections/ProjectsScreen";

export const metadata = {
  title: "Proyectos | DevWeb Software House",
  description:
    "Proyectos, demos comerciales y soluciones digitales desarrolladas por DevWeb para negocios, empresas y emprendimientos.",
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsScreen />
    </main>
  );
}