import { ImageResponse } from "next/og";
import { brand, seo } from "@/data/site";

export const alt = seo.openGraph.imageAlt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e9",
          color: "#0a0a0a",
          padding: "58px 64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(20,184,166,0.18), transparent 32%), radial-gradient(circle at 86% 18%, rgba(249,115,22,0.22), transparent 28%), linear-gradient(90deg, rgba(10,10,10,0.08) 1px, transparent 1px), linear-gradient(rgba(10,10,10,0.08) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 72px 72px, 72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-90px",
            bottom: "-120px",
            width: 520,
            height: 520,
            border: "2px solid rgba(10,10,10,0.14)",
            transform: "rotate(-12deg)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#0a0a0a",
                color: "#f3f0e9",
                fontSize: 20,
                letterSpacing: 2,
              }}
            >
              {brand.monogram}
            </div>
            <span>{brand.name}</span>
          </div>
          <span>Portfolio / 2026</span>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 980,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              marginBottom: 26,
              display: "flex",
              gap: 14,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#525252",
            }}
          >
            <span>Full Stack</span>
            <span>/</span>
            <span>Web Apps</span>
            <span>/</span>
            <span>Architecture</span>
          </div>
          <h1
            style={{
              margin: 0,
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              lineHeight: 0.88,
              fontWeight: 900,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            <span>Software</span>
            <span style={{ color: "#087f70" }}>Engineer</span>
          </h1>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(10,10,10,0.22)",
            paddingTop: 26,
            fontSize: 24,
            lineHeight: 1.35,
            color: "#404040",
          }}
        >
          <span style={{ maxWidth: 720 }}>
            Building financial systems, enterprise applications, and dependable software infrastructure.
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#0a0a0a",
            }}
          >
            Next.js / Laravel / PostgreSQL
          </span>
        </div>
      </div>
    ),
    size,
  );
}
