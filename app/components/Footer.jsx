// app/components/Footer.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";

import Image from 'next/image';
const people = [
  {
    id: 1,
    name: "Ms. Poonam G Vipani",
    designation: "Associate Clinical Psychologist",
    image:
      "/images/poonam.jpg",
  },
  {
    id: 2,
    name: "Ms. Rajvee Shah",
    designation: "Psychotherapist",
    image:
      "/images/rajvee.jpg",
  },
  {
    id: 3,
    name: "Ms. Nidhi Nahata",
    designation: "Clinical Psychologist",
    image:
      "/images/nidhi.jpg",
  },
  {
    id: 4,
    name: "Dr. Rutvi Kakadiya",
    designation: "Occupational Therapist",
    image:
      "/images/rutvi.jpg",
  },
  {
    id: 5,
    name: "Dr. Jinal Shah",
    designation: "Homeopathic Consultant",
    image:
      "/images/jinal.jpg",
  },
  {
    id: 6,
    name: "Ms. Bhumi Shah",
    designation: "Registered Dietician",
    image:
      "/images/bhumi.jpg",
  },,
  {
    id: 7,
    name: "Dr. Dhara Patel",
    designation: "ABA therapist & remedial educator",
    image:
      "/images/dhara.jpg",
  },
];
const Footer = () => {
  return (
    <footer className="relative text-gray-700">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#E8DAD0"><path d="M0 0h1000v4H0z"></path><path d="M0 0h1000v80.8S550 100 500 100 0 80.8 0 80.8V0Z" opacity=".2"></path><path d="M0 0h1000v61.6S600 100 500 100 0 61.6 0 61.6V0Z" opacity=".3"></path><path d="M0 0h1000v42.4S650 100 500 100 0 42.4 0 42.4V0Z" opacity=".4"></path><path d="M0 0h1000v23.2S700 100 500 100 0 23.2 0 23.2V0Z" opacity=".5"></path><path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#E8DAD0"><rect fill="#E8F0F2" width="100%" height="100%"/><path d="M0 0h1000v4H0z"></path><path d="M0 0h1000v80.8S550 100 500 100 0 80.8 0 80.8V0Z" opacity=".2"></path><path d="M0 0h1000v61.6S600 100 500 100 0 61.6 0 61.6V0Z" opacity=".3"></path><path d="M0 0h1000v42.4S650 100 500 100 0 42.4 0 42.4V0Z" opacity=".4"></path><path d="M0 0h1000v23.2S700 100 500 100 0 23.2 0 23.2V0Z" opacity=".5"></path><path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z"></path></svg>
      {/* Wave SVG at the top */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
            fill="#E8F0F2"
          ></path>
        </svg>
      </div> */}

      <div
        className="max-w-8xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10"
        style={{ backgroundColor: '#E8F0F2' }}
      >
        <div className="flex flex-col items-start">
          <Image
            src={'/images/logo.png'}
            alt="santvana-logo"
            width={200}
            height={30}
          />
          {/* <p className="mt-4 text-gray-600">
            "Empowering minds, nurturing hearts."
          </p> */}
          <div className="flex flex-row items-center justify-center mt-5">
      <AnimatedTooltip items={people} />
    </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul>
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primary">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Contact Info
          </h3>
          <p>
            Email:{' '}
            <a
              href="mailto:santvana27@gmail.com"
              className="hover:text-primary"
            >
              santvana27@gmail.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:9824218278" className="hover:text-primary">
              9824218278
            </a>
            ,{' '}
            <a href="tel:9723069261" className="hover:text-primary">
              9723069261
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a
              href="https://instagram.com/santvana.mentalhealth"
              className="hover:text-primary"
            >
              @santvana.mentalhealth
            </a>
          </p>
          <p>
            Address: {' '} 
            <a href='https://maps.app.goo.gl/xKVFjuP5ExMWLTY8A'>
            407, Aagam Emporio, Besides GNine Restaurant, Vesu, Surat.
            </a>
          </p>
        </div>
      </div>
      <div
        className="py-4 text-center text-gray-600"
        style={{ backgroundColor: '#E8F0F2' }}
      >
        <p>
          © {new Date().getFullYear()} Santvana - Psychological Guidance Centre.
          All rights reserved.
        </p>
        <p>
          Developed By <a href='https://www.instagram.com/im.princejodhani'>Prince Jodhani</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
