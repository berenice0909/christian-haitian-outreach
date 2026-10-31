import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The picture shown when the site is shared in texts, Facebook, email, etc.
export const alt = "Christian Haitian Outreach: Helping Haiti's Children Since 1974";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/cho-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: "linear-gradient(135deg, #10295e 0%, #3c2469 100%)",
        }}
      >
        <img
          src={logoSrc}
          width={150}
          height={150}
          alt=""
          style={{ marginBottom: 36, borderRadius: 75, background: "white", padding: 10 }}
        />
        <div style={{ fontSize: 60, fontWeight: 700, textAlign: "center", padding: "0 60px" }}>
          {site.hero.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 40, opacity: 0.85 }}>{site.name}</div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 16,
            backgroundImage:
              "linear-gradient(90deg, #1a5486, #2f6d29, #8dbf3f, #f5c400, #e8731a, #d12127, #3c2469)",
          }}
        />
      </div>
    ),
    size,
  );
}
