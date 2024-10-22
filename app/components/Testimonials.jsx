// app/components/Testimonials.jsx
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    quote: 'This is a life-changing experience. Highly recommended!',
    name: 'Client A',
  },
  {
    quote: 'Professional and compassionate care. I felt heard and supported.',
    name: 'Client B',
  },
  {
    quote: 'The team helped me navigate through my challenges effectively.',
    name: 'Client C',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50" style={{backgroundColor:'#E8DAD0'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Testimonials - What Clients Say</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-xl italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
