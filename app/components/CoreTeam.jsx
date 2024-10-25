// app/components/CoreTeam.jsx
"use client";
import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

// Import the Drawer components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from "@/components/ui/drawer";

// Assuming you have installed and configured your Drawer component

const coreTeam = [
  {
    name: "Ms. Poonam G Vipani",
    title: "Associate Clinical Psychologist",
    qualifications: "MA, PDCP (RCI Registered)",
    role: "Founder",
    image: "/images/poonam.jpg",
    phone: "+919824218278",
    details: `

    I am a dedicated and empathetic Associate Clinical Psychologist licensed by Rehabilitation Counsil of India (RCI) with over a decade of enriched experience in the field. Proficient in a wide array of evidence-based therapeutic modalities including Cognitive Behavioral Therapy (CBT), REBT, DBT, family & relationship counselling, career counselling and cancer counseling. Bringing forth 12 years of comprehensive expertise in providing mental health support and guidance to individuals across various life stages. Specializing in working with adolescents, adults, elderly individuals, and couples. Additionally, I extend my expertise as a psychotherapist to an NGO dedicated to supporting cancer patients through their emotional journeys.
    I aim to create a supportive space for healing and growth through collaboration. Witnessing progress and transformation is deeply fulfilling and inspiring, like watching a seed bloom with effort and teamwork.
    

**Key Skills:**
- Specialized training in Clinical Psychology
- Expertise in REBT, CBT, DBT, and other therapeutic approaches
- Experience working with individuals, couples, and families
- Tailored therapeutic approaches for varied age groups
- Cultivating a supportive and nurturing environment for clients
- Compassionate support for cancer patients through psychotherapeutic care

**Professional Accomplishments:**
- Successfully helped numerous individuals and couples navigate through challenging mental health issues
- Conducted workshops and seminars on mental well-being and relationship dynamics
- Actively involved in community outreach programs promoting mental health awareness
- Recognized for providing empathetic and effective psychotherapeutic care to cancer patients

**Associated with:**
- Santvana - Psychological Guidance Centre (Founder)
- Basil Onco Care (For Cancer Patients)
- Priyanka Jariwala Memorial Foundation (For Cancer Patients)
- Indiagro Consortium Producer Company Limited (Director)
- Gujagro Farmers Producer Company Limited (Director)
- Former Psychologist at Psylens Centre, Surat
- Former Psychologist at ‘Prashanti’ – Dr. Mahesh Desai, Psychiatrist
- Former Psychologist at Shree Gurunanak Charitable Trust Hospital
- Former Psychologist at National Training & Consultancy
    `,
  },
  {
    name: "Ms. Rajvee Shah",
    title: "Psychotherapist",
    qualifications: "MA – Clinical Psychology",
    role: "Co-founder",
    image: "/images/rajvee.jpg",
    phone: "+919723069261",
    details: `

As a Psychotherapist and co-founder of Santvana - Psychological Guidance Centre, I bring a wealth of expertise in clinical psychology and a diverse toolkit of therapeutic modalities, including CBT, REBT, DBT, and more. With a Master’s in Clinical Psychology, my practice focuses on serving individuals, couples, and families across all age groups. Since 2021, I have been wholeheartedly dedicated to delivering personalized, evidence-based therapy to individuals striving to navigate life's challenges and enhance their overall well-being. My approach aims to foster a compassionate and supportive environment where healing and personal growth can flourish through collaborative efforts.

**Key Skills:**
- Proficiency in CBT, REBT, DBT, and other therapeutic approaches
- Experience working with individuals, couples, and families
- Tailored therapeutic approaches for varied age groups
- Cultivating a supportive and nurturing environment for clients

**Professional Accomplishments:**
- Successfully helped individuals and couples navigate through challenging mental health issues
- Conducted workshops and seminars on mental well-being and relationship dynamics
- Actively involved in community outreach programs promoting mental health awareness

**Associated with:**
- Santvana - Psychological Guidance Centre (Co-Founder)
- Psychologist and tutor at Eureka Coaching Centre
- Former Psychologist at Psylens Centre, Surat
- Former psychologist and tutor at Keystone Universe of Education, Ahmedabad, and Ace Academy, Ahmedabad
    `,
  },
];

const CoreTeam = () => {
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
    <section id="team" className="py-16 bg-[#546365]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#C0CEC0]">
          Meet Our Core Team
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12">
          {coreTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#C0CEC0]">
                {member.name}
              </h3>
              <p className="text-[#C0CEC0]">{member.title}</p>
              <p className="text-[#C0CEC0]">{member.qualifications}</p>
              <p className="font-semibold text-[#C0CEC0]">{member.role}</p>

              {/* Buttons */}
              <div className="mt-4 flex justify-center space-x-4">
                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(member)}
                  className="relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-blue-300 to-green-200 group-hover:from-blue-200 group-hover:via-green-300 group-hover:to-green-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                >
                  <span className="relative mr-1 mb-0.5 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                  View Details
                  </span>
                </button>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(member)}
                  className="relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-blue-300 to-green-200 group-hover:from-blue-200 group-hover:via-green-300 group-hover:to-green-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
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
          <DrawerContent className="bg-white max-w-screen-lg mx-auto p-6">
            <DrawerClose asChild>
              <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                &#10005;
              </button>
            </DrawerClose>
            <div className="flex flex-col items-center">
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
            </div>
            <div
              className="mt-6 overflow-y-auto"
              style={{ maxHeight: "50vh" }}
            >
              <div
                className="text-gray-800 mx-auto"
                style={{ maxWidth: "1024px" }}
              >
                {parseDetails(selectedMember.details)}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Drawer for booking form */}
      {selectedMember && showBookingDrawer && (
        <Drawer open={showBookingDrawer} onClose={closeBookingDrawer}>
          <DrawerContent className="bg-white max-w-md mx-auto p-6">
            <DrawerClose asChild>
              <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                &#10005;
              </button>
            </DrawerClose>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Book an Appointment
              </h2>
            </div>
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

export default CoreTeam;
