// app/components/AppointmentForm.jsx
"use client";
import React, { useState } from "react";

const AppointmentForm = ({ member, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    gender: "",
    date: "",
    brief: "",
    needHelpFor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const message = `Hello,\nI want to make an appointment.\n\nName: ${formData.firstName}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate: ${formData.date}\nI Need Help For: ${formData.needHelpFor}\nBrief: ${formData.brief}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/919824218278?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, "_blank");

    // Close the form
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Your Gender</label>
        <select
          name="gender"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Preferred Date</label>
        <input
          type="date"
          name="date"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">I Need Help For</label>
        <select
          name="needHelpFor"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.needHelpFor}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Depression">Depression</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Bipolar">Bipolar</option>
          <option value="OCD">OCD</option>
          <option value="GAD">GAD</option>
          <option value="Schizophrenia">Schizophrenia</option>
          <option value="Addiction">Addiction</option>
          <option value="Couple Therapy">Couple Therapy</option>
          <option value="Relation Therapy">Relation Therapy</option>
          <option value="Family Therapy">Family Therapy</option>
          <option value="LGBTQAI Therapy">LGBTQAI Therapy</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Write Your Concern in Brief</label>
        <textarea
          name="brief"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows="3"
          value={formData.brief}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
