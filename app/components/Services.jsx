// app/components/Services.jsx
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const servicesData = [
  {
    title: 'Psychological Consultation',
    description: 'Helping you understand and improve your mental well-being with professional support.',
    image: '/images/service-1.jpg',
  },
  {
    title: 'Psychological Assessment',
    description: 'Evaluating your mental health with standardized tests to provide insights and guide effective treatment.',
    image: '/images/service2.jpg',
  },
  {
    title: 'Counselling and Psychotherapy',
    description: 'Offering professional counselling and psychotherapy to promote mental well-being and personal growth.',
    image: '/images/service3.jpg',
  },
  {
    title: 'Occupational Therapy & Speech Therapy',
    description: 'Improving functional abilities and sensory experiences with specialized occupational therapy, helping individuals to address speech challenges through personalized therapy using appropriate instruments.',
    image: '/images/service4.jpg',
  },
  {
    title: 'Applied Behaviour Analysis & Behaviour Modification',
    description: 'Utilizing ABA approach that applies behavioral principles to modify and improve specific dysfunctional and inappropriate behaviours.',
    image: '/images/service5.jpg',
  },
  {
    title: 'Remedial Education',
    description: 'Using scientific and specialized methods to help clients improve fundamental academic skills and overcome learning challenges.',
    image: '/images/service6.jpg',
  },
  {
    title: 'Homeopathic Consultation',
    description: 'Expert homeopathic consultation involving evaluating a patient’s symptoms to recommend homeopathic remedies for restoring balance and health.',
    image: '/images/service7.jpg',
  },
  {
    title: 'Nutrition Consultation',
    description: 'A consultation with an expert dietician to assess dietary habits and develop personalized nutrition plans for better health.',
    image: '/images/service8.jpg',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16" style={{ backgroundColor: '#C0CEC0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2E393A' }}>
          Our Services Provided By Experts
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Explore our tailored services designed to transform your life with personalized, compassionate therapy just for you!
        </p>
        {/* Swiper for Mobile Devices */}
        <div className="md:hidden relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="overflow-visible"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div
            className="swiper-button-prev-custom absolute top-1/2 -left-4 transform -translate-y-1/2 cursor-pointer bg-gray-800 text-white rounded-full p-2 z-10"
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
            className="swiper-button-next-custom absolute top-1/2 -right-4 transform -translate-y-1/2 cursor-pointer bg-gray-800 text-white rounded-full p-2 z-10"
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
        {/* Grid for Larger Screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundColor: '#D6D9D4' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
