// app/components/Hero.jsx
'use client'
import React, { useState } from 'react';
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import AppointmentForm from './AppointmentForm';

// Import the Drawer components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from '@/components/ui/drawer';
const people = [
  {
    id: 1,
    name: "Ms. Poonam G Vipani",
    designation: "Associate Clinical Psychologist",
    image:
      "/images/poonam.jpg",
  },
  {
    id: 2,
    name: "Ms. Rajvee Shah",
    designation: "Psychotherapist",
    image:
      "/images/rajvee.jpg",
  },
  {
    id: 3,
    name: "Ms. Nidhi Nahata",
    designation: "Clinical Psychologist",
    image:
      "/images/nidhi.jpg",
  },
  {
    id: 4,
    name: "Dr. Rutvi Kakadiya",
    designation: "Occupational Therapist",
    image:
      "/images/rutvi.jpg",
  },
  {
    id: 5,
    name: "Dr. Jinal Shah",
    designation: "Homeopathic Consultant",
    image:
      "/images/jinal.jpg",
  },
  {
    id: 6,
    name: "Ms. Bhumi Shah",
    designation: "Registered Dietician",
    image:
      "/images/bhumi.jpg",
  },
];
const Hero = () => {

  const [showBookingDrawer, setShowBookingDrawer] = useState(false);

  const handleBookNow = () => {
    setShowBookingDrawer(true);
  };

  const closeBookingDrawer = () => {
    setShowBookingDrawer(false);
  };

  return (
    <>
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="text-center text-primary px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Transforming Lives With Care!
        </h1>
        <p className="text-xl mb-6">
          "Welcome to our mental health services for children, adolescents, and adults. From individual counselling to Family therapy, we're here to support every journey."
        </p>
        <button
           onClick={handleBookNow}
          className="bg-primary px-6 py-3 rounded-full text-white font-semibold hover:bg-secondary"
        >
          Book an Appointment
        </button>

        <div className="flex mt-20 flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
      </div>
    </section>
     
     {showBookingDrawer && (
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
            member={{ name: 'Santvana - Psychological Guidance Centre', phone: '+919824218278' }}
            onClose={closeBookingDrawer}
          />
        </DrawerContent>
      </Drawer>
      
    )}
    </>
  );
};

export default Hero;
