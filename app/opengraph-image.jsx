// app/opengraph-image.jsx
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from "./lib/ogImage";

export const runtime = "edge";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage();
}
