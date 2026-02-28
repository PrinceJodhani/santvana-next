// app/services/adult-services/AdultServicesContent.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const services = [
  {
    title: "Counselling",
    description:
      "Professional one-on-one counselling to help you navigate life's emotional and personal challenges with clarity and resilience.",
    points: [
      "Stress & burnout management",
      "Anger & emotional regulation",
      "Time management & productivity",
      "Overthinking & rumination",
      "Relationship & interpersonal issues",
      "Self-esteem & confidence building",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Psychotherapies",
    description:
      "Evidence-based therapeutic approaches tailored to your unique needs for deep, lasting emotional healing.",
    points: [
      "Cognitive Behavioural Therapy (CBT)",
      "Dialectical Behaviour Therapy (DBT)",
      "Behaviour therapies",
      "Mindfulness-based therapy",
      "Trauma-informed approaches",
      "Interpersonal & emotion-focused therapy",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Relationship & Marriage Counselling",
    description:
      "Strengthening the bonds that matter most through compassionate, structured relationship support.",
    points: [
      "Communication improvement",
      "Conflict resolution",
      "Trust rebuilding",
      "Emotional distance & disconnection",
      "Breakup & separation support",
      "Pre-marital counselling",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Trauma & Grief Therapy",
    description:
      "Compassionate support to process painful experiences and find a path forward after loss or emotional trauma.",
    points: [
      "Loss & bereavement support",
      "Accident & incident trauma",
      "Emotional & psychological trauma",
      "Breakup & separation recovery",
      "Life-changing event adjustment",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "Rehabilitation for Chronic Mental Illness",
    description:
      "Structured rehabilitation programmes to support long-term recovery, stability, and improved quality of life.",
    points: [
      "Bipolar disorder management",
      "Schizophrenia support",
      "Chronic anxiety & depression recovery",
      "Dementia & Alzheimer's care",
      "Cognitive training & functional recovery",
      "Emotional stability & routine building",
      "Family involvement & social skills",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Screen Addiction Therapy (Adults)",
    description:
      "Reclaim control over your digital life and restore balance between the online world and real-world well-being.",
    points: [
      "Smartphone & internet overuse",
      "Gaming dependency",
      "Digital burnout & fatigue",
      "Social media compulsion",
      "Emotional imbalance from screen overuse",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AdultServicesContent() {
  const handleBookAppointment = () => {
    const phone = "919824218278";
    const message = encodeURIComponent(
      "Hello, I would like to book an appointment at Santvana Psychological Well-Being Centre."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <>
      <PageHero
        badge="Adult Services"
        title="Mental Health Services for Teens & Adults"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-sage-200 hover:shadow-lg hover:shadow-sage-50/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center text-sage-600 mb-5 group-hover:bg-sage-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-sage-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-4">
              You Don&apos;t Have to Face It Alone
            </h2>
            <p className="text-emerald-700/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Taking the first step is the hardest part. Reach out today and begin your journey towards emotional well-being.
            </p>
            <button
              onClick={handleBookAppointment}
              className="bg-emerald-700 text-white hover:bg-emerald-800 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200/50"
            >
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
