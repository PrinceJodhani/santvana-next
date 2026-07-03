// app/blogs/page.jsx
import BlogsContent from "./BlogsContent";
import JsonLd from "@/app/components/JsonLd";
import { blogs } from "@/app/data/blogs";
import { breadcrumbSchema, abs, SITE } from "@/app/lib/site";

const title = "Mental Health Blogs | Psychologist Insights from Surat";
const description =
  "Read expert blogs on mental health, child development, anxiety, depression, therapy, parenting & emotional wellness by Santvana psychologists.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title,
    description,
    url: "/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: title,
  description,
  url: abs("/blogs"),
  publisher: { "@id": `${SITE.url}/#clinic` },
  blogPost: blogs.map((b) => ({
    "@type": "BlogPosting",
    headline: b.title,
    url: abs(`/blogs/${b.slug}`),
    datePublished: b.date,
    image: abs(b.thumbnail),
    author: { "@type": "Person", name: b.author?.name },
  })),
};

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={blogListSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
        ])}
      />
      <BlogsContent />
    </>
  );
}
