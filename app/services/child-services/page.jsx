// app/services/child-services/page.jsx
import ChildServicesContent from "./ChildServicesContent";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Child Psychologist in Surat | Child Therapy & Development",
  description:
    "Looking for a child psychologist near you? Santvana provides OT, speech therapy, ABA, behaviour therapy, special education & child counselling in Surat.",
  alternates: { canonical: "/services/child-services" },
};

export default function ChildServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Child Services", path: "/services/child-services" },
        ])}
      />
      <ChildServicesContent />
    </>
  );
}
