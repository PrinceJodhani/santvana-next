// app/robots.js
import { SITE } from "./lib/site";

export default function robots() {
  return {
    rules: [
      {
        // Applies to all crawlers, including AI assistants
        // (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.),
        // which are allowed so Santvana can surface in AI search & answers.
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/career-guidance-test/result"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
