// app/about/social-services/layout.js
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Social Services | Community Mental Health in Surat | Santvana",
  description:
    "Beyond clinical practice, Santvana contributes to community mental health in Surat through awareness drives, education and accessible psychological support.",
  alternates: { canonical: "/about/social-services" },
};

export default function SocialServicesLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Social Services", path: "/about/social-services" },
        ])}
      />
      {children}
    </>
  );
}
