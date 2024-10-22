// app/page.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HealingSection from './components/HealingSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CoreTeam from './components/CoreTeam';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HealingSection />
        
        <Services />
        
        <CoreTeam />
        <Team />
        <WhyChooseUs />
        <Testimonials />
        {/* Include contact section if needed */}
      </main>
      <Footer />
    </>
  );
}
