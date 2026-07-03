// app/lib/site.js
// Single source of truth for site-wide SEO data + schema.org (JSON-LD) builders.
// Update the business details here and every page / sitemap / structured-data block
// stays in sync automatically.

export const SITE = {
  name: "Santvana Psychological Well-Being Centre",
  shortName: "Santvana",
  // Canonical production domain (no trailing slash). Site redirects to www.
  url: "https://www.santvana.co.in",
  locale: "en_IN",
  description:
    "Santvana Psychological Well-Being Centre is a trusted mental health & counselling clinic in Surat offering child therapy, adult counselling, psychological assessments & online therapy across India and worldwide.",
  logo: "/images/logo.png",

  // Contact
  telephone: "+91-98242-18278",
  telephoneAlt: "+91-97230-69261",
  email: "santvana27@gmail.com",

  // Address
  address: {
    hasStreetAddress: true,
    streetAddress: "407, Aagam Emporio, Besides GNine Restaurant, Vesu",
    locality: "Surat",
    region: "Gujarat",
    postalCode: "395007",
    country: "IN",
  },

  // Geo coordinates of the clinic (from the Google Maps place pin — improves Maps / "near me").
  geo: { lat: 21.1522471, lng: 72.7766268 },

  // Google Maps place link.
  mapUrl: "https://maps.app.goo.gl/C4uxfVMdqfqeCdML9",

  // Opening hours
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:30",
    closes: "19:00",
  },

  // Social / authority profiles (used for sameAs — helps entity recognition & AI SEO).
  sameAs: ["https://instagram.com/santvana.mentalhealth"],

  founders: ["Ms. Poonam Vipani", "Ms. Rajvee Shah"],

  areaServed: ["Surat", "Gujarat", "India"],
};

// Absolute URL helper.
export const abs = (path = "") =>
  path.startsWith("http") ? path : `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;

// Stable @id anchors so nodes can reference each other across the graph.
const CLINIC_ID = `${SITE.url}/#clinic`;
const WEBSITE_ID = `${SITE.url}/#website`;
const ORG_ID = `${SITE.url}/#organization`;

function postalAddress() {
  const a = SITE.address;
  const base = {
    "@type": "PostalAddress",
    addressLocality: a.locality,
    addressRegion: a.region,
    addressCountry: a.country,
  };
  if (a.hasStreetAddress && a.streetAddress) {
    base.streetAddress = a.streetAddress;
  }
  if (a.postalCode) {
    base.postalCode = a.postalCode;
  }
  return base;
}

// The clinic as a MedicalClinic + LocalBusiness entity. Rendered site-wide.
export function clinicSchema() {
  const node = {
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": CLINIC_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: abs(SITE.logo),
    image: abs(SITE.logo),
    telephone: SITE.telephone,
    email: SITE.email,
    address: postalAddress(),
    hasMap: SITE.mapUrl,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    knowsLanguage: ["English", "Hindi", "Gujarati"],
    medicalSpecialty: "Psychiatric",
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: SITE.sameAs,
    founder: SITE.founders.map((name) => ({ "@type": "Person", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.openingHours.days,
        opens: SITE.openingHours.opens,
        closes: SITE.openingHours.closes,
      },
    ],
    availableService: [
      "Individual Counselling",
      "Child Psychology & Therapy",
      "Couple & Family Counselling",
      "Psychological Assessments",
      "Occupational & Speech Therapy",
      "Online Therapy",
    ].map((name) => ({ "@type": "MedicalTherapy", name })),
  };
  if (SITE.geo) {
    node.geo = {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    };
  }
  return node;
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": CLINIC_ID },
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: abs(SITE.logo),
    },
    sameAs: SITE.sameAs,
  };
}

// Site-wide graph rendered once in the root layout.
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [clinicSchema(), organizationSchema(), websiteSchema()],
  };
}

// BreadcrumbList — items: [{ name, path }]
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// BlogPosting / Article for a blog detail page.
export function articleSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: abs(blog.thumbnail),
    datePublished: blog.date,
    dateModified: blog.date,
    inLanguage: "en-IN",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": abs(`/blogs/${blog.slug}`),
    },
    author: {
      "@type": "Person",
      name: blog.author?.name,
      jobTitle: blog.author?.role,
      ...(blog.author?.linkedin ? { sameAs: [blog.author.linkedin] } : {}),
    },
    publisher: { "@id": CLINIC_ID },
    articleSection: blog.category,
  };
}

// MedicalTherapy / Service node for a service detail page.
export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalTherapy", "Service"],
    name,
    description,
    url: abs(path),
    provider: { "@id": CLINIC_ID },
    areaServed: SITE.areaServed.map((n) => ({ "@type": "Place", name: n })),
  };
}
