import { SiteShell } from "@/components/layout/SiteShell";
import { StreamingScreen } from "@/components/sections/StreamingScreen";

export const metadata = {
  title: "Streaming | DevWeb Software House",
  description:
    "Obtén tu cuentas de streaming con una presentación visual moderna, elegante e integrada.",
};

export default function StreamingPage() {
  return (
    <SiteShell>
      <main className="min-h-screen">
        <StreamingScreen />
      </main>
    </SiteShell>
  );
}