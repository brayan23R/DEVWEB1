import { Header } from "@/components/layout/Header";
import { ContactScreen } from "@/components/sections/ContactScreen";

export const metadata = {
  title: "Contacto | DevWeb Software House",
  description:
    "Formulario de contacto, soporte y consulta por WhatsApp para servicios y software DevWeb.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactScreen />
    </main>
  );
}