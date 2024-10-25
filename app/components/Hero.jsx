// app/components/Hero.jsx
'use client'
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

// Import the Drawer components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from '@/components/ui/drawer';

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
      className="h-auto flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="text-center text-primary px-4 relative z-10 pb-44">
        <h1 className="text-5xl font-bold mb-4 mt-60 ">
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
