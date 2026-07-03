// app/services/[category]/page.jsx
import Footer from "@/app/components/Footer2";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import { serviceCategories, getCategory } from "@/app/data/services";
import { breadcrumbSchema, abs } from "@/app/lib/site";

export function generateStaticParams() {
  return Object.keys(serviceCategories).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const data = getCategory(category);

  if (!data) {
    return {
      title: "Services | Santvana Psychological Well-Being Centre",
      description: "Explore our range of professional mental health services.",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/services/${category}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/services/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const data = getCategory(category);

  if (!data) notFound();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.heading,
    description: data.description,
    url: abs(`/services/${category}`),
    hasPart: data.items.map((item) => ({
      "@type": "MedicalTherapy",
      name: item.label,
      url: abs(`/services/${category}/${item.slug}`),
    })),
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/child-services" },
          { name: data.heading, path: `/services/${category}` },
        ])}
      />
      <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold capitalize">{data.heading}</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">{data.description}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${category}/${item.slug}`}
              className="block p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold">{item.label}</h2>
              <p className="mt-2 text-gray-600">
                Learn more about {item.label} and how it can support your journey
                towards improved mental and emotional health.
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
