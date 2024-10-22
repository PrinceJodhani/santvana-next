// app/components/WhyChooseUs.jsx
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const reasons = [
  {
    icon: '/icons/psychiatrist.png',
    title: 'Licensed Therapist',
    description:
      'Licensed therapist ensures trustworthy therapy based on ethical standards, proven results based on extensive training and certification.',
  },
  {
    icon: '/icons/diagnosis.png',
    title: 'Personalized Treatment',
    description:
      'Personalized therapy adapts to you, offering support that fits your unique needs and aspirations for effective results and personalized attention.',
  },
  {
    icon: '/icons/psychology.png',
    title: 'Goal Oriented Therapy',
    description:
      'Therapy will be based on therapy goals that provide direction and focus, helping track progress and achieve meaningful change which will be set according to your needs and requirements.',
  },
  {
    icon: '/icons/network.png',
    title: 'Practitioners Network',
    description:
      'We ensure a powerful practitioner network that connects you with a diverse team of experts for comprehensive care and support.',
  },
  {
    icon: '/icons/discussion.png',
    title: 'Comfortable Centre',
    description:
      'We provide a comfortable centre that offers a welcoming and supportive space for your therapeutic journey and well-being.',
  },
  {
    icon: '/icons/medical-team.png',
    title: 'Experienced Staff',
    description:
      'We work with experienced staff that are trained to provide expert care and guidance with deep knowledge and skill.',
  },
  {
    icon: '/icons/conversation.png',
    title: 'Non-judgmental and Safe Space',
    description:
      'We provide a non-judgmental and safe space that ensures you can express yourself freely and seek support without any fear.',
  },
  {
    icon: '/icons/confidential-folder.png',
    title: 'Confidentiality',
    description:
      'We maintain the notion of confidentiality that guarantees your identity and the conversations in the therapy sessions stay private and secure.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#C0CEC0'}}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center  mb-12" style={{color:'#2E393A'}}>
          Why Choose Us? Get Your Life Back
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Wondering what we provide that makes us the right choice to help you with your problems and enforce your well-being? Here's your answer!
        </p>
        {/* Swiper for Mobile Devices */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
          >
            {reasons.map((reason, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-6 border rounded-lg shadow-md bg-gray-50">
                  <img
                    src={reason.icon}
                    alt={reason.title}
                    className="mx-auto mb-4 h-16 w-16"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid for Larger Screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg shadow-md bg-gray-50"
            >
              <img
                src={reason.icon}
                alt={reason.title}
                className="mx-auto mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;