// app/about/internship/layout.js
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Internship & Clinical Training | Santvana, Surat",
  description:
    "Hands-on clinical exposure for psychology students under professional supervision at Santvana, Surat — building the next generation of mental health professionals.",
  alternates: { canonical: "/about/internship" },
};

export default function AboutInternshipLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Internship", path: "/about/internship" },
        ])}
      />
      {children}
    </>
  );
}
