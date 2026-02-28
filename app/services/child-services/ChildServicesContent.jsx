// app/services/child-services/ChildServicesContent.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const services = [
  {
    title: "Occupational Therapy (OT)",
    description:
      "Helping children build essential motor and sensory skills for everyday functioning and independence.",
    points: [
      "Fine & gross motor skill development",
      "Sensory processing & integration",
      "Handwriting improvement",
      "Balance & coordination",
      "Daily living skill training",
    ],
    note: "For developmental delays, Autism, ADHD, Sensory Processing Disorder.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    title: "Speech & Language Therapy",
    description:
      "Supporting children in developing clear speech, strong language skills, and confident communication.",
    points: [
      "Speech clarity & articulation",
      "Language comprehension & expression",
      "Vocabulary building",
      "Stammering & fluency support",
      "Social communication skills",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "ABA Therapy",
    description:
      "Applied Behaviour Analysis to develop meaningful skills and reduce challenging behaviours through structured learning.",
    points: [
      "Behaviour shaping & management",
      "Communication skill building",
      "Learning readiness & attention",
      "Social skills development",
      "Daily functioning improvement",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Child Behaviour Therapy",
    description:
      "Addressing emotional and behavioural challenges to help children develop healthier patterns of coping and self-regulation.",
    points: [
      "Emotion identification & regulation",
      "Aggression & tantrum management",
      "Focus & self-control building",
      "Overcoming fear & sadness",
      "Anxiety & worry management",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Special Education",
    description:
      "Individualised educational support for children with developmental and intellectual challenges.",
    points: [
      "Functional academics",
      "Life skills training",
      "Cognitive skill development",
      "Behaviour management",
      "Self-help & independence skills",
    ],
    note: "For developmental delay, Autism, intellectual disability.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Remedial Education",
    description:
      "Targeted academic support to bridge learning gaps and strengthen foundational skills in reading, writing, and math.",
    points: [
      "Reading & comprehension support",
      "Writing & spelling improvement",
      "Foundational math skills",
      "Attention & study skills training",
      "Exam preparation strategies",
    ],
    note: "For children with academic gaps and learning difficulties.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Screen Addiction Therapy (Kids & Teens)",
    description:
      "Helping children and teens develop a healthy relationship with technology and overcome digital dependency.",
    points: [
      "Smartphone & tablet overuse",
      "Gaming addiction intervention",
      "YouTube & social media dependency",
      "Sleep & routine restoration",
      "Behavioural issues from screen overuse",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Career Guidance & Aptitude Testing",
    description:
      "Science-backed career assessment for students to identify strengths and choose the right academic and career path.",
    points: [
      "Aptitude test & analysis",
      "Personality profiling",
      "RIASEC career interest mapping",
      "Strengths & skills mapping",
      "Stream & career guidance",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

export default function ChildServicesContent() {
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
        badge="Child Services"
        title="Child Development & Pediatric Services"
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
                <ul className="space-y-2 mb-4">
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
                {service.note && (
                  <p className="text-xs text-sage-600 bg-sage-50 rounded-lg px-3 py-2 leading-relaxed">
                    {service.note}
                  </p>
                )}
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
              Give Your Child the Right Support
            </h2>
            <p className="text-emerald-700/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Early intervention makes a lasting difference. Book a consultation with our child development specialists today.
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
