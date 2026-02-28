// app/services/conditions/ConditionsContent.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const conditions = [
  {
    name: "Anxiety",
    desc: "Persistent worry, nervousness & restlessness",
    color: "from-teal-50 to-emerald-50",
    border: "border-teal-100 hover:border-teal-200",
    iconBg: "bg-teal-100 text-teal-600",
  },
  {
    name: "Depression",
    desc: "Prolonged sadness, loss of interest & low energy",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100 hover:border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    name: "ADHD",
    desc: "Difficulty focusing, hyperactivity & impulsivity",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-100 hover:border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    name: "Autism Spectrum",
    desc: "Social communication & sensory differences",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-100 hover:border-purple-200",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    name: "Learning Disabilities",
    desc: "Challenges with reading, writing or maths",
    color: "from-cyan-50 to-sky-50",
    border: "border-cyan-100 hover:border-cyan-200",
    iconBg: "bg-cyan-100 text-cyan-600",
  },
  {
    name: "Intellectual Disabilities",
    desc: "Limitations in cognitive functioning & adaptive skills",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-100 hover:border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    name: "Behavioural Difficulties",
    desc: "Aggression, defiance & conduct challenges",
    color: "from-red-50 to-orange-50",
    border: "border-red-100 hover:border-red-200",
    iconBg: "bg-red-100 text-red-600",
  },
  {
    name: "Anger Issues",
    desc: "Difficulty controlling temper & emotional outbursts",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100 hover:border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    name: "Relationship & Marital Issues",
    desc: "Communication breakdowns & conflict in relationships",
    color: "from-pink-50 to-rose-50",
    border: "border-pink-100 hover:border-pink-200",
    iconBg: "bg-pink-100 text-pink-600",
  },
  {
    name: "Trauma & Grief",
    desc: "Processing loss, abuse or distressing experiences",
    color: "from-slate-50 to-gray-50",
    border: "border-slate-100 hover:border-slate-200",
    iconBg: "bg-slate-100 text-slate-600",
  },
  {
    name: "Stress & Burnout",
    desc: "Chronic exhaustion from work or life demands",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-100 hover:border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Emotional Regulation",
    desc: "Difficulty managing moods & emotional responses",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100 hover:border-violet-200",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    name: "Screen Addiction",
    desc: "Compulsive device use affecting daily life",
    color: "from-indigo-50 to-blue-50",
    border: "border-indigo-100 hover:border-indigo-200",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Sensory Processing",
    desc: "Over- or under-sensitivity to sensory input",
    color: "from-lime-50 to-green-50",
    border: "border-lime-100 hover:border-lime-200",
    iconBg: "bg-lime-100 text-lime-600",
  },
  {
    name: "Sleep Difficulties",
    desc: "Insomnia, disturbed sleep & nightmares",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-100 hover:border-sky-200",
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    name: "Chronic Mental Illnesses",
    desc: "Long-term conditions requiring ongoing support",
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-100 hover:border-teal-200",
    iconBg: "bg-teal-100 text-teal-600",
  },
  {
    name: "Personality Disorders",
    desc: "Patterns affecting self-image & relationships",
    color: "from-fuchsia-50 to-pink-50",
    border: "border-fuchsia-100 hover:border-fuchsia-200",
    iconBg: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    name: "BPD",
    desc: "Emotional instability & fear of abandonment",
    color: "from-rose-50 to-red-50",
    border: "border-rose-100 hover:border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    name: "Eating Disorders",
    desc: "Unhealthy eating patterns & body image issues",
    color: "from-green-50 to-emerald-50",
    border: "border-green-100 hover:border-green-200",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    name: "OCD",
    desc: "Intrusive thoughts & repetitive behaviours",
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-100 hover:border-yellow-200",
    iconBg: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Phobia",
    desc: "Intense irrational fear of specific objects or situations",
    color: "from-orange-50 to-red-50",
    border: "border-orange-100 hover:border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    name: "Panic Attacks",
    desc: "Sudden episodes of intense fear & physical symptoms",
    color: "from-red-50 to-rose-50",
    border: "border-red-100 hover:border-red-200",
    iconBg: "bg-red-100 text-red-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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

      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.name}
                variants={card}
                className={`group relative p-5 md:p-6 rounded-2xl bg-gradient-to-br ${condition.color} border ${condition.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${condition.iconBg} flex items-center justify-center font-bold text-sm`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-800 mb-1">
                      {condition.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {condition.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-sm text-gray-400 mt-12"
          >
            This is not an exhaustive list. If you&apos;re unsure whether we can help, please reach out — we&apos;re happy to guide you.
          </motion.p>
        </div>
      </section>

      {/* Seeking Help CTA */}
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
              Seeking Help?
            </h2>
            <p className="text-emerald-700/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              No matter what you are going through, professional support can make a difference. Reach out to us for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleBookAppointment}
                className="w-full sm:w-auto bg-emerald-700 text-white hover:bg-emerald-800 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200/50"
              >
                Book an Appointment
              </button>
              <a
                href="tel:+919824218278"
                className="w-full sm:w-auto border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-100 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 text-center"
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
