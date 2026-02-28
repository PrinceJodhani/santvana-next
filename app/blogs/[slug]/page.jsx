// app/blogs/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllSlugs } from "@/app/data/blogs";
import BlogDetail from "./BlogDetail";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Santvana Blog`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | Santvana Blog`,
      description: blog.excerpt,
      url: `https://santvana.co.in/blogs/${blog.slug}`,
      type: "article",
      images: [blog.thumbnail],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Santvana Blog`,
      description: blog.excerpt,
      images: [blog.thumbnail],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return <BlogDetail blog={blog} />;
}
