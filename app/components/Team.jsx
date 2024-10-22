// app/components/Team.jsx
"use client";
import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

// Import the Drawer components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from "@/components/ui/drawer";

const teamMembers = [
  {
    name: "Ms. Nidhi Nahata",
    title: "Clinical Psychologist",
    qualifications: "RCI Registered, MA, M.Phil.",
    image: "/images/nidhi.jpg",
    phone: "+919876543210",
  },
  {
    name: "Dr. Rutvi Kakadiya",
    title: "Occupational Therapist",
    qualifications: "BOT, MOT, Registered With AIOTA",
    image: "/images/rutvi.jpg",
    phone: "+919876543211",
  },
  {
    name: "Dr. Jinal Shah",
    title: "Homeopathic Consultant",
    qualifications: "MA (Psych), BHMS, NDDY",
    image: "/images/jinal.jpg",
    phone: "+919876543212",
  },
  {
    name: "Ms. Bhumi Shah",
    title: "Registered Dietician",
    qualifications: "CDE, Reg. No. 12/2009",
    image: "/images/bhumi.jpg",
    phone: "+919876543213",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showBookingDrawer, setShowBookingDrawer] = useState(false);

  const handleBookNow = (member) => {
    setSelectedMember(member);
    setShowBookingDrawer(true);
  };

  const closeBookingDrawer = () => {
    setShowBookingDrawer(false);
    setSelectedMember(null);
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#E8DAD0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
              <p className="text-gray-500">{member.qualifications}</p>
              <button
                onClick={() => handleBookNow(member)}
                className="mt-4 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

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

export default Team;
