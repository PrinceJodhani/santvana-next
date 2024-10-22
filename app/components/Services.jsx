// app/components/Services.jsx
'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-16" style={{backgroundColor: '#C0CEC0'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12" style={{color:'#2E393A'}} >
          Our Services Provided By Experts
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Explore our tailored services designed to transform your life with personalized, compassionate therapy just for you!
        </p>
        {/* Swiper for Mobile Devices */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
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
                    {activeIndex === index && (
                      <p className="text-gray-700">{service.description}</p>
                    )}
                    <button
                      onClick={() => toggleService(index)}
                      className="mt-4 text-secondary hover:underline"
                    >
                      {activeIndex === index ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid for Larger Screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden shadow-lg" style={{backgroundColor:'#D6D9D4'}}
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
                {activeIndex === index && (
                  <p className="text-gray-700">{service.description}</p>
                )}
                <button
                  onClick={() => toggleService(index)}
                  className="mt-4 text-secondary hover:underline"
                >
                  {activeIndex === index ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
