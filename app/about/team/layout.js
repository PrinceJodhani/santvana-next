// app/about/team/layout.js
// Metadata wrapper for the client-rendered team page.
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Our Team | Psychologists & Therapists at Santvana, Surat",
  description:
    "Meet the experienced clinical psychologists, therapists, occupational & speech therapists and child development specialists at Santvana, Surat.",
  alternates: { canonical: "/about/team" },
};

export default function TeamLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Our Team", path: "/about/team" },
        ])}
      />
      {children}
    </>
  );
}
