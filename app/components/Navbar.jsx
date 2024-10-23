// app/components/Navbar.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="relative">
        <div className="backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 border-b border-white border-opacity-30">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-20 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:flex">
              <ul className="flex space-x-8 text-black text-lg font-semibold">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-300 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-8 w-8 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.36 6.64a1 1 0 00-1.41 0L12 11.59 7.05 6.64a1 1 0 10-1.41 1.41L10.59 13l-4.95 4.95a1 1 0 101.41 1.41L12 14.41l4.95 4.95a1 1 0 001.41-1.41L13.41 13l4.95-4.95a1 1 0 000-1.41z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-8 w-8 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 border-b border-white border-opacity-30"
          >
            <ul className="space-y-6 px-4 py-6 text-black text-lg font-semibold">
              <li>
                <a
                  href="#home"
                  className="block hover:text-blue-300 transition duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block hover:text-blue-300 transition duration-300"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="block hover:text-blue-300 transition duration-300"
                  onClick={toggleMenu}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block hover:text-blue-300 transition duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
