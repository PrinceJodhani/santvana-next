// app/components/HealingSection.jsx
"use client";
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

// Import the Drawer components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
} from '@/components/ui/drawer';

const HealingSection = () => {
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
        className="py-7 flex flex-col md:flex-row items-center"
        style={{ backgroundColor: '#546365' }}
      >
        <div className="md:w-1/2 lg:px-40 mx-6">
          <img
            src="/images/healing.jpg"
            alt="Healing"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2 px-6 mt-8 md:mt-0 ">
          <h2 className={`text-3xl font-bold mb-4 text-white playwrite-gb-s`}>
            Healing Can Be Messy and Complicated But You Don't Have to Navigate It Alone
          </h2>
          <p className="mb-4 text-white">
            Life has felt out of your control. You feel like no one understands what you’re going through. You want to feel better and “back to normal”, but everything you’ve tried so far has fallen flat.
          </p>
          <p className="mb-7 text-white">
            In-depth therapy helps you dig deeper into understanding yourself and others so that you can begin to break free from old patterns and develop the life you want.
          </p>
          <button
            onClick={handleBookNow}
            className="relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-blue-300 to-green-200 group-hover:from-blue-200 group-hover:via-green-300 group-hover:to-green-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          >
            <span className="relative mr-1 mb-0.5 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

            Book a Consultation Today
            </span>
          </button>
        </div>
      </section>

      {/* Booking Drawer */}
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

export default HealingSection;
