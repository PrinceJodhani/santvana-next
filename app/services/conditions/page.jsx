// app/services/conditions/page.jsx
import ConditionsContent from "./ConditionsContent";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Mental Health Conditions Treated | Psychologist in Surat",
  description:
    "We treat anxiety, depression, ADHD, autism, OCD, personality disorders, trauma, stress, screen addiction & chronic mental illness at Santvana, Surat.",
  alternates: { canonical: "/services/conditions" },
};

export default function ConditionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Conditions We Treat", path: "/services/conditions" },
        ])}
      />
      <ConditionsContent />
    </>
  );
}
