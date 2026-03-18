import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFDF7",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: "13px",
          letterSpacing: "-0.5px",
        }}
      >
        RA
      </div>
    ),
    { ...size }
  );
}
