import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rafael Almeida | Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = ["C#", ".NET", "Docker", "Azure", "PostgreSQL"];

export default async function Image() {
  const outfitBold = await fetch(
    "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#FFFDF7",
          display: "flex",
          padding: "48px",
          fontFamily: "Outfit, sans-serif",
          position: "relative",
        }}
      >
        {/* inner border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "6px solid #000",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "32px",
            zIndex: 1,
          }}
        >
          {/* top row: RA badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                background: "#000",
                color: "#FFFDF7",
                fontWeight: 900,
                fontSize: "22px",
                padding: "8px 16px",
                border: "3px solid #000",
                display: "flex",
              }}
            >
              RA
            </div>
            <div
              style={{
                background: "#58CC02",
                color: "#000",
                fontWeight: 700,
                fontSize: "14px",
                padding: "6px 14px",
                border: "3px solid #000",
                display: "flex",
              }}
            >
              Disponível para oportunidades
            </div>
          </div>

          {/* center: name + title */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "88px",
                fontWeight: 900,
                color: "#000",
                lineHeight: 1,
                letterSpacing: "-2px",
                display: "flex",
              }}
            >
              Rafael Almeida
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  background: "#2563EB",
                  color: "#FFFDF7",
                  fontWeight: 700,
                  fontSize: "28px",
                  padding: "8px 20px",
                  border: "3px solid #000",
                  display: "flex",
                }}
              >
                Backend Developer
              </div>
              <div
                style={{
                  color: "#000",
                  fontWeight: 400,
                  fontSize: "20px",
                  opacity: 0.6,
                  display: "flex",
                }}
              >
                Sistemas em produção · APIs otimizadas · Deploy multi-cloud
              </div>
            </div>
          </div>

          {/* bottom row: tech tags */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  background: "#FFFDF7",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "18px",
                  padding: "6px 16px",
                  border: "3px solid #000",
                  boxShadow: "4px 4px 0px #000",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Outfit",
          data: outfitBold,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
