// app/faq/page.jsx
import FAQContent from "./FAQContent";
import JsonLd from "@/app/components/JsonLd";
import { faqs } from "@/app/data/faqs";
import { faqSchema, breadcrumbSchema } from "@/app/lib/site";

const title = "Psychologist FAQs | Therapy & Counselling in Surat";
const description =
  "Answers to common questions about therapy, counselling, psychologists vs psychiatrists, fees, sessions & confidentiality at Santvana, Surat.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title,
    description,
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <FAQContent />
    </>
  );
}
