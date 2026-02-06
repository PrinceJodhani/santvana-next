// app/components/WhyChooseUs.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "RCI-Registered Psychologists",
    description: "Professionally trained, licensed, and experienced clinical psychologists ensuring ethical, evidence-based practices.",
    color: "from-brown-500 to-brown-600",
    bgColor: "bg-brown-50",
    borderColor: "border-brown-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Non-judgmental Safe Space",
    description: "A welcoming environment where you can express yourself freely and seek support without any fear.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Ethical & Confidential",
    description: "Strict confidentiality protocols ensuring your identity and therapy conversations remain private and secure.",
    color: "from-sage-600 to-sage-700",
    bgColor: "bg-sage-50",
    borderColor: "border-sage-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Personalised Treatment",
    description: "Therapy adapted to your unique needs and aspirations for effective results and personalized attention.",
    color: "from-brown-600 to-brown-700",
    bgColor: "bg-brown-50",
    borderColor: "border-brown-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Strong Child Focus",
    description: "Dedicated child psychology and developmental support with specialised OT, speech, ABA, and behaviour therapy.",
    color: "from-teal-600 to-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Practitioner's Network",
    description: "A multidisciplinary team of psychologists, therapists, OTs, dieticians, and wellness experts under one roof.",
    color: "from-sage-500 to-sage-600",
    bgColor: "bg-sage-50",
    borderColor: "border-sage-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Compassionate Care",
    description: "Empathetic, professional care that prioritises your emotional well-being and long-term healing journey.",
    color: "from-brown-500 to-teal-600",
    bgColor: "bg-brown-50",
    borderColor: "border-brown-100",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariant = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brown-50/50 via-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-100 to-brown-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Why Santvana
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-teal-700 to-sage-600 bg-clip-text text-transparent">Santvana?</span>
            </h2>
            <p className="text-brown-500 max-w-xl mx-auto">
              Trusted mental health & therapy centre in Surat with multidisciplinary services under one roof.
            </p>
          </motion.div>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariant}
              className={`group relative p-6 rounded-2xl border-2 ${reason.borderColor} hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white overflow-hidden ${index === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-brown-800 transition-colors">{reason.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
