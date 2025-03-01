// app/services/[category]/page.jsx
import Footer from "@/app/components/Footer2";
import Link from "next/link";

// Data arrays for sub-services
const therapyItems = [
  { label: "Psychotherapy", slug: "psychotherapy" },
  { label: "Cognitive Behavioural Therapy (CBT)", slug: "cognitive-behavioural-therapy" },
  { label: "Gestalt Therapy", slug: "gestalt-therapy" },
  { label: "Couple Therapy", slug: "couple-therapy" },
  { label: "Sex Therapy", slug: "sex-therapy" },
  { label: "Colour Therapy", slug: "colour-therapy" },
  { label: "Hypnotherapy", slug: "hypnotherapy" },
];

const counsellingItems = [
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
];

const additionalServicesItems = [
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
];

export async function generateMetadata({ params }) {
  const { category } = params;
  let title = "";
  let description = "";

  if (category.toLowerCase() === "therapies") {
    title = "Therapies - Comprehensive Therapy Services for Holistic Healing";
    description =
      "Explore our wide range of therapies including Psychotherapy, CBT, Gestalt Therapy, and more. Our expert practitioners provide personalized care for your mental and emotional well-being.";
  } else if (category.toLowerCase() === "counselling") {
    title = "Counselling - Professional Counselling Services for Personal & Family Growth";
    description =
      "Discover our professional counselling services including Family, Personal, Couple counselling, and more. Our compassionate experts help you overcome life's challenges and build healthier relationships.";
  } else if (category.toLowerCase() === "additional-services") {
    title = "Additional Services - Holistic Health & Wellness Consultations";
    description =
      "Discover our additional services including Psychological Consultation, Psychological Assessment, Occupational Therapy, Applied Behaviour Analysis, and more. Our comprehensive approach supports your overall well-being.";
  } else {
    title = "Services";
    description = "Explore our range of professional mental health services.";
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/services/${category}`,
      type: "website",
      images: [
        {
          url: "/images/logo.png",
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo.png"],
    },
  };
}

export default function CategoryPage({ params }) {
  const { category } = params;
  let items = [];
  let categoryDescription = "";

  if (category.toLowerCase() === "therapies") {
    items = therapyItems;
    categoryDescription =
      "Our therapies are designed to help you achieve optimal mental and emotional well-being. Explore our expert-led services—from Psychotherapy to Hypnotherapy—that offer holistic healing and personalized care.";
  } else if (category.toLowerCase() === "counselling") {
    items = counsellingItems;
    categoryDescription =
      "Our counselling services offer professional guidance and empathetic support for individuals, couples, and families. Discover our range of specialized counselling solutions to overcome personal and relational challenges.";
  } else if (category.toLowerCase() === "additional-services") {
    items = additionalServicesItems;
    categoryDescription =
      "Our additional services provide specialized consultations, assessments, and support for comprehensive health and wellness. Explore offerings such as Psychological Consultation, Occupational Therapy, and Wellness Coaching to enhance your overall well-being.";
  } else {
    categoryDescription = "Explore our professional mental health services.";
  }

  const pageTitle =
    category.toLowerCase() === "additional-services"
      ? "Additional Services"
      : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold capitalize">{pageTitle}</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">{categoryDescription}</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${category}/${item.slug}`}
            className="block p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{item.label}</h2>
            <p className="mt-2 text-gray-600">
              Learn more about {item.label} and how it can support your journey towards improved mental and emotional health.
            </p>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
