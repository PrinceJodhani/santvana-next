// app/components/Hero.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BookingDrawer from "./BookingDrawer";

const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-50 via-white to-teal-50" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/40 to-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-brown-200/50 to-brown-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sage-100/20 to-teal-100/20 rounded-full blur-3xl" />

        {/* Floating icon - Heart */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-14 h-14 bg-white/80 rounded-2xl shadow-lg shadow-brown-100/50 flex items-center justify-center hidden lg:flex"
        >
          <svg className="w-7 h-7 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </motion.div>

        {/* Floating icon - Book */}
        <motion.div
          animate={{ y: [5, -10, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[8%] w-11 h-11 bg-white/80 rounded-xl shadow-lg shadow-brown-100/50 flex items-center justify-center hidden lg:flex"
        >
          <svg className="w-5 h-5 text-brown-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text Content ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-brown-100 to-teal-100 border border-brown-200/50 text-brown-700 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brown-500 to-teal-500 animate-pulse" />
                Clinical Psychologists &bull; Trained Therapists
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-5"
            >
              <span className="text-brown-800">Transforming Lives</span>
              <span className="block bg-gradient-to-r from-teal-700 via-sage-600 to-teal-600 bg-clip-text text-transparent">with Compassionate Care</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-brown-600/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Santvana is a leading mental health clinic and counselling centre in Surat,
              offering compassionate, ethical, and evidence-based psychological care for
              children, adolescents, adults, and families.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-10"
            >
              <button
                onClick={() => setShowBooking(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-brown-700 to-brown-800 hover:from-brown-800 hover:to-brown-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brown-200/50 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book an Appointment
              </button>
              <Link
                href="/about"
                className="w-full sm:w-auto border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-100 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-sm border border-brown-100">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brown-500 to-brown-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-brown-700">RCI Registered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-sm border border-teal-100">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-teal-700">Online & Offline</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-sm border border-sage-100">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-sage-700">India & Worldwide</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Founder Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative ring behind image */}
              <div className="absolute -inset-3 bg-gradient-to-br from-brown-200/50 via-teal-200/30 to-brown-200/50 rounded-[2rem] blur-sm" />

              {/* Main image container */}
              <div className="relative rounded-[1.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-brown-200/30">
                <Image
                  src="/images/together.jpeg"
                  alt="Poonam Vipani and Rajvee Shah - Founders of Santvana Psychological Well-Being Centre"
                  width={600}
                  height={750}
                  priority
                  className="w-full h-auto object-cover"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brown-900/30 to-transparent" />

                {/* Caption on image */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                  <p className="text-white text-sm font-semibold drop-shadow-md">
                    Ms. Poonam Vipani &amp; Ms. Rajvee Shah
                  </p>
                  <p className="text-white/80 text-xs drop-shadow-md">
                    Founder &amp; Co-Founder
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-brown-100/40 px-4 py-3 border border-brown-100 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-brown-800">Child &amp; Adult</p>
                  <p className="text-[10px] text-gray-500">Specialist Care</p>
                </div>
              </motion.div>

              {/* Floating accent card - top right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg shadow-brown-100/40 px-4 py-3 border border-brown-100 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brown-500 to-brown-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-brown-800">Trusted Care</p>
                  <p className="text-[10px] text-gray-500">Since 2019</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Drawer */}
      <BookingDrawer open={showBooking} onClose={() => setShowBooking(false)} />
    </section>
  );
};

export default Hero;
