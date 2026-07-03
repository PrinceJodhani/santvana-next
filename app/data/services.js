// app/data/services.js
// Central catalog for the /services/[category]/[slug] pages.
// Used by the category page, the detail page, and the sitemap.

export const serviceCategories = {
  therapies: {
    title: "Therapies — Comprehensive Therapy Services for Holistic Healing",
    heading: "Therapies",
    metaTitle: "Therapy Services in Surat | CBT, Psychotherapy & More | Santvana",
    metaDescription:
      "Explore our range of therapies in Surat — Psychotherapy, CBT, Gestalt, Couple, Sex, Colour & Hypnotherapy — delivered by expert clinical practitioners.",
    description:
      "Our therapies are designed to help you achieve optimal mental and emotional well-being. Explore our expert-led services—from Psychotherapy to Hypnotherapy—that offer holistic healing and personalized care.",
    items: [
      { label: "Psychotherapy", slug: "psychotherapy" },
      { label: "Cognitive Behavioural Therapy (CBT)", slug: "cognitive-behavioural-therapy" },
      { label: "Gestalt Therapy", slug: "gestalt-therapy" },
      { label: "Couple Therapy", slug: "couple-therapy" },
      { label: "Sex Therapy", slug: "sex-therapy" },
      { label: "Colour Therapy", slug: "colour-therapy" },
      { label: "Hypnotherapy", slug: "hypnotherapy" },
    ],
  },
  counselling: {
    title:
      "Counselling — Professional Counselling Services for Personal & Family Growth",
    heading: "Counselling",
    metaTitle: "Counselling Services in Surat | Family, Couple & Career | Santvana",
    metaDescription:
      "Professional counselling in Surat — Family, Personal, Couple, Pre-Marital, Career, Addiction & Online counselling by compassionate, experienced counsellors.",
    description:
      "Our counselling services offer professional guidance and empathetic support for individuals, couples, and families. Discover our range of specialized counselling solutions to overcome personal and relational challenges.",
    items: [
      { label: "Family Counselling", slug: "family-counselling" },
      { label: "Personal Counselling", slug: "personal-counselling" },
      { label: "Couple Counselling", slug: "couple-counselling" },
      { label: "Pre-Marital Counselling", slug: "pre-marital-counselling" },
      { label: "Career Counselling", slug: "career-counselling" },
      { label: "Educational Counselling", slug: "educational-counselling" },
      { label: "Group Counselling", slug: "group-counselling" },
      { label: "Addiction Counselling", slug: "addiction-counselling" },
      { label: "Relationship Counselling", slug: "relationship-counselling" },
      { label: "Online Counselling", slug: "online-counselling" },
    ],
  },
  "additional-services": {
    title: "Additional Services — Holistic Health & Wellness Consultations",
    heading: "Additional Services",
    metaTitle:
      "Psychological Assessment, OT & Wellness Services in Surat | Santvana",
    metaDescription:
      "Additional services in Surat — Psychological Assessment, Occupational & Speech Therapy, ABA, Remedial Education, Nutrition, Mindfulness & Wellness Coaching.",
    description:
      "Our additional services provide specialized consultations, assessments, and support for comprehensive health and wellness. Explore offerings such as Psychological Consultation, Occupational Therapy, and Wellness Coaching to enhance your overall well-being.",
    items: [
      { label: "Psychological Consultation", slug: "psychological-consultation" },
      { label: "Psychological Assessment", slug: "psychological-assessment" },
      { label: "Counselling and Psychotherapy", slug: "counselling-and-psychotherapy" },
      { label: "Occupational Therapy & Speech Therapy", slug: "occupational-therapy-speech-therapy" },
      { label: "Applied Behaviour Analysis & Behaviour Modification", slug: "applied-behaviour-analysis-behaviour-modification" },
      { label: "Remedial Education", slug: "remedial-education" },
      { label: "Homeopathic Consultation", slug: "homeopathic-consultation" },
      { label: "Nutrition Consultation", slug: "nutrition-consultation" },
      { label: "Mindfulness & Stress Management", slug: "mindfulness-stress-management" },
      { label: "Wellness Coaching", slug: "wellness-coaching" },
    ],
  },
};

export function getCategory(slug) {
  return serviceCategories[slug?.toLowerCase()] || null;
}

// All category/slug pairs — for generateStaticParams + sitemap.
export function getAllServicePaths() {
  const paths = [];
  for (const [category, data] of Object.entries(serviceCategories)) {
    for (const item of data.items) {
      paths.push({ category, slug: item.slug, label: item.label });
    }
  }
  return paths;
}
