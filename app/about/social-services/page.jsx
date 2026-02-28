// app/about/social-services/page.jsx
"use client";

import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const socialServices = [
  {
    title: "Mental Health Awareness Camps",
    description:
      "Free awareness sessions in schools, colleges, and community centres to break the stigma around mental health and encourage early help-seeking.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    accent: "brown",
  },
  {
    title: "School & College Workshops",
    description:
      "Interactive workshops on stress management, emotional regulation, exam anxiety, screen addiction, and building healthy habits for students.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "Community Counselling Support",
    description:
      "Subsidised and pro-bono counselling sessions for individuals and families in need, ensuring mental healthcare is accessible to all.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    accent: "brown",
  },
  {
    title: "Parent & Teacher Training",
    description:
      "Guidance programmes for parents and educators on child psychology, behavioural management, early signs of developmental concerns, and positive parenting.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" />
      </svg>
    ),
    accent: "teal",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SocialServicesPage() {
  return (
    <>
      <PageHero
        badge="Social Services"
        title="Giving Back to the Community"
        subtitle="Beyond clinical practice, we actively contribute to community mental health through awareness, education, and accessible support."
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-brown-50/30 to-white relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brown-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brown-100/60 text-brown-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Our Initiatives
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brown-900 mb-3">
              How We{" "}
              <span className="bg-gradient-to-r from-teal-700 to-brown-700 bg-clip-text text-transparent">
                Make a Difference
              </span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Mental health support should be accessible to everyone. Here is how we contribute beyond our clinic walls.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {socialServices.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className={`group relative bg-white rounded-2xl border ${
                  service.accent === "brown"
                    ? "border-brown-100 hover:border-brown-200"
                    : "border-teal-100 hover:border-teal-200"
                } p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-brown-100/30`}
              >
                {/* Number badge */}
                <span
                  className={`absolute top-5 right-5 text-4xl font-serif font-bold ${
                    service.accent === "brown" ? "text-brown-100" : "text-teal-100"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    service.accent === "brown"
                      ? "bg-gradient-to-br from-brown-100 to-brown-200/60 text-brown-700"
                      : "bg-gradient-to-br from-teal-100 to-teal-200/60 text-teal-700"
                  }`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-serif font-bold text-brown-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-16 text-center"
          >
            <div className="bg-brown-50/60 border border-brown-100 rounded-2xl p-8">
              <h3 className="text-lg font-serif font-bold text-brown-900 mb-2">
                Want to Collaborate?
              </h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                If your school, college, or organisation would like to host a mental health workshop or awareness session, reach out to us.
              </p>
              <a
                href="https://wa.me/919824218278?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20collaboration%20for%20a%20mental%20health%20awareness%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brown-700 to-brown-800 text-white text-sm font-semibold hover:from-brown-800 hover:to-brown-900 transition-all duration-300 hover:shadow-lg hover:shadow-brown-200/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.618-.775-6.42-2.088l-.447-.34-2.635.884.884-2.635-.34-.447A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
