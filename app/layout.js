// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  title: 'Santvana - Psychological Guidance Centre | Best Psychologists in Surat, Gujarat.',
  description: 'Best Psychologists in Surat | Dr. Poonam Vipani | Dr. Rajvee Shah | psychologist, Santvana Psychological Guidance Centre, Surat, Gujarat, mental health, psychotherapy, counseling, best psychologist in Surat, top psychologist in Gujarat, mental well-being, therapy, psychological services',
  applicationName: 'Psych Meds | Psychiatry Medicines',
  authors: { name: 'Dr. Poonam Vipani | Dr. Rajvee Shah' },
  keywords: 'Dr. Poonam, psychologist, Santvana Psychological Guidance Centre, Surat, Gujarat, mental health, psychotherapy, counseling, best psychologist in Surat, top psychologist in Gujarat, mental well-being, therapy, psychological services',
  creator: 'Prince Jodhani, Jash Ajmera',
  robots: 'index, follow',
  icons: '/image/logo.png',
  appleWebApp: { capable: true, title: 'Santvana - Psychological Guidance Centre | Best Psychologists in Surat, Gujarat.', statusBarStyle: 'default' },
  openGraph: {
    determiner: 'auto',
    title: 'Santvana - Psychological Guidance Centre | Best Psychologists in Surat, Gujarat.',
    description: 'Best Psychologists in Surat | Dr. Poonam Vipani | Dr. Rajvee Shah | psychologist, Santvana Psychological Guidance Centre, Surat, Gujarat, mental health, psychotherapy, counseling, best psychologist in Surat, top psychologists in Gujarat, mental well-being, therapy, psychological services',
    url: 'http://santvana.co.in',
    images: '/images/logo.png',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: 'http://santvana.co.in',
    title: 'Santvana - Psychological Guidance Centre | Best Psychologists in Surat, Gujarat.',
    description: 'Best Psychologists in Surat | Dr. Poonam Vipani | Dr. Rajvee Shah | psychologist, Santvana Psychological Guidance Centre, Surat, Gujarat, mental health, psychotherapy, counseling, best psychologist in Surat, top psychologists in Gujarat, mental well-being, therapy, psychological services',
    images: '/images/logo.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
