// app/career-guidance-test/layout.jsx
const title = "Free Career Guidance Test in Surat | Santvana";
const description =
  "Take Santvana's free career guidance assessment to discover your ideal career path, with expert career counselling available in Surat and online.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/career-guidance-test" },
  openGraph: {
    title,
    description,
    url: "/career-guidance-test",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CareerGuidanceLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}