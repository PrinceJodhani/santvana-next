// app/components/Team.jsx
"use client";
import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";

// Updated team members data with 'details' field
const teamMembers = [
  {
    name: "Ms. Nidhi Nahata",
    title: "Clinical Psychologist",
    qualifications: "RCI Registered, MA, M.Phil.",
    role: "Senior Psychologist",
    image: "/images/nidhi.jpg",
    phone: "+919876543210",
    details: `

**About:**
- With MA and M.Phil degrees, Nidhi Nahata is a clinical psychologist registered by Rehabilitation Council of India and has spent the last five years honing her skills as a licensed therapist.
- Her journey has seen her support people from diverse backgrounds and different age groups, guiding them through issues ranging from stress and anxiety to complex mental health issues, trauma and relationship dynamics.
- Her therapeutic evolution mirrors the dynamic nature of mental health care—She has transitioned from a focus on CBT and third wave therapies to embracing trauma-informed practices and now, she is deeply engaged in the profound insights of psychoanalytic approaches.
`,
  },
  {
    name: "Dr. Rutvi Kakadiya",
    title: "Occupational Therapist",
    qualifications: "BOT, MOT, Registered With AIOTA",
    role: "Lead Occupational Therapist",
    image: "/images/rutvi.jpg",
    phone: "+919876543211",
    details: `

**About:**
- Update soon
`,
  },
  {
    name: "Dr. Jinal Shah",
    title: "Homeopathic Consultant",
    qualifications: "MA (Psych), BHMS, NDDY",
    role: "Senior Homeopathic Consultant",
    image: "/images/jinal.jpg",
    phone: "+919876543212",
    details: `

**About:**
- Update Soon
`,
  },
  {
    name: "Ms. Bhumi Shah",
    title: "Registered Dietician",
    qualifications: "CDE, Reg. No. 12/2009",
    role: "Lead Dietician",
    image: "/images/bhumi.jpg",
    phone: "+919876543213",
    details: `
**About:**
- Update Soon
`,
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDetailsDrawer, setShowDetailsDrawer] = useState(false);
  const [showBookingDrawer, setShowBookingDrawer] = useState(false);

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setShowDetailsDrawer(true);
  };

  const handleBookNow = (member) => {
    setSelectedMember(member);
    setShowBookingDrawer(true);
  };

  const closeDetailsDrawer = () => {
    setShowDetailsDrawer(false);
    setSelectedMember(null);
  };

  const closeBookingDrawer = () => {
    setShowBookingDrawer(false);
    setSelectedMember(null);
  };

  // Function to parse details text and create React elements
  const parseDetails = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const elements = [];

    lines.forEach((line, idx) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        // Heading
        const headingText = line.substring(2, line.length - 2);
        elements.push(
          <h2 key={`heading-${idx}`} className="text-2xl font-bold mt-6">
            {headingText}
          </h2>
        );
      } else if (line.startsWith("-")) {
        // List item
        elements.push(
          <li key={`list-${idx}`} className="ml-6 list-disc text-lg">
            {line.substring(1).trim()}
          </li>
        );
      } else {
        // Paragraph
        elements.push(
          <p key={`paragraph-${idx}`} className="mt-4 text-lg">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <section className="py-16 bg-[#E8DAD0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
              <p className="text-gray-500">{member.qualifications}</p>
              <p className="font-semibold text-gray-600">{member.role}</p>

              {/* Buttons */}
              <div className="mt-4 flex justify-center space-x-4">
                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(member)}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-blue-300 to-green-200 group-hover:from-blue-200 group-hover:via-green-300 group-hover:to-green-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                >
                  <span className="relative mr-1 mb-0.5 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    View Details
                  </span>
                </button>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(member)}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-blue-300 to-green-200 group-hover:from-blue-200 group-hover:via-green-300 group-hover:to-green-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                >
                  <span className="relative mr-1 mb-0.5 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Book Now
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer for displaying member details */}
      {selectedMember && showDetailsDrawer && (
        <Drawer open={showDetailsDrawer} onClose={closeDetailsDrawer}>
          <DrawerContent className="bg-white max-w-screen-lg mx-auto p-6 rounded-lg shadow-xl">
            <DrawerClose asChild>
              <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
                &times;
              </button>
            </DrawerClose>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-40 h-40 object-cover rounded-full mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedMember.name}
              </h2>
              <p className="text-gray-600 text-xl">{selectedMember.title}</p>
              <p className="text-gray-600 text-lg">
                {selectedMember.qualifications}
              </p>
              <p className="text-gray-600 text-lg">{selectedMember.role}</p>
            </motion.div>
            <div
              className="mt-6 overflow-y-auto"
              style={{ maxHeight: "50vh" }}
            >
              <div className="text-gray-800 mx-auto" style={{ maxWidth: "1024px" }}>
                {parseDetails(selectedMember.details)}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Drawer for booking form */}
      {selectedMember && showBookingDrawer && (
        <Drawer open={showBookingDrawer} onClose={closeBookingDrawer}>
          <DrawerContent className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-xl">
            <DrawerClose asChild>
              <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
                &times;
              </button>
            </DrawerClose>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                Book an Appointment
              </h2>
            </motion.div>
            {/* Appointment Form */}
            <AppointmentForm
              member={selectedMember}
              onClose={closeBookingDrawer}
            />
          </DrawerContent>
        </Drawer>
      )}
    </section>
  );
};

export default Team;
