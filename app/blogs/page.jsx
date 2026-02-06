// app/blogs/page.jsx
import BlogsContent from "./BlogsContent";

export const metadata = {
  title: "Mental Health Blogs | Psychologist Insights from Surat",
  description:
    "Read expert blogs on mental health, child development, anxiety, depression, therapy, parenting & emotional wellness by Santvana psychologists.",
  openGraph: {
    title: "Mental Health Blogs | Psychologist Insights from Surat",
    description:
      "Read expert blogs on mental health, child development, anxiety, depression, therapy, parenting & emotional wellness by Santvana psychologists.",
    url: "https://santvana.co.in/blogs",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Blogs | Psychologist Insights from Surat",
    description:
      "Read expert blogs on mental health, child development, anxiety, depression, therapy, parenting & emotional wellness by Santvana psychologists.",
    images: ["/images/logo.png"],
  },
};

export default function BlogsPage() {
  return <BlogsContent />;
}
