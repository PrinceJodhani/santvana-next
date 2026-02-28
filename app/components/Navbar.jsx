// app/components/Navbar.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BookingDrawer from "./BookingDrawer";

const aboutLinks = [
  { label: "Mission & Vision", href: "/about/mission-vision" },
  { label: "Our Team", href: "/about/team" },
  { label: "Gallery", href: "/about/gallery" },
];

const serviceLinks = [
  { label: "Child Services", href: "/services/child-services" },
  { label: "Adult Services", href: "/services/adult-services" },
  { label: "Psychological Assessments", href: "/services/assessments" },
  { label: "Social Services", href: "/about/social-services" },
  { label: "Internship & Training", href: "/about/internship" },
  { label: "Conditions We Treat", href: "/services/conditions" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileAboutOpen(false);
      setMobileServicesOpen(false);
    }
  };

  const handleBookAppointment = () => {
    setShowBooking(true);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-white/60 shadow-lg shadow-black/[0.03] border-b border-white/60"
            : "bg-white/40 border-b border-white/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Santvana Psychological Well-Being Centre"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-1"
              ref={dropdownRef}
            >
              <NavLink href="/" active={pathname === "/"}>
                Home
              </NavLink>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/about"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 inline-flex items-center gap-1 ${
                    isActive("/about")
                      ? "text-brown-700 bg-brown-50"
                      : "text-gray-600 hover:text-brown-700 hover:bg-brown-50"
                  }`}
                >
                  About Us
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-black/[0.08] border border-gray-100 py-2 overflow-hidden"
                    >
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive(link.href)
                              ? "text-brown-700 bg-brown-50 font-medium"
                              : "text-gray-600 hover:text-brown-700 hover:bg-brown-50"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 inline-flex items-center gap-1 ${
                    isActive("/services")
                      ? "text-brown-700 bg-brown-50"
                      : "text-gray-600 hover:text-brown-700 hover:bg-brown-50"
                  }`}
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl shadow-black/[0.08] border border-gray-100 py-2 overflow-hidden"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive(link.href)
                              ? "text-brown-700 bg-brown-50 font-medium"
                              : "text-gray-600 hover:text-brown-700 hover:bg-brown-50"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/blogs" active={isActive("/blogs")}>
                Blogs
              </NavLink>
              <NavLink href="/contact" active={isActive("/contact")}>
                Contact Us
              </NavLink>
              <NavLink href="/faq" active={isActive("/faq")}>
                FAQ
              </NavLink>

              {/* Social Icons */}
              <div className="flex items-center gap-1 ml-1">
                <a
                  href="https://instagram.com/santvana.mentalhealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg text-gray-500 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200 animate-shake"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919824218278"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 animate-shake"
                  style={{ animationDelay: "0.3s" }}
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.618-.775-6.42-2.088l-.447-.34-2.635.884.884-2.635-.34-.447A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </a>
                <a
                  href="mailto:santvana27@gmail.com"
                  aria-label="Email"
                  className="p-2 rounded-lg text-gray-500 hover:text-brown-700 hover:bg-brown-50 transition-colors duration-200 animate-shake"
                  style={{ animationDelay: "0.6s" }}
                >
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <button
                onClick={handleBookAppointment}
                className="bg-gradient-to-r from-brown-700 to-brown-800 hover:from-brown-800 hover:to-brown-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md hover:shadow-brown-200/50"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-brown-700 hover:bg-brown-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white/60 backdrop-blur-2xl border-t border-white/40 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <MobileNavLink href="/" onClick={toggleMobileMenu} active={pathname === "/"}>
                  Home
                </MobileNavLink>

                {/* About Us Accordion */}
                <div>
                  <div className="flex items-center">
                    <Link
                      href="/about"
                      onClick={toggleMobileMenu}
                      className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive("/about") ? "text-brown-700 bg-brown-50" : "text-gray-700"
                      }`}
                    >
                      About Us
                    </Link>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="p-3 text-gray-500 hover:text-sage-700"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileAboutOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 space-y-1 pb-2">
                          {aboutLinks.map((link) => (
                            <MobileNavLink
                              key={link.href}
                              href={link.href}
                              onClick={toggleMobileMenu}
                              active={isActive(link.href)}
                            >
                              {link.label}
                            </MobileNavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Accordion */}
                <div>
                  <div className="flex items-center">
                    <span className="flex-1 py-3 px-3 text-sm font-medium text-gray-700">
                      Services
                    </span>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-3 text-gray-500 hover:text-sage-700"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 space-y-1 pb-2">
                          {serviceLinks.map((link) => (
                            <MobileNavLink
                              key={link.href}
                              href={link.href}
                              onClick={toggleMobileMenu}
                              active={isActive(link.href)}
                            >
                              {link.label}
                            </MobileNavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink href="/blogs" onClick={toggleMobileMenu} active={isActive("/blogs")}>
                  Blogs
                </MobileNavLink>
                <MobileNavLink href="/contact" onClick={toggleMobileMenu} active={isActive("/contact")}>
                  Contact Us
                </MobileNavLink>
                <MobileNavLink href="/faq" onClick={toggleMobileMenu} active={isActive("/faq")}>
                  FAQ
                </MobileNavLink>

                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                  <a
                    href="https://instagram.com/santvana.mentalhealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2.5 rounded-xl bg-pink-50 text-pink-600 animate-shake"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919824218278"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="p-2.5 rounded-xl bg-green-50 text-green-600 animate-shake"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.618-.775-6.42-2.088l-.447-.34-2.635.884.884-2.635-.34-.447A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:santvana27@gmail.com"
                    aria-label="Email"
                    className="p-2.5 rounded-xl bg-brown-50 text-brown-700 animate-shake"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 pb-2">
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      handleBookAppointment();
                    }}
                    className="w-full bg-gradient-to-r from-brown-700 to-brown-800 hover:from-brown-800 hover:to-brown-900 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Booking Drawer */}
      <BookingDrawer open={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
};

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
        active
          ? "text-brown-700 bg-brown-50"
          : "text-gray-600 hover:text-brown-700 hover:bg-brown-50"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, active, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2.5 px-3 text-sm rounded-lg transition-colors ${
        active
          ? "text-brown-700 bg-brown-50 font-medium"
          : "text-gray-600 hover:text-brown-700 hover:bg-brown-50"
      }`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
