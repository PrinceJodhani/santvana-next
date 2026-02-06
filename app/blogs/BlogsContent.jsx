// app/blogs/BlogsContent.jsx
"use client";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const topics = [
  "Mental Health",
  "Child Development",
  "Parenting Tips",
  "Therapy Approaches",
  "Emotional Wellness",
  "Screen Addiction",
  "Career Guidance",
  "Holistic Well-being",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const chip = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function BlogsContent() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights & Resources"
        subtitle="Read expert blogs on mental health, child development, anxiety, depression, therapy, parenting & emotional wellness by Santvana psychologists."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Blog / Writing Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 w-24 h-24 rounded-2xl bg-sage-50 flex items-center justify-center"
          >
            <svg
              className="w-12 h-12 text-sage-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </motion.div>

          {/* Coming Soon Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4"
          >
            Coming Soon
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4"
          >
            We are preparing thoughtful, evidence-based articles written by our
            team of psychologists and therapists to help you navigate mental
            health, relationships, and personal growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-sm mb-12"
          >
            Stay tuned for insights you can trust.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-16 h-px bg-sage-300 mx-auto mb-12"
          />

          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xs font-semibold uppercase tracking-wider text-sage-600 mb-6"
          >
            Topics We Will Cover
          </motion.p>

          {/* Topic Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {topics.map((topic) => (
              <motion.span
                key={topic}
                variants={chip}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-100 bg-white text-sm font-medium text-gray-700 shadow-sm hover:border-sage-200 hover:shadow-md hover:text-sage-700 transition-all duration-300 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mr-2.5 flex-shrink-0" />
                {topic}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subtle CTA */}
      <section className="py-16 bg-sage-50/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-sm mb-5">
              Have a topic you would like us to write about? Let us know.
            </p>
            <a
              href="https://wa.me/919824218278?text=Hello%2C%20I%20have%20a%20blog%20topic%20suggestion%20for%20Santvana."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-700 text-white text-sm font-semibold hover:bg-sage-800 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.618-.775-6.42-2.088l-.447-.34-2.635.884.884-2.635-.34-.447A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Suggest a Topic
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
