// app/services/assessments/AssessmentsContent.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const assessments = [
  {
    title: "IQ Testing",
    description:
      "Comprehensive intelligence assessments to understand cognitive strengths and areas for growth.",
  },
  {
    title: "Developmental Assessments",
    description:
      "Early milestone screening and developmental profiling for infants and young children.",
  },
  {
    title: "Learning Difficulty Test",
    description:
      "Identify specific learning disabilities such as dyslexia, dysgraphia, and dyscalculia.",
  },
  {
    title: "ADHD Assessment",
    description:
      "Structured evaluation of attention, hyperactivity, and impulsivity symptoms across settings.",
  },
  {
    title: "Autism Assessment",
    description:
      "Detailed screening and diagnostic assessment for Autism Spectrum Disorder (ASD).",
  },
  {
    title: "Neuropsychological Testing",
    description:
      "In-depth evaluation of memory, attention, executive function, and cognitive processing.",
  },
  {
    title: "Personality Assessment",
    description:
      "Comprehensive personality profiling to understand behavioural patterns and traits.",
  },
  {
    title: "Emotional & Behavioural Profiling",
    description:
      "Assessment of emotional regulation, behavioural concerns, and mental health indicators.",
  },
  {
    title: "Projective Assessment",
    description:
      "Exploring unconscious thoughts, emotions, and motivations through projective techniques.",
  },
  {
    title: "Aptitude & Career Assessment",
    description:
      "Identify strengths, interests, and aptitudes for informed academic and career decisions.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function AssessmentsContent() {
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
        badge="Assessments"
        title="Psychological Assessments"
        subtitle="All major assessments done by clinical psychologists. Reports include interpretation + next-step guidance."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {assessments.map((assessment, index) => (
              <motion.div
                key={assessment.title}
                variants={item}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-sage-200 hover:shadow-lg hover:shadow-sage-50/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center text-sage-700 flex-shrink-0 group-hover:bg-sage-100 transition-colors">
                    <span className="text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-sage-900 mb-1.5">
                      {assessment.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {assessment.description}
                    </p>
                  </div>
                </div>
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
              Get Clarity with a Professional Assessment
            </h2>
            <p className="text-emerald-700/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Understanding is the first step to the right support. Book a psychological assessment with our clinical psychologists today.
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
