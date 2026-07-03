// app/services/internship/page.jsx
import InternshipContent from "./InternshipContent";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Psychology Internship in Surat | Clinical Training at Santvana",
  description:
    "Looking for a psychology internship in Surat? Santvana offers hands-on clinical training, assessments & therapy exposure under professional supervision.",
  alternates: { canonical: "/services/internship" },
};

export default function InternshipPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Internship", path: "/services/internship" },
        ])}
      />
      <InternshipContent />
    </>
  );
}
