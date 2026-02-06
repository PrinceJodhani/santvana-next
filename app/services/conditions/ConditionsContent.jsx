// app/services/conditions/ConditionsContent.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const conditions = [
  "Anxiety",
  "Depression",
  "ADHD",
  "Autism Spectrum",
  "Learning Disabilities (SLD)",
  "Intellectual Disabilities (ID)",
  "Behavioural Difficulties",
  "Anger Issues",
  "Relationship & Marital Issues",
  "Trauma & Grief",
  "Stress & Burnout",
  "Emotional Regulation Problems",
  "Screen Addiction",
  "Sensory Processing Difficulties",
  "Sleep Difficulties",
  "Chronic Mental Illnesses",
  "Personality Disorders",
  "Borderline Personality Disorder (BPD)",
  "Eating Disorders",
  "OCD",
  "Phobia",
  "Panic Attacks",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function ConditionsContent() {
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
        badge="Conditions"
        title="Conditions We Treat"
        subtitle="We support children, teens, and adults experiencing:"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {conditions.map((condition) => (
              <motion.span
                key={condition}
                variants={pill}
                className="inline-block px-5 py-2.5 rounded-full bg-sage-50 text-sage-800 text-sm font-medium border border-sage-100 hover:bg-sage-100 hover:border-sage-200 transition-colors duration-200 cursor-default"
              >
                {condition}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seeking Help CTA */}
      <section className="py-20 md:py-28 bg-sage-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Seeking Help?
            </h2>
            <p className="text-sage-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              No matter what you are going through, professional support can make a difference. Reach out to us for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleBookAppointment}
                className="w-full sm:w-auto bg-white text-sage-700 hover:bg-sage-50 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Book an Appointment
              </button>
              <a
                href="tel:+919824218278"
                className="w-full sm:w-auto border border-sage-400 text-white hover:bg-sage-600 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 text-center"
              >
                Call +91 98242 18278
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
