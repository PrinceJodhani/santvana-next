// app/contact/page.jsx
import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Psychologist in Surat | Book Therapy at Santvana",
  description:
    "Book an appointment with a psychologist in Surat. Call or WhatsApp Santvana for counselling, therapy, assessments & online sessions worldwide.",
  openGraph: {
    title: "Contact Psychologist in Surat | Book Therapy at Santvana",
    description:
      "Book an appointment with a psychologist in Surat. Call or WhatsApp Santvana for counselling, therapy, assessments & online sessions worldwide.",
    url: "https://santvana.co.in/contact",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Psychologist in Surat | Book Therapy at Santvana",
    description:
      "Book an appointment with a psychologist in Surat. Call or WhatsApp Santvana for counselling, therapy, assessments & online sessions worldwide.",
    images: ["/images/logo.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
