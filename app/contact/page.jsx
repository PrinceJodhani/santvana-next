// app/contact/page.jsx
import ContactContent from "./ContactContent";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

const title = "Contact Psychologist in Surat | Book Therapy at Santvana";
const description =
  "Book an appointment with a psychologist in Surat. Call or WhatsApp Santvana for counselling, therapy, assessments & online sessions worldwide.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactContent />
    </>
  );
}
