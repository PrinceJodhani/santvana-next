// app/components/Footer.jsx
"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-gray-200 py-12" style={{backgroundColor:'#D6D9D4'}}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Dr. Poonam Vipani</h3>
          <p className='text-slate-800'>"Empowering minds, nurturing hearts."</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-white text-slate-800">Home</a></li>
            <li><a href="#services" className="hover:text-white text-slate-800">Services</a></li>
            <li><a href="#team" className="hover:text-white text-slate-800">Team</a></li>
            <li><a href="#contact" className="hover:text-white text-slate-800">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className='text-slate-800'>Email: <a href="mailto:santvana27@gmail.com" className="hover:text-white text-slate-800">santvana27@gmail.com</a></p>
          <p className='text-slate-800'>Phone: <a href="tel:9824218278" className="hover:text-white text-slate-800">9824218278</a>, <a href="tel:9723069261" className="hover:text-white text-slate-800">9723069261</a></p>
          <p className='text-slate-800'>Instagram: <a href="https://instagram.com/santvana.mentalhealth" className="hover:text-white text-slate-800">@santvana.mentalhealth</a></p>
        </div>
      </div>
      <div className="mt-8 text-center text-slate-800">
        <p>© {new Date().getFullYear()} Santvana - Psychological Guidance Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
