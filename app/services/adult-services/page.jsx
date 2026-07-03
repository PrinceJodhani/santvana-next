// app/services/adult-services/page.jsx
import AdultServicesContent from "./AdultServicesContent";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Adult Counselling & Therapy in Surat | Psychologist Near Me",
  description:
    "Get professional counselling for anxiety, stress, depression, relationships & emotional concerns. Santvana offers adult therapy in Surat & online worldwide.",
  alternates: { canonical: "/services/adult-services" },
};

export default function AdultServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Adult Services", path: "/services/adult-services" },
        ])}
      />
      <AdultServicesContent />
    </>
  );
}
