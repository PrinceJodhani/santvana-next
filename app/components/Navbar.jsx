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
  { label: "Internship & Training", href: "/services/internship" },
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
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Santvana Psychological Well-Being Centre"
                className="h-14 w-auto"
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
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
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
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
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
