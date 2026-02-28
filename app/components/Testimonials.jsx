// app/components/Testimonials.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Been in touch with Dr Poonam Vipani since 2020. This is 2026 she has always been there, showed me right direction regarding anxieties, stress and n number of mental health issues. Very best therapist in town. Never worry about your privacy.",
    name: "Sagar Chokhawala",
  },
  {
    quote: "I'm really grateful to Santvana for being there for me during one of the toughest phases of my life. Their sessions truly helped me heal and understand myself better. A very special thanks to Rajvii ma'am, who was incredibly kind, understanding, and flexible with her timings. Her warmth and positive energy made every session feel comfortable and meaningful. Thank you, Santvana, for all the support and care — you've made a big difference in my journey!",
    name: "Adithya Chandak",
  },
  {
    quote: "We came to Santvana because our child was having frequent tantrums and difficulty adjusting at school. The therapist was very calm and patient with our child and also explained things clearly to us as parents. Over a few weeks, we started seeing small but meaningful changes. The environment is safe and child-friendly. We are happy with the support we received.",
    name: "Nafisa Lokhandwala",
  },
  {
    quote: "I had a great experience as an intern here. The team was supportive, approachable, and genuinely invested in helping interns learn. I worked on case studies, gained hands-on experience, and received regular feedback that helped me grow professionally. The work environment was positive and collaborative, making it a valuable learning experience overall. I'd definitely recommend this internship to students looking to build practical skills.",
    name: "Rachna Saxena",
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

            <div className="min-h-[280px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center pt-8"
                >
                  {/* 5-star rating */}
                  <div className="flex items-center justify-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-brown-700 leading-relaxed mb-8 italic max-w-2xl mx-auto font-medium">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brown-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brown-800">
                        {testimonials[current].name}
                      </p>
                      <p className="text-xs text-gray-400">Google Review</p>
                    </div>
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
