// app/manifest.js
import { SITE } from "./lib/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6a4d3c",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
