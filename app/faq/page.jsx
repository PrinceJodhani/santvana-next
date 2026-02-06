// app/faq/page.jsx
import FAQContent from "./FAQContent";

export const metadata = {
  title: "Psychologist FAQs | Therapy & Counselling in Surat",
  description:
    "Answers to common questions about therapy, counselling, psychologists vs psychiatrists, fees, sessions & confidentiality at Santvana, Surat.",
  openGraph: {
    title: "Psychologist FAQs | Therapy & Counselling in Surat",
    description:
      "Answers to common questions about therapy, counselling, psychologists vs psychiatrists, fees, sessions & confidentiality at Santvana, Surat.",
    url: "https://santvana.co.in/faq",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologist FAQs | Therapy & Counselling in Surat",
    description:
      "Answers to common questions about therapy, counselling, psychologists vs psychiatrists, fees, sessions & confidentiality at Santvana, Surat.",
    images: ["/images/logo.png"],
  },
};

export default function FAQPage() {
  return <FAQContent />;
}
