// app/page.js
import React from "react";
import Hero from "./components/Hero";
import WhatWeOffer from "./components/WhatWeOffer";
import WhyChooseUs from "./components/WhyChooseUs";
import HowTherapyWorks from "./components/HowTherapyWorks";
import CoreTeam from "./components/CoreTeam";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <WhyChooseUs />
      <HowTherapyWorks />
      <CoreTeam />
      <Testimonials />
      <CTASection />
    </>
  );
}
