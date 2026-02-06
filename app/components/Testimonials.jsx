// app/components/Testimonials.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "I had anxiety problems and after taking therapy from her I feel much better. Thank you for your such a humble and kind gesture as well as guidance and support.",
    name: "Indi Agrocon",
  },
  {
    quote: "I am feeling very much better now only because of Dr. Poonam. She's very kind hearted and it was a very good experience for me. Thankyou so much ma'am!",
    name: "Poulomi Biswas",
  },
  {
    quote: "Poonam mam, aka my therapist, has helped me a lot to become who I am today. She has been very generous towards me, and hence I have found my safe space here with her.",
    name: "Prisha Gupta",
  },
  {
    quote: "Nice experience and thanks to Poonam mam for her support. The sessions were really helpful and the environment was very comfortable.",
    name: "Dipesh Bochiya",
  },
  {
    quote: "I was really happy that I took the decision and started therapy for my situation. Poonam mam is very helpful and a good listener. She helped me a lot.",
    name: "Akshay Barvaliya",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brown-50 via-white to-teal-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-100 to-brown-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-brown-800">What Our </span>
              <span className="bg-gradient-to-r from-teal-700 to-sage-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Decorative background card */}
          <div className="absolute inset-0 bg-white rounded-3xl border-2 border-brown-100 shadow-xl shadow-brown-50" />

          <div className="relative px-8 py-12 md:px-14 md:py-16">
            {/* Quotation mark */}
            <div className="absolute top-6 left-8 md:left-14">
              <svg className="w-12 h-12 text-gradient-to-r text-teal-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
            </div>

            <div className="min-h-[180px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center pt-8"
                >
                  <p className="text-lg md:text-xl text-brown-700 leading-relaxed mb-8 italic max-w-2xl mx-auto font-medium">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brown-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <p className="text-sm font-bold text-brown-800">
                      {testimonials[current].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-gradient-to-r from-brown-500 to-teal-500 w-8"
                  : "bg-brown-200 hover:bg-brown-300 w-2.5"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
