// app/components/CTASection.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BookingDrawer from "./BookingDrawer";

export default function CTASection() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-brown-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brown-700/30 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Floating decorative icons */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hidden md:flex"
        >
          <svg className="w-5 h-5 text-teal-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[12%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hidden md:flex"
        >
          <svg className="w-5 h-5 text-brown-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-teal-200 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Your Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Your Journey to <span className="text-teal-300">Healing</span> Begins Here
          </h2>
          <p className="text-brown-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards emotional well-being. Book a consultation with our experienced psychologists and therapists today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowBooking(true)}
              className="w-full sm:w-auto bg-white text-brown-800 hover:bg-brown-50 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-black/10 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>
            <a
              href="tel:+919824218278"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 98242 18278
            </a>
          </div>
          <p className="mt-8 text-teal-200/80 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mon - Sat: 10:30 AM - 7:00 PM &bull; Online & Offline Sessions
          </p>
        </motion.div>
      </div>

      {/* Booking Drawer */}
      <BookingDrawer open={showBooking} onClose={() => setShowBooking(false)} />
    </section>
  );
}
