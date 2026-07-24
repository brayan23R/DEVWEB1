import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt =
  "DevWeb, consultoría, software, inteligencia artificial y cloud";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const visibleUrl = siteConfig.url.replace(
    /^https?:\/\//,
    "",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "72px",
          background:
            "linear-gradient(135deg, #020b1f 0%, #061a3d 55%, #020b1f 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-210px",
            right: "-170px",
            width: "540px",
            height: "540px",
            border:
              "1px solid rgba(98,244,227,0.26)",
            borderRadius: "999px",
            boxShadow:
              "inset 0 0 140px rgba(34,159,255,0.12)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-190px",
            left: "-170px",
            width: "400px",
            height: "400px",
            border:
              "1px solid rgba(34,159,255,0.18)",
            borderRadius: "999px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "34px",
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "999px",
              background: "#62f4e3",
              boxShadow:
                "0 0 30px rgba(98,244,227,0.75)",
            }}
          />

          {siteConfig.name}
        </div>

        <div
          style={{
            maxWidth: "980px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              color: "#62f4e3",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Consultoría · Software · IA · Cloud
          </div>

          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.03,
              fontWeight: 800,
              letterSpacing: "-4px",
            }}
          >
            Tecnología que hace que una empresa crezca mejor.
          </div>

          <div
            style={{
              maxWidth: "880px",
              color: "#aebed2",
              fontSize: "28px",
              lineHeight: 1.45,
            }}
          >
            Sistemas a medida, desarrollo web, inteligencia
            artificial, automatización y arquitectura cloud.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#8092aa",
            fontSize: "19px",
          }}
        >
          <span>
            Soluciones digitales para empresas
          </span>

          <span>{visibleUrl}</span>
        </div>
      </div>
    ),
    size,
  );
}