// Create a new file: app/career-guidance-test/layout.jsx

export const metadata = {
  title: 'Career Guidance Assessment | Santvana Pyschological Well-being center',
  description: 'Take our comprehensive career guidance assessment to discover your ideal career path',
  openGraph: {
    title: 'Career Guidance Assessment | Santvana Pyschological Well-being center',
    description: 'Take our comprehensive career guidance assessment to discover your ideal career path',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Career Guidance Assessment Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Guidance Assessment | Santvana Pyschological Well-being center',
    description: 'Take our comprehensive career guidance assessment to discover your ideal career path',
    images: ['/images/logo.png'],
  },
};

export default function CareerGuidanceLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}