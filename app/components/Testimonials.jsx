// app/components/Testimonials.jsx
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'I had Anxiety problem and after taking therapy from her I feel much better. Thank you for your such a humble and kind gesture as well as guidance and support. 🙏',
    name: 'Indi agrocon',
  },
  {
    quote: 'I am feeling very much better now only because of Dr Poonam ... She\'s very kind hearted and it was very good experience for me ..... Thankyou so much ma\'am Bestest than ever 💗',
    name: 'Poulomi Biswas',
  },
  {
    quote: 'Poonam mam , aka my therapist, has helped me a lot to become who i am today. She has been very generous towards me , and hence i have found my safe space here with her❤️',
    name: 'Prisha Gupta',
  },
  {
    quote: 'Nice experience and Thanks to Poonam mam for her support …',
    name: 'Dipesh Bochiya',
  },
  {
    quote: 'I was really happy that I took the decision and started therapy for my situation. Poonam mam is very helpful and good listener. She helped me a lot in my situation.',
    name: 'akshay barvaliya',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section id='Testimonials' className="py-16" style={{ backgroundColor: '#E8DAD0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Testimonials - What Clients Say
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-xl text-center mx-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-xl italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-primary">
                    - {testimonial.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            className="swiper-button-prev-custom absolute top-1/2 -left-6 transform -translate-y-1/2 cursor-pointer bg-primary text-white rounded-full p-3 z-10 shadow-lg"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div
            className="swiper-button-next-custom absolute top-1/2 -right-6 transform -translate-y-1/2 cursor-pointer bg-primary text-white rounded-full p-3 z-10 shadow-lg"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
