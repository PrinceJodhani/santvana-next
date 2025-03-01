// app/components/Navbar.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Data for submenu items
const therapies = [
  { label: "Psychotherapy", slug: "psychotherapy" },
  { label: "Cognitive Behavioural Therapy (CBT)", slug: "cognitive-behavioural-therapy" },
  { label: "Gestalt Therapy", slug: "gestalt-therapy" },
  { label: "Couple Therapy", slug: "couple-therapy" },
  { label: "Sex Therapy", slug: "sex-therapy" },
  { label: "Colour Therapy", slug: "colour-therapy" },
  { label: "Hypnotherapy", slug: "hypnotherapy" },
];

const counselling = [
  { label: "Family Counselling", slug: "family-counselling" },
  { label: "Personal Counselling", slug: "personal-counselling" },
  { label: "Couple Counselling", slug: "couple-counselling" },
  { label: "Pre-Marital Counselling", slug: "pre-marital-counselling" },
  { label: "Career Counselling", slug: "career-counselling" },
  { label: "Educational Counselling", slug: "educational-counselling" },
  { label: "Group Counselling", slug: "group-counselling" },
  { label: "Addiction Counselling", slug: "addiction-counselling" },
  { label: "Relationship Counselling", slug: "relationship-counselling" },
  { label: "Online Counselling", slug: "online-counselling" },
];

const additionalServices = [
  { label: "Psychological Consultation", slug: "psychological-consultation" },
  { label: "Psychological Assessment", slug: "psychological-assessment" },
  { label: "Counselling and Psychotherapy", slug: "counselling-and-psychotherapy" },
  { label: "Occupational Therapy & Speech Therapy", slug: "occupational-therapy-speech-therapy" },
  { label: "Applied Behaviour Analysis & Behaviour Modification", slug: "applied-behaviour-analysis-behaviour-modification" },
  { label: "Remedial Education", slug: "remedial-education" },
  { label: "Homeopathic Consultation", slug: "homeopathic-consultation" },
  { label: "Nutrition Consultation", slug: "nutrition-consultation" },
  { label: "Mindfulness & Stress Management", slug: "mindfulness-stress-management" },
  { label: "Wellness Coaching", slug: "wellness-coaching" },
];

const Navbar = () => {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Mobile nested accordions
  const [mobileTherapiesOpen, setMobileTherapiesOpen] = useState(false);
  const [mobileCounsellingOpen, setMobileCounsellingOpen] = useState(false);
  const [mobileAdditionalServicesOpen, setMobileAdditionalServicesOpen] = useState(false);
  // Desktop active submenu ("therapies", "counselling", or "additional-services")
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset mobile nested states when closing menu
    if (isMobileMenuOpen) {
      setMobileTherapiesOpen(false);
      setMobileCounsellingOpen(false);
      setMobileAdditionalServicesOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-90 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/#home">
              <img src="/images/logo.png" alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#home"
              className="text-lg font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseLeave={() => setActiveDesktopSubmenu(null)}
            >
              <button
                className="text-lg font-medium text-gray-800 hover:text-blue-500 transition duration-300 focus:outline-none"
                onMouseEnter={() => setActiveDesktopSubmenu("none")}
              >
                Services
              </button>
              {/* Services Dropdown Container */}
              <AnimatePresence>
                {activeDesktopSubmenu !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 bg-white border rounded shadow-lg z-50"
                    onMouseEnter={() =>
                      activeDesktopSubmenu === null && setActiveDesktopSubmenu("none")
                    }
                  >
                    <div className="flex">
                      {/* Left Column: Submenu Headers */}
                      <div className="w-1/3 border-r">
                        <button
                          onMouseEnter={() => setActiveDesktopSubmenu("therapies")}
                          className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition ${
                            activeDesktopSubmenu === "therapies" ? "bg-blue-50 font-semibold" : ""
                          }`}
                        >
                        <Link href="/services/therapies"> Therapies</Link> 
                        </button>
                        <button
                          onMouseEnter={() => setActiveDesktopSubmenu("counselling")}
                          className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition ${
                            activeDesktopSubmenu === "counselling" ? "bg-blue-50 font-semibold" : ""
                          }`}
                        >
                         <Link href="/services/Counselling">  Counselling </Link>
                        </button>
                        <button
                          onMouseEnter={() => setActiveDesktopSubmenu("additional-services")}
                          className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition ${
                            activeDesktopSubmenu === "additional-services" ? "bg-blue-50 font-semibold" : ""
                          }`}
                        >
                         <Link href="/services/Additional-Services"> Additional Services</Link>
                        </button>
                      </div>
                      {/* Right Column: Nested submenu items */}
                      <div className="w-2/3">
                        <AnimatePresence mode="wait">
                          {activeDesktopSubmenu === "therapies" && (
                            <motion.div
                              key="therapies"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ul className="py-2">
                                {therapies.map((item) => (
                                  <li key={item.slug}>
                                    <Link
                                      href={`/services/therapies/${item.slug}`}
                                      className="block px-4 py-1 text-gray-700 hover:bg-blue-100 transition"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                          {activeDesktopSubmenu === "counselling" && (
                            <motion.div
                              key="counselling"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ul className="py-2">
                                {counselling.map((item) => (
                                  <li key={item.slug}>
                                    <Link
                                      href={`/services/counselling/${item.slug}`}
                                      className="block px-4 py-1 text-gray-700 hover:bg-blue-100 transition"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                          {activeDesktopSubmenu === "additional-services" && (
                            <motion.div
                              key="additional-services"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ul className="py-2">
                                {additionalServices.map((item) => (
                                  <li key={item.slug}>
                                    <Link
                                      href={`/services/additional-services/${item.slug}`}
                                      className="block px-4 py-1 text-gray-700 hover:bg-blue-100 transition"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/#team"
              className="text-lg font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Team
            </Link>
            <Link
              href="/#Testimonials"
              className="text-lg font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Testimonials
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="px-4 py-4 space-y-4">
              <li>
                <Link
                  href="/#home"
                  onClick={toggleMobileMenu}
                  className="block text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {}}
                  className="w-full text-left text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                  Services
                </button>
                {/* Mobile Services Nested Accordions */}
                <div className="pl-4">
                  {/* Therapies Accordion */}
                  <button
                    onClick={() => setMobileTherapiesOpen(!mobileTherapiesOpen)}
                    className="w-full text-left py-2 flex justify-between items-center text-gray-700 hover:text-blue-500 transition"
                  >
                    <span>Therapies</span>
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${mobileTherapiesOpen ? "rotate-90" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileTherapiesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4"
                      >
                        <ul className="space-y-2">
                          {therapies.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`/services/therapies/${item.slug}`}
                                onClick={toggleMobileMenu}
                                className="block text-gray-700 hover:text-blue-500 transition"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Counselling Accordion */}
                  <button
                    onClick={() => setMobileCounsellingOpen(!mobileCounsellingOpen)}
                    className="w-full text-left py-2 flex justify-between items-center text-gray-700 hover:text-blue-500 transition"
                  >
                    <span>Counselling</span>
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${mobileCounsellingOpen ? "rotate-90" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileCounsellingOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4"
                      >
                        <ul className="space-y-2">
                          {counselling.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`/services/counselling/${item.slug}`}
                                onClick={toggleMobileMenu}
                                className="block text-gray-700 hover:text-blue-500 transition"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Additional Services Accordion */}
                  <button
                    onClick={() => setMobileAdditionalServicesOpen(!mobileAdditionalServicesOpen)}
                    className="w-full text-left py-2 flex justify-between items-center text-gray-700 hover:text-blue-500 transition"
                  >
                    <span>Additional Services</span>
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${mobileAdditionalServicesOpen ? "rotate-90" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAdditionalServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4"
                      >
                        <ul className="space-y-2">
                          {additionalServices.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`/services/additional-services/${item.slug}`}
                                onClick={toggleMobileMenu}
                                className="block text-gray-700 hover:text-blue-500 transition"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
              <li>
                <Link
                  href="/#team"
                  onClick={toggleMobileMenu}
                  className="block text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#Testimonials"
                  onClick={toggleMobileMenu}
                  className="block text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
