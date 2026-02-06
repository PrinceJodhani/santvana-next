// app/about/gallery/page.jsx
"use client";

import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const galleryCategories = [
  {
    title: "Therapy Rooms",
    description:
      "Private, comfortable spaces designed for individual and group therapy sessions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
        />
      </svg>
    ),
    bgGradient: "from-sage-50 to-sage-100/50",
    iconBg: "bg-sage-100",
    iconColor: "text-sage-700",
    borderColor: "border-sage-100",
  },
  {
    title: "OT & Speech Area",
    description:
      "Equipped rooms for occupational therapy and speech therapy interventions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
    bgGradient: "from-teal-50 to-teal-100/50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    borderColor: "border-teal-100",
  },
  {
    title: "Play Therapy Space",
    description:
      "A safe, engaging environment for children to express and process through play.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
    ),
    bgGradient: "from-sage-50 to-teal-50",
    iconBg: "bg-sage-100",
    iconColor: "text-sage-600",
    borderColor: "border-sage-100",
  },
  {
    title: "Learning Area",
    description:
      "Structured spaces for remedial education, assessments, and skill-building sessions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    bgGradient: "from-teal-50 to-sage-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    borderColor: "border-teal-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Gallery"
        title="Our Space"
        subtitle="Explore Santvana's therapy spaces, OT & speech rooms, child development areas and welcoming environment in Surat, Gujarat."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-4">
              A Welcoming Environment
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our centre is thoughtfully designed to make every client feel
              comfortable and at ease. Each area is tailored for its specific
              therapeutic purpose.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {galleryCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`group relative bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} rounded-2xl overflow-hidden`}
              >
                {/* Placeholder Image Area */}
                <div className="aspect-[4/3] relative flex flex-col items-center justify-center p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${category.iconBg} ${category.iconColor} flex items-center justify-center mb-4`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Photos coming soon
                    </span>
                  </div>
                </div>

                {/* Category Info */}
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-serif font-bold text-sage-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto mt-14 text-center"
          >
            <div className="bg-sage-50/60 border border-sage-100 rounded-2xl p-6">
              <p className="text-sage-700 text-sm leading-relaxed">
                Our gallery is being updated with photos of our therapy spaces.
                Visit us in person to experience the warm, professional
                environment at Santvana Psychological Well-Being Centre, Surat.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
