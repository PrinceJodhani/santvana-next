// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Best Psychologist in Surat | Santvana Psychological Well-Being Centre",
  description:
    "Looking for a psychologist near you? Santvana is a trusted mental health & counselling centre in Surat offering child therapy, adult counselling, assessments & online therapy worldwide.",
  applicationName: "Santvana Psychological Well-Being Centre",
  authors: { name: "Ms. Poonam Vipani | Ms. Rajvee Shah" },
  keywords:
    "psychologist in Surat, best psychologist in Surat, child psychologist near me, therapy centre in Surat, counselling centre in Surat, mental health clinic Surat, clinical psychologist Surat, online therapy India, psychological assessment Surat",
  creator: "Prince Jodhani",
  robots: "index, follow",
  icons: "/images/logo.png",
  appleWebApp: {
    capable: true,
    title: "Santvana - Psychological Well-Being Centre",
    statusBarStyle: "default",
  },
  openGraph: {
    determiner: "auto",
    title: "Best Psychologist in Surat | Santvana Psychological Well-Being Centre",
    description:
      "Looking for a psychologist near you? Santvana is a trusted mental health & counselling centre in Surat offering child therapy, adult counselling, assessments & online therapy worldwide.",
    url: "https://santvana.co.in",
    images: "/images/logo.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://santvana.co.in",
    title: "Best Psychologist in Surat | Santvana Psychological Well-Being Centre",
    description:
      "Looking for a psychologist near you? Santvana is a trusted mental health & counselling centre in Surat offering child therapy, adult counselling, assessments & online therapy worldwide.",
    images: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
