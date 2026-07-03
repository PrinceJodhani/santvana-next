// app/services/assessments/page.jsx
import AssessmentsContent from "./AssessmentsContent";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Psychological Assessments in Surat | IQ, ADHD, Autism Tests",
  description:
    "Santvana offers IQ tests, ADHD & Autism assessments, learning disability tests, neuropsychological and personality assessments by clinical psychologists.",
  alternates: { canonical: "/services/assessments" },
};

export default function AssessmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Assessments", path: "/services/assessments" },
        ])}
      />
      <AssessmentsContent />
    </>
  );
}
