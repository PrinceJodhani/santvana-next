// app/about/team/page.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/app/components/PageHero";

const founders = [
  {
    name: "Ms. Poonam Vipani",
    title: "RCI Registered Clinical Psychologist (A)",
    qualifications: "MA, PDCP",
    role: "Founder",
    bio: "RCI Licensed Clinical Psychologist with an eclectic therapy approach. Works with children, adolescents, and adults across a wide range of psychological and emotional concerns.",
    image: "/images/poonam.jpg",
  },
  {
    name: "Ms. Rajvee Shah",
    title: "Psychologist",
    qualifications: "MA",
    role: "Co-Founder",
    bio: "Psychologist and co-founder with expertise in CBT, REBT, and DBT. Dedicated to providing compassionate, evidence-based care for individuals and families.",
    image: "/images/rajvee.jpg",
  },
];

const teamMembers = [
  {
    name: "Ms. Nidhi Nahata",
    title: "RCI Registered Clinical Psychologist",
    qualifications: "MA, MPhil",
    bio: "RCI Licensed Clinical Psychologist using an eclectic therapy approach to support clients with diverse mental health needs.",
    image: "/images/nidhi.jpg",
  },
  {
    name: "Mrs. Chandani Makhania",
    title: "Psychology Trainee",
    qualifications: "",
    bio: "Psychology Trainee working with children under clinical supervision, gaining hands-on experience in therapeutic and developmental care.",
    image: "/images/chandani.jpg",
  },
  {
    name: "Dr. Rutvi Kakadiya",
    title: "Occupational Therapist",
    qualifications: "BOT, MOT | AIOTA Registered",
    bio: "Occupational Therapist providing clinical supervision in child development, sensory integration, and functional independence.",
    image: "/images/rutvi.jpg",
  },
  {
    name: "Dr. Sneha Patel",
    title: "Physiotherapist",
    qualifications: "BPT | NDT, MET, GSCPT",
    bio: "Physiotherapist supporting occupational therapy and speech therapy interventions through targeted physical rehabilitation.",
    image: "/images/sneha.jpg",
  },
  {
    name: "Dr. Jinal Shah",
    title: "Homeopathic Consultant",
    qualifications: "MA (Psych) | BHMS | NDDY",
    bio: "Homeopathic care for physical health concerns with a holistic approach, bridging psychology and alternative medicine.",
    image: "/images/jinal.jpg",
  },
  {
    name: "Ms. Bhumi Shah",
    title: "Registered Dietician",
    qualifications: "CDE",
    bio: "Individualised nutrition and dietary guidance to support mental and physical well-being through balanced eating habits.",
    image: "/images/bhumi.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FounderCard({ member, index }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="md:flex">
        <div className="md:w-2/5 relative">
          <div className="aspect-[3/4] md:aspect-auto md:h-full relative bg-gradient-to-br from-sage-50 to-sage-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
        <div className="md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <span className="inline-block w-fit px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold uppercase tracking-wider mb-3">
            {member.role}
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-900 mb-1">
            {member.name}
          </h3>
          <p className="text-sage-600 font-medium text-sm mb-1">
            {member.title}
          </p>
          {member.qualifications && (
            <p className="text-gray-400 text-xs mb-4">
              {member.qualifications}
            </p>
          )}
          <p className="text-gray-600 leading-relaxed text-sm">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TeamCard({ member }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-sage-200 transition-all duration-300"
    >
      <div className="aspect-[3/4] relative bg-gradient-to-br from-sage-50 to-sage-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-serif font-bold text-sage-900 mb-1">
          {member.name}
        </h3>
        <p className="text-sage-600 font-medium text-sm mb-0.5">
          {member.title}
        </p>
        {member.qualifications && (
          <p className="text-gray-400 text-xs mb-3">
            {member.qualifications}
          </p>
        )}
        <p className="text-gray-500 leading-relaxed text-sm">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="Our Team"
        title="Meet Our Experts"
        subtitle="Meet the experienced clinical psychologists, therapists, OT, speech & child development professionals at Santvana Psychological Well-Being Centre, Surat."
      />

      {/* Founders Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900">
              Our Founders
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
          >
            {founders.map((member, index) => (
              <FounderCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>

          {/* Team Grid */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Specialists
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900">
              Our Professional Team
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
