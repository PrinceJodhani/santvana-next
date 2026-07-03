// app/about/gallery/layout.js
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema } from "@/app/lib/site";

export const metadata = {
  title: "Gallery | Internship & Workshops at Santvana, Surat",
  description:
    "Glimpses from Santvana's internship programme and mental health workshops in Surat, Gujarat — our team, interns and community events.",
  alternates: { canonical: "/about/gallery" },
};

export default function GalleryLayout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Gallery", path: "/about/gallery" },
        ])}
      />
      {children}
    </>
  );
}
