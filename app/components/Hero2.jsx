'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

// Import the Drawer components
import { Drawer, DrawerClose, DrawerContent } from '@/components/ui/drawer';

export default function Hero2() {
  const [showBookingDrawer, setShowBookingDrawer] = useState(false);

  const handleBookNow = () => {
    setShowBookingDrawer(true);
  };

  const closeBookingDrawer = () => {
    setShowBookingDrawer(false);
  };

  return (
    <section className="bg-[#f8f5f1] min-h-min flex items-center justify-center p-4 pb-10">
      {/* Container */}
      <div className="container max-w-6xl max-h-min mx-auto">
        {/* Mobile View */}
        <div className="block md:hidden">
          {/* Image Container */}
          <div className="relative">
            <Image
              src="/images/hero2.jpg"
              layout="responsive"
              width={800}
              height={600}
              alt="Woman with arms outstretched in a field of yellow flowers"
              className="rounded-lg object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute top-0 left-0 w-full h-[40%] flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-3xl font-serif text-[#6B5C3E] leading-tight">
                your inner peace awaits
              </h1>
              <p className="text-base text-[#6D3D2A] leading-relaxed mt-2">
                You deserve to have a space dedicated to what you think, feel, and need.
              </p>
            </div>
          </div>
          {/* Book Now Button */}
          <div className="mt-6 flex justify-center">
            <Button
              className="bg-[#e8c8c1] text-[#6b5c3e] hover:bg-[#d1b0a8] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              onClick={handleBookNow}
            >
              BOOK TODAY
            </Button>
          </div>
        </div>
        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/hero2.jpg"
              layout="responsive"
              width={400}
              height={300}
              alt="Woman with arms outstretched in a field of yellow flowers"
              className="rounded-lg object-cover max-h-96"
            />
          </div>
          {/* Text and Button */}
          <div className="mt-6 space-y-4 text-center">
            <h1 className="text-4xl font-serif text-[#6b5c3e] leading-tight">
              your inner peace awaits
            </h1>
            <p className="text-lg text-[#6b5c3e] leading-relaxed">
              You deserve to have a space dedicated to what you think, feel, and need.
            </p>
            <div className="mt-4 flex justify-center">
              <Button
                className="bg-[#e8c8c1] text-[#6b5c3e] hover:bg-[#d1b0a8] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
                onClick={handleBookNow}
              >
                BOOK TODAY
              </Button>
            </div>
          </div>
        </div>
        {/* Desktop View */}
        <div className="hidden lg:flex lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:max-h-106">
            <Image
              src="/images/hero2.jpg"
              width={300}
              height={200}
              alt="Woman with arms outstretched in a field of yellow flowers"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Text and Button */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-serif text-[#6b5c3e] leading-tight">
              your inner peace awaits
            </h1>
            <p className="text-xl text-[#6b5c3e] leading-relaxed">
              You deserve to have a space dedicated to what you think, feel, and need.
            </p>
            <Button
              className="bg-[#e8c8c1] text-[#6b5c3e] hover:bg-[#d1b0a8] px-10 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
              onClick={handleBookNow}
            >
              BOOK TODAY
            </Button>
          </div>
        </div>
      </div>
      {/* Drawer */}
      {showBookingDrawer && (
        <Drawer open={showBookingDrawer} onClose={closeBookingDrawer}>
          <DrawerContent className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-xl">
            <DrawerClose asChild>
              <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
                &times;
              </button>
            </DrawerClose>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Book an Appointment</h2>
            </div>
            {/* Appointment Form */}
            <AppointmentForm
              member={{
                name: 'Santvana - Psychological Guidance Centre',
                phone: '+919824218278',
              }}
              onClose={closeBookingDrawer}
            />
          </DrawerContent>
        </Drawer>
      )}
    </section>
  );
}
