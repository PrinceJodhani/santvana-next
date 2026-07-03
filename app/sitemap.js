// app/sitemap.js
import { SITE } from "./lib/site";
import { blogs } from "./data/blogs";
import { serviceCategories, getAllServicePaths } from "./data/services";

export default function sitemap() {
  const now = new Date();
  const url = (path) => `${SITE.url}${path}`;

  // Top-level & key pages (higher priority)
  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/child-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/adult-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/assessments", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/conditions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/internship", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/mission-vision", priority: 0.5, changeFrequency: "yearly" },
    { path: "/about/team", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/gallery", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about/social-services", priority: 0.5, changeFrequency: "yearly" },
    { path: "/about/internship", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blogs", priority: 0.7, changeFrequency: "weekly" },
    { path: "/career-guidance-test", priority: 0.6, changeFrequency: "monthly" },
  ].map((p) => ({
    url: url(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // Service category hubs
  const categoryPages = Object.keys(serviceCategories).map((category) => ({
    url: url(`/services/${category}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Individual service detail pages
  const servicePages = getAllServicePaths().map(({ category, slug }) => ({
    url: url(`/services/${category}/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Blog posts
  const blogPages = blogs.map((b) => ({
    url: url(`/blogs/${b.slug}`),
    lastModified: b.date ? new Date(b.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...servicePages, ...blogPages];
}
