// app/components/WhatWeOffer.jsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "Child Therapy & Development",
    description:
      "OT, speech therapy, ABA, behaviour therapy, special education, remedial education and career guidance for children and adolescents.",
    href: "/services/child-services",
    borderColor: "border-teal-200",
    hoverBorder: "hover:border-teal-400",
    bgLight: "bg-teal-50",
    textColor: "text-teal-700",
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
    shadowColor: "hover:shadow-teal-100/80",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Adult Counselling & Psychotherapy",
    description:
      "Evidence-based counselling, CBT, DBT, relationship therapy, trauma & grief support, and rehabilitation for chronic conditions.",
    href: "/services/adult-services",
    borderColor: "border-brown-200",
    hoverBorder: "hover:border-brown-400",
    bgLight: "bg-brown-50",
    textColor: "text-brown-700",
    iconBg: "bg-gradient-to-br from-brown-600 to-brown-700",
    shadowColor: "hover:shadow-brown-100/80",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Psychological Assessments",
    description:
      "Comprehensive IQ, ADHD, autism, learning disability, neuropsychological, personality and career assessments by clinical psychologists.",
    href: "/services/assessments",
    borderColor: "border-sage-200",
    hoverBorder: "hover:border-sage-400",
    bgLight: "bg-sage-50",
    textColor: "text-sage-700",
    iconBg: "bg-gradient-to-br from-sage-600 to-sage-700",
    shadowColor: "hover:shadow-sage-100/80",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatWeOffer() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-brown-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brown-100 to-teal-100 text-brown-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">
              What We Offer
            </h2>
            <p className="text-brown-500 max-w-xl mx-auto">
              Professional support in a safe, confidential, and non-judgmental environment.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {offerings.map((offer) => (
            <motion.div key={offer.title} variants={item}>
              <Link
                href={offer.href}
                className={`group relative block p-8 rounded-2xl border-2 ${offer.borderColor} ${offer.hoverBorder} bg-white hover:shadow-xl ${offer.shadowColor} transition-all duration-300 h-full overflow-hidden`}
              >
                {/* Decorative background circle */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 ${offer.bgLight} rounded-full opacity-50 group-hover:opacity-80 transition-opacity`} />
                <div className={`absolute -bottom-4 -left-4 w-20 h-20 ${offer.bgLight} rounded-full opacity-30 group-hover:opacity-60 transition-opacity`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl ${offer.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brown-800 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {offer.description}
                  </p>
                  <span className={`inline-flex items-center text-sm font-semibold ${offer.textColor}`}>
                    Explore Services
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
