// app/layout.js
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { SITE, siteGraph } from "./lib/site";

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
  metadataBase: new URL(SITE.url),
  title:
    "Best Psychologist in Surat | Santvana Psychological Well-Being Centre",
  description:
    "Looking for a psychologist near you? Santvana is a trusted mental health & counselling centre in Surat offering child therapy, adult counselling, assessments & online therapy worldwide.",
  applicationName: "Santvana Psychological Well-Being Centre",
  authors: { name: "Ms. Poonam Vipani | Ms. Rajvee Shah" },
  keywords:
    "psychologist in Surat, best psychologist in Surat, child psychologist near me, therapy centre in Surat, counselling centre in Surat, mental health clinic Surat, clinical psychologist Surat, online therapy India, psychological assessment Surat",
  creator: "Prince Jodhani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: "/images/logo.png",
  appleWebApp: {
    capable: true,
    title: "Santvana - Psychological Well-Being Centre",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    determiner: "auto",
    title:
      "Best Psychologist in Surat | Santvana Psychological Well-Being Centre",
    description:
      "Looking for a psychologist near you? Santvana is a trusted mental health & counselling centre in Surat offering child therapy, adult counselling, assessments & online therapy worldwide.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Psychologist in Surat | Santvana Psychological Well-Being Centre",
    description:
      "Looking for a psychologist near you? Santvana is a trusted mental health & counselling centre in Surat offering child therapy, adult counselling, assessments & online therapy worldwide.",
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
        <JsonLd data={siteGraph()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0Y3FNLVE3W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0Y3FNLVE3W');
          `}
        </Script>
      </body>
    </html>
  );
}
