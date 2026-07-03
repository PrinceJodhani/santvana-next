// app/lib/ogImage.jsx
// Shared 1200x630 branded social share image, generated with next/og.
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT =
  "Santvana Psychological Well-Being Centre — Psychologist & Counselling Centre in Surat";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4a362b",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #6a4d3c 0%, transparent 55%), radial-gradient(circle at 85% 80%, #2f5d57 0%, transparent 55%)",
          fontFamily: "sans-serif",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            border: "2px solid rgba(255,255,255,0.15)",
            borderRadius: "32px",
            padding: "56px 64px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#eaddd7",
              marginBottom: "28px",
            }}
          >
            Psychological Well-Being Centre
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "28px",
            }}
          >
            Santvana
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#f2e8e5",
              lineHeight: 1.25,
              maxWidth: "900px",
            }}
          >
            Trusted Psychologist &amp; Counselling Centre in Surat
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "44px",
              fontSize: 26,
              color: "#c9b7ac",
            }}
          >
            <span>Child &amp; Adult Therapy</span>
            <span>•</span>
            <span>Assessments</span>
            <span>•</span>
            <span>Online Worldwide</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "40px",
              fontSize: 28,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            www.santvana.co.in
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
