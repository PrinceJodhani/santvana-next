// app/page.jsx
import React from 'react';
import Hero from './components/Hero';
import HealingSection from './components/HealingSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CoreTeam from './components/CoreTeam';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Hero2 from './components/Hero2';
import ExpandableCardDemo from '@/components/blocks/expandable-card-demo-standard';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ExpandableCardDemo />
      <HealingSection />
        <Services />
        <CoreTeam />
        <Team />
        <WhyChooseUs />
        <Hero2 />
        <Testimonials />
        {/* Include contact section if needed */}
      </main>
      <Footer />
    </>
  );
}
