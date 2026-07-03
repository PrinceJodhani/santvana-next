// app/blogs/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllSlugs } from "@/app/data/blogs";
import JsonLd from "@/app/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/app/lib/site";
import BlogDetail from "./BlogDetail";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  const title = `${blog.title} | Santvana Blog`;
  return {
    title,
    description: blog.excerpt,
    alternates: { canonical: `/blogs/${blog.slug}` },
    openGraph: {
      title,
      description: blog.excerpt,
      url: `/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: blog.author?.name ? [blog.author.name] : undefined,
      images: [blog.thumbnail],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: blog.excerpt,
      images: [blog.thumbnail],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <>
      <JsonLd data={articleSchema(blog)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: blog.title, path: `/blogs/${blog.slug}` },
        ])}
      />
      <BlogDetail blog={blog} />
    </>
  );
}
