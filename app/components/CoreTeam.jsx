// app/components/CoreTeam.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Ms. Poonam Vipani",
    title: "RCI Registered Clinical Psychologist (A)",
    qualifications: "MA, PDCP",
    role: "Founder",
    image: "/images/poonam.jpg",
    gradient: "from-brown-500 to-brown-600",
    borderColor: "border-brown-200",
    badgeBg: "bg-gradient-to-r from-brown-100 to-brown-50",
    badgeText: "text-brown-700",
    ringColor: "ring-brown-200",
  },
  {
    name: "Ms. Rajvee Shah",
    title: "Psychologist",
    qualifications: "MA – Clinical Psychology",
    role: "Co-Founder",
    image: "/images/rajvee.jpg",
    gradient: "from-teal-500 to-teal-600",
    borderColor: "border-teal-200",
    badgeBg: "bg-gradient-to-r from-teal-100 to-teal-50",
    badgeText: "text-teal-700",
    ringColor: "ring-teal-200",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CoreTeam = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-teal-50/30 to-white">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Our Founders
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-brown-800">Meet Our </span>
              <span className="bg-gradient-to-r from-teal-700 to-sage-600 bg-clip-text text-transparent">Core Team</span>
            </h2>
            <p className="text-brown-500 max-w-xl mx-auto">
              Led by experienced clinical psychologists dedicated to your well-being.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-3xl mx-auto"
        >
          {founders.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className={`group flex-1 bg-white rounded-2xl p-8 border-2 ${member.borderColor} text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Decorative corner accent */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />

              <div className={`w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ${member.ringColor} shadow-lg`}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`inline-block px-4 py-1.5 rounded-full ${member.badgeBg} ${member.badgeText} text-xs font-bold mb-3`}>
                {member.role}
              </span>
              <h3 className="text-lg font-semibold text-brown-800 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-teal-600 mb-1 font-medium">{member.title}</p>
              <p className="text-xs text-gray-400">{member.qualifications}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brown-700 hover:text-teal-700 transition-colors bg-gradient-to-r from-brown-50 to-teal-50 px-6 py-3 rounded-full border border-brown-200 hover:border-teal-300 hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            View All Team Members
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
