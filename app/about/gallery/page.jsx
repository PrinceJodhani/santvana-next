// app/about/gallery/page.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const internshipImages = [
  { src: "/images/i1.jpg", alt: "Internship programme moment 1" },
  { src: "/images/i2.jpg", alt: "Internship programme moment 2" },
  { src: "/images/i3.jpg", alt: "Internship programme moment 3" },
  { src: "/images/i4.jpg", alt: "Internship programme moment 4" },
];

const workshopImages = [
  { src: "/images/w1.jpeg", alt: "Workshop moment 1" },
  { src: "/images/w2.jpeg", alt: "Workshop moment 2" },
  { src: "/images/w3.jpeg", alt: "Workshop moment 3" },
  { src: "/images/w4.jpeg", alt: "Workshop moment 4" },
  { src: "/images/w5.jpeg", alt: "Workshop moment 5" },
  { src: "/images/w6.jpeg", alt: "Workshop moment 6" },
  { src: "/images/w7.jpeg", alt: "Workshop moment 7" },
  { src: "/images/w8.jpeg", alt: "Workshop moment 8" },
];

/*
 * NOTE: The following placeholder categories are temporarily disabled.
 * Re-enable when real photos are available for each space.
 *
const galleryCategories = [
  {
    title: "Social Services",
    description:
      "Community outreach, mental health awareness camps, school workshops, and accessible counselling support.",
    bgGradient: "from-brown-50 to-teal-50",
    iconBg: "bg-gradient-to-br from-brown-100 to-brown-200",
    iconColor: "text-brown-700",
    borderColor: "border-brown-200",
  },
  {
    title: "Therapy Rooms",
    description:
      "Private, comfortable spaces designed for individual and group therapy sessions.",
    bgGradient: "from-brown-50 to-brown-100/50",
    iconBg: "bg-brown-100",
    iconColor: "text-brown-700",
    borderColor: "border-brown-100",
  },
  {
    title: "OT & Speech Area",
    description:
      "Equipped rooms for occupational therapy and speech therapy interventions.",
    bgGradient: "from-teal-50 to-teal-100/50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    borderColor: "border-teal-100",
  },
  {
    title: "Play Therapy Space",
    description:
      "A safe, engaging environment for children to express and process through play.",
    bgGradient: "from-brown-50 to-teal-50",
    iconBg: "bg-brown-100",
    iconColor: "text-brown-600",
    borderColor: "border-brown-100",
  },
  {
    title: "Learning Area",
    description:
      "Structured spaces for remedial education, assessments, and skill-building sessions.",
    bgGradient: "from-teal-50 to-brown-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    borderColor: "border-teal-100",
  },
];
*/

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function PhotoCard({ image, sizes }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl border border-brown-100 bg-gradient-to-br from-brown-50 to-teal-50 shadow-sm hover:shadow-xl hover:shadow-brown-100/40 transition-all duration-500"
    >
      <div className="aspect-[3/4] relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={sizes}
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

function GallerySection({ badge, badgeClass, title, description, images, sizes }) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${badgeClass}`}
        >
          {badge}
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {images.map((image) => (
          <PhotoCard key={image.src} image={image} sizes={sizes} />
        ))}
      </motion.div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Gallery"
        title="Our Space"
        subtitle="Glimpses from our internship programme and workshops at Santvana Psychological Well-Being Centre, Surat, Gujarat."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GallerySection
            badge="Internship Programme"
            badgeClass="bg-teal-100 text-teal-700"
            title="Our Interns"
            description="Hands-on clinical training for our psychology interns, learning and growing under professional supervision."
            images={internshipImages}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          <GallerySection
            badge="Workshop"
            badgeClass="bg-brown-100 text-brown-700"
            title="Workshops & Events"
            description="Engaging workshops, training sessions and community events that bring learning and well-being together."
            images={workshopImages}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </section>
    </>
  );
}
