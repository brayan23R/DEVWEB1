const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "DevWeb",

  legalName: "DevWeb Soluciones Digitales",

  url:
    configuredUrl &&
    configuredUrl.startsWith("http")
      ? configuredUrl.replace(/\/$/, "")
      : "http://localhost:3000",

  description:
    "Consultoría tecnológica, sistemas a medida, desarrollo web, inteligencia artificial, automatización y soluciones cloud en Azure y AWS.",

  email: "reluzminopebrayan@gmail.com",

  whatsapp: "51902175484",

  whatsappDisplay: "+51 902 175 484",

  location:
    "Perú · atención para Latinoamérica",

  keywords: [
    "consultoría tecnológica",
    "software a medida",
    "sistemas empresariales",
    "desarrollo web",
    "páginas web profesionales",
    "inteligencia artificial",
    "automatización empresarial",
    "Microsoft Azure",
    "Amazon Web Services",
    "AWS",
    "aplicaciones empresariales",
    "transformación digital",
    "consultoría de sistemas",
    "desarrollo de software Perú",
  ],
} as const;

export function buildWhatsAppUrl(
  message: string,
) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}